import {
  CheckboxField,
  ScrollView,
  Text,
  useAuthenticator,
} from '@aws-amplify/ui-react';
import { Accordion, AccordionSummary, Typography } from '@mui/material';
import { DataStore } from 'aws-amplify';
import React, { useContext, useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { UserContext } from '../../context/user.context';
import { Item, RFQ } from '../../models';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  CompanyDetails,
  CustomerDetails,
  CustomerRFQForm,
  CustomerRFQFormContainer,
  RfqCustomerAddress,
  RfqFormPartNumber,
} from '../../ui-components';
import {
  AddUserShippingAddress,
  CreateRFQ,
  GetCountries,
  GetUserShippingAddresses,
} from '../../utils/utilsAmplify';

const CustomerRFQFormPopUp = React.forwardRef((props, ref) => {
  const { userDetails, dataRFQ } = props;
  const date = new Date();
  const [quotationNumber, setQuotationNumber] = useState('');
  const [countries, setCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [saveAddressChecked, setSaveAddressChecked] = useState(false);
  const [userShippingAddresses, setUserShippingAddresses] = useState(null);
  const [saveAddressCheckDisabled, setSaveAddressCheckDisabled] =
    useState(false);
  const [rfqIndex, setRfqIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const [customerDetails, setCustomerDetails] = useState({
    contactEmail: userDetails.user.attributes.email,
    contactPhone: '',
    additionalComments: '',
    quantity: 1,
  });

  const [shippingAddress, setShippingAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    regi: '',
    streetNumber: '',
    unitNumber: '',
    countryID: '',
  });

  const { company } = useContext(UserContext);

  const { user } = useAuthenticator();

  const handleCustomerDetailsChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };
  const handleShippingAddressChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(
      e.target.value !== ''
        ? countries.find((c) => c.countryName === e.target.value)
        : null
    );
    setShippingAddress({
      ...shippingAddress,
      countryID: countries.find((c) => c.countryName === e.target.value).id,
    });
  };

  const handleSavedAddressChange = (e) => {
    if (e.target.value !== '') {
      const index = parseInt(e.target.value) - 1;
      const address = userShippingAddresses[index];
      setShippingAddress({
        addressLine1: address.addressLine1,
        addressLine2: address.addressLine2,
        city: address.city,
        postalCode: address.postalCode,
        regi: address.regi,
        streetNumber: address.streetNumber,
        unitNumber: address.unitNumber,
        countryID: address.countryID,
      });
      setSelectedCountry(countries.find((c) => c.id === address.countryID));
      setSaveAddressCheckDisabled(true);
      setSaveAddressChecked(false);
    } else {
      setShippingAddress({
        addressLine1: '',
        addressLine2: '',
        city: '',
        postalCode: '',
        regi: '',
        streetNumber: '',
        unitNumber: '',
        countryID: '',
      });
      setSelectedCountry(null);
      setSaveAddressCheckDisabled(false);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const rfqDetails = {
      rfqNumber: quotationNumber,
      addressLine1: shippingAddress.addressLine1,
      addressLine2: shippingAddress.addressLine2,
      city: shippingAddress.city,
      country: selectedCountry.countryName,
      state: shippingAddress.regi,
      zip: shippingAddress.postalCode,
      phone: customerDetails.contactPhone,
      email: customerDetails.contactEmail,
      attr1: '',
      attr2: '',
      attr3: '',
      attr4: '',
      attr5: '',
      attr6: '',
      condition: dataRFQ.item.condition,
      uom: '',
      discount: null,
      companyName: dataRFQ.company.companyName,
      contact: dataRFQ.company.contactEmail,
      custRefNum: '',
      dateSent: date.toISOString(),
      dueDate: null,
      emailComments: customerDetails.additionalComments,
      internalComments: '',
      leadTime: null,
      paymentTerms: '',
      quantityRequested: [parseInt(customerDetails.quantity)],
      quantityQuoted: [null],
      shippingMethod: '',
      shippingTerms: '',
      lineTotal: null,
      subtotal: null,
      salesTax: null,
      total: null,
      imageUrls: null,
      receivingCompanyID: dataRFQ.company.id,
      sendingCompanyID: company.id,
      urgency: '',
      items: [dataRFQ.item],
    };
    console.log(rfqDetails.items);

    await CreateRFQ(rfqDetails);

    if (saveAddressChecked) {
      await AddUserShippingAddress(shippingAddress, user);
    }
  };
  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleNextClick = () => {
    if (rfqIndex < dataRFQ.rfqs.length - 1) {
      setRfqIndex(rfqIndex + 1);
    }
  };
  const handlePrevClick = () => {
    if (rfqIndex > 0) {
      setRfqIndex(rfqIndex - 1);
    }
  };

  //generate quotation number
  useEffect(() => {
    let quotationNumbers = [];
    dataRFQ.rfqs.forEach((r) => {
      let tempNum = '';
      tempNum += 'QN-';
      tempNum += r.company.companyName.trim().slice(0, 4).toUpperCase() + '-';

      const month = date.getMonth();
      if (month + 1 < 10) {
        tempNum += '0' + (month + 1).toString();
      } else {
        tempNum += (month + 1).toString();
      }

      const day = date.getDate().toString();
      if (day < 10) {
        tempNum += '0' + day;
      } else {
        tempNum += day;
      }

      tempNum += date.getFullYear().toString().slice(2, 4);

      const hour = date.getHours().toString();
      if (hour < 10) {
        tempNum += '0' + hour;
      } else {
        tempNum += hour;
      }

      const minute = date.getMinutes().toString();
      if (minute < 10) {
        tempNum += '0' + minute;
      } else {
        tempNum += minute;
      }

      const second = date.getSeconds().toString();
      if (second < 10) {
        tempNum += '0' + second;
      } else {
        tempNum += second;
      }
      quotationNumbers.push(tempNum);
    });
    setQuotationNumber(quotationNumbers);
  }, []);
  // get countries
  useEffect(() => {
    const handleGetCountries = async () => {
      const data = await GetCountries();
      setCountries(data);
    };
    handleGetCountries();
  }, []);
  // get saved addresses
  useEffect(() => {
    const handleGetUserAddresses = async () => {
      const userShippingAddresses = await GetUserShippingAddresses(userDetails);
      setUserShippingAddresses(userShippingAddresses);
    };
    handleGetUserAddresses();
  }, []);
  const companyDetailsOverrides = {
    CompanyName: {
      value:
        dataRFQ.type === 'multi'
          ? dataRFQ.rfqs[rfqIndex].company.companyName
          : dataRFQ.company.companyName,
      disabled: true,
    },
    CompanyContactEmail: {
      value:
        dataRFQ.type === 'multi'
          ? dataRFQ.rfqs[rfqIndex].company.contactEmail
          : dataRFQ.company.companyName,
      disabled: true,
    },
    QuotationNumber: { value: quotationNumber[rfqIndex], disabled: true },
    QuotationDate: {
      value:
        parseInt(date.getMonth()) +
        1 +
        '-' +
        date.getDate() +
        '-' +
        date.getFullYear(),
      disabled: true,
    },
    PartNumber: {
      value:
        dataRFQ.type === 'multi'
          ? dataRFQ.rfqs.map((r) => {
              return r.parts.reduce(
                (accumulator, currentValue, currentIndex, array) =>
                  accumulator +
                  (currentValue.partNumber === ''
                    ? 'N/A'
                    : currentValue.partNumber) +
                  (currentIndex === array.length - 1 ? '' : ', '),
                ''
              );
            })
          : dataRFQ.item.partNumber,
      disabled: true,
    },
    AlternatePartNumber: {
      value:
        dataRFQ.type === 'multi'
          ? dataRFQ.rfqs.map((r) => {
              return r.parts.reduce(
                (accumulator, currentValue, currentIndex, array) =>
                  accumulator +
                  (currentValue.altPartNumber === ''
                    ? 'N/A'
                    : currentValue.altPartNumber) +
                  (currentIndex === array.length - 1 ? '' : ', '),
                ''
              );
            })
          : dataRFQ.item.altPartNumber,
      disabled: true,
      placeholder: 'N/A',
    },
    Condition: {
      value:
        dataRFQ.type === 'multi'
          ? dataRFQ.rfqs.map((r) => {
              return r.parts.reduce(
                (accumulator, currentValue, currentIndex, array) =>
                  accumulator +
                  (currentValue.condition === ''
                    ? 'N/A'
                    : currentValue.condition) +
                  (currentIndex === array.length - 1 ? '' : ', '),
                ''
              );
            })
          : dataRFQ.item.condition,
      disabled: true,
    },
    Description: {
      value:
        dataRFQ.type === 'multi'
          ? dataRFQ.rfqs.map((r) => {
              return r.parts.reduce(
                (accumulator, currentValue, currentIndex, array) =>
                  accumulator +
                  (currentValue.description === ''
                    ? 'N/A'
                    : currentValue.description) +
                  (currentIndex === array.length - 1 ? '' : ', '),
                ''
              );
            })
          : dataRFQ.item.description,
      disabled: true,
    },
  };
  // QuantityRequested: {
  //   name: 'quantity',
  //   value: customerDetails.quantity,
  //   onStepChange: (value) => {
  //     setCustomerDetails({ ...customerDetails, quantity: value });
  //   },
  // },
  // Customer Details

  const addressOverrides = {
    SavedAddresses: {
      // value: ['1', '2', '3'],
      options: userShippingAddresses
        ? userShippingAddresses.map((sa, i) => `${i + 1}. ` + sa.addressLine1)
        : null,
      onChange: handleSavedAddressChange,
      placeholder: 'New Address',
      style: { width: '100%' },
    },
    Country: {
      options: countries ? countries.map((c) => c.countryName) : null,

      value: selectedCountry ? selectedCountry.countryName : '',
      onChange: handleCountryChange,
      placeholder: 'Select Country',
      isRequired: true,
    },
    State: {
      name: 'regi',
      value: shippingAddress.regi,
      onChange: handleShippingAddressChange,
      isRequired: true,
    },
    City: {
      name: 'city',
      value: shippingAddress.city,
      onChange: handleShippingAddressChange,
      isRequired: true,
    },
    Zipcode: {
      name: 'postalCode',
      value: shippingAddress.postalCode,
      onChange: handleShippingAddressChange,
      isRequired: true,
    },
    SaveAddressCheckbox: {
      checked: saveAddressChecked,
      onChange: () => setSaveAddressChecked(!saveAddressChecked),
      isDisabled: saveAddressCheckDisabled,
    },
    AddressLine1: {
      style: { paddingBottom: 7, paddingTop: 7 },
      isRequired: true,
      name: 'addressLine1',
      value: shippingAddress.addressLine1,
      onChange: handleShippingAddressChange,
    },
    UnitNumber: {
      style: { paddingBottom: 7, paddingTop: 7 },
      name: 'unitNumber',
      value: shippingAddress.unitNumber,
      onChange: handleShippingAddressChange,
    },
    AddressLine2: {
      style: { paddingBottom: 7, paddingTop: 7 },
      name: 'addressLine2',
      value: shippingAddress.addressLine2,
      onChange: handleShippingAddressChange,
    },
    StreetNumber: {
      style: { paddingBottom: 7, paddingTop: 7 },
      name: 'streetNumber',
      value: shippingAddress.streetNumber,
      onChange: handleShippingAddressChange,
    },
  };

  return (
    <div style={{ width: 590 }}>
      <CustomerRFQFormContainer
        as='form'
        width={590}
        left='62vh'
        top={'10vh'}
        overrides={{
          AdditionalComments: {
            name: 'additionalComments',
            value: customerDetails.additionalComments,
            onChange: handleCustomerDetailsChange,
          },
          PrevButton: {
            isDisabled: rfqIndex === 0 ? true : false,
            onClick: handlePrevClick,
          },
          NextButton: {
            isDisabled: rfqIndex === dataRFQ.rfqs.length - 1 ? true : false,
            onClick: handleNextClick,
          },
          SubmitButton: {
            onClick: handleFormSubmit,
          },
        }}
        createQuoteDropdown={
          <ScrollView height={740}>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handlePanelChange('panel1')}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Company Details</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  {dataRFQ.rfqs[rfqIndex].company.companyName}
                </Typography>
              </AccordionSummary>
              <CompanyDetails overrides={companyDetailsOverrides} />
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handlePanelChange('panel2')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>Part Details</Typography>
              </AccordionSummary>
              <div>
                {dataRFQ.rfqs[rfqIndex].parts.map((p) => (
                  <RfqFormPartNumber
                    key={p.id}
                    overrides={{
                      PartNumber: {
                        value: p.partNumber,
                        isDisabled: true,
                      },
                    }}
                  />
                ))}
              </div>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handlePanelChange('panel3')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>Contact Details</Typography>
              </AccordionSummary>
              <CustomerDetails
                overrides={{
                  ContactEmail: {
                    name: 'contactEmail',
                    value: customerDetails.contactEmail,
                    onChange: handleCustomerDetailsChange,
                    isRequired: true,
                  },
                }}
                contactPhone={
                  <PhoneInput
                    containerStyle={{
                      width: '100%',
                    }}
                    inputStyle={{
                      paddingLeft: 60,
                      width: '100%',
                      borderRadius: 4,
                      height: '36px',
                      borderWidth: 1.5,
                      borderColor: '#aeb3b7',
                      fontSize: 14,
                    }}
                    buttonStyle={{
                      backgroundColor: '#fff',
                      paddingRight: 8,
                      borderColor: '#aeb3b7',
                      paddingLeft: 8,
                      borderRadius: 4,
                      borderWidth: 1.5,
                    }}
                    country={'us'}
                    value={customerDetails.contactPhone}
                    onChange={(value) => {
                      setCustomerDetails({
                        ...customerDetails,
                        contactPhone: value,
                      });
                    }}
                  />
                }
              />
            </Accordion>
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handlePanelChange('panel4')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>Address</Typography>
              </AccordionSummary>
              <RfqCustomerAddress
                overrides={addressOverrides}
                saveAddressCheckbox={
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: 2,
                      marginTop: 12,
                    }}
                  >
                    <CheckboxField
                      size='small'
                      label='Save Address?'
                      checked={saveAddressChecked}
                      onChange={() =>
                        setSaveAddressChecked(!saveAddressChecked)
                      }
                      isDisabled={saveAddressCheckDisabled}
                    />
                  </div>
                }
              />
            </Accordion>
          </ScrollView>
        }
      />
      {/* <CustomerRFQForm
        style={{
          position: 'absolute',
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          border: '2px solid black',
          backgroundColor: '#eff0f0',
          left: '50%',
          top: '50%',
          minHeight: '500px',
          minWidth: '700px',
          maxWidth: '1000px',
          borderRadius: '15px',
          transform: 'translate(-50%, -50%) scale(0.8 , 0.8)',
        }}
        as='form'
        overrides={rfqOverrides}
        }
      /> */}
    </div>
  );
});

export default CustomerRFQFormPopUp;
