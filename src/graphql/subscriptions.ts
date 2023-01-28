/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRFQ = /* GraphQL */ `
  subscription OnCreateRFQ($filter: ModelSubscriptionRFQFilterInput) {
    onCreateRFQ(filter: $filter) {
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
export const onUpdateRFQ = /* GraphQL */ `
  subscription OnUpdateRFQ($filter: ModelSubscriptionRFQFilterInput) {
    onUpdateRFQ(filter: $filter) {
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
export const onDeleteRFQ = /* GraphQL */ `
  subscription OnDeleteRFQ($filter: ModelSubscriptionRFQFilterInput) {
    onDeleteRFQ(filter: $filter) {
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
export const onCreateUserDetails = /* GraphQL */ `
  subscription OnCreateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
  ) {
    onCreateUserDetails(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const onUpdateUserDetails = /* GraphQL */ `
  subscription OnUpdateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
  ) {
    onUpdateUserDetails(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const onDeleteUserDetails = /* GraphQL */ `
  subscription OnDeleteUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
  ) {
    onDeleteUserDetails(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onUpdateCountry(filter: $filter) {
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
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry($filter: ModelSubscriptionCountryFilterInput) {
    onDeleteCountry(filter: $filter) {
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
      countryID
      UserShippingAddresses {
        items {
          id
          userDetailsId
          shippingAddressId
          userDetails {
            id
            companyID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
      countryID
      UserShippingAddresses {
        items {
          id
          userDetailsId
          shippingAddressId
          userDetails {
            id
            companyID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
      countryID
      UserShippingAddresses {
        items {
          id
          userDetailsId
          shippingAddressId
          userDetails {
            id
            companyID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const onCreateUserDetailsBillingAddress = /* GraphQL */ `
  subscription OnCreateUserDetailsBillingAddress(
    $filter: ModelSubscriptionUserDetailsBillingAddressFilterInput
  ) {
    onCreateUserDetailsBillingAddress(filter: $filter) {
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
export const onUpdateUserDetailsBillingAddress = /* GraphQL */ `
  subscription OnUpdateUserDetailsBillingAddress(
    $filter: ModelSubscriptionUserDetailsBillingAddressFilterInput
  ) {
    onUpdateUserDetailsBillingAddress(filter: $filter) {
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
export const onDeleteUserDetailsBillingAddress = /* GraphQL */ `
  subscription OnDeleteUserDetailsBillingAddress(
    $filter: ModelSubscriptionUserDetailsBillingAddressFilterInput
  ) {
    onDeleteUserDetailsBillingAddress(filter: $filter) {
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
export const onCreateUserDetailsShippingAddress = /* GraphQL */ `
  subscription OnCreateUserDetailsShippingAddress(
    $filter: ModelSubscriptionUserDetailsShippingAddressFilterInput
  ) {
    onCreateUserDetailsShippingAddress(filter: $filter) {
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
    }
  }
`;
export const onUpdateUserDetailsShippingAddress = /* GraphQL */ `
  subscription OnUpdateUserDetailsShippingAddress(
    $filter: ModelSubscriptionUserDetailsShippingAddressFilterInput
  ) {
    onUpdateUserDetailsShippingAddress(filter: $filter) {
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
    }
  }
`;
export const onDeleteUserDetailsShippingAddress = /* GraphQL */ `
  subscription OnDeleteUserDetailsShippingAddress(
    $filter: ModelSubscriptionUserDetailsShippingAddressFilterInput
  ) {
    onDeleteUserDetailsShippingAddress(filter: $filter) {
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
            id
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
            id
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
            id
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
            id
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
            id
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
            id
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