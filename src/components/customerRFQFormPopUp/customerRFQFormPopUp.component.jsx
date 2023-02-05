import { Text } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { CustomerRFQForm } from '../../ui-components';
import { GetCountries } from '../../utils/utilsAmplify';

const CustomerRFQFormPopUp = React.forwardRef((props, ref) => {
  const { userDetails, dataRFQ } = props;
  const date = new Date();
  const [quotationNumber, setQuotationNumber] = useState('');
  const [countries, setCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [customerDetails, setCustomerDetails] = useState({
    contactEmail: userDetails.user.attributes.email,
    contactPhone: '',
    country: '',
    state: '',
    city: '',
    streetAddress: '',
    zipcode: '',
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

  const handleCustomerDetailsChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(
      e.target.value !== ''
        ? countries.find((c) => c.countryName === e.target.value)
        : null
    );
  };

  //generate quotation number and retrieve countries
  useEffect(() => {
    let tempNum = '';
    tempNum += 'QN-';
    tempNum += dataRFQ.company.companyName.slice(0, 4).toUpperCase() + '-';

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

    setQuotationNumber(tempNum);
  }, []);

  useEffect(() => {
    const handleGetCountries = async () => {
      const data = await GetCountries();
      setCountries(data);
    };
    handleGetCountries();
  }, []);

  const rfqOverrides = {
    //Create Quotation
    CompanyName: { value: dataRFQ.company.companyName, disabled: true },
    CompanyContactEmail: {
      value: dataRFQ.company.contactEmail,
      disabled: true,
    },
    QuotationNumber: { value: quotationNumber, disabled: true },
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
    PartNumber: { value: dataRFQ.item.partNumber, disabled: true },
    AlternatePartNumber: { value: dataRFQ.item.altPartNumber, disabled: true },
    Condition: { value: dataRFQ.item.condition, disabled: true },
    Description: { value: dataRFQ.item.description, disabled: true },
    QuantityRequested: {
      name: 'quantity',
      value: customerDetails.quantity,
      onStepChange: (value) => {
        setCustomerDetails({ ...customerDetails, quantity: value });
      },
    },
    // Customer Details
    ContactEmail: {
      name: 'contactEmail',
      value: customerDetails.contactEmail,
      onChange: handleCustomerDetailsChange,
      isRequired: true,
    },
    SavedAddresses: {
      // value: ['1', '2', '3'],
      style: { width: '100%' },
    },
    Country: {
      options: countries ? countries.map((c) => c.countryName) : null,

      // value: selectedCountry.countryName,
      onChange: handleCountryChange,
      placeholder: 'Select Country',
      isRequired: true,
    },
    State: {
      name: 'state',
      value: customerDetails.state,
      isRequired: true,
      onChange: handleCustomerDetailsChange,
    },
    City: {
      name: 'city',
      value: customerDetails.city,
      onChange: handleCustomerDetailsChange,
      isRequired: true,
    },
    StreetAddress: {
      name: 'streetAddress',
      value: customerDetails.streetAddress,
      onChange: handleCustomerDetailsChange,
    },
    Zipcode: {
      name: 'zipcode',
      value: customerDetails.zipcode,
      onChange: handleCustomerDetailsChange,
      type: 'number',
      isRequired: true,
    },
    SaveAddressCheckbox: {},
    AdditionalComments: {
      name: 'additionalComments',
      value: customerDetails.additionalComments,
      onChange: handleCustomerDetailsChange,
    },
    AddressLine1: {
      style: { paddingBottom: 7, paddingTop: 7 },
      isRequired: true,
    },
    UnitNumber: { style: { paddingBottom: 7, paddingTop: 7 } },
    AddressLine2: { style: { paddingBottom: 7, paddingTop: 7 } },
    StreetNumber: { style: { paddingBottom: 7, paddingTop: 7 } },
    SubmitButton: { type: 'submit' },
  };

  return (
    <CustomerRFQForm
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
      contactPhone={
        <div
          style={{
            width: '100%',
            height: 88,
          }}
        >
          <Text fontSize={19}>Contact Phone</Text>
          <PhoneInput
            containerStyle={{
              width: '100%',
            }}
            inputStyle={{
              paddingLeft: 60,
              width: '100%',
              borderRadius: 4,
              height: '48px',
              borderWidth: 1.5,
              borderColor: '#aeb3b7',
              fontSize: 17,
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
              setCustomerDetails({ ...customerDetails, contactPhone: value });
            }}
          />
        </div>
      }
    />
  );
});

export default CustomerRFQFormPopUp;
