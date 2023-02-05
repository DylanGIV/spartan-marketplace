import { Text } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { RFQ } from '../../models';
import { CustomerRFQForm } from '../../ui-components';
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
      quotationNumber: quotationNumber,
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
      altPartNumber: dataRFQ.item.altPartNumber,
      nsn: dataRFQ.item.nsn,
      partNumber: dataRFQ.item.partNumber,
      condition: dataRFQ.item.condition,
      uom: '',
      description: dataRFQ.item.description,
      price: dataRFQ.item.price,
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
      quantityRequested: parseInt(customerDetails.quantity),
      quantityQuoted: null,
      shippingMethod: '',
      shippingTerms: '',
      lineTotal: null,
      subtotal: null,
      salesTax: null,
      total: null,
      imageUrls: null,
      companyID: dataRFQ.company.id,
      userDetailsID: userDetails.id,
    };
    await CreateRFQ(rfqDetails);
    if (saveAddressChecked) {
      await AddUserShippingAddress(shippingAddress);
    }
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

  useEffect(() => {
    const handleGetUserAddresses = async () => {
      const userShippingAddresses = await GetUserShippingAddresses(userDetails);
      setUserShippingAddresses(userShippingAddresses);
    };
    handleGetUserAddresses();
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
    AlternatePartNumber: {
      value: dataRFQ.item.altPartNumber,
      disabled: true,
      placeholder: 'N/A',
    },
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
      options: userShippingAddresses
        ? userShippingAddresses.map((sa, i) => `${i + 1}. ` + sa.addressLine1)
        : null,
      onChange: handleSavedAddressChange,
      placeholder: 'Select Address',
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
    AdditionalComments: {
      name: 'additionalComments',
      value: customerDetails.additionalComments,
      onChange: handleCustomerDetailsChange,
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
    SubmitButton: { onClick: handleFormSubmit },
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
