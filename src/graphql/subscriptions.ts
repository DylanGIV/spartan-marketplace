/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
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
export const onCreateItemMRO = /* GraphQL */ `
  subscription OnCreateItemMRO($filter: ModelSubscriptionItemMROFilterInput) {
    onCreateItemMRO(filter: $filter) {
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
export const onUpdateItemMRO = /* GraphQL */ `
  subscription OnUpdateItemMRO($filter: ModelSubscriptionItemMROFilterInput) {
    onUpdateItemMRO(filter: $filter) {
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
export const onDeleteItemMRO = /* GraphQL */ `
  subscription OnDeleteItemMRO($filter: ModelSubscriptionItemMROFilterInput) {
    onDeleteItemMRO(filter: $filter) {
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
export const onCreateUserDetails = /* GraphQL */ `
  subscription OnCreateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $owner: String
  ) {
    onCreateUserDetails(filter: $filter, owner: $owner) {
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
export const onUpdateUserDetails = /* GraphQL */ `
  subscription OnUpdateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $owner: String
  ) {
    onUpdateUserDetails(filter: $filter, owner: $owner) {
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
export const onDeleteUserDetails = /* GraphQL */ `
  subscription OnDeleteUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $owner: String
  ) {
    onDeleteUserDetails(filter: $filter, owner: $owner) {
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
export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onCreateCountry(filter: $filter) {
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
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onUpdateCountry(filter: $filter) {
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
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry($filter: ModelSubscriptionCountryFilterInput) {
    onDeleteCountry(filter: $filter) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
export const onCreateBillingAddressUserDetails = /* GraphQL */ `
  subscription OnCreateBillingAddressUserDetails(
    $filter: ModelSubscriptionBillingAddressUserDetailsFilterInput
    $owner: String
  ) {
    onCreateBillingAddressUserDetails(filter: $filter, owner: $owner) {
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
export const onUpdateBillingAddressUserDetails = /* GraphQL */ `
  subscription OnUpdateBillingAddressUserDetails(
    $filter: ModelSubscriptionBillingAddressUserDetailsFilterInput
    $owner: String
  ) {
    onUpdateBillingAddressUserDetails(filter: $filter, owner: $owner) {
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
export const onDeleteBillingAddressUserDetails = /* GraphQL */ `
  subscription OnDeleteBillingAddressUserDetails(
    $filter: ModelSubscriptionBillingAddressUserDetailsFilterInput
    $owner: String
  ) {
    onDeleteBillingAddressUserDetails(filter: $filter, owner: $owner) {
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
export const onCreateShippingAddressUserDetails = /* GraphQL */ `
  subscription OnCreateShippingAddressUserDetails(
    $filter: ModelSubscriptionShippingAddressUserDetailsFilterInput
    $owner: String
  ) {
    onCreateShippingAddressUserDetails(filter: $filter, owner: $owner) {
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
export const onUpdateShippingAddressUserDetails = /* GraphQL */ `
  subscription OnUpdateShippingAddressUserDetails(
    $filter: ModelSubscriptionShippingAddressUserDetailsFilterInput
    $owner: String
  ) {
    onUpdateShippingAddressUserDetails(filter: $filter, owner: $owner) {
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
export const onDeleteShippingAddressUserDetails = /* GraphQL */ `
  subscription OnDeleteShippingAddressUserDetails(
    $filter: ModelSubscriptionShippingAddressUserDetailsFilterInput
    $owner: String
  ) {
    onDeleteShippingAddressUserDetails(filter: $filter, owner: $owner) {
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
export const onCreateBillingAddressCompany = /* GraphQL */ `
  subscription OnCreateBillingAddressCompany(
    $filter: ModelSubscriptionBillingAddressCompanyFilterInput
  ) {
    onCreateBillingAddressCompany(filter: $filter) {
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
export const onUpdateBillingAddressCompany = /* GraphQL */ `
  subscription OnUpdateBillingAddressCompany(
    $filter: ModelSubscriptionBillingAddressCompanyFilterInput
  ) {
    onUpdateBillingAddressCompany(filter: $filter) {
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
export const onDeleteBillingAddressCompany = /* GraphQL */ `
  subscription OnDeleteBillingAddressCompany(
    $filter: ModelSubscriptionBillingAddressCompanyFilterInput
  ) {
    onDeleteBillingAddressCompany(filter: $filter) {
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
export const onCreateShippingAddressCompany = /* GraphQL */ `
  subscription OnCreateShippingAddressCompany(
    $filter: ModelSubscriptionShippingAddressCompanyFilterInput
  ) {
    onCreateShippingAddressCompany(filter: $filter) {
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
export const onUpdateShippingAddressCompany = /* GraphQL */ `
  subscription OnUpdateShippingAddressCompany(
    $filter: ModelSubscriptionShippingAddressCompanyFilterInput
  ) {
    onUpdateShippingAddressCompany(filter: $filter) {
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
export const onDeleteShippingAddressCompany = /* GraphQL */ `
  subscription OnDeleteShippingAddressCompany(
    $filter: ModelSubscriptionShippingAddressCompanyFilterInput
  ) {
    onDeleteShippingAddressCompany(filter: $filter) {
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
