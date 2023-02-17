// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RFQ, Company, Item, ItemMRO, BillingAddress, UserDetails, ShippingAddress, Country, CompanyBillingAddress, CompanyShippingAddress, UserDetailsBillingAddress, UserDetailsShippingAddress } = initSchema(schema);

export {
  RFQ,
  Company,
  Item,
  ItemMRO,
  BillingAddress,
  UserDetails,
  ShippingAddress,
  Country,
  CompanyBillingAddress,
  CompanyShippingAddress,
  UserDetailsBillingAddress,
  UserDetailsShippingAddress
};