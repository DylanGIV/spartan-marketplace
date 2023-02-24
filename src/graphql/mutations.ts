/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRfq = /* GraphQL */ `
  mutation CreateRfq(
    $input: CreateRfqInput!
    $condition: ModelRfqConditionInput
  ) {
    createRfq(input: $input, condition: $condition) {
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
      itemIDs
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
export const updateRfq = /* GraphQL */ `
  mutation UpdateRfq(
    $input: UpdateRfqInput!
    $condition: ModelRfqConditionInput
  ) {
    updateRfq(input: $input, condition: $condition) {
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
      itemIDs
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
export const deleteRfq = /* GraphQL */ `
  mutation DeleteRfq(
    $input: DeleteRfqInput!
    $condition: ModelRfqConditionInput
  ) {
    deleteRfq(input: $input, condition: $condition) {
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
      itemIDs
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
export const createCountry = /* GraphQL */ `
  mutation CreateCountry(
    $input: CreateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    createCountry(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry(
    $input: UpdateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    updateCountry(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry(
    $input: DeleteCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    deleteCountry(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createShippingAddress = /* GraphQL */ `
  mutation CreateShippingAddress(
    $input: CreateShippingAddressInput!
    $condition: ModelShippingAddressConditionInput
  ) {
    createShippingAddress(input: $input, condition: $condition) {
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
export const updateShippingAddress = /* GraphQL */ `
  mutation UpdateShippingAddress(
    $input: UpdateShippingAddressInput!
    $condition: ModelShippingAddressConditionInput
  ) {
    updateShippingAddress(input: $input, condition: $condition) {
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
export const deleteShippingAddress = /* GraphQL */ `
  mutation DeleteShippingAddress(
    $input: DeleteShippingAddressInput!
    $condition: ModelShippingAddressConditionInput
  ) {
    deleteShippingAddress(input: $input, condition: $condition) {
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
export const createBillingAddress = /* GraphQL */ `
  mutation CreateBillingAddress(
    $input: CreateBillingAddressInput!
    $condition: ModelBillingAddressConditionInput
  ) {
    createBillingAddress(input: $input, condition: $condition) {
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
export const updateBillingAddress = /* GraphQL */ `
  mutation UpdateBillingAddress(
    $input: UpdateBillingAddressInput!
    $condition: ModelBillingAddressConditionInput
  ) {
    updateBillingAddress(input: $input, condition: $condition) {
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
export const deleteBillingAddress = /* GraphQL */ `
  mutation DeleteBillingAddress(
    $input: DeleteBillingAddressInput!
    $condition: ModelBillingAddressConditionInput
  ) {
    deleteBillingAddress(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
          itemIDs
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
          itemIDs
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
          itemIDs
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
          itemIDs
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
          itemIDs
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
          itemIDs
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
    }
  }
`;
export const createItemMRO = /* GraphQL */ `
  mutation CreateItemMRO(
    $input: CreateItemMROInput!
    $condition: ModelItemMROConditionInput
  ) {
    createItemMRO(input: $input, condition: $condition) {
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
export const updateItemMRO = /* GraphQL */ `
  mutation UpdateItemMRO(
    $input: UpdateItemMROInput!
    $condition: ModelItemMROConditionInput
  ) {
    updateItemMRO(input: $input, condition: $condition) {
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
export const deleteItemMRO = /* GraphQL */ `
  mutation DeleteItemMRO(
    $input: DeleteItemMROInput!
    $condition: ModelItemMROConditionInput
  ) {
    deleteItemMRO(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createCompanyShippingAddress = /* GraphQL */ `
  mutation CreateCompanyShippingAddress(
    $input: CreateCompanyShippingAddressInput!
    $condition: ModelCompanyShippingAddressConditionInput
  ) {
    createCompanyShippingAddress(input: $input, condition: $condition) {
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
export const updateCompanyShippingAddress = /* GraphQL */ `
  mutation UpdateCompanyShippingAddress(
    $input: UpdateCompanyShippingAddressInput!
    $condition: ModelCompanyShippingAddressConditionInput
  ) {
    updateCompanyShippingAddress(input: $input, condition: $condition) {
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
export const deleteCompanyShippingAddress = /* GraphQL */ `
  mutation DeleteCompanyShippingAddress(
    $input: DeleteCompanyShippingAddressInput!
    $condition: ModelCompanyShippingAddressConditionInput
  ) {
    deleteCompanyShippingAddress(input: $input, condition: $condition) {
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
export const createCompanyBillingAddress = /* GraphQL */ `
  mutation CreateCompanyBillingAddress(
    $input: CreateCompanyBillingAddressInput!
    $condition: ModelCompanyBillingAddressConditionInput
  ) {
    createCompanyBillingAddress(input: $input, condition: $condition) {
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
export const updateCompanyBillingAddress = /* GraphQL */ `
  mutation UpdateCompanyBillingAddress(
    $input: UpdateCompanyBillingAddressInput!
    $condition: ModelCompanyBillingAddressConditionInput
  ) {
    updateCompanyBillingAddress(input: $input, condition: $condition) {
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
export const deleteCompanyBillingAddress = /* GraphQL */ `
  mutation DeleteCompanyBillingAddress(
    $input: DeleteCompanyBillingAddressInput!
    $condition: ModelCompanyBillingAddressConditionInput
  ) {
    deleteCompanyBillingAddress(input: $input, condition: $condition) {
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
export const createUserDetails = /* GraphQL */ `
  mutation CreateUserDetails(
    $input: CreateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    createUserDetails(input: $input, condition: $condition) {
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
export const updateUserDetails = /* GraphQL */ `
  mutation UpdateUserDetails(
    $input: UpdateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    updateUserDetails(input: $input, condition: $condition) {
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
export const deleteUserDetails = /* GraphQL */ `
  mutation DeleteUserDetails(
    $input: DeleteUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    deleteUserDetails(input: $input, condition: $condition) {
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
export const createUserDetailsBillingAddress = /* GraphQL */ `
  mutation CreateUserDetailsBillingAddress(
    $input: CreateUserDetailsBillingAddressInput!
    $condition: ModelUserDetailsBillingAddressConditionInput
  ) {
    createUserDetailsBillingAddress(input: $input, condition: $condition) {
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
export const updateUserDetailsBillingAddress = /* GraphQL */ `
  mutation UpdateUserDetailsBillingAddress(
    $input: UpdateUserDetailsBillingAddressInput!
    $condition: ModelUserDetailsBillingAddressConditionInput
  ) {
    updateUserDetailsBillingAddress(input: $input, condition: $condition) {
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
export const deleteUserDetailsBillingAddress = /* GraphQL */ `
  mutation DeleteUserDetailsBillingAddress(
    $input: DeleteUserDetailsBillingAddressInput!
    $condition: ModelUserDetailsBillingAddressConditionInput
  ) {
    deleteUserDetailsBillingAddress(input: $input, condition: $condition) {
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
export const createUserDetailsShippingAddress = /* GraphQL */ `
  mutation CreateUserDetailsShippingAddress(
    $input: CreateUserDetailsShippingAddressInput!
    $condition: ModelUserDetailsShippingAddressConditionInput
  ) {
    createUserDetailsShippingAddress(input: $input, condition: $condition) {
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
export const updateUserDetailsShippingAddress = /* GraphQL */ `
  mutation UpdateUserDetailsShippingAddress(
    $input: UpdateUserDetailsShippingAddressInput!
    $condition: ModelUserDetailsShippingAddressConditionInput
  ) {
    updateUserDetailsShippingAddress(input: $input, condition: $condition) {
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
export const deleteUserDetailsShippingAddress = /* GraphQL */ `
  mutation DeleteUserDetailsShippingAddress(
    $input: DeleteUserDetailsShippingAddressInput!
    $condition: ModelUserDetailsShippingAddressConditionInput
  ) {
    deleteUserDetailsShippingAddress(input: $input, condition: $condition) {
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
