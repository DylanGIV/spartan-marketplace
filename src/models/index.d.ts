import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CustomIdentifier, OptionallyManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerRfq = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rfq, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rfqNumber?: string | null;
  readonly dateSent?: string | null;
  readonly custRefNum?: string | null;
  readonly companyName?: string | null;
  readonly contact?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly shippingTerms?: string | null;
  readonly shippingMethod?: string | null;
  readonly leadTime?: number | null;
  readonly paymentTerms?: string | null;
  readonly dueDate?: string | null;
  readonly quantityRequested?: (number | null)[] | null;
  readonly quantityQuoted?: (number | null)[] | null;
  readonly uom?: string | null;
  readonly urgency?: string | null;
  readonly discount?: number | null;
  readonly lineTotal?: number | null;
  readonly subtotal?: number | null;
  readonly salesTax?: number | null;
  readonly total?: number | null;
  readonly internalComments?: string | null;
  readonly emailComments?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly country?: string | null;
  readonly Items?: (RfqItems | null)[] | null;
  readonly receivingCompanyID: string;
  readonly sendingCompanyID: string;
  readonly ReceivingCompany?: Company | null;
  readonly SendingCompany?: Company | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companySentRfqsId?: string | null;
  readonly companyReceivedRfqsId?: string | null;
}

type LazyRfq = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rfq, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rfqNumber?: string | null;
  readonly dateSent?: string | null;
  readonly custRefNum?: string | null;
  readonly companyName?: string | null;
  readonly contact?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly shippingTerms?: string | null;
  readonly shippingMethod?: string | null;
  readonly leadTime?: number | null;
  readonly paymentTerms?: string | null;
  readonly dueDate?: string | null;
  readonly quantityRequested?: (number | null)[] | null;
  readonly quantityQuoted?: (number | null)[] | null;
  readonly uom?: string | null;
  readonly urgency?: string | null;
  readonly discount?: number | null;
  readonly lineTotal?: number | null;
  readonly subtotal?: number | null;
  readonly salesTax?: number | null;
  readonly total?: number | null;
  readonly internalComments?: string | null;
  readonly emailComments?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly country?: string | null;
  readonly Items: AsyncCollection<RfqItems>;
  readonly receivingCompanyID: string;
  readonly sendingCompanyID: string;
  readonly ReceivingCompany: AsyncItem<Company | undefined>;
  readonly SendingCompany: AsyncItem<Company | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companySentRfqsId?: string | null;
  readonly companyReceivedRfqsId?: string | null;
}

export declare type Rfq = LazyLoading extends LazyLoadingDisabled ? EagerRfq : LazyRfq

