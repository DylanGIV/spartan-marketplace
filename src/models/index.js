// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item, ItemMRO, UserDetails, BillingAddress, Company, ShippingAddress, Country, BillingAddressUserDetails, ShippingAddressUserDetails, BillingAddressCompany, ShippingAddressCompany } = initSchema(schema);

export {
  Item,
  ItemMRO,
  UserDetails,
  BillingAddress,
  Company,
  ShippingAddress,
  Country,
  BillingAddressUserDetails,
  ShippingAddressUserDetails,
  BillingAddressCompany,
  ShippingAddressCompany
};