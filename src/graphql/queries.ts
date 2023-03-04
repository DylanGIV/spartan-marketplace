/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomerRfqEmail = /* GraphQL */ `
  query GetCustomerRfqEmail($id: ID!) {
    getCustomerRfqEmail(id: $id) {
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
export const listCustomerRfqEmails = /* GraphQL */ `
  query ListCustomerRfqEmails(
    $filter: ModelCustomerRfqEmailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerRfqEmails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCustomerRfqEmails = /* GraphQL */ `
  query SyncCustomerRfqEmails(
    $filter: ModelCustomerRfqEmailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomerRfqEmails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRfq = /* GraphQL */ `
  query GetRfq($id: ID!) {
    getRfq(id: $id) {
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
        firstShippingAddress {
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
        firstShippingAddress {
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
export const listRfqs = /* GraphQL */ `
  query ListRfqs(
    $filter: ModelRfqFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRfqs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          companyDescription
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
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const syncRfqs = /* GraphQL */ `
  query SyncRfqs(
    $filter: ModelRfqFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRfqs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          companyDescription
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
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const rfqsByReceivingCompanyID = /* GraphQL */ `
  query RfqsByReceivingCompanyID(
    $receivingCompanyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRfqFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rfqsByReceivingCompanyID(
      receivingCompanyID: $receivingCompanyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          companyDescription
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
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const rfqsBySendingCompanyID = /* GraphQL */ `
  query RfqsBySendingCompanyID(
    $sendingCompanyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRfqFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rfqsBySendingCompanyID(
      sendingCompanyID: $sendingCompanyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          companyDescription
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
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const getUserDetails = /* GraphQL */ `
  query GetUserDetails($userID: ID!) {
    getUserDetails(userID: $userID) {
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
export const listUserDetails = /* GraphQL */ `
  query ListUserDetails(
    $userID: ID
    $filter: ModelUserDetailsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserDetails(
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserDetails = /* GraphQL */ `
  query SyncUserDetails(
    $filter: ModelUserDetailsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const userDetailsByCompanyID = /* GraphQL */ `
  query UserDetailsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userDetailsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
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
        firstShippingAddress {
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
export const listCountries = /* GraphQL */ `
  query ListCountries(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const syncCountries = /* GraphQL */ `
  query SyncCountries(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCountries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const getShippingAddress = /* GraphQL */ `
  query GetShippingAddress($id: ID!) {
    getShippingAddress(id: $id) {
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
          companyDescription
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
export const listShippingAddresses = /* GraphQL */ `
  query ListShippingAddresses(
    $filter: ModelShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShippingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncShippingAddresses = /* GraphQL */ `
  query SyncShippingAddresses(
    $filter: ModelShippingAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShippingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const shippingAddressesByCountryID = /* GraphQL */ `
  query ShippingAddressesByCountryID(
    $countryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shippingAddressesByCountryID(
      countryID: $countryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getBillingAddress = /* GraphQL */ `
  query GetBillingAddress($id: ID!) {
    getBillingAddress(id: $id) {
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
          companyDescription
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
export const listBillingAddresses = /* GraphQL */ `
  query ListBillingAddresses(
    $filter: ModelBillingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBillingAddresses = /* GraphQL */ `
  query SyncBillingAddresses(
    $filter: ModelBillingAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBillingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const billingAddressesByCountryID = /* GraphQL */ `
  query BillingAddressesByCountryID(
    $countryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBillingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    billingAddressesByCountryID(
      countryID: $countryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
          companyDescription
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
      firstShippingAddress {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        firstShippingAddress {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        firstShippingAddress {
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
      nextToken
      startedAt
    }
  }
`;
export const companiesByCountryID = /* GraphQL */ `
  query CompaniesByCountryID(
    $countryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companiesByCountryID(
      countryID: $countryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        firstShippingAddress {
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
      nextToken
      startedAt
    }
  }
`;
export const getItemMRO = /* GraphQL */ `
  query GetItemMRO($id: ID!) {
    getItemMRO(id: $id) {
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
export const listItemMROS = /* GraphQL */ `
  query ListItemMROS(
    $filter: ModelItemMROFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemMROS(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncItemMROS = /* GraphQL */ `
  query SyncItemMROS(
    $filter: ModelItemMROFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItemMROS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const itemMROSByCompanyID = /* GraphQL */ `
  query ItemMROSByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelItemMROFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemMROSByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      condition
      control
      price
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncItems = /* GraphQL */ `
  query SyncItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const itemsByCompanyID = /* GraphQL */ `
  query ItemsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const searchItems = /* GraphQL */ `
  query SearchItems(
    $filter: SearchableItemFilterInput
    $sort: [SearchableItemSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableItemAggregationInput]
  ) {
    searchItems(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCompanyItemsImport = /* GraphQL */ `
  query GetCompanyItemsImport($id: ID!) {
    getCompanyItemsImport(id: $id) {
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
export const listCompanyItemsImports = /* GraphQL */ `
  query ListCompanyItemsImports(
    $id: ID
    $filter: ModelCompanyItemsImportFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompanyItemsImports(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCompanyItemsImports = /* GraphQL */ `
  query SyncCompanyItemsImports(
    $filter: ModelCompanyItemsImportFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanyItemsImports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRfqItems = /* GraphQL */ `
  query GetRfqItems($id: ID!) {
    getRfqItems(id: $id) {
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
          companyDescription
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
          companyDescription
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
export const listRfqItems = /* GraphQL */ `
  query ListRfqItems(
    $filter: ModelRfqItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRfqItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          companyID
          imageUrls
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
      nextToken
      startedAt
    }
  }
`;
export const syncRfqItems = /* GraphQL */ `
  query SyncRfqItems(
    $filter: ModelRfqItemsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRfqItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          companyID
          imageUrls
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
      nextToken
      startedAt
    }
  }
`;
export const rfqItemsByRfqId = /* GraphQL */ `
  query RfqItemsByRfqId(
    $rfqId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRfqItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rfqItemsByRfqId(
      rfqId: $rfqId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          companyID
          imageUrls
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
      nextToken
      startedAt
    }
  }
`;
export const rfqItemsByItemId = /* GraphQL */ `
  query RfqItemsByItemId(
    $itemId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRfqItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rfqItemsByItemId(
      itemId: $itemId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          companyID
          imageUrls
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
      nextToken
      startedAt
    }
  }
`;
export const getUserDetailsBillingAddress = /* GraphQL */ `
  query GetUserDetailsBillingAddress($id: ID!) {
    getUserDetailsBillingAddress(id: $id) {
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
export const listUserDetailsBillingAddresses = /* GraphQL */ `
  query ListUserDetailsBillingAddresses(
    $filter: ModelUserDetailsBillingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDetailsBillingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserDetailsBillingAddresses = /* GraphQL */ `
  query SyncUserDetailsBillingAddresses(
    $filter: ModelUserDetailsBillingAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserDetailsBillingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const userDetailsBillingAddressesByUserDetailsUserID = /* GraphQL */ `
  query UserDetailsBillingAddressesByUserDetailsUserID(
    $userDetailsUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDetailsBillingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userDetailsBillingAddressesByUserDetailsUserID(
      userDetailsUserID: $userDetailsUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const userDetailsBillingAddressesByBillingAddressId = /* GraphQL */ `
  query UserDetailsBillingAddressesByBillingAddressId(
    $billingAddressId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDetailsBillingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userDetailsBillingAddressesByBillingAddressId(
      billingAddressId: $billingAddressId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserDetailsShippingAddress = /* GraphQL */ `
  query GetUserDetailsShippingAddress($id: ID!) {
    getUserDetailsShippingAddress(id: $id) {
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
export const listUserDetailsShippingAddresses = /* GraphQL */ `
  query ListUserDetailsShippingAddresses(
    $filter: ModelUserDetailsShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDetailsShippingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserDetailsShippingAddresses = /* GraphQL */ `
  query SyncUserDetailsShippingAddresses(
    $filter: ModelUserDetailsShippingAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserDetailsShippingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const userDetailsShippingAddressesByUserDetailsUserID = /* GraphQL */ `
  query UserDetailsShippingAddressesByUserDetailsUserID(
    $userDetailsUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDetailsShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userDetailsShippingAddressesByUserDetailsUserID(
      userDetailsUserID: $userDetailsUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const userDetailsShippingAddressesByShippingAddressId = /* GraphQL */ `
  query UserDetailsShippingAddressesByShippingAddressId(
    $shippingAddressId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDetailsShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userDetailsShippingAddressesByShippingAddressId(
      shippingAddressId: $shippingAddressId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCompanyShippingAddress = /* GraphQL */ `
  query GetCompanyShippingAddress($id: ID!) {
    getCompanyShippingAddress(id: $id) {
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
        firstShippingAddress {
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
export const listCompanyShippingAddresses = /* GraphQL */ `
  query ListCompanyShippingAddresses(
    $filter: ModelCompanyShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyShippingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          countryID
          profilePictureUrl
          fax
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const syncCompanyShippingAddresses = /* GraphQL */ `
  query SyncCompanyShippingAddresses(
    $filter: ModelCompanyShippingAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanyShippingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          countryID
          profilePictureUrl
          fax
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const companyShippingAddressesByShippingAddressId = /* GraphQL */ `
  query CompanyShippingAddressesByShippingAddressId(
    $shippingAddressId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companyShippingAddressesByShippingAddressId(
      shippingAddressId: $shippingAddressId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          countryID
          profilePictureUrl
          fax
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const companyShippingAddressesByCompanyId = /* GraphQL */ `
  query CompanyShippingAddressesByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companyShippingAddressesByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          countryID
          profilePictureUrl
          fax
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const getCompanyBillingAddress = /* GraphQL */ `
  query GetCompanyBillingAddress($id: ID!) {
    getCompanyBillingAddress(id: $id) {
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
        firstShippingAddress {
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
export const listCompanyBillingAddresses = /* GraphQL */ `
  query ListCompanyBillingAddresses(
    $filter: ModelCompanyBillingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyBillingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          countryID
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
          countryID
          profilePictureUrl
          fax
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const syncCompanyBillingAddresses = /* GraphQL */ `
  query SyncCompanyBillingAddresses(
    $filter: ModelCompanyBillingAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanyBillingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          countryID
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
          countryID
          profilePictureUrl
          fax
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const companyBillingAddressesByBillingAddressId = /* GraphQL */ `
  query CompanyBillingAddressesByBillingAddressId(
    $billingAddressId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyBillingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companyBillingAddressesByBillingAddressId(
      billingAddressId: $billingAddressId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          countryID
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
          countryID
          profilePictureUrl
          fax
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
export const companyBillingAddressesByCompanyId = /* GraphQL */ `
  query CompanyBillingAddressesByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyBillingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companyBillingAddressesByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          countryID
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
          countryID
          profilePictureUrl
          fax
          companyDescription
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
      nextToken
      startedAt
    }
  }
`;
