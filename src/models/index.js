// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RFQ, UserDetails, BillingAddress, Company, ShippingAddress, Country, ItemMRO, Item, UserDetailsBillingAddress, UserDetailsShippingAddress, CompanyBillingAddress, CompanyShippingAddress } = initSchema(schema);

export {
  RFQ,
  UserDetails,
  BillingAddress,
  Company,
  ShippingAddress,
  Country,
  ItemMRO,
  Item,
  UserDetailsBillingAddress,
  UserDetailsShippingAddress,
  CompanyBillingAddress,
  CompanyShippingAddress
};