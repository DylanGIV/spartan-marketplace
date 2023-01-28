/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRFQ = /* GraphQL */ `
  query GetRFQ($id: ID!) {
    getRFQ(id: $id) {
      id
      quotationNumber
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
      nsn
      partNumber
      altPartNumber
      condition
      uom
      description
      price
      discount
      attr1
      attr2
      attr3
      lineTotal
      subtotal
      salesTax
      total
      internalComments
      emailComments
      attr4
      attr5
      attr6
      imageUrls
      addressLine1
      addressLine2
      city
      state
      zip
      country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRFQS = /* GraphQL */ `
  query ListRFQS(
    $filter: ModelRFQFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRFQS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quotationNumber
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
        nsn
        partNumber
        altPartNumber
        condition
        uom
        description
        price
        discount
        attr1
        attr2
        attr3
        lineTotal
        subtotal
        salesTax
        total
        internalComments
        emailComments
        attr4
        attr5
        attr6
        imageUrls
        addressLine1
        addressLine2
        city
        state
        zip
        country
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
export const syncRFQS = /* GraphQL */ `
  query SyncRFQS(
    $filter: ModelRFQFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRFQS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quotationNumber
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
        nsn
        partNumber
        altPartNumber
        condition
        uom
        description
        price
        discount
        attr1
        attr2
        attr3
        lineTotal
        subtotal
        salesTax
        total
        internalComments
        emailComments
        attr4
        attr5
        attr6
        imageUrls
        addressLine1
        addressLine2
        city
        state
        zip
        country
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
export const getUserDetails = /* GraphQL */ `
  query GetUserDetails($id: ID!) {
    getUserDetails(id: $id) {
      id
      companyID
      BillingAddresses {
        items {
          id
          userDetailsId
          billingAddressId
          userDetails {
            id
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
      ShippingAddresses {
        items {
          id
          userDetailsId
          shippingAddressId
          userDetails {
            id
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
    $filter: ModelUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyID
        BillingAddresses {
          items {
            id
            userDetailsId
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
            userDetailsId
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
        id
        companyID
        BillingAddresses {
          items {
            id
            userDetailsId
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
            userDetailsId
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
        id
        companyID
        BillingAddresses {
          items {
            id
            userDetailsId
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
            userDetailsId
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
          CompanyBillingAddresses {
            nextToken
            startedAt
          }
          countryID
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
          countryID
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
      countryID
      UserShippingAddresses {
        items {
          id
          userDetailsId
          shippingAddressId
          userDetails {
            id
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
      CompanyShippingAddresses {
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
            profilePictureUrl
            fax
            companyDescription
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
        countryID
        UserShippingAddresses {
          items {
            id
            userDetailsId
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
        countryID
        UserShippingAddresses {
          items {
            id
            userDetailsId
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
        countryID
        UserShippingAddresses {
          items {
            id
            userDetailsId
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
      CompanyBillingAddresses {
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
            profilePictureUrl
            fax
            companyDescription
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
      countryID
      UserBillingAddresses {
        items {
          id
          userDetailsId
          billingAddressId
          userDetails {
            id
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
        UserBillingAddresses {
          items {
            id
            userDetailsId
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
        UserBillingAddresses {
          items {
            id
            userDetailsId
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
        UserBillingAddresses {
          items {
            id
            userDetailsId
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
      ItemMROS {
        items {
          id
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
      BillingAddresses {
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
            profilePictureUrl
            fax
            companyDescription
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
      CompanyMembers {
        items {
          id
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
      ShippingAddresses {
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
            profilePictureUrl
            fax
            companyDescription
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
      profilePictureUrl
      fax
      companyDescription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          items {
            id
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
        ItemMROS {
          items {
            id
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
            id
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
        profilePictureUrl
        fax
        companyDescription
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
          items {
            id
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
        ItemMROS {
          items {
            id
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
            id
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
        profilePictureUrl
        fax
        companyDescription
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
      userDetailsId
      billingAddressId
      userDetails {
        id
        companyID
        BillingAddresses {
          items {
            id
            userDetailsId
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
            userDetailsId
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
      billingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        region
        postalCode
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
        UserBillingAddresses {
          items {
            id
            userDetailsId
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
        userDetailsId
        billingAddressId
        userDetails {
          id
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
          CompanyBillingAddresses {
            nextToken
            startedAt
          }
          countryID
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
        userDetailsId
        billingAddressId
        userDetails {
          id
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
          CompanyBillingAddresses {
            nextToken
            startedAt
          }
          countryID
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
      nextToken
      startedAt
    }
  }
`;
export const userDetailsBillingAddressesByUserDetailsId = /* GraphQL */ `
  query UserDetailsBillingAddressesByUserDetailsId(
    $userDetailsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDetailsBillingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userDetailsBillingAddressesByUserDetailsId(
      userDetailsId: $userDetailsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userDetailsId
        billingAddressId
        userDetails {
          id
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
          CompanyBillingAddresses {
            nextToken
            startedAt
          }
          countryID
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
        userDetailsId
        billingAddressId
        userDetails {
          id
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
          CompanyBillingAddresses {
            nextToken
            startedAt
          }
          countryID
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
      nextToken
      startedAt
    }
  }
`;
export const getUserDetailsShippingAddress = /* GraphQL */ `
  query GetUserDetailsShippingAddress($id: ID!) {
    getUserDetailsShippingAddress(id: $id) {
      id
      userDetailsId
      shippingAddressId
      userDetails {
        id
        companyID
        BillingAddresses {
          items {
            id
            userDetailsId
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
            userDetailsId
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
      shippingAddress {
        id
        unitNumber
        streetNumber
        addressLine1
        addressLine2
        city
        regi
        postalCode
        countryID
        UserShippingAddresses {
          items {
            id
            userDetailsId
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
        userDetailsId
        shippingAddressId
        userDetails {
          id
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
          countryID
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
        userDetailsId
        shippingAddressId
        userDetails {
          id
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
          countryID
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
      nextToken
      startedAt
    }
  }
`;
export const userDetailsShippingAddressesByUserDetailsId = /* GraphQL */ `
  query UserDetailsShippingAddressesByUserDetailsId(
    $userDetailsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDetailsShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userDetailsShippingAddressesByUserDetailsId(
      userDetailsId: $userDetailsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userDetailsId
        shippingAddressId
        userDetails {
          id
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
          countryID
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
        userDetailsId
        shippingAddressId
        userDetails {
          id
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
          countryID
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
        countryID
        UserShippingAddresses {
          items {
            id
            userDetailsId
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
      company {
        id
        companyName
        phone
        contactEmail
        Items {
          items {
            id
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
        ItemMROS {
          items {
            id
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
            id
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
        profilePictureUrl
        fax
        companyDescription
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
          countryID
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
          ShippingAddresses {
            nextToken
            startedAt
          }
          profilePictureUrl
          fax
          companyDescription
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
          countryID
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
          ShippingAddresses {
            nextToken
            startedAt
          }
          profilePictureUrl
          fax
          companyDescription
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
          countryID
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
          ShippingAddresses {
            nextToken
            startedAt
          }
          profilePictureUrl
          fax
          companyDescription
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
          countryID
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
          ShippingAddresses {
            nextToken
            startedAt
          }
          profilePictureUrl
          fax
          companyDescription
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
        UserBillingAddresses {
          items {
            id
            userDetailsId
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
      company {
        id
        companyName
        phone
        contactEmail
        Items {
          items {
            id
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
        ItemMROS {
          items {
            id
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
            id
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
        profilePictureUrl
        fax
        companyDescription
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
          CompanyBillingAddresses {
            nextToken
            startedAt
          }
          countryID
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
          ShippingAddresses {
            nextToken
            startedAt
          }
          profilePictureUrl
          fax
          companyDescription
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
          CompanyBillingAddresses {
            nextToken
            startedAt
          }
          countryID
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
          ShippingAddresses {
            nextToken
            startedAt
          }
          profilePictureUrl
          fax
          companyDescription
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
          CompanyBillingAddresses {
            nextToken
            startedAt
          }
          countryID
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
          ShippingAddresses {
            nextToken
            startedAt
          }
          profilePictureUrl
          fax
          companyDescription
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
          CompanyBillingAddresses {
            nextToken
            startedAt
          }
          countryID
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
          ShippingAddresses {
            nextToken
            startedAt
          }
          profilePictureUrl
          fax
          companyDescription
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