export declare const Rfq: (new (init: ModelInit<Rfq>) => Rfq) & {
  copyOf(source: Rfq, mutator: (draft: MutableModel<Rfq>) => MutableModel<Rfq> | void): Rfq;
}

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nsn?: string | null;
  readonly partNumber?: string | null;
  readonly altPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly condition?: string | null;
  readonly control?: string | null;
  readonly price?: number | null;
  readonly demilitarizationCode?: string | null;
  readonly scheduleB?: string | null;
  readonly eccn?: string | null;
  readonly isExportControlled?: boolean | null;
  readonly usml?: boolean | null;
  readonly companyID: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly Rfqs?: (RfqItems | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nsn?: string | null;
  readonly partNumber?: string | null;
  readonly altPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly condition?: string | null;
  readonly control?: string | null;
  readonly price?: number | null;
  readonly demilitarizationCode?: string | null;
  readonly scheduleB?: string | null;
  readonly eccn?: string | null;
  readonly isExportControlled?: boolean | null;
  readonly usml?: boolean | null;
  readonly companyID: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly Rfqs: AsyncCollection<RfqItems>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
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
  readonly Items?: (Item | null)[] | null;
  readonly ItemMROS?: (ItemMRO | null)[] | null;
  readonly BillingAddresses?: (CompanyBillingAddress | null)[] | null;
  readonly CompanyMembers?: (UserDetails | null)[] | null;
  readonly CompanyOwner?: UserDetails | null;
  readonly ShippingAddresses?: (CompanyShippingAddress | null)[] | null;
  readonly countryID?: string | null;
  readonly profilePictureUrl?: string | null;
  readonly fax?: string | null;
  readonly cageCode?: string | null;
  readonly qualityCertifications?: (string | null)[] | null;
  readonly companyDescription?: string | null;
  readonly sentRfqs?: (Rfq | null)[] | null;
  readonly receivedRfqs?: (Rfq | null)[] | null;
  readonly country?: Country | null;
  readonly addressId?: string | null;
  readonly address?: ShippingAddress | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companyCompanyOwnerUserID?: string | null;
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
  readonly Items: AsyncCollection<Item>;
  readonly ItemMROS: AsyncCollection<ItemMRO>;
  readonly BillingAddresses: AsyncCollection<CompanyBillingAddress>;
  readonly CompanyMembers: AsyncCollection<UserDetails>;
  readonly CompanyOwner: AsyncItem<UserDetails | undefined>;
  readonly ShippingAddresses: AsyncCollection<CompanyShippingAddress>;
  readonly countryID?: string | null;
  readonly profilePictureUrl?: string | null;
  readonly fax?: string | null;
  readonly cageCode?: string | null;
  readonly qualityCertifications?: (string | null)[] | null;
  readonly companyDescription?: string | null;
  readonly sentRfqs: AsyncCollection<Rfq>;
  readonly receivedRfqs: AsyncCollection<Rfq>;
  readonly country: AsyncItem<Country | undefined>;
  readonly addressId?: string | null;
  readonly address: AsyncItem<ShippingAddress | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companyCompanyOwnerUserID?: string | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

type EagerItemMRO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemMRO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nsn?: string | null;
  readonly partNumber?: string | null;
  readonly altPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly price?: number | null;
  readonly certification?: string | null;
  readonly companyID: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemMRO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemMRO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nsn?: string | null;
  readonly partNumber?: string | null;
  readonly altPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly price?: number | null;
  readonly certification?: string | null;
  readonly companyID: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemMRO = LazyLoading extends LazyLoadingDisabled ? EagerItemMRO : LazyItemMRO

export declare const ItemMRO: (new (init: ModelInit<ItemMRO>) => ItemMRO) & {
  copyOf(source: ItemMRO, mutator: (draft: MutableModel<ItemMRO>) => MutableModel<ItemMRO> | void): ItemMRO;
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
  readonly isDefault?: boolean | null;
  readonly CompanyBillingAddresses?: (CompanyBillingAddress | null)[] | null;
  readonly countryID: string;
  readonly country?: Country | null;
  readonly UserBillingAddresses?: (UserDetailsBillingAddress | null)[] | null;
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
  readonly isDefault?: boolean | null;
  readonly CompanyBillingAddresses: AsyncCollection<CompanyBillingAddress>;
  readonly countryID: string;
  readonly country: AsyncItem<Country | undefined>;
  readonly UserBillingAddresses: AsyncCollection<UserDetailsBillingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BillingAddress = LazyLoading extends LazyLoadingDisabled ? EagerBillingAddress : LazyBillingAddress

export declare const BillingAddress: (new (init: ModelInit<BillingAddress>) => BillingAddress) & {
  copyOf(source: BillingAddress, mutator: (draft: MutableModel<BillingAddress>) => MutableModel<BillingAddress> | void): BillingAddress;
}

type EagerCountry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Country, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly countryName?: string | null;
  readonly code?: string | null;
  readonly BillingAddresses?: (BillingAddress | null)[] | null;
  readonly ShippingAddresses?: (ShippingAddress | null)[] | null;
  readonly Company?: Company | null;
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
  readonly code?: string | null;
  readonly BillingAddresses: AsyncCollection<BillingAddress>;
  readonly ShippingAddresses: AsyncCollection<ShippingAddress>;
  readonly Company: AsyncItem<Company | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Country = LazyLoading extends LazyLoadingDisabled ? EagerCountry : LazyCountry

export declare const Country: (new (init: ModelInit<Country>) => Country) & {
  copyOf(source: Country, mutator: (draft: MutableModel<Country>) => MutableModel<Country> | void): Country;
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
  readonly regi?: string | null;
  readonly postalCode?: string | null;
  readonly isDefault?: boolean | null;
  readonly countryID: string;
  readonly country?: Country | null;
  readonly UserShippingAddresses?: (UserDetailsShippingAddress | null)[] | null;
  readonly CompanyShippingAddresses?: (CompanyShippingAddress | null)[] | null;
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
  readonly regi?: string | null;
  readonly postalCode?: string | null;
  readonly isDefault?: boolean | null;
  readonly countryID: string;
  readonly country: AsyncItem<Country | undefined>;
  readonly UserShippingAddresses: AsyncCollection<UserDetailsShippingAddress>;
  readonly CompanyShippingAddresses: AsyncCollection<CompanyShippingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShippingAddress = LazyLoading extends LazyLoadingDisabled ? EagerShippingAddress : LazyShippingAddress

export declare const ShippingAddress: (new (init: ModelInit<ShippingAddress>) => ShippingAddress) & {
  copyOf(source: ShippingAddress, mutator: (draft: MutableModel<ShippingAddress>) => MutableModel<ShippingAddress> | void): ShippingAddress;
}

type EagerUserDetails = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<UserDetails, 'userID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userID: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly contactEmail?: string | null;
  readonly contactPhone?: string | null;
  readonly companyID?: string | null;
  readonly BillingAddresses?: (UserDetailsBillingAddress | null)[] | null;
  readonly ShippingAddresses?: (UserDetailsShippingAddress | null)[] | null;
  readonly isCompanyOwner?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDetails = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<UserDetails, 'userID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userID: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly contactEmail?: string | null;
  readonly contactPhone?: string | null;
  readonly companyID?: string | null;
  readonly BillingAddresses: AsyncCollection<UserDetailsBillingAddress>;
  readonly ShippingAddresses: AsyncCollection<UserDetailsShippingAddress>;
  readonly isCompanyOwner?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDetails = LazyLoading extends LazyLoadingDisabled ? EagerUserDetails : LazyUserDetails

export declare const UserDetails: (new (init: ModelInit<UserDetails>) => UserDetails) & {
  copyOf(source: UserDetails, mutator: (draft: MutableModel<UserDetails>) => MutableModel<UserDetails> | void): UserDetails;
}

type EagerCompanyItemsImport = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<CompanyItemsImport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyID: string;
  readonly importName?: string | null;
  readonly importStatus?: string | null;
  readonly importProgress?: number | null;
  readonly importFileKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompanyItemsImport = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<CompanyItemsImport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyID: string;
  readonly importName?: string | null;
  readonly importStatus?: string | null;
  readonly importProgress?: number | null;
  readonly importFileKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CompanyItemsImport = LazyLoading extends LazyLoadingDisabled ? EagerCompanyItemsImport : LazyCompanyItemsImport

export declare const CompanyItemsImport: (new (init: ModelInit<CompanyItemsImport>) => CompanyItemsImport) & {
  copyOf(source: CompanyItemsImport, mutator: (draft: MutableModel<CompanyItemsImport>) => MutableModel<CompanyItemsImport> | void): CompanyItemsImport;
}

type EagerCustomerRfqEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomerRfqEmail, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly dateSent: string;
  readonly htmlBody: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomerRfqEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomerRfqEmail, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly dateSent: string;
  readonly htmlBody: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CustomerRfqEmail = LazyLoading extends LazyLoadingDisabled ? EagerCustomerRfqEmail : LazyCustomerRfqEmail

export declare const CustomerRfqEmail: (new (init: ModelInit<CustomerRfqEmail>) => CustomerRfqEmail) & {
  copyOf(source: CustomerRfqEmail, mutator: (draft: MutableModel<CustomerRfqEmail>) => MutableModel<CustomerRfqEmail> | void): CustomerRfqEmail;
}

type EagerRfqItems = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RfqItems, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rfqId?: string | null;
  readonly itemId?: string | null;
  readonly rfq: Rfq;
  readonly item: Item;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRfqItems = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RfqItems, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rfqId?: string | null;
  readonly itemId?: string | null;
  readonly rfq: AsyncItem<Rfq>;
  readonly item: AsyncItem<Item>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RfqItems = LazyLoading extends LazyLoadingDisabled ? EagerRfqItems : LazyRfqItems

export declare const RfqItems: (new (init: ModelInit<RfqItems>) => RfqItems) & {
  copyOf(source: RfqItems, mutator: (draft: MutableModel<RfqItems>) => MutableModel<RfqItems> | void): RfqItems;
}

type EagerCompanyBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CompanyBillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyId?: string | null;
  readonly billingAddressId?: string | null;
  readonly company: Company;
  readonly billingAddress: BillingAddress;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompanyBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CompanyBillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyId?: string | null;
  readonly billingAddressId?: string | null;
  readonly company: AsyncItem<Company>;
  readonly billingAddress: AsyncItem<BillingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CompanyBillingAddress = LazyLoading extends LazyLoadingDisabled ? EagerCompanyBillingAddress : LazyCompanyBillingAddress

export declare const CompanyBillingAddress: (new (init: ModelInit<CompanyBillingAddress>) => CompanyBillingAddress) & {
  copyOf(source: CompanyBillingAddress, mutator: (draft: MutableModel<CompanyBillingAddress>) => MutableModel<CompanyBillingAddress> | void): CompanyBillingAddress;
}

type EagerCompanyShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CompanyShippingAddress, 'id'>;
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

type LazyCompanyShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CompanyShippingAddress, 'id'>;
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

export declare type CompanyShippingAddress = LazyLoading extends LazyLoadingDisabled ? EagerCompanyShippingAddress : LazyCompanyShippingAddress

export declare const CompanyShippingAddress: (new (init: ModelInit<CompanyShippingAddress>) => CompanyShippingAddress) & {
  copyOf(source: CompanyShippingAddress, mutator: (draft: MutableModel<CompanyShippingAddress>) => MutableModel<CompanyShippingAddress> | void): CompanyShippingAddress;
}

type EagerUserDetailsBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetailsBillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly billingAddressId?: string | null;
  readonly userDetailsUserID?: string | null;
  readonly billingAddress: BillingAddress;
  readonly userDetails: UserDetails;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDetailsBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetailsBillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly billingAddressId?: string | null;
  readonly userDetailsUserID?: string | null;
  readonly billingAddress: AsyncItem<BillingAddress>;
  readonly userDetails: AsyncItem<UserDetails>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDetailsBillingAddress = LazyLoading extends LazyLoadingDisabled ? EagerUserDetailsBillingAddress : LazyUserDetailsBillingAddress

export declare const UserDetailsBillingAddress: (new (init: ModelInit<UserDetailsBillingAddress>) => UserDetailsBillingAddress) & {
  copyOf(source: UserDetailsBillingAddress, mutator: (draft: MutableModel<UserDetailsBillingAddress>) => MutableModel<UserDetailsBillingAddress> | void): UserDetailsBillingAddress;
}

type EagerUserDetailsShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetailsShippingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shippingAddressId?: string | null;
  readonly userDetailsUserID?: string | null;
  readonly shippingAddress: ShippingAddress;
  readonly userDetails: UserDetails;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDetailsShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetailsShippingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shippingAddressId?: string | null;
  readonly userDetailsUserID?: string | null;
  readonly shippingAddress: AsyncItem<ShippingAddress>;
  readonly userDetails: AsyncItem<UserDetails>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDetailsShippingAddress = LazyLoading extends LazyLoadingDisabled ? EagerUserDetailsShippingAddress : LazyUserDetailsShippingAddress

export declare const UserDetailsShippingAddress: (new (init: ModelInit<UserDetailsShippingAddress>) => UserDetailsShippingAddress) & {
  copyOf(source: UserDetailsShippingAddress, mutator: (draft: MutableModel<UserDetailsShippingAddress>) => MutableModel<UserDetailsShippingAddress> | void): UserDetailsShippingAddress;
}