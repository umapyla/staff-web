export interface IClientInfo {
  FullNames: string;
  PreferredName: string;
  DefaultAccountId: string;
  CisNumber: string;
  FirstName: string;
  SecondName: string;
  Surname: string;
  CellNumber: string;
  EmailAddress: string;
  BirthDate: string;
  FicaStatus: string;
  SegmentId: string;
  IdOrTaxIdNo: string;
  SecOfficerCd: string;
  address: IAddress;
  AdditionalPhoneList: string;
}

export interface IAddress {
  AddressCity: string;
  AddressLines: string;
  AddressPostalCode: string;
}

export interface IBankerInfo {
  firstName: string;
  lastName: string;
  workNumber: string;
  cellPhoneNumber: string;
  emailAddress: string;
  isDefaultBanker: boolean;
  bankerPicture: string;
}
