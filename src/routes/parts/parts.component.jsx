import { useContext, useEffect, useRef, useState } from 'react';
import { Item, UserDetails } from '../../models';
import {
  PartKey,
  PartSearchForm,
  PartsHeader,
  PartsListCompanyDetails,
  PartsListDetails,
} from '../../ui-components';
import {
  GetAllCompanies,
  GetCountries,
  GetPartsByCompany,
} from '../../utils/utilsAmplify';
import { Auth, DataStore } from 'aws-amplify';

import './parts.styles.scss';
import { Modal } from '@mui/material';
import {
  Collection,
  SearchField,
  useTheme,
  Button,
  useAuthenticator,
  CheckboxField,
} from '@aws-amplify/ui-react';
import CustomerRFQFormPopUp from '../../components/customerRFQFormPopUp/customerRFQFormPopUp.component';
import { useLocation } from 'react-router';
import { UserContext } from '../../context/user.context';

const Parts = (props) => {
  const { state } = useLocation();

  const [data, setData] = useState([]);
  const [partSearchTextField, setPartSearchTextField] = useState('');
  const [partSearch, setPartSearch] = useState('');
  const [partTypeSelected, setPartTypeSelected] = useState(
    state.partTypeSelected ? state.partTypeSelected : 'parts'
  );
  const [dataRFQ, setDataRFQ] = useState({
    isOpen: false,
    rfqs: [],
  });
  const [userDetails, setUserDetails] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [partSearchTextAreaField, setPartSearchTextAreaField] = useState('');
  const [allowRFQ, setAllowRFQ] = useState(false);

  const { tokens } = useTheme();
  const { user } = useAuthenticator();

  const [isHovering, setIsHovering] = useState(null);
  const { company } = useContext(UserContext);

  const handleMouseEnter = (id) => {
    setIsHovering(id);
  };

  const handleMouseLeave = () => {
    setIsHovering(null);
  };

  const handleCheckboxChange = (partID) => {
    let anyTrue = false;
    const tempData = data.map((d, i) => {
      let tempCompany = d.company;
      const tempParts = d.parts.map((p, i) => {
        let tempPart = null;
        if (partID === p.id) {
          tempPart = { ...p, isChecked: !p.isChecked };
        } else {
          tempPart = { ...p, isChecked: p.isChecked };
        }

        if (tempPart.isChecked || d.company.isChecked) {
          anyTrue = true;
        }
        return tempPart;
      });
      return { company: tempCompany, parts: tempParts };
    });

    setAllowRFQ(anyTrue);
    setData(tempData);
  };

  const handleCompanyCheckboxChange = (companyID) => {
    let anyTrue = false;
    const tempData = data.map((d, i) => {
      let tempCompany = d.company;

      if (tempCompany.id === companyID) {
        tempCompany.isChecked = !tempCompany.isChecked;
      }

      if (tempCompany.isChecked) {
        anyTrue = true;
      }

      const tempParts = d.parts.map((p, i) => {
        let tempPart = p;
        if (tempPart.isChecked) {
          anyTrue = true;
        }
        return tempPart;
      });
      return { company: tempCompany, parts: tempParts };
    });
    setData(tempData);
    setAllowRFQ(anyTrue);
  };

  const partSearchFormOverrides = {
    Part: {
      onClick: () => {
        setPartTypeSelected('part');
      },
      style: {
        cursor: 'pointer',
        backgroundColor:
          partTypeSelected === 'part' ? tokens.colors.brand.primary[80] : null,
        color:
          partTypeSelected === 'part' ? tokens.colors.font.inverse.value : null,
      },
    },
    MRO: {
      onClick: () => {
        setPartTypeSelected('mro');
      },
      style: {
        cursor: 'pointer',
        backgroundColor:
          partTypeSelected === 'mro' ? tokens.colors.brand.primary[80] : null,
        color:
          partTypeSelected === 'mro' ? tokens.colors.font.inverse.value : null,
      },
    },
    CountrySelect: {
      options: countries.map((c) => c.countryName),
      onChange: (e) =>
        setSelectedCountry(
          e.target.value !== ''
            ? countries.find((c) => c.countryName === e.target.value)
            : null
        ),
      placeholder: 'Any Country',
    },
    PartTextAreaField: {
      onChange: (e) => setPartSearchTextAreaField(e.target.value),
      value: partSearchTextAreaField,
    },
    Button: {
      onClick: () => setPartSearch(partSearchTextAreaField),
    },
  };

  const handleCreateRFQClick = (company, item) => {
    const rfqs = [];

    rfqs.push({ company: company, parts: [item] });
    setDataRFQ({
      isOpen: true,
      type: 'multi',
      rfqs: rfqs,
    });
  };
  const handleMultiRFQClick = () => {
    const rfqs = [];
    data.map((d) => {
      const parts = [];
      let entered = false;
      d.parts.forEach((p) => {
        if (d.company.isChecked || p.isChecked) {
          parts.push(p);
          entered = true;
        }
      });
      if (entered) {
        rfqs.push({ company: d.company, parts: parts });
      }
    });

    setDataRFQ({
      isOpen: true,
      type: 'multi',
      rfqs: rfqs,
      company: null,
      item: null,
    });
  };

  const TestFunction = async (companyID, search) => {
    let parts = [];
    const queryParts = await DataStore.query(Item, (p) =>
      p.companyID.eq(companyID)
    );

    queryParts.forEach((p) => {
      if (
        (p.altPartNumber
          ? p.altPartNumber.toLowerCase().includes(search.toLowerCase())
          : false) ||
        (p.nsn ? p.nsn.toLowerCase().includes(search.toLowerCase()) : false) ||
        (p.partNumber
          ? p.partNumber.toLowerCase().includes(search.toLowerCase())
          : false) ||
        (p.description
          ? p.description.toLowerCase().includes(search.toLowerCase())
          : false)
      ) {
        parts.push({ ...p, isChecked: false });
      }
    });
    return parts;
  };

  useEffect(() => {
    const getDetails = async () => {
      const userDetails = await DataStore.query(UserDetails, (p) =>
        p.userID.eq(user.username)
      );
      // const user = await Auth.currentAuthenticatedUser();
      setUserDetails({
        user: user,
        companyID: userDetails[0].companyID,
        isCompanyOwner: userDetails[0].isCompanyOwner,
        id: userDetails[0].id,
      });
      const countries = await GetCountries();
      setCountries(countries);
    };
    getDetails();
  }, []);

  useEffect(() => {
    const queryData = async () => {
      let companies = null;
      try {
        companies = await GetAllCompanies();
      } catch (error) {
        alert('There was an error retrieving companies list.');
        console.log(error);
      }
      const tempData = new Array();
      if (companies) {
        for (let i = 0; i < companies.length; i++) {
          let parts = null;
          try {
            if (partSearch) {
              parts = await TestFunction(companies[i].id, partSearch);
            } else {
              parts = await GetPartsByCompany(companies[i].id);
            }
          } catch (error) {
            alert('There was an error retrieving parts');
            console.log(error);
          }
          if (parts && parts.length > 0) {
            tempData.push({
              company: { ...companies[i], isChecked: false },
              parts: parts,
            });
          }
        }
        setData(tempData);
      }
    };
    queryData();
  }, [partSearch]);

  return (
    <div>
      <div className='search-bar-container'>
        <SearchField
          label='Search'
          value={partSearchTextField}
          onChange={(event) => setPartSearchTextField(event.target.value)}
          onSubmit={(value) => setPartSearch(value)}
          onClear={() => setPartSearchTextField('')}
          placeholder='Quick Search...'
          width={420}
        />
        {partSearch !== '' ? (
          <Button
            style={{ marginLeft: 20 }}
            onClick={() => {
              setPartSearch('');
              setPartSearchTextField('');
              setAllowRFQ(false);
            }}
          >
            Modify search
          </Button>
        ) : null}
      </div>
      {partSearch ? (
        <div className='parts-list-container'>
          <PartsHeader
            width={'100%'}
            overrides={{
              CreateRFQ: {
                disabled: !allowRFQ,
                onClick: handleMultiRFQClick,
              },
            }}
          />
          <PartKey marginBottom={10} width='100%' />
          {data.length ? (
            data.map((d) => {
              return (
                <div
                  key={d.company.id}
                  style={{
                    backgroundColor: tokens.colors.background.tertiary,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                >
                  <PartsListCompanyDetails
                    company={d.company}
                    frame437={
                      <div
                        style={{
                          backgroundColor: tokens.colors.background.tertiary,
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <CheckboxField
                          isDisabled={d.company.id === company.id}
                          size='large'
                          marginLeft={2}
                          marginTop={2}
                          checked={d.company.isChecked || false}
                          onChange={() =>
                            handleCompanyCheckboxChange(d.company.id)
                          }
                          backgroundColor={tokens.colors.background.primary}
                          borderRadius={5}
                        />
                      </div>
                    }
                    marginTop={5}
                    marginBottom={5}
                    backgroundColor={tokens.colors.background.tertiary}
                  />
                  <Collection
                    type='grid'
                    items={d.parts}
                    style={{ marginLeft: 5 }}
                    isPaginated={d.parts.length > 5}
                    itemsPerPage={5}
                  >
                    {(item, index) => (
                      <div
                        key={item.id}
                        style={{
                          display: 'flex',
                          marginBottom: 5,
                          marginLeft: 30,
                          marginRight: 10,
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: tokens.colors.background.tertiary,
                          }}
                        >
                          <CheckboxField
                            isDisabled={d.company.id === company.id}
                            label='checkbox'
                            labelHidden={true}
                            size='large'
                            // marginLeft={2}
                            // marginTop={2}
                            checked={
                              d.company.isChecked || item.isChecked || false
                            }
                            onChange={() => handleCheckboxChange(item.id)}
                            backgroundColor={tokens.colors.background.primary}
                            borderRadius={5}
                          />
                        </div>
                        <div
                          style={{
                            cursor:
                              d.company.id !== company.id
                                ? 'pointer'
                                : 'default',
                            backgroundColor:
                              isHovering === item.id &&
                              d.company.id !== company.id
                                ? tokens.colors.brand.primary[80]
                                : tokens.colors.background.secondary,
                            padding: 1,
                            paddingLeft: 1,
                            borderRadius: 9,
                            marginLeft: 25,
                            width: '100%',
                          }}
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={() => handleMouseLeave()}
                        >
                          <div>
                            <PartsListDetails
                              item={item}
                              onClick={() =>
                                d.company.id !== company.id
                                  ? handleCreateRFQClick(d.company, item)
                                  : null
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Collection>
                </div>
              );
            })
          ) : (
            <h2>No parts</h2>
          )}
        </div>
      ) : (
        // in the case that there is no search made yet.
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: tokens.colors.background.tertiary.value,
            paddingLeft: 20,
            width: 420,
            height: 580,
            marginTop: 20,
            marginLeft: 20,
            borderRadius: 15,
          }}
        >
          <h1>Make a search</h1>
          <div
            style={{
              height: 466,
              width: 380,
            }}
          >
            <PartSearchForm overrides={partSearchFormOverrides} />
          </div>
        </div>
      )}
      <Modal
        open={dataRFQ.isOpen}
        onClose={() => setDataRFQ({ isOpen: false, company: {}, item: {} })}
      >
        <CustomerRFQFormPopUp
          userDetails={userDetails}
          dataRFQ={dataRFQ}
          setDataRFQ={setDataRFQ}
        />
      </Modal>
    </div>
  );
};

export default Parts;
