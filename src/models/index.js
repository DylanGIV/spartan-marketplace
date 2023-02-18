// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rfq, Company, Item, ItemMRO, BillingAddress, UserDetails, ShippingAddress, Country, RfqItems, CompanyBillingAddress, CompanyShippingAddress, UserDetailsBillingAddress, UserDetailsShippingAddress } = initSchema(schema);

export {
  Rfq,
  Company,
  Item,
  ItemMRO,
  BillingAddress,
  UserDetails,
  ShippingAddress,
  Country,
  RfqItems,
  CompanyBillingAddress,
  CompanyShippingAddress,
  UserDetailsBillingAddress,
  UserDetailsShippingAddress
};