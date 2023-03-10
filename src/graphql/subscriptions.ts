/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomerRfqEmail = /* GraphQL */ `
  subscription OnCreateCustomerRfqEmail(
    $filter: ModelSubscriptionCustomerRfqEmailFilterInput
  ) {
    onCreateCustomerRfqEmail(filter: $filter) {
      id
      email
      dateSent
      htmlBody
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCustomerRfqEmail = /* GraphQL */ `
  subscription OnUpdateCustomerRfqEmail(
    $filter: ModelSubscriptionCustomerRfqEmailFilterInput
  ) {
    onUpdateCustomerRfqEmail(filter: $filter) {
      id
      email
      dateSent
      htmlBody
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCustomerRfqEmail = /* GraphQL */ `
  subscription OnDeleteCustomerRfqEmail(
    $filter: ModelSubscriptionCustomerRfqEmailFilterInput
  ) {
    onDeleteCustomerRfqEmail(filter: $filter) {
      id
      email
      dateSent
      htmlBody
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateRfq = /* GraphQL */ `
  subscription OnCreateRfq($filter: ModelSubscriptionRfqFilterInput) {
    onCreateRfq(filter: $filter) {
      id
      rfqNumber
      dateSent
      custRefNum
      companyName
      contact
      phone
      email
      shippingTerms
      shippingMethod
      leadTime
      paymentTerms
      dueDate
      quantityRequested
      quantityQuoted
      uom
      urgency
      discount
      lineTotal
      subtotal
      salesTax
      total
      internalComments
      emailComments
      addressLine1
      addressLine2
      city
      state
      zip
      country
      Items {
        items {
          id
          rfqId
          itemId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      receivingCompanyID
      sendingCompanyID
      ReceivingCompany {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      SendingCompany {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companySentRfqsId
      companyReceivedRfqsId
    }
  }
`;
export const onUpdateRfq = /* GraphQL */ `
  subscription OnUpdateRfq($filter: ModelSubscriptionRfqFilterInput) {
    onUpdateRfq(filter: $filter) {
      id
      rfqNumber
      dateSent
      custRefNum
      companyName
      contact
      phone
      email
      shippingTerms
      shippingMethod
      leadTime
      paymentTerms
      dueDate
      quantityRequested
      quantityQuoted
      uom
      urgency
      discount
      lineTotal
      subtotal
      salesTax
      total
      internalComments
      emailComments
      addressLine1
      addressLine2
      city
      state
      zip
      country
      Items {
        items {
          id
          rfqId
          itemId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      receivingCompanyID
      sendingCompanyID
      ReceivingCompany {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      SendingCompany {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companySentRfqsId
      companyReceivedRfqsId
    }
  }
`;
export const onDeleteRfq = /* GraphQL */ `
  subscription OnDeleteRfq($filter: ModelSubscriptionRfqFilterInput) {
    onDeleteRfq(filter: $filter) {
      id
      rfqNumber
      dateSent
      custRefNum
      companyName
      contact
      phone
      email
      shippingTerms
      shippingMethod
      leadTime
      paymentTerms
      dueDate
      quantityRequested
      quantityQuoted
      uom
      urgency
      discount
      lineTotal
      subtotal
      salesTax
      total
      internalComments
      emailComments
      addressLine1
      addressLine2
      city
      state
      zip
      country
      Items {
        items {
          id
          rfqId
          itemId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      receivingCompanyID
      sendingCompanyID
      ReceivingCompany {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      SendingCompany {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companySentRfqsId
      companyReceivedRfqsId
    }
  }
`;
export const onCreateUserDetails = /* GraphQL */ `
  subscription OnCreateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $owner: String
  ) {
    onCreateUserDetails(filter: $filter, owner: $owner) {
      userID
      firstName
      lastName
      contactEmail
      contactPhone
      companyID
      BillingAddresses {
        items {
          id
          userDetailsUserID
          billingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      ShippingAddresses {
        items {
          id
          userDetailsUserID
          shippingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUserDetails = /* GraphQL */ `
  subscription OnUpdateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $owner: String
  ) {
    onUpdateUserDetails(filter: $filter, owner: $owner) {
      userID
      firstName
      lastName
      contactEmail
      contactPhone
      companyID
      BillingAddresses {
        items {
          id
          userDetailsUserID
          billingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      ShippingAddresses {
        items {
          id
          userDetailsUserID
          shippingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUserDetails = /* GraphQL */ `
  subscription OnDeleteUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $owner: String
  ) {
    onDeleteUserDetails(filter: $filter, owner: $owner) {
      userID
      firstName
      lastName
      contactEmail
      contactPhone
      companyID
      BillingAddresses {
        items {
          id
          userDetailsUserID
          billingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      ShippingAddresses {
        items {
          id
          userDetailsUserID
          shippingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onCreateCountry(filter: $filter) {
      id
      countryName
      code
      BillingAddresses {
        items {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          region
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ShippingAddresses {
        items {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Company {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onUpdateCountry(filter: $filter) {
      id
      countryName
      code
      BillingAddresses {
        items {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          region
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ShippingAddresses {
        items {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Company {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry($filter: ModelSubscriptionCountryFilterInput) {
    onDeleteCountry(filter: $filter) {
      id
      countryName
      code
      BillingAddresses {
        items {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          region
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ShippingAddresses {
        items {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Company {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateShippingAddress = /* GraphQL */ `
  subscription OnCreateShippingAddress(
    $filter: ModelSubscriptionShippingAddressFilterInput
  ) {
    onCreateShippingAddress(filter: $filter) {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      country {
        id
        countryName
        code
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        Company {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserShippingAddresses {
        items {
          id
          userDetailsUserID
          shippingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      CompanyShippingAddresses {
        items {
          id
          shippingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateShippingAddress = /* GraphQL */ `
  subscription OnUpdateShippingAddress(
    $filter: ModelSubscriptionShippingAddressFilterInput
  ) {
    onUpdateShippingAddress(filter: $filter) {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      country {
        id
        countryName
        code
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        Company {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserShippingAddresses {
        items {
          id
          userDetailsUserID
          shippingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      CompanyShippingAddresses {
        items {
          id
          shippingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteShippingAddress = /* GraphQL */ `
  subscription OnDeleteShippingAddress(
    $filter: ModelSubscriptionShippingAddressFilterInput
  ) {
    onDeleteShippingAddress(filter: $filter) {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      country {
        id
        countryName
        code
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        Company {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserShippingAddresses {
        items {
          id
          userDetailsUserID
          shippingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      CompanyShippingAddresses {
        items {
          id
          shippingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBillingAddress = /* GraphQL */ `
  subscription OnCreateBillingAddress(
    $filter: ModelSubscriptionBillingAddressFilterInput
  ) {
    onCreateBillingAddress(filter: $filter) {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      region
      postalCode
      isDefault
      CompanyBillingAddresses {
        items {
          id
          billingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      countryID
      country {
        id
        countryName
        code
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        Company {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserBillingAddresses {
        items {
          id
          userDetailsUserID
          billingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBillingAddress = /* GraphQL */ `
  subscription OnUpdateBillingAddress(
    $filter: ModelSubscriptionBillingAddressFilterInput
  ) {
    onUpdateBillingAddress(filter: $filter) {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      region
      postalCode
      isDefault
      CompanyBillingAddresses {
        items {
          id
          billingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      countryID
      country {
        id
        countryName
        code
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        Company {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserBillingAddresses {
        items {
          id
          userDetailsUserID
          billingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBillingAddress = /* GraphQL */ `
  subscription OnDeleteBillingAddress(
    $filter: ModelSubscriptionBillingAddressFilterInput
  ) {
    onDeleteBillingAddress(filter: $filter) {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      region
      postalCode
      isDefault
      CompanyBillingAddresses {
        items {
          id
          billingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      countryID
      country {
        id
        countryName
        code
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        Company {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserBillingAddresses {
        items {
          id
          userDetailsUserID
          billingAddressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
      id
      companyName
      phone
      contactEmail
      Items {
        items {
          id
          nsn
          partNumber
          altPartNumber
          description
          quantity
          condition
          control
          price
          demilitarizationCode
          scheduleB
          eccn
          isExportControlled
          usml
          companyID
          imageUrls
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ItemMROS {
        items {
          id
          nsn
          partNumber
          altPartNumber
          description
          quantity
          price
          certification
          companyID
          imageUrls
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      BillingAddresses {
        items {
          id
          billingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CompanyMembers {
        items {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      CompanyOwner {
        userID
        firstName
        lastName
        contactEmail
        contactPhone
        companyID
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        isCompanyOwner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      ShippingAddresses {
        items {
          id
          shippingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      sentRfqs {
        items {
          id
          rfqNumber
          dateSent
          custRefNum
          companyName
          contact
          phone
          email
          shippingTerms
          shippingMethod
          leadTime
          paymentTerms
          dueDate
          quantityRequested
          quantityQuoted
          uom
          urgency
          discount
          lineTotal
          subtotal
          salesTax
          total
          internalComments
          emailComments
          addressLine1
          addressLine2
          city
          state
          zip
          country
          receivingCompanyID
          sendingCompanyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companySentRfqsId
          companyReceivedRfqsId
        }
        nextToken
        startedAt
      }
      receivedRfqs {
        items {
          id
          rfqNumber
          dateSent
          custRefNum
          companyName
          contact
          phone
          email
          shippingTerms
          shippingMethod
          leadTime
          paymentTerms
          dueDate
          quantityRequested
          quantityQuoted
          uom
          urgency
          discount
          lineTotal
          subtotal
          salesTax
          total
          internalComments
          emailComments
          addressLine1
          addressLine2
          city
          state
          zip
          country
          receivingCompanyID
          sendingCompanyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companySentRfqsId
          companyReceivedRfqsId
        }
        nextToken
        startedAt
      }
      country {
        id
        countryName
        code
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        Company {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      addressId
      address {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        regi
        postalCode
        isDefault
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserShippingAddresses {
          nextToken
          startedAt
        }
        CompanyShippingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
      id
      companyName
      phone
      contactEmail
      Items {
        items {
          id
          nsn
          partNumber
          altPartNumber
          description
          quantity
          condition
          control
          price
          demilitarizationCode
          scheduleB
          eccn
          isExportControlled
          usml
          companyID
          imageUrls
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ItemMROS {
        items {
          id
          nsn
          partNumber
          altPartNumber
          description
          quantity
          price
          certification
          companyID
          imageUrls
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      BillingAddresses {
        items {
          id
          billingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CompanyMembers {
        items {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      CompanyOwner {
        userID
        firstName
        lastName
        contactEmail
        contactPhone
        companyID
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        isCompanyOwner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      ShippingAddresses {
        items {
          id
          shippingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      sentRfqs {
        items {
          id
          rfqNumber
          dateSent
          custRefNum
          companyName
          contact
          phone
          email
          shippingTerms
          shippingMethod
          leadTime
          paymentTerms
          dueDate
          quantityRequested
          quantityQuoted
          uom
          urgency
          discount
          lineTotal
          subtotal
          salesTax
          total
          internalComments
          emailComments
          addressLine1
          addressLine2
          city
          state
          zip
          country
          receivingCompanyID
          sendingCompanyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companySentRfqsId
          companyReceivedRfqsId
        }
        nextToken
        startedAt
      }
      receivedRfqs {
        items {
          id
          rfqNumber
          dateSent
          custRefNum
          companyName
          contact
          phone
          email
          shippingTerms
          shippingMethod
          leadTime
          paymentTerms
          dueDate
          quantityRequested
          quantityQuoted
          uom
          urgency
          discount
          lineTotal
          subtotal
          salesTax
          total
          internalComments
          emailComments
          addressLine1
          addressLine2
          city
          state
          zip
          country
          receivingCompanyID
          sendingCompanyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companySentRfqsId
          companyReceivedRfqsId
        }
        nextToken
        startedAt
      }
      country {
        id
        countryName
        code
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        Company {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      addressId
      address {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        regi
        postalCode
        isDefault
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserShippingAddresses {
          nextToken
          startedAt
        }
        CompanyShippingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
      id
      companyName
      phone
      contactEmail
      Items {
        items {
          id
          nsn
          partNumber
          altPartNumber
          description
          quantity
          condition
          control
          price
          demilitarizationCode
          scheduleB
          eccn
          isExportControlled
          usml
          companyID
          imageUrls
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ItemMROS {
        items {
          id
          nsn
          partNumber
          altPartNumber
          description
          quantity
          price
          certification
          companyID
          imageUrls
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      BillingAddresses {
        items {
          id
          billingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CompanyMembers {
        items {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      CompanyOwner {
        userID
        firstName
        lastName
        contactEmail
        contactPhone
        companyID
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        isCompanyOwner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      ShippingAddresses {
        items {
          id
          shippingAddressId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      sentRfqs {
        items {
          id
          rfqNumber
          dateSent
          custRefNum
          companyName
          contact
          phone
          email
          shippingTerms
          shippingMethod
          leadTime
          paymentTerms
          dueDate
          quantityRequested
          quantityQuoted
          uom
          urgency
          discount
          lineTotal
          subtotal
          salesTax
          total
          internalComments
          emailComments
          addressLine1
          addressLine2
          city
          state
          zip
          country
          receivingCompanyID
          sendingCompanyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companySentRfqsId
          companyReceivedRfqsId
        }
        nextToken
        startedAt
      }
      receivedRfqs {
        items {
          id
          rfqNumber
          dateSent
          custRefNum
          companyName
          contact
          phone
          email
          shippingTerms
          shippingMethod
          leadTime
          paymentTerms
          dueDate
          quantityRequested
          quantityQuoted
          uom
          urgency
          discount
          lineTotal
          subtotal
          salesTax
          total
          internalComments
          emailComments
          addressLine1
          addressLine2
          city
          state
          zip
          country
          receivingCompanyID
          sendingCompanyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companySentRfqsId
          companyReceivedRfqsId
        }
        nextToken
        startedAt
      }
      country {
        id
        countryName
        code
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        Company {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      addressId
      address {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        regi
        postalCode
        isDefault
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserShippingAddresses {
          nextToken
          startedAt
        }
        CompanyShippingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
    }
  }
`;
export const onCreateItemMRO = /* GraphQL */ `
  subscription OnCreateItemMRO($filter: ModelSubscriptionItemMROFilterInput) {
    onCreateItemMRO(filter: $filter) {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      price
      certification
      companyID
      imageUrls
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateItemMRO = /* GraphQL */ `
  subscription OnUpdateItemMRO($filter: ModelSubscriptionItemMROFilterInput) {
    onUpdateItemMRO(filter: $filter) {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      price
      certification
      companyID
      imageUrls
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteItemMRO = /* GraphQL */ `
  subscription OnDeleteItemMRO($filter: ModelSubscriptionItemMROFilterInput) {
    onDeleteItemMRO(filter: $filter) {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      price
      certification
      companyID
      imageUrls
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      condition
      control
      price
      demilitarizationCode
      scheduleB
      eccn
      isExportControlled
      usml
      companyID
      imageUrls
      Rfqs {
        items {
          id
          rfqId
          itemId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      condition
      control
      price
      demilitarizationCode
      scheduleB
      eccn
      isExportControlled
      usml
      companyID
      imageUrls
      Rfqs {
        items {
          id
          rfqId
          itemId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      condition
      control
      price
      demilitarizationCode
      scheduleB
      eccn
      isExportControlled
      usml
      companyID
      imageUrls
      Rfqs {
        items {
          id
          rfqId
          itemId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCompanyItemsImport = /* GraphQL */ `
  subscription OnCreateCompanyItemsImport(
    $filter: ModelSubscriptionCompanyItemsImportFilterInput
  ) {
    onCreateCompanyItemsImport(filter: $filter) {
      id
      companyID
      importName
      importStatus
      importProgress
      importFileKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCompanyItemsImport = /* GraphQL */ `
  subscription OnUpdateCompanyItemsImport(
    $filter: ModelSubscriptionCompanyItemsImportFilterInput
  ) {
    onUpdateCompanyItemsImport(filter: $filter) {
      id
      companyID
      importName
      importStatus
      importProgress
      importFileKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCompanyItemsImport = /* GraphQL */ `
  subscription OnDeleteCompanyItemsImport(
    $filter: ModelSubscriptionCompanyItemsImportFilterInput
  ) {
    onDeleteCompanyItemsImport(filter: $filter) {
      id
      companyID
      importName
      importStatus
      importProgress
      importFileKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateRfqItems = /* GraphQL */ `
  subscription OnCreateRfqItems($filter: ModelSubscriptionRfqItemsFilterInput) {
    onCreateRfqItems(filter: $filter) {
      id
      rfqId
      itemId
      rfq {
        id
        rfqNumber
        dateSent
        custRefNum
        companyName
        contact
        phone
        email
        shippingTerms
        shippingMethod
        leadTime
        paymentTerms
        dueDate
        quantityRequested
        quantityQuoted
        uom
        urgency
        discount
        lineTotal
        subtotal
        salesTax
        total
        internalComments
        emailComments
        addressLine1
        addressLine2
        city
        state
        zip
        country
        Items {
          nextToken
          startedAt
        }
        receivingCompanyID
        sendingCompanyID
        ReceivingCompany {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        SendingCompany {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companySentRfqsId
        companyReceivedRfqsId
      }
      item {
        id
        nsn
        partNumber
        altPartNumber
        description
        quantity
        condition
        control
        price
        demilitarizationCode
        scheduleB
        eccn
        isExportControlled
        usml
        companyID
        imageUrls
        Rfqs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRfqItems = /* GraphQL */ `
  subscription OnUpdateRfqItems($filter: ModelSubscriptionRfqItemsFilterInput) {
    onUpdateRfqItems(filter: $filter) {
      id
      rfqId
      itemId
      rfq {
        id
        rfqNumber
        dateSent
        custRefNum
        companyName
        contact
        phone
        email
        shippingTerms
        shippingMethod
        leadTime
        paymentTerms
        dueDate
        quantityRequested
        quantityQuoted
        uom
        urgency
        discount
        lineTotal
        subtotal
        salesTax
        total
        internalComments
        emailComments
        addressLine1
        addressLine2
        city
        state
        zip
        country
        Items {
          nextToken
          startedAt
        }
        receivingCompanyID
        sendingCompanyID
        ReceivingCompany {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        SendingCompany {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companySentRfqsId
        companyReceivedRfqsId
      }
      item {
        id
        nsn
        partNumber
        altPartNumber
        description
        quantity
        condition
        control
        price
        demilitarizationCode
        scheduleB
        eccn
        isExportControlled
        usml
        companyID
        imageUrls
        Rfqs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRfqItems = /* GraphQL */ `
  subscription OnDeleteRfqItems($filter: ModelSubscriptionRfqItemsFilterInput) {
    onDeleteRfqItems(filter: $filter) {
      id
      rfqId
      itemId
      rfq {
        id
        rfqNumber
        dateSent
        custRefNum
        companyName
        contact
        phone
        email
        shippingTerms
        shippingMethod
        leadTime
        paymentTerms
        dueDate
        quantityRequested
        quantityQuoted
        uom
        urgency
        discount
        lineTotal
        subtotal
        salesTax
        total
        internalComments
        emailComments
        addressLine1
        addressLine2
        city
        state
        zip
        country
        Items {
          nextToken
          startedAt
        }
        receivingCompanyID
        sendingCompanyID
        ReceivingCompany {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        SendingCompany {
          id
          companyName
          phone
          contactEmail
          countryID
          profilePictureUrl
          fax
          cageCode
          qualityCertifications
          companyDescription
          addressId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyOwnerUserID
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companySentRfqsId
        companyReceivedRfqsId
      }
      item {
        id
        nsn
        partNumber
        altPartNumber
        description
        quantity
        condition
        control
        price
        demilitarizationCode
        scheduleB
        eccn
        isExportControlled
        usml
        companyID
        imageUrls
        Rfqs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserDetailsBillingAddress = /* GraphQL */ `
  subscription OnCreateUserDetailsBillingAddress(
    $filter: ModelSubscriptionUserDetailsBillingAddressFilterInput
    $owner: String
  ) {
    onCreateUserDetailsBillingAddress(filter: $filter, owner: $owner) {
      id
      userDetailsUserID
      billingAddressId
      userDetails {
        userID
        firstName
        lastName
        contactEmail
        contactPhone
        companyID
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        isCompanyOwner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      billingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        region
        postalCode
        isDefault
        CompanyBillingAddresses {
          nextToken
          startedAt
        }
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserBillingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUserDetailsBillingAddress = /* GraphQL */ `
  subscription OnUpdateUserDetailsBillingAddress(
    $filter: ModelSubscriptionUserDetailsBillingAddressFilterInput
    $owner: String
  ) {
    onUpdateUserDetailsBillingAddress(filter: $filter, owner: $owner) {
      id
      userDetailsUserID
      billingAddressId
      userDetails {
        userID
        firstName
        lastName
        contactEmail
        contactPhone
        companyID
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        isCompanyOwner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      billingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        region
        postalCode
        isDefault
        CompanyBillingAddresses {
          nextToken
          startedAt
        }
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserBillingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUserDetailsBillingAddress = /* GraphQL */ `
  subscription OnDeleteUserDetailsBillingAddress(
    $filter: ModelSubscriptionUserDetailsBillingAddressFilterInput
    $owner: String
  ) {
    onDeleteUserDetailsBillingAddress(filter: $filter, owner: $owner) {
      id
      userDetailsUserID
      billingAddressId
      userDetails {
        userID
        firstName
        lastName
        contactEmail
        contactPhone
        companyID
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        isCompanyOwner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      billingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        region
        postalCode
        isDefault
        CompanyBillingAddresses {
          nextToken
          startedAt
        }
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserBillingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateUserDetailsShippingAddress = /* GraphQL */ `
  subscription OnCreateUserDetailsShippingAddress(
    $filter: ModelSubscriptionUserDetailsShippingAddressFilterInput
    $owner: String
  ) {
    onCreateUserDetailsShippingAddress(filter: $filter, owner: $owner) {
      id
      userDetailsUserID
      shippingAddressId
      userDetails {
        userID
        firstName
        lastName
        contactEmail
        contactPhone
        companyID
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        isCompanyOwner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      shippingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        regi
        postalCode
        isDefault
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserShippingAddresses {
          nextToken
          startedAt
        }
        CompanyShippingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUserDetailsShippingAddress = /* GraphQL */ `
  subscription OnUpdateUserDetailsShippingAddress(
    $filter: ModelSubscriptionUserDetailsShippingAddressFilterInput
    $owner: String
  ) {
    onUpdateUserDetailsShippingAddress(filter: $filter, owner: $owner) {
      id
      userDetailsUserID
      shippingAddressId
      userDetails {
        userID
        firstName
        lastName
        contactEmail
        contactPhone
        companyID
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        isCompanyOwner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      shippingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        regi
        postalCode
        isDefault
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserShippingAddresses {
          nextToken
          startedAt
        }
        CompanyShippingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUserDetailsShippingAddress = /* GraphQL */ `
  subscription OnDeleteUserDetailsShippingAddress(
    $filter: ModelSubscriptionUserDetailsShippingAddressFilterInput
    $owner: String
  ) {
    onDeleteUserDetailsShippingAddress(filter: $filter, owner: $owner) {
      id
      userDetailsUserID
      shippingAddressId
      userDetails {
        userID
        firstName
        lastName
        contactEmail
        contactPhone
        companyID
        BillingAddresses {
          nextToken
          startedAt
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        isCompanyOwner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      shippingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        regi
        postalCode
        isDefault
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserShippingAddresses {
          nextToken
          startedAt
        }
        CompanyShippingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateCompanyShippingAddress = /* GraphQL */ `
  subscription OnCreateCompanyShippingAddress(
    $filter: ModelSubscriptionCompanyShippingAddressFilterInput
  ) {
    onCreateCompanyShippingAddress(filter: $filter) {
      id
      shippingAddressId
      companyId
      shippingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        regi
        postalCode
        isDefault
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserShippingAddresses {
          nextToken
          startedAt
        }
        CompanyShippingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCompanyShippingAddress = /* GraphQL */ `
  subscription OnUpdateCompanyShippingAddress(
    $filter: ModelSubscriptionCompanyShippingAddressFilterInput
  ) {
    onUpdateCompanyShippingAddress(filter: $filter) {
      id
      shippingAddressId
      companyId
      shippingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        regi
        postalCode
        isDefault
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserShippingAddresses {
          nextToken
          startedAt
        }
        CompanyShippingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCompanyShippingAddress = /* GraphQL */ `
  subscription OnDeleteCompanyShippingAddress(
    $filter: ModelSubscriptionCompanyShippingAddressFilterInput
  ) {
    onDeleteCompanyShippingAddress(filter: $filter) {
      id
      shippingAddressId
      companyId
      shippingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        regi
        postalCode
        isDefault
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserShippingAddresses {
          nextToken
          startedAt
        }
        CompanyShippingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCompanyBillingAddress = /* GraphQL */ `
  subscription OnCreateCompanyBillingAddress(
    $filter: ModelSubscriptionCompanyBillingAddressFilterInput
  ) {
    onCreateCompanyBillingAddress(filter: $filter) {
      id
      billingAddressId
      companyId
      billingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        region
        postalCode
        isDefault
        CompanyBillingAddresses {
          nextToken
          startedAt
        }
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserBillingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCompanyBillingAddress = /* GraphQL */ `
  subscription OnUpdateCompanyBillingAddress(
    $filter: ModelSubscriptionCompanyBillingAddressFilterInput
  ) {
    onUpdateCompanyBillingAddress(filter: $filter) {
      id
      billingAddressId
      companyId
      billingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        region
        postalCode
        isDefault
        CompanyBillingAddresses {
          nextToken
          startedAt
        }
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserBillingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCompanyBillingAddress = /* GraphQL */ `
  subscription OnDeleteCompanyBillingAddress(
    $filter: ModelSubscriptionCompanyBillingAddressFilterInput
  ) {
    onDeleteCompanyBillingAddress(filter: $filter) {
      id
      billingAddressId
      companyId
      billingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        region
        postalCode
        isDefault
        CompanyBillingAddresses {
          nextToken
          startedAt
        }
        countryID
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserBillingAddresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        companyName
        phone
        contactEmail
        Items {
          nextToken
          startedAt
        }
        ItemMROS {
          nextToken
          startedAt
        }
        BillingAddresses {
          nextToken
          startedAt
        }
        CompanyMembers {
          nextToken
          startedAt
        }
        CompanyOwner {
          userID
          firstName
          lastName
          contactEmail
          contactPhone
          companyID
          isCompanyOwner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        ShippingAddresses {
          nextToken
          startedAt
        }
        countryID
        profilePictureUrl
        fax
        cageCode
        qualityCertifications
        companyDescription
        sentRfqs {
          nextToken
          startedAt
        }
        receivedRfqs {
          nextToken
          startedAt
        }
        country {
          id
          countryName
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addressId
        address {
          id
          unitNumber
          streetNumber
          addressLine1
          addressLine2
          city
          regi
          postalCode
          isDefault
          countryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyCompanyOwnerUserID
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
