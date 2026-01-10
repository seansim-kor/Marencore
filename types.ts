export interface Director {
  region: string;
  name: string;
  phone: string;
  email?: string;
}

export interface ProductSpec {
  title: string;
  target: string;
  specs: string;
  logistics: string;
  moq: string; // or Benefit for frozen
  cta: string;
}

export enum BusinessType {
  Distributor = 'Distributor',
  Hotel = 'Hotel',
  Restaurant = 'Restaurant',
  Retail = 'Retail'
}

export enum ProductInterest {
  Live = 'Live',
  Frozen = 'Frozen',
  Both = 'Both'
}
