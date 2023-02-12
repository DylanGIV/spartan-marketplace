import { Collection, Pagination, useTheme } from '@aws-amplify/ui-react';
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
  const [checkboxValues, setCheckboxValues] = useState({});
  const [partTypeSelected, setPartTypeSelected] = useState('all');

  const { tokens } = useTheme();

  const { userDetails, company } = useContext(UserContext);
  const { rfqs, setRFQs } = useContext(RFQContext);

  const rfqHeaderOverrides = {
    All: {
      onClick: () => {
        setPartTypeSelected('all');
      },
      style: {
        cursor: 'pointer',
        backgroundColor:
          partTypeSelected === 'all' ? tokens.colors.brand.primary[80] : null,
        color:
          partTypeSelected === 'all' ? tokens.colors.font.inverse.value : null,
      },
    },
    Sent: {
      onClick: () => {
        setPartTypeSelected('sent');
      },
      style: {
        cursor: 'pointer',
        backgroundColor:
          partTypeSelected === 'sent' ? tokens.colors.brand.primary[80] : null,
        color:
          partTypeSelected === 'sent' ? tokens.colors.font.inverse.value : null,
      },
    },
    Received: {
      onClick: () => {
        setPartTypeSelected('received');
      },
      style: {
        cursor: 'pointer',
        backgroundColor:
          partTypeSelected === 'received'
            ? tokens.colors.brand.primary[80]
            : null,
        color:
          partTypeSelected === 'received'
            ? tokens.colors.font.inverse.value
            : null,
      },
    },
  };

  useEffect(() => {
    GetRFQByCompany(company, setRFQs, currentPage, itemsPerPage);
  }, []);

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
            overrides={
              {
                // CheckboxField: {
                //   checked: allCheckboxValue,
                //   onChange: () => changeAllCheckboxValues(!allCheckboxValue),
                // },
              }
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
              }}
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
