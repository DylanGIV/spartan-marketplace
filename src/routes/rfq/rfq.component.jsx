import {
  CheckboxField,
  Collection,
  Pagination,
  useTheme,
} from '@aws-amplify/ui-react';
import { useContext, useEffect, useState } from 'react';
import { RFQContext } from '../../context/rfq.context';
import { UserContext } from '../../context/user.context';
import RFQHeader from '../../ui-components/RFQHeader';
import RFQKey from '../../ui-components/RFQKey';
import RFQOverview from '../../ui-components/RFQOverview';
import { GetRFQByCompany } from '../../utils/utilsAmplify';

const RFQ = () => {
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [allCheckboxValue, setAllCheckboxValue] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [rfqTypeSelected, setRFQTypeSelected] = useState('received');

  const { tokens } = useTheme();

  const { userDetails, company } = useContext(UserContext);
  const { rfqs, setRFQs } = useContext(RFQContext);
  // console.log(rfqs.items[0]);

  const rfqHeaderOverrides = {
    All: {
      onClick: () => {
        setRFQTypeSelected('all');
      },
      style: {
        cursor: 'pointer',
        backgroundColor:
          rfqTypeSelected === 'all' ? tokens.colors.brand.primary[80] : null,
        color:
          rfqTypeSelected === 'all' ? tokens.colors.font.inverse.value : null,
      },
    },
    Sent: {
      onClick: () => {
        setRFQTypeSelected('sent');
      },
      style: {
        cursor: 'pointer',
        backgroundColor:
          rfqTypeSelected === 'sent' ? tokens.colors.brand.primary[80] : null,
        color:
          rfqTypeSelected === 'sent' ? tokens.colors.font.inverse.value : null,
      },
    },
    Received: {
      onClick: () => {
        setRFQTypeSelected('received');
      },
      style: {
        cursor: 'pointer',
        backgroundColor:
          rfqTypeSelected === 'received'
            ? tokens.colors.brand.primary[80]
            : null,
        color:
          rfqTypeSelected === 'received'
            ? tokens.colors.font.inverse.value
            : null,
      },
    },
  };

  useEffect(() => {
    GetRFQByCompany(
      company,
      setRFQs,
      currentPage,
      itemsPerPage,
      rfqTypeSelected,
      userDetails
    );
  }, [rfqTypeSelected]);

  const handleCheckboxChange = (index) => {
    let allTrue = true;
    const tempValues = checkboxValues.map((c, i) => {
      if (i === index) {
        if (!c === false) {
          allTrue = false;
        }
        return !c;
      } else {
        if (c === false) {
          allTrue = false;
        }
        return c;
      }
    });
    setCheckboxValues(tempValues);
    setAllCheckboxValue(allTrue);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ padding: 10 }}>
        <RFQHeader overrides={rfqHeaderOverrides} width={1450} />
        <div style={{ paddingBottom: 10 }}>
          <RFQKey
            checkboxField={
              <div
                style={{
                  backgroundColor: tokens.colors.brand.primary[80],
                  width: '100%',
                  height: '100%',
                }}
              >
                <CheckboxField
                  // checked={checkboxValues[index] || false}
                  // onChange={() => handleCheckboxChange(index)}
                  size='large'
                  marginLeft={2}
                  marginTop={2}
                  // backgroundColor: 'white',
                  // color: tokens.colors.brand.primary[80],
                  // color='white'
                />
              </div>
            }
            width={1450}
          />
        </div>

        <Collection
          items={rfqs ? rfqs.items : null}
          type='grid'
          itemsPerPage={itemsPerPage}
        >
          {(item, index) => (
            <RFQOverview
              key={item.id}
              rFQ={item}
              overrides={{
                CheckboxField: {
                  checked: checkboxValues[index] || false,
                  onChange: () => handleCheckboxChange(index),
                },
                'RFQ Number': {
                  style: {
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  },
                  color: 'blue',
                },
                'Part Number': {
                  children: 'item',
                },
              }}
              checkboxField={
                <div
                  style={{
                    backgroundColor: tokens.colors.background.secondary,
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <CheckboxField
                    checked={checkboxValues[index] || false}
                    onChange={() => handleCheckboxChange(index)}
                    size='large'
                    marginLeft={2}
                    marginTop={2}
                    // backgroundColor: 'white',
                    // color: tokens.colors.brand.primary[80],
                    // color='white'
                  />
                </div>
              }
              width={1450}
              marginBottom={2}
            />
          )}
        </Collection>
        {rfqs ? (
          <Pagination
            currentPage={currentPage}
            onChange={(newPageIndex) => setCurrentPage(newPageIndex)}
            totalPages={rfqs.count}
            onNext={() => setCurrentPage(currentPage + 1)}
            onPrevious={() => setCurrentPage(currentPage - 1)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default RFQ;
