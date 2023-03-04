// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rfq, Item, Company, ItemMRO, BillingAddress, Country, ShippingAddress, UserDetails, CompanyItemsImport, CustomerRfqEmail, RfqItems, CompanyBillingAddress, CompanyShippingAddress, UserDetailsBillingAddress, UserDetailsShippingAddress } = initSchema(schema);

export {
  Rfq,
  Item,
  Company,
  ItemMRO,
  BillingAddress,
  Country,
  ShippingAddress,
  UserDetails,
  CompanyItemsImport,
  CustomerRfqEmail,
  RfqItems,
  CompanyBillingAddress,
  CompanyShippingAddress,
  UserDetailsBillingAddress,
  UserDetailsShippingAddress
};