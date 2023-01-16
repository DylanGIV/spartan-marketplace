import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PartID?: string | null;
  readonly NSN?: string | null;
  readonly PartNumber?: string | null;
  readonly AltPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly condition?: string | null;
  readonly imageUrl?: string | null;
  readonly control?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PartID?: string | null;
  readonly NSN?: string | null;
  readonly PartNumber?: string | null;
  readonly AltPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly condition?: string | null;
  readonly imageUrl?: string | null;
  readonly control?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerItemMRO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemMRO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly partID?: string | null;
  readonly nsn?: string | null;
  readonly partNumber?: string | null;
  readonly altPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly condition?: string | null;
  readonly imageUrl?: string | null;
  readonly control?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemMRO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemMRO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly partID?: string | null;
  readonly nsn?: string | null;
  readonly partNumber?: string | null;
  readonly altPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly condition?: string | null;
  readonly imageUrl?: string | null;
  readonly control?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemMRO = LazyLoading extends LazyLoadingDisabled ? EagerItemMRO : LazyItemMRO

export declare const ItemMRO: (new (init: ModelInit<ItemMRO>) => ItemMRO) & {
  copyOf(source: ItemMRO, mutator: (draft: MutableModel<ItemMRO>) => MutableModel<ItemMRO> | void): ItemMRO;
}

type EagerUserDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BillingAddresses?: (BillingAddressUserDetails | null)[] | null;
  readonly ShippingAddresses?: (ShippingAddressUserDetails | null)[] | null;
  readonly companyID: string;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BillingAddresses: AsyncCollection<BillingAddressUserDetails>;
  readonly ShippingAddresses: AsyncCollection<ShippingAddressUserDetails>;
  readonly companyID: string;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDetails = LazyLoading extends LazyLoadingDisabled ? EagerUserDetails : LazyUserDetails

export declare const UserDetails: (new (init: ModelInit<UserDetails>) => UserDetails) & {
  copyOf(source: UserDetails, mutator: (draft: MutableModel<UserDetails>) => MutableModel<UserDetails> | void): UserDetails;
}

type EagerBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly unitNumber?: string | null;
  readonly streetNumber?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly postalCode?: string | null;
  readonly countryID: string;
  readonly companies?: (BillingAddressCompany | null)[] | null;
  readonly users?: (BillingAddressUserDetails | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly unitNumber?: string | null;
  readonly streetNumber?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly postalCode?: string | null;
  readonly countryID: string;
  readonly companies: AsyncCollection<BillingAddressCompany>;
  readonly users: AsyncCollection<BillingAddressUserDetails>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BillingAddress = LazyLoading extends LazyLoadingDisabled ? EagerBillingAddress : LazyBillingAddress

export declare const BillingAddress: (new (init: ModelInit<BillingAddress>) => BillingAddress) & {
  copyOf(source: BillingAddress, mutator: (draft: MutableModel<BillingAddress>) => MutableModel<BillingAddress> | void): BillingAddress;
}

type EagerCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly phone?: string | null;
  readonly contactEmail?: string | null;
  readonly BillingAddresses?: (BillingAddressCompany | null)[] | null;
  readonly ShippingAddresses?: (ShippingAddressCompany | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly phone?: string | null;
  readonly contactEmail?: string | null;
  readonly BillingAddresses: AsyncCollection<BillingAddressCompany>;
  readonly ShippingAddresses: AsyncCollection<ShippingAddressCompany>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

type EagerShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShippingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly unitNumber?: string | null;
  readonly streetNumber?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly postalCode?: string | null;
  readonly countryID: string;
  readonly companies?: (ShippingAddressCompany | null)[] | null;
  readonly users?: (ShippingAddressUserDetails | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShippingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly unitNumber?: string | null;
  readonly streetNumber?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly postalCode?: string | null;
  readonly countryID: string;
  readonly companies: AsyncCollection<ShippingAddressCompany>;
  readonly users: AsyncCollection<ShippingAddressUserDetails>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShippingAddress = LazyLoading extends LazyLoadingDisabled ? EagerShippingAddress : LazyShippingAddress

export declare const ShippingAddress: (new (init: ModelInit<ShippingAddress>) => ShippingAddress) & {
  copyOf(source: ShippingAddress, mutator: (draft: MutableModel<ShippingAddress>) => MutableModel<ShippingAddress> | void): ShippingAddress;
}

type EagerCountry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Country, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly countryName?: string | null;
  readonly ShippingAddresses?: (ShippingAddress | null)[] | null;
  readonly BillingAddresses?: (BillingAddress | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCountry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Country, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly countryName?: string | null;
  readonly ShippingAddresses: AsyncCollection<ShippingAddress>;
  readonly BillingAddresses: AsyncCollection<BillingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Country = LazyLoading extends LazyLoadingDisabled ? EagerCountry : LazyCountry

export declare const Country: (new (init: ModelInit<Country>) => Country) & {
  copyOf(source: Country, mutator: (draft: MutableModel<Country>) => MutableModel<Country> | void): Country;
}

type EagerBillingAddressUserDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BillingAddressUserDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userDetailsId?: string | null;
  readonly billingAddressId?: string | null;
  readonly userDetails: UserDetails;
  readonly billingAddress: BillingAddress;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBillingAddressUserDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BillingAddressUserDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userDetailsId?: string | null;
  readonly billingAddressId?: string | null;
  readonly userDetails: AsyncItem<UserDetails>;
  readonly billingAddress: AsyncItem<BillingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BillingAddressUserDetails = LazyLoading extends LazyLoadingDisabled ? EagerBillingAddressUserDetails : LazyBillingAddressUserDetails

export declare const BillingAddressUserDetails: (new (init: ModelInit<BillingAddressUserDetails>) => BillingAddressUserDetails) & {
  copyOf(source: BillingAddressUserDetails, mutator: (draft: MutableModel<BillingAddressUserDetails>) => MutableModel<BillingAddressUserDetails> | void): BillingAddressUserDetails;
}

type EagerShippingAddressUserDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShippingAddressUserDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userDetailsId?: string | null;
  readonly shippingAddressId?: string | null;
  readonly userDetails: UserDetails;
  readonly shippingAddress: ShippingAddress;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShippingAddressUserDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShippingAddressUserDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userDetailsId?: string | null;
  readonly shippingAddressId?: string | null;
  readonly userDetails: AsyncItem<UserDetails>;
  readonly shippingAddress: AsyncItem<ShippingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShippingAddressUserDetails = LazyLoading extends LazyLoadingDisabled ? EagerShippingAddressUserDetails : LazyShippingAddressUserDetails

export declare const ShippingAddressUserDetails: (new (init: ModelInit<ShippingAddressUserDetails>) => ShippingAddressUserDetails) & {
  copyOf(source: ShippingAddressUserDetails, mutator: (draft: MutableModel<ShippingAddressUserDetails>) => MutableModel<ShippingAddressUserDetails> | void): ShippingAddressUserDetails;
}

type EagerBillingAddressCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BillingAddressCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly billingAddressId?: string | null;
  readonly companyId?: string | null;
  readonly billingAddress: BillingAddress;
  readonly company: Company;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBillingAddressCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BillingAddressCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly billingAddressId?: string | null;
  readonly companyId?: string | null;
  readonly billingAddress: AsyncItem<BillingAddress>;
  readonly company: AsyncItem<Company>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BillingAddressCompany = LazyLoading extends LazyLoadingDisabled ? EagerBillingAddressCompany : LazyBillingAddressCompany

export declare const BillingAddressCompany: (new (init: ModelInit<BillingAddressCompany>) => BillingAddressCompany) & {
  copyOf(source: BillingAddressCompany, mutator: (draft: MutableModel<BillingAddressCompany>) => MutableModel<BillingAddressCompany> | void): BillingAddressCompany;
}

type EagerShippingAddressCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShippingAddressCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyId?: string | null;
  readonly shippingAddressId?: string | null;
  readonly company: Company;
  readonly shippingAddress: ShippingAddress;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShippingAddressCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShippingAddressCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyId?: string | null;
  readonly shippingAddressId?: string | null;
  readonly company: AsyncItem<Company>;
  readonly shippingAddress: AsyncItem<ShippingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShippingAddressCompany = LazyLoading extends LazyLoadingDisabled ? EagerShippingAddressCompany : LazyShippingAddressCompany

export declare const ShippingAddressCompany: (new (init: ModelInit<ShippingAddressCompany>) => ShippingAddressCompany) & {
  copyOf(source: ShippingAddressCompany, mutator: (draft: MutableModel<ShippingAddressCompany>) => MutableModel<ShippingAddressCompany> | void): ShippingAddressCompany;
}