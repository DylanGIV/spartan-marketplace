// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RFQ, UserDetails, BillingAddress, Company, Item, ItemMRO, ShippingAddress, Country, UserDetailsBillingAddress, UserDetailsShippingAddress, CompanyBillingAddress, CompanyShippingAddress } = initSchema(schema);

export {
  RFQ,
  UserDetails,
  BillingAddress,
  Company,
  Item,
  ItemMRO,
  ShippingAddress,
  Country,
  UserDetailsBillingAddress,
  UserDetailsShippingAddress,
  CompanyBillingAddress,
  CompanyShippingAddress
};