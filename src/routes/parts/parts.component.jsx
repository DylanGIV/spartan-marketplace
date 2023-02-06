import { useEffect, useState } from 'react';
import { Item, UserDetails } from '../../models';
import {
  PartKey,
  PartSearchForm,
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
} from '@aws-amplify/ui-react';
import CustomerRFQFormPopUp from '../../components/customerRFQFormPopUp/customerRFQFormPopUp.component';

const Parts = () => {
  const [data, setData] = useState([]);
  const [partSearchTextField, setPartSearchTextField] = useState('');
  const [partSearch, setPartSearch] = useState('');
  const [partTypeSelected, setPartTypeSelected] = useState('part');
  const [dataRFQ, setDataRFQ] = useState({
    isOpen: false,
    company: {},
    item: {},
  });
  const [userDetails, setUserDetails] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [partSearchTextAreaField, setPartSearchTextAreaField] = useState('');
  const { tokens } = useTheme();
  const { user } = useAuthenticator();

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
    setDataRFQ({ isOpen: true, company: company, item: item });
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
        parts.push(p);
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
              company: companies[i],
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
            }}
          >
            Modify search
          </Button>
        ) : null}
      </div>
      {partSearch ? (
        <div className='parts-list-container'>
          <PartKey marginBottom={10} />
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
                    style={{ margin: 5 }}
                  />
                  <Collection
                    type='grid'
                    items={d.parts}
                    style={{ marginLeft: 5 }}
                    isPaginated
                    itemsPerPage={5}
                  >
                    {(item, index) => (
                      <PartsListDetails
                        key={item.id}
                        item={item}
                        overrides={{
                          'CREATE RFQ': {
                            onClick: () => {
                              handleCreateRFQClick(d.company, item);
                            },
                            style: { cursor: 'pointer' },
                          },
                        }}
                        style={{ marginBottom: 5 }}
                      />
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
        <CustomerRFQFormPopUp userDetails={userDetails} dataRFQ={dataRFQ} />
      </Modal>
    </div>
  );
};

export default Parts;
