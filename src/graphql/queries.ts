/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      PartID
      NSN
      PartNumber
      AltPartNumber
      description
      quantity
      condition
      imageUrl
      control
      price
      companyID
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
        PartID
        NSN
        PartNumber
        AltPartNumber
        description
        quantity
        condition
        imageUrl
        control
        price
        companyID
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
        PartID
        NSN
        PartNumber
        AltPartNumber
        description
        quantity
        condition
        imageUrl
        control
        price
        companyID
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
        PartID
        NSN
        PartNumber
        AltPartNumber
        description
        quantity
        condition
        imageUrl
        control
        price
        companyID
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
      partID
      nsn
      partNumber
      altPartNumber
      description
      quantity
      price
      companyID
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
        partID
        nsn
        partNumber
        altPartNumber
        description
        quantity
        price
        companyID
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
        partID
        nsn
        partNumber
        altPartNumber
        description
        quantity
        price
        companyID
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
        partID
        nsn
        partNumber
        altPartNumber
        description
        quantity
        price
        companyID
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
      companyID
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
      countryID
      companies {
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
      users {
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
        countryID
        companies {
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
        users {
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
        countryID
        companies {
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
        users {
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
        countryID
        companies {
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
        users {
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
export const getShippingAddress = /* GraphQL */ `
  query GetShippingAddress($id: ID!) {
    getShippingAddress(id: $id) {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      region
      postalCode
      countryID
      companies {
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
      users {
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
        region
        postalCode
        countryID
        companies {
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
        users {
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
        region
        postalCode
        countryID
        companies {
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
        users {
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
        region
        postalCode
        countryID
        companies {
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
        users {
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
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
      id
      countryName
      ShippingAddresses {
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
          companies {
            nextToken
            startedAt
          }
          users {
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
          companies {
            nextToken
            startedAt
          }
          users {
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
        ShippingAddresses {
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
        ShippingAddresses {
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
      UserDetails {
        items {
          id
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
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
      Items {
        items {
          id
          PartID
          NSN
          PartNumber
          AltPartNumber
          description
          quantity
          condition
          imageUrl
          control
          price
          companyID
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
          partID
          nsn
          partNumber
          altPartNumber
          description
          quantity
          price
          companyID
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
export const listCompaniesAndItems = /* GraphQL */ `
  query MyQuery {
    listCompanies {
      items {
        Items {
          items {
            AltPartNumber
            NSN
            PartID
            PartNumber
            _deleted
            _lastChangedAt
            _version
            companyID
            condition
            control
            description
            id
            imageUrl
            price
            quantity
            createdAt
            updatedAt
          }
        }
        companyName
        createdAt
        contactEmail
        id
        phone
      }
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
        UserDetails {
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
        Items {
          items {
            id
            PartID
            NSN
            PartNumber
            AltPartNumber
            description
            quantity
            condition
            imageUrl
            control
            price
            companyID
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
            partID
            nsn
            partNumber
            altPartNumber
            description
            quantity
            price
            companyID
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
        UserDetails {
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
        Items {
          items {
            id
            PartID
            NSN
            PartNumber
            AltPartNumber
            description
            quantity
            condition
            imageUrl
            control
            price
            companyID
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
            partID
            nsn
            partNumber
            altPartNumber
            description
            quantity
            price
            companyID
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
export const getBillingAddressUserDetails = /* GraphQL */ `
  query GetBillingAddressUserDetails($id: ID!) {
    getBillingAddressUserDetails(id: $id) {
      id
      userDetailsId
      billingAddressId
      userDetails {
        id
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
        companies {
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
        users {
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
export const listBillingAddressUserDetails = /* GraphQL */ `
  query ListBillingAddressUserDetails(
    $filter: ModelBillingAddressUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillingAddressUserDetails(
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
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
          companies {
            nextToken
            startedAt
          }
          users {
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
export const syncBillingAddressUserDetails = /* GraphQL */ `
  query SyncBillingAddressUserDetails(
    $filter: ModelBillingAddressUserDetailsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBillingAddressUserDetails(
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
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
          companies {
            nextToken
            startedAt
          }
          users {
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
export const billingAddressUserDetailsByUserDetailsId = /* GraphQL */ `
  query BillingAddressUserDetailsByUserDetailsId(
    $userDetailsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBillingAddressUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    billingAddressUserDetailsByUserDetailsId(
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
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
          companies {
            nextToken
            startedAt
          }
          users {
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
export const billingAddressUserDetailsByBillingAddressId = /* GraphQL */ `
  query BillingAddressUserDetailsByBillingAddressId(
    $billingAddressId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBillingAddressUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    billingAddressUserDetailsByBillingAddressId(
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
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
          companies {
            nextToken
            startedAt
          }
          users {
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
export const getShippingAddressUserDetails = /* GraphQL */ `
  query GetShippingAddressUserDetails($id: ID!) {
    getShippingAddressUserDetails(id: $id) {
      id
      userDetailsId
      shippingAddressId
      userDetails {
        id
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
        region
        postalCode
        countryID
        companies {
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
        users {
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
export const listShippingAddressUserDetails = /* GraphQL */ `
  query ListShippingAddressUserDetails(
    $filter: ModelShippingAddressUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShippingAddressUserDetails(
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
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
          region
          postalCode
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
export const syncShippingAddressUserDetails = /* GraphQL */ `
  query SyncShippingAddressUserDetails(
    $filter: ModelShippingAddressUserDetailsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShippingAddressUserDetails(
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
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
          region
          postalCode
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
export const shippingAddressUserDetailsByUserDetailsId = /* GraphQL */ `
  query ShippingAddressUserDetailsByUserDetailsId(
    $userDetailsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShippingAddressUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shippingAddressUserDetailsByUserDetailsId(
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
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
          region
          postalCode
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
export const shippingAddressUserDetailsByShippingAddressId = /* GraphQL */ `
  query ShippingAddressUserDetailsByShippingAddressId(
    $shippingAddressId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShippingAddressUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shippingAddressUserDetailsByShippingAddressId(
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
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
          region
          postalCode
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
export const getBillingAddressCompany = /* GraphQL */ `
  query GetBillingAddressCompany($id: ID!) {
    getBillingAddressCompany(id: $id) {
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
        companies {
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
        users {
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
        UserDetails {
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
        Items {
          items {
            id
            PartID
            NSN
            PartNumber
            AltPartNumber
            description
            quantity
            condition
            imageUrl
            control
            price
            companyID
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
            partID
            nsn
            partNumber
            altPartNumber
            description
            quantity
            price
            companyID
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
    }
  }
`;
export const listBillingAddressCompanies = /* GraphQL */ `
  query ListBillingAddressCompanies(
    $filter: ModelBillingAddressCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillingAddressCompanies(
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
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
          UserDetails {
            nextToken
            startedAt
          }
          Items {
            nextToken
            startedAt
          }
          ItemMROS {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBillingAddressCompanies = /* GraphQL */ `
  query SyncBillingAddressCompanies(
    $filter: ModelBillingAddressCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBillingAddressCompanies(
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
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
          UserDetails {
            nextToken
            startedAt
          }
          Items {
            nextToken
            startedAt
          }
          ItemMROS {
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
      nextToken
      startedAt
    }
  }
`;
export const billingAddressCompaniesByBillingAddressId = /* GraphQL */ `
  query BillingAddressCompaniesByBillingAddressId(
    $billingAddressId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBillingAddressCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    billingAddressCompaniesByBillingAddressId(
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
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
          UserDetails {
            nextToken
            startedAt
          }
          Items {
            nextToken
            startedAt
          }
          ItemMROS {
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
      nextToken
      startedAt
    }
  }
`;
export const billingAddressCompaniesByCompanyId = /* GraphQL */ `
  query BillingAddressCompaniesByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBillingAddressCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    billingAddressCompaniesByCompanyId(
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
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
          UserDetails {
            nextToken
            startedAt
          }
          Items {
            nextToken
            startedAt
          }
          ItemMROS {
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
      nextToken
      startedAt
    }
  }
`;
export const getShippingAddressCompany = /* GraphQL */ `
  query GetShippingAddressCompany($id: ID!) {
    getShippingAddressCompany(id: $id) {
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
        region
        postalCode
        countryID
        companies {
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
        users {
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
        UserDetails {
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
        Items {
          items {
            id
            PartID
            NSN
            PartNumber
            AltPartNumber
            description
            quantity
            condition
            imageUrl
            control
            price
            companyID
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
            partID
            nsn
            partNumber
            altPartNumber
            description
            quantity
            price
            companyID
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
    }
  }
`;
export const listShippingAddressCompanies = /* GraphQL */ `
  query ListShippingAddressCompanies(
    $filter: ModelShippingAddressCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShippingAddressCompanies(
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
          region
          postalCode
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
          UserDetails {
            nextToken
            startedAt
          }
          Items {
            nextToken
            startedAt
          }
          ItemMROS {
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
      nextToken
      startedAt
    }
  }
`;
export const syncShippingAddressCompanies = /* GraphQL */ `
  query SyncShippingAddressCompanies(
    $filter: ModelShippingAddressCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShippingAddressCompanies(
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
          region
          postalCode
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
          UserDetails {
            nextToken
            startedAt
          }
          Items {
            nextToken
            startedAt
          }
          ItemMROS {
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
      nextToken
      startedAt
    }
  }
`;
export const shippingAddressCompaniesByShippingAddressId = /* GraphQL */ `
  query ShippingAddressCompaniesByShippingAddressId(
    $shippingAddressId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShippingAddressCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shippingAddressCompaniesByShippingAddressId(
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
          region
          postalCode
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
          UserDetails {
            nextToken
            startedAt
          }
          Items {
            nextToken
            startedAt
          }
          ItemMROS {
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
      nextToken
      startedAt
    }
  }
`;
export const shippingAddressCompaniesByCompanyId = /* GraphQL */ `
  query ShippingAddressCompaniesByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShippingAddressCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shippingAddressCompaniesByCompanyId(
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
          region
          postalCode
          countryID
          companies {
            nextToken
            startedAt
          }
          users {
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
          BillingAddresses {
            nextToken
            startedAt
          }
          ShippingAddresses {
            nextToken
            startedAt
          }
          UserDetails {
            nextToken
            startedAt
          }
          Items {
            nextToken
            startedAt
          }
          ItemMROS {
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
      nextToken
      startedAt
    }
  }
`;
