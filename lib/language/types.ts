// To parse this data:
//
//   import { Convert, Types } from "./file";
//
//   const types = Convert.toTypes(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Types {
  generics: Generics;
  genericPhrases: GenericPhrases;
  tooltips: Tooltips;
  components: Components;
  hub: Hub;
  thawNFTs: ThawNFTs;
  revealNFTs: RevealNFTs;
  processingModal: ProcessingModal;
  publishMintPageFee: PublishMintPageFee;
  collectFundsModal: CollectFundsModal;
}

export interface CollectFundsModal {
  title: string;
  transaction: string;
  distributed: string;
  error: string;
}

export interface Components {
  rulesetSelect: RulesetSelect;
  app: App;
  walletConnector: WalletConnector;
  poweredBy: PoweredBy;
  mintDetails: MintDetails;
  mintAbout: MintAbout;
  mintDetailsTemplate: MintDetailsTemplate;
  mintStartedDetails: MintStartedDetails;
  cmOverview: CMOverview;
  cmCreators: CMCreators;
  cmCreationButton: CMCreationButton;
}

export interface App {
  genericErrorTitle: string;
  genericErrorDescription: string;
}

export interface CMCreationButton {
  genericErrorDescription: string;
  notAuthorizedErrorDescription: string;
  userRejectedErrorDescription: string;
}

export interface CMCreators {
  title: string;
  secondaryText: string;
  royaltyFee: string;
  treasuryWalletTag: string;
  yourWalletTag: string;
  charityTag: string;
}

export interface CMOverview {
  immediately: string;
  later: string;
  title: string;
  price: string;
  collectionType: string;
  standardEnforced: string;
  royaltiesEnforced: string;
  collectionSize: string;
  startDate: string;
  notSet: string;
  afterFinalSale: string;
  afterNSold: string;
  endDate: string;
  botProtection: string;
  metadataStatus: string;
  updateAuthority: string;
}

export interface MintAbout {
  untitledCollection: string;
}

export interface MintDetails {
  launchesOn: string;
  launchesIn: string;
  launchesSoon: string;
  ended: string;
  soldOut: string;
}

export interface MintDetailsTemplate {
  twoTransactions: string;
}

export interface MintStartedDetails {
  mintingNftModalTitle: string;
  mintingNftModalDescription: string;
  mintedNftModalTitle: string;
  mintedNftModalDescription: string;
  mintedShareText: string;
  generalErrorModalTitle: string;
  generalErrorModalDescription: string;
  noAccessErrorModalTitle: string;
  noAccessErrorModalDescription: string;
  unsignedTransactionModalTitle: string;
  unsignedTransactionModalDescription: string;
  soldOutTransactionModalTitle: string;
  soldOutTransactionModalDescription: string;
  botProtectionModalTitle: string;
  botProtectionModalDescription: string;
  notEnoughFundsButton: string;
  unauthorizedButton: string;
  connectWalletButton: string;
  mintLimited: string;
  mintLimitedPlural: string;
  mintLimitReached: string;
}

export interface PoweredBy {
  poweredBy: string;
}

export interface RulesetSelect {
  selectRuleset: string;
  loadingRulesets: string;
  createNewTitle: string;
  createNewDescription: string;
}

export interface WalletConnector {
  connect: string;
  disconnect: string;
}

export interface GenericPhrases {
  startDateError: string;
  endDateError: string;
  comingSoon: string;
  returnToDashboard: string;
  transactionFailed: string;
  transactionFailedDescription: string;
  fundAssurance: string;
  descriptionPlaceholder: string;
  requiredFieldError: string;
  reloadPage: string;
  collectionImageAltText: string;
  tryAgainLater: string;
}

export interface Generics {
  help: string;
  continue: string;
  charity: string;
  create: string;
  add: string;
  retry: string;
  all: string;
  update: string;
  updating: string;
  new: string;
  draft: string;
  newest: string;
  name: string;
  properties: string;
  error: string;
  success: string;
  about: string;
  exit: string;
  readOnly: string;
  required: string;
  mutable: string;
  immutable: string;
  description: string;
  delete: string;
  link: string;
  reserved: string;
  unreserved: string;
  published: string;
  notPublished: string;
  on: string;
  off: string;
  mint: string;
  live: string;
  royalties: string;
  creators: string;
  antiBot: string;
  metadata: string;
  supply: string;
  price: string;
  ending: string;
  starting: string;
  date: string;
  time: string;
  share: string;
  default: string;
  generative: string;
  edition: string;
  select: string;
  collection: string;
}

export interface Hub {
  pages: Pages;
}

export interface Pages {
  navigation: Navigation;
  allowList: AllowList;
  launchPageProjectDetails: LaunchPageProjectDetails;
  candyMachineUpdate: CandyMachineUpdate;
  editions: Editions;
  editionCreation: EditionCreation;
  editionDetails: EditionDetails;
  editionCollectionDetails: Edition;
  editionSplits: Edition;
  candyMachine: CandyMachine;
  airdrop: Airdrop;
  airdropSettings: AirdropSettings;
  airdropConfirmation: AirdropConfirmation;
  candyMachineCollectionDetails: CandyMachineCollectionDetails;
  candyMachineUploadAssets: CandyMachineUploadAssets;
  candyMachineRoyalties: CandyMachineRoyalties;
  candyMachineSettings: CandyMachineSettings;
  preMintForm: PreMintForm;
  delayedRevealForm: DelayedRevealForm;
  candyMachineConfirmation: CandyMachineConfirmation;
  pageEditor: PageEditor;
  mintPage: MintPage;
  listMintPages: ListMintPages;
  editionsPage: Page;
  metaPassPage: Page;
  helpPage: Page;
  collectionsPage: Page;
  explorerPage: ExplorerPage;
  pageRemoved: PageRemoved;
}

export interface Airdrop {
  untitledDraft: string;
  walletApproval: string;
  newDraftError: string;
}

export interface AirdropConfirmation {
  overviewTitle: string;
  royaltiesTitle: string;
  costBreakdownTitle: string;
  numberWallets: string;
  nftsPerWallet: string;
  totalNfts: string;
  split: string;
  estimatedTotalCost: string;
}

export interface AirdropSettings {
  exampleCsvDisclaimer: string;
  pageTitle: string;
  pageDescription: string;
  airdropTypeTitle: string;
  airdropTypeDefault: string;
  airdropTypeCustom: string;
  airdropTypeDefaultDescription: string;
  airdropTypeCustomDescription: string;
  airdropTemplateLinkText: string;
  csvUploadTitle: string;
  csvUploadDescription: string;
  nftsPerWalletTitle: string;
  nftsPerWalletDescription: string;
}

export interface AllowList {
  dateOverlapIssue: string;
  listRowTitle: string;
  allowListName: string;
  allowListDescription: string;
  addListButton: string;
  createListButton: string;
  listNamePlaceholder: string;
  walletsListTitle: string;
  walletsListDescription: string;
  mintsCount: string;
  csvUploadTitle: string;
  csvUploadDescription: string;
  wallets: string;
  addList: string;
  saveList: string;
  listAddSuccess: string;
  noAllowListTitle: string;
  mintPrice: string;
  allowlistInfo: string;
  allowlistLimit: string;
}

export interface CandyMachine {
  pageTitle: string;
  createAirdropButton: string;
  createGenerativeButton: string;
  defaultErrorTitle: string;
  defaultErrorDescription: string;
  noCmErrorTitle: string;
  noCmErrorDescription: string;
  noAirdropsErrorTitle: string;
  noAirdropsErrorDescription: string;
  newDraftError: string;
  deleteDraftError: string;
  deleteDraftSuccess: string;
  untitledDraft: string;
  mintingStatus: string;
  mintingSoonStatus: string;
  draftStatus: string;
  endedStatus: string;
  generativeFilter: string;
  airdropsFilter: string;
  viewCollectionAction: string;
  editCollectionAction: string;
  createPageAction: string;
  editPageAction: string;
  removeDraftAction: string;
  revealArtAction: string;
  thawAction: string;
  walletApproval: string;
  collectFunds: string;
  pnftTooltip: string;
  standardNftTooltip: string;
}

export interface CandyMachineCollectionDetails {
  pageTitle: string;
  pageDescription: string;
  nameField: string;
  nameFieldPlaceholder: string;
  nameFieldError: string;
  descriptionField: string;
  descriptionFieldPlaceholder: string;
  imageUploadPrimary: string;
  imageUploadSecondary: string;
}

export interface CandyMachineConfirmation {
  pageTitle: string;
  pageDescription: string;
  walletApproval: string;
}

export interface CandyMachineRoyalties {
  pageTitle: string;
  pageDescription: string;
  royaltiesTabName: string;
  creatorsTabName: string;
  creatorSplitsTitle: string;
  creatorSplitsDescription: string;
  collectionTypeField: string;
  collectionTypeFieldDescription: string;
  collectionTypeFieldStandard: string;
  collectionTypeFieldPnft: string;
  pnftTitle: string;
  pnftDescription: string;
  standardNftTitle: string;
  standardNftDescription: string;
  ruleSetField: string;
  ruleSetFieldDescription: string;
  feeField: string;
  feeFieldDescription: string;
  ownerWalletField: string;
  creatorWalletField: string;
  walletFieldPlaceholder: string;
  charityField: string;
  compatibilityRulesetName: string;
  compatibilityRulesetDescription: string;
  metaplexRulesetName: string;
  metaplexRulesetDescription: string;
}

export interface CandyMachineSettings {
  pageTitle: string;
  pageDescription: string;
  priceField: string;
  priceFieldDescription: string;
  launchTitle: string;
  launchDescription: string;
  startingField: string;
  endingField: string;
  dangerTitle: string;
  dangerDescription: string;
  dangerDescriptionWarning: string;
  preMintField: string;
  preMintDescription: string;
  delayedRevealField: string;
  delayedRevealDescription: string;
  freezeField: string;
  freezeDescription: string;
  freezeWarning: string;
  freezeWarningBoldText: string;
  botTaxField: string;
  botTaxDescription: string;
  antiBotField: string;
  antiBotFieldDescription: string;
  immutableField: string;
  immutableFieldDescription: string;
  relinquishField: string;
  relinquishFieldDescription: string;
  advancedOptions: string;
  moreOptions: string;
  moreOptionsWarning: string;
  moreOptionsWarningBoldText: string;
  treasuryWalletField: string;
  treasuryWalletFieldError: string;
  treasuryWalletFieldPlaceholder: string;
  treasuryWalletFieldDescription: string;
  token: string;
  splWarning: string;
}

export interface CandyMachineUpdate {
  loadingModalTitle: string;
  loadingModalDescription: string;
  updateCollectionSuccessTitle: string;
  updateCollectionSuccessDescription: string;
}

export interface CandyMachineUploadAssets {
  pageTitle: string;
  pageDescription: string;
  stepOneFolderTitle: string;
  stepOneCidTitle: string;
  stepOneFolderDescription: string;
  stepOneCidDescription: string;
  stepOneWarning: string;
  stepTwoTitle: string;
  stepTwoDescription: string;
  stepThreeTitle: string;
  stepThreeDescription: string;
  stepThreeDescriptionCID: string;
  imageUploadPrimary: string;
  imageUploadSecondary: string;
  imageUploadErrorInvalidJson: string;
  imageUploadErrorImagesOnly: string;
  imageUploadErrorNumericalNames: string;
  assetUploadButton: string;
}

export interface Page {
  tempTitle: string;
  tempDescription: string;
}

export interface DelayedRevealForm {
  imageTitle: string;
  imageError: string;
  nameTitle: string;
  nameError: string;
  descriptionTitle: string;
}

export interface Edition {
  pageTitle: string;
  pageDescription: string;
}

export interface EditionCreation {
  editionCreationTitle: string;
  editionCreationDescription: string;
}

export interface EditionDetails {
  imageUploadDescription: string;
  noExistingCollections: string;
  noExistingCollectionsDescription: string;
  pageTitle: string;
  pageDescription: string;
  propertiesGroupTab: string;
  otherInfoLabel: string;
  nftTypeTitle: string;
  secondaryRoyaltiesTitle: string;
  secondaryRoyaltiesDescription: string;
  singleEdition: string;
  limitedEdition: string;
  openEdition: string;
  collectionNft: string;
  linkPlaceHolder: string;
  invalidLinkMessage: string;
  royaltiesTitle: string;
  royaltiesToolTip: string;
  royaltiesDescription: string;
  propertiesError: string;
  propertiesDescription: string;
  addProperty: string;
  supplyTitle: string;
  supplyDescription: string;
  limitedSupplyDescription: string;
  namePlaceholder: string;
}

export interface Editions {
  pageTitle: string;
  noNftsTitle: string;
  ctaButtonText: string;
  errorTitle: string;
  errorDescription: string;
  createPageAction: string;
  editPageAction: string;
  viewInExplorer: string;
}

export interface ExplorerPage {
  shareText: string;
  shareDescription: string;
  createButton: string;
}

export interface LaunchPageProjectDetails {
  invalidUrl: string;
  projectURL: string;
  projectUrlPlaceholder: string;
  projectUrlTooltip: string;
  saveSuccessToastDescription: string;
  saveErrorToastDescription: string;
  urlInUseError: string;
  linksMetaTitle: string;
  linkLabel: string;
  addLinks: string;
  addMeta: string;
  metaLabel: string;
  metaTitle: string;
  metaHelp: string;
  metaTitleTag: string;
  metaDescriptionTag: string;
  metaImageTag: string;
  website: string;
  youtube: string;
  instagram: string;
  twitch: string;
  discord: string;
}

export interface ListMintPages {
  pageTitle: string;
  publishedFilter: string;
  draftsFilter: string;
  unPublishedFilter: string;
  mintingStatus: string;
  notStartedStatus: string;
  endedStatus: string;
  editPageAction: string;
  viewPageAction: string;
  publishPageAction: string;
  unPublishPageAction: string;
  deletePageAction: string;
  sharePageAction: string;
  defaultErrorTitle: string;
  defaultErrorDescription: string;
  noPagesErrorTitle: string;
  noPagesErrorDescription: string;
  successfullyPublishingPage: string;
  errorPublishingPage: string;
  successfullyUnPublishingPage: string;
  errorUnPublishingPage: string;
  successfullyDeletingPage: string;
  errorDeletingPage: string;
  shareModalTitle: string;
  shareModalDescription: string;
  recentMintTitle: string;
  defaultMetaTitle: string;
  defaultMetaDescription: string;
  genericErrorTitle: string;
  genericErrorDescription: string;
  notPublishedErrorTitle: string;
  notPublishedErrorDescription: string;
  notFoundErrorTitle: string;
  notFoundErrorDescription: string;
  enableWaitMode: string;
  disableWaitMode: string;
  mainImage: string;
}

export interface MintPage {
  aboutTitle: string;
  teamMembersTitle: string;
  recentMintTitle: string;
  defaultMetaTitle: string;
  defaultMetaDescription: string;
  genericErrorTitle: string;
  genericErrorDescription: string;
  notPublishedErrorTitle: string;
  notPublishedErrorDescription: string;
  removedErrorTitle: string;
  removedErrorDescription: string;
  notFoundErrorTitle: string;
  notFoundErrorDescription: string;
  fetchingCandyMachineErrorTitle: string;
  fetchingCandyMachineErrorDescription: string;
  details: string;
  properties: string;
  shareModalDescription: string;
  shareModalLinkText: string;
  insufficientFunds: string;
}

export interface Navigation {
  nfts: Drops;
  drops: Drops;
  pages: Drops;
  feedback: Drops;
  help: Drops;
  legal: Drops;
}

export interface Drops {
  title: string;
  subTitle: null | string;
}

export interface PageEditor {
  sideToolbarItemLabels: SideToolbarItemLabels;
  exitButtonLabel: string;
  publishButtonLabel: string;
  unpublishButtonLabel: string;
  createMintPageSuccess: string;
  createMintPageError: string;
  status: Status;
  modals: Modals;
}

export interface Modals {
  publish: InitialSetupModal;
  unpublish: InitialSetupModal;
  publishSuccess: InitialSetupModal;
  unpublishSuccess: InitialSetupModal;
  initialSetupModal: InitialSetupModal;
}

export interface InitialSetupModal {
  title: string;
  description: string;
  primaryButton: string;
  footnote?: string;
  secondaryButton?: string;
}

export interface SideToolbarItemLabels {
  closeButtonLabel: string;
  backButtonLabel: string;
  saveButtonLabel: string;
  pageDetails: string;
  teamMembers: string;
  collection: string;
  pageSettings: string;
  waitMode: string;
  waitModeDisabled: string;
  projectSettings: string;
  comingSoon: ComingSoon;
  mintSettings: MintSettings;
  design: string;
  designSettings: DesignSettings;
  waitModeSettings: WaitModeSettings;
}

export interface ComingSoon {
  teamMembers: string;
  collection: string;
  design: string;
}

export interface DesignSettings {
  accentColor: string;
  logo: string;
  logoHelp: string;
  backgroundImage: string;
  backgroundImageHelp: string;
  backgroundImageDrop: string;
  blurBackground: string;
  collectionColors: string;
}

export interface MintSettings {
  title: string;
  subTitle: string;
  editButtonLabel: string;
  editionsSaleButtonLabels: EditionsSaleButtonLabels;
  editionsSaleButtonTooltips: EditionsSaleButtonTooltips;
  editionsWarning: EditionsWarning;
  editionsToastSuccess: EditionsToastSuccess;
  editionsDateErrors: EditionsDateErrors;
  fields: Fields;
  disclaimer: string;
  mintFee: string;
}

export interface EditionsDateErrors {
  startDateInPast: string;
  endDateBeforeStartDate: string;
}

export interface EditionsSaleButtonLabels {
  startSale: string;
  endSale: string;
  launchUpcoming: string;
}

export interface EditionsSaleButtonTooltips {
  saleNotStarted: string;
  endDateSet: string;
}

export interface EditionsToastSuccess {
  created: string;
  ended: string;
}

export interface EditionsWarning {
  saleCreated: string;
  saleNotCreated: string;
}

export interface Fields {
  price: Price;
  nftsPerWallet: NftsPerWallet;
  startDate: EndDateClass;
  endDate: EndDateClass;
  antiBot: AntiBot;
  metadataStatus: MetadataStatus;
  updateAuthority: UpdateAuthority;
}

export interface AntiBot {
  label: string;
  on: string;
  off: string;
}

export interface EndDateClass {
  label: string;
  editionsDropdownLabel: string;
  afterFinalSale?: string;
  onDate: string;
  editionsLabel: string;
  immediately?: string;
}

export interface MetadataStatus {
  label: string;
  mutable: string;
  immutable: string;
}

export interface NftsPerWallet {
  editionsLabel: string;
}

export interface Price {
  label: string;
}

export interface UpdateAuthority {
  label: string;
  reserved: string;
  unreserved: string;
}

export interface WaitModeSettings {
  disabled: string;
  title: string;
  subtitle: string;
  waitingTitle: string;
  waitingDescription: string;
  waitingLink: string;
  waitingLinkText: string;
  waitingImage: string;
  waitingGoLiveInfo: string;
}

export interface Status {
  published: string;
  unpublished: string;
}

export interface PageRemoved {
  title: string;
  descriptionLineOne: string;
  descriptionLineOneLinkText: string;
  descriptionLineTwo: string;
  disclaimer: string;
}

export interface PreMintForm {
  amountTitle: string;
  amountDescription: string;
  amountPlaceholder: string;
  amountError: string;
  walletTitle: string;
  walletDescription: string;
  walletPlaceholder: string;
  walletError: string;
}

export interface ProcessingModal {
  fetching: string;
  pleaseWait: string;
  return: string;
}

export interface PublishMintPageFee {
  walletApproval: string;
  publishPage: string;
  confirmFeeHelp: string;
  mintPageCost: string;
  publishingPage: string;
  pleaseWait: string;
  error: string;
  errorRetry: string;
}

export interface RevealNFTs {
  revealNfts: string;
  revealNftsHelp: string;
  revealCost: string;
  revealingNfts: string;
  revealingNftsHelp: string;
  revealing: string;
  closeWarning: string;
  success: string;
  error: string;
}

export interface ThawNFTs {
  thaw: string;
  fetchFrozen: string;
  begin: string;
  fetching: string;
  pleaseWait: string;
  thawing: string;
  thawingTitle: string;
  thawingHelp: string;
  start: string;
  error: string;
  unfreezeTitle: string;
  unfreezeWarning: string;
  unfreezeCost: string;
  unfreezeRefund: string;
  unfreezeAction: string;
  thawSuccess: string;
  thawSuccessHelp: string;
  return: string;
  closeWarning: string;
  walletApproval: string;
}

export interface Tooltips {
  royalties: string;
  metadataStatus: string;
  candyMachineVersion: string;
  standardEnforced: string;
  royaltiesEnforced: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toTypes(json: string): Types {
    return cast(JSON.parse(json), r('Types'));
  }

  public static typesToJson(value: Types): string {
    return JSON.stringify(uncast(value, r('Types')), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    );
  }
  throw Error(
    `Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`
  );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue('array', val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  Types: o(
    [
      { json: 'generics', js: 'generics', typ: r('Generics') },
      {
        json: 'genericPhrases',
        js: 'genericPhrases',
        typ: r('GenericPhrases'),
      },
      { json: 'tooltips', js: 'tooltips', typ: r('Tooltips') },
      { json: 'components', js: 'components', typ: r('Components') },
      { json: 'hub', js: 'hub', typ: r('Hub') },
      { json: 'thawNFTs', js: 'thawNFTs', typ: r('ThawNFTs') },
      { json: 'revealNFTs', js: 'revealNFTs', typ: r('RevealNFTs') },
      {
        json: 'processingModal',
        js: 'processingModal',
        typ: r('ProcessingModal'),
      },
      {
        json: 'publishMintPageFee',
        js: 'publishMintPageFee',
        typ: r('PublishMintPageFee'),
      },
      {
        json: 'collectFundsModal',
        js: 'collectFundsModal',
        typ: r('CollectFundsModal'),
      },
    ],
    false
  ),
  CollectFundsModal: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'transaction', js: 'transaction', typ: '' },
      { json: 'distributed', js: 'distributed', typ: '' },
      { json: 'error', js: 'error', typ: '' },
    ],
    false
  ),
  Components: o(
    [
      { json: 'rulesetSelect', js: 'rulesetSelect', typ: r('RulesetSelect') },
      { json: 'app', js: 'app', typ: r('App') },
      {
        json: 'walletConnector',
        js: 'walletConnector',
        typ: r('WalletConnector'),
      },
      { json: 'poweredBy', js: 'poweredBy', typ: r('PoweredBy') },
      { json: 'mintDetails', js: 'mintDetails', typ: r('MintDetails') },
      { json: 'mintAbout', js: 'mintAbout', typ: r('MintAbout') },
      {
        json: 'mintDetailsTemplate',
        js: 'mintDetailsTemplate',
        typ: r('MintDetailsTemplate'),
      },
      {
        json: 'mintStartedDetails',
        js: 'mintStartedDetails',
        typ: r('MintStartedDetails'),
      },
      { json: 'cmOverview', js: 'cmOverview', typ: r('CMOverview') },
      { json: 'cmCreators', js: 'cmCreators', typ: r('CMCreators') },
      {
        json: 'cmCreationButton',
        js: 'cmCreationButton',
        typ: r('CMCreationButton'),
      },
    ],
    false
  ),
  App: o(
    [
      { json: 'genericErrorTitle', js: 'genericErrorTitle', typ: '' },
      {
        json: 'genericErrorDescription',
        js: 'genericErrorDescription',
        typ: '',
      },
    ],
    false
  ),
  CMCreationButton: o(
    [
      {
        json: 'genericErrorDescription',
        js: 'genericErrorDescription',
        typ: '',
      },
      {
        json: 'notAuthorizedErrorDescription',
        js: 'notAuthorizedErrorDescription',
        typ: '',
      },
      {
        json: 'userRejectedErrorDescription',
        js: 'userRejectedErrorDescription',
        typ: '',
      },
    ],
    false
  ),
  CMCreators: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'secondaryText', js: 'secondaryText', typ: '' },
      { json: 'royaltyFee', js: 'royaltyFee', typ: '' },
      { json: 'treasuryWalletTag', js: 'treasuryWalletTag', typ: '' },
      { json: 'yourWalletTag', js: 'yourWalletTag', typ: '' },
      { json: 'charityTag', js: 'charityTag', typ: '' },
    ],
    false
  ),
  CMOverview: o(
    [
      { json: 'immediately', js: 'immediately', typ: '' },
      { json: 'later', js: 'later', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'price', js: 'price', typ: '' },
      { json: 'collectionType', js: 'collectionType', typ: '' },
      { json: 'standardEnforced', js: 'standardEnforced', typ: '' },
      { json: 'royaltiesEnforced', js: 'royaltiesEnforced', typ: '' },
      { json: 'collectionSize', js: 'collectionSize', typ: '' },
      { json: 'startDate', js: 'startDate', typ: '' },
      { json: 'notSet', js: 'notSet', typ: '' },
      { json: 'afterFinalSale', js: 'afterFinalSale', typ: '' },
      { json: 'afterNSold', js: 'afterNSold', typ: '' },
      { json: 'endDate', js: 'endDate', typ: '' },
      { json: 'botProtection', js: 'botProtection', typ: '' },
      { json: 'metadataStatus', js: 'metadataStatus', typ: '' },
      { json: 'updateAuthority', js: 'updateAuthority', typ: '' },
    ],
    false
  ),
  MintAbout: o(
    [{ json: 'untitledCollection', js: 'untitledCollection', typ: '' }],
    false
  ),
  MintDetails: o(
    [
      { json: 'launchesOn', js: 'launchesOn', typ: '' },
      { json: 'launchesIn', js: 'launchesIn', typ: '' },
      { json: 'launchesSoon', js: 'launchesSoon', typ: '' },
      { json: 'ended', js: 'ended', typ: '' },
      { json: 'soldOut', js: 'soldOut', typ: '' },
    ],
    false
  ),
  MintDetailsTemplate: o(
    [{ json: 'twoTransactions', js: 'twoTransactions', typ: '' }],
    false
  ),
  MintStartedDetails: o(
    [
      { json: 'mintingNftModalTitle', js: 'mintingNftModalTitle', typ: '' },
      {
        json: 'mintingNftModalDescription',
        js: 'mintingNftModalDescription',
        typ: '',
      },
      { json: 'mintedNftModalTitle', js: 'mintedNftModalTitle', typ: '' },
      {
        json: 'mintedNftModalDescription',
        js: 'mintedNftModalDescription',
        typ: '',
      },
      { json: 'mintedShareText', js: 'mintedShareText', typ: '' },
      { json: 'generalErrorModalTitle', js: 'generalErrorModalTitle', typ: '' },
      {
        json: 'generalErrorModalDescription',
        js: 'generalErrorModalDescription',
        typ: '',
      },
      {
        json: 'noAccessErrorModalTitle',
        js: 'noAccessErrorModalTitle',
        typ: '',
      },
      {
        json: 'noAccessErrorModalDescription',
        js: 'noAccessErrorModalDescription',
        typ: '',
      },
      {
        json: 'unsignedTransactionModalTitle',
        js: 'unsignedTransactionModalTitle',
        typ: '',
      },
      {
        json: 'unsignedTransactionModalDescription',
        js: 'unsignedTransactionModalDescription',
        typ: '',
      },
      {
        json: 'soldOutTransactionModalTitle',
        js: 'soldOutTransactionModalTitle',
        typ: '',
      },
      {
        json: 'soldOutTransactionModalDescription',
        js: 'soldOutTransactionModalDescription',
        typ: '',
      },
      {
        json: 'botProtectionModalTitle',
        js: 'botProtectionModalTitle',
        typ: '',
      },
      {
        json: 'botProtectionModalDescription',
        js: 'botProtectionModalDescription',
        typ: '',
      },
      { json: 'notEnoughFundsButton', js: 'notEnoughFundsButton', typ: '' },
      { json: 'unauthorizedButton', js: 'unauthorizedButton', typ: '' },
      { json: 'connectWalletButton', js: 'connectWalletButton', typ: '' },
      { json: 'mintLimited', js: 'mintLimited', typ: '' },
      { json: 'mintLimitedPlural', js: 'mintLimitedPlural', typ: '' },
      { json: 'mintLimitReached', js: 'mintLimitReached', typ: '' },
    ],
    false
  ),
  PoweredBy: o([{ json: 'poweredBy', js: 'poweredBy', typ: '' }], false),
  RulesetSelect: o(
    [
      { json: 'selectRuleset', js: 'selectRuleset', typ: '' },
      { json: 'loadingRulesets', js: 'loadingRulesets', typ: '' },
      { json: 'createNewTitle', js: 'createNewTitle', typ: '' },
      { json: 'createNewDescription', js: 'createNewDescription', typ: '' },
    ],
    false
  ),
  WalletConnector: o(
    [
      { json: 'connect', js: 'connect', typ: '' },
      { json: 'disconnect', js: 'disconnect', typ: '' },
    ],
    false
  ),
  GenericPhrases: o(
    [
      { json: 'startDateError', js: 'startDateError', typ: '' },
      { json: 'endDateError', js: 'endDateError', typ: '' },
      { json: 'comingSoon', js: 'comingSoon', typ: '' },
      { json: 'returnToDashboard', js: 'returnToDashboard', typ: '' },
      { json: 'transactionFailed', js: 'transactionFailed', typ: '' },
      {
        json: 'transactionFailedDescription',
        js: 'transactionFailedDescription',
        typ: '',
      },
      { json: 'fundAssurance', js: 'fundAssurance', typ: '' },
      { json: 'descriptionPlaceholder', js: 'descriptionPlaceholder', typ: '' },
      { json: 'requiredFieldError', js: 'requiredFieldError', typ: '' },
      { json: 'reloadPage', js: 'reloadPage', typ: '' },
      { json: 'collectionImageAltText', js: 'collectionImageAltText', typ: '' },
      { json: 'tryAgainLater', js: 'tryAgainLater', typ: '' },
    ],
    false
  ),
  Generics: o(
    [
      { json: 'help', js: 'help', typ: '' },
      { json: 'continue', js: 'continue', typ: '' },
      { json: 'charity', js: 'charity', typ: '' },
      { json: 'create', js: 'create', typ: '' },
      { json: 'add', js: 'add', typ: '' },
      { json: 'retry', js: 'retry', typ: '' },
      { json: 'all', js: 'all', typ: '' },
      { json: 'update', js: 'update', typ: '' },
      { json: 'updating', js: 'updating', typ: '' },
      { json: 'new', js: 'new', typ: '' },
      { json: 'draft', js: 'draft', typ: '' },
      { json: 'newest', js: 'newest', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'properties', js: 'properties', typ: '' },
      { json: 'error', js: 'error', typ: '' },
      { json: 'success', js: 'success', typ: '' },
      { json: 'about', js: 'about', typ: '' },
      { json: 'exit', js: 'exit', typ: '' },
      { json: 'readOnly', js: 'readOnly', typ: '' },
      { json: 'required', js: 'required', typ: '' },
      { json: 'mutable', js: 'mutable', typ: '' },
      { json: 'immutable', js: 'immutable', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'delete', js: 'delete', typ: '' },
      { json: 'link', js: 'link', typ: '' },
      { json: 'reserved', js: 'reserved', typ: '' },
      { json: 'unreserved', js: 'unreserved', typ: '' },
      { json: 'published', js: 'published', typ: '' },
      { json: 'notPublished', js: 'notPublished', typ: '' },
      { json: 'on', js: 'on', typ: '' },
      { json: 'off', js: 'off', typ: '' },
      { json: 'mint', js: 'mint', typ: '' },
      { json: 'live', js: 'live', typ: '' },
      { json: 'royalties', js: 'royalties', typ: '' },
      { json: 'creators', js: 'creators', typ: '' },
      { json: 'antiBot', js: 'antiBot', typ: '' },
      { json: 'metadata', js: 'metadata', typ: '' },
      { json: 'supply', js: 'supply', typ: '' },
      { json: 'price', js: 'price', typ: '' },
      { json: 'ending', js: 'ending', typ: '' },
      { json: 'starting', js: 'starting', typ: '' },
      { json: 'date', js: 'date', typ: '' },
      { json: 'time', js: 'time', typ: '' },
      { json: 'share', js: 'share', typ: '' },
      { json: 'default', js: 'default', typ: '' },
      { json: 'generative', js: 'generative', typ: '' },
      { json: 'edition', js: 'edition', typ: '' },
      { json: 'select', js: 'select', typ: '' },
      { json: 'collection', js: 'collection', typ: '' },
    ],
    false
  ),
  Hub: o([{ json: 'pages', js: 'pages', typ: r('Pages') }], false),
  Pages: o(
    [
      { json: 'navigation', js: 'navigation', typ: r('Navigation') },
      { json: 'allowList', js: 'allowList', typ: r('AllowList') },
      {
        json: 'launchPageProjectDetails',
        js: 'launchPageProjectDetails',
        typ: r('LaunchPageProjectDetails'),
      },
      {
        json: 'candyMachineUpdate',
        js: 'candyMachineUpdate',
        typ: r('CandyMachineUpdate'),
      },
      { json: 'editions', js: 'editions', typ: r('Editions') },
      {
        json: 'editionCreation',
        js: 'editionCreation',
        typ: r('EditionCreation'),
      },
      {
        json: 'editionDetails',
        js: 'editionDetails',
        typ: r('EditionDetails'),
      },
      {
        json: 'editionCollectionDetails',
        js: 'editionCollectionDetails',
        typ: r('Edition'),
      },
      { json: 'editionSplits', js: 'editionSplits', typ: r('Edition') },
      { json: 'candyMachine', js: 'candyMachine', typ: r('CandyMachine') },
      { json: 'airdrop', js: 'airdrop', typ: r('Airdrop') },
      {
        json: 'airdropSettings',
        js: 'airdropSettings',
        typ: r('AirdropSettings'),
      },
      {
        json: 'airdropConfirmation',
        js: 'airdropConfirmation',
        typ: r('AirdropConfirmation'),
      },
      {
        json: 'candyMachineCollectionDetails',
        js: 'candyMachineCollectionDetails',
        typ: r('CandyMachineCollectionDetails'),
      },
      {
        json: 'candyMachineUploadAssets',
        js: 'candyMachineUploadAssets',
        typ: r('CandyMachineUploadAssets'),
      },
      {
        json: 'candyMachineRoyalties',
        js: 'candyMachineRoyalties',
        typ: r('CandyMachineRoyalties'),
      },
      {
        json: 'candyMachineSettings',
        js: 'candyMachineSettings',
        typ: r('CandyMachineSettings'),
      },
      { json: 'preMintForm', js: 'preMintForm', typ: r('PreMintForm') },
      {
        json: 'delayedRevealForm',
        js: 'delayedRevealForm',
        typ: r('DelayedRevealForm'),
      },
      {
        json: 'candyMachineConfirmation',
        js: 'candyMachineConfirmation',
        typ: r('CandyMachineConfirmation'),
      },
      { json: 'pageEditor', js: 'pageEditor', typ: r('PageEditor') },
      { json: 'mintPage', js: 'mintPage', typ: r('MintPage') },
      { json: 'listMintPages', js: 'listMintPages', typ: r('ListMintPages') },
      { json: 'editionsPage', js: 'editionsPage', typ: r('Page') },
      { json: 'metaPassPage', js: 'metaPassPage', typ: r('Page') },
      { json: 'helpPage', js: 'helpPage', typ: r('Page') },
      { json: 'collectionsPage', js: 'collectionsPage', typ: r('Page') },
      { json: 'explorerPage', js: 'explorerPage', typ: r('ExplorerPage') },
      { json: 'pageRemoved', js: 'pageRemoved', typ: r('PageRemoved') },
    ],
    false
  ),
  Airdrop: o(
    [
      { json: 'untitledDraft', js: 'untitledDraft', typ: '' },
      { json: 'walletApproval', js: 'walletApproval', typ: '' },
      { json: 'newDraftError', js: 'newDraftError', typ: '' },
    ],
    false
  ),
  AirdropConfirmation: o(
    [
      { json: 'overviewTitle', js: 'overviewTitle', typ: '' },
      { json: 'royaltiesTitle', js: 'royaltiesTitle', typ: '' },
      { json: 'costBreakdownTitle', js: 'costBreakdownTitle', typ: '' },
      { json: 'numberWallets', js: 'numberWallets', typ: '' },
      { json: 'nftsPerWallet', js: 'nftsPerWallet', typ: '' },
      { json: 'totalNfts', js: 'totalNfts', typ: '' },
      { json: 'split', js: 'split', typ: '' },
      { json: 'estimatedTotalCost', js: 'estimatedTotalCost', typ: '' },
    ],
    false
  ),
  AirdropSettings: o(
    [
      { json: 'exampleCsvDisclaimer', js: 'exampleCsvDisclaimer', typ: '' },
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'pageDescription', js: 'pageDescription', typ: '' },
      { json: 'airdropTypeTitle', js: 'airdropTypeTitle', typ: '' },
      { json: 'airdropTypeDefault', js: 'airdropTypeDefault', typ: '' },
      { json: 'airdropTypeCustom', js: 'airdropTypeCustom', typ: '' },
      {
        json: 'airdropTypeDefaultDescription',
        js: 'airdropTypeDefaultDescription',
        typ: '',
      },
      {
        json: 'airdropTypeCustomDescription',
        js: 'airdropTypeCustomDescription',
        typ: '',
      },
      {
        json: 'airdropTemplateLinkText',
        js: 'airdropTemplateLinkText',
        typ: '',
      },
      { json: 'csvUploadTitle', js: 'csvUploadTitle', typ: '' },
      { json: 'csvUploadDescription', js: 'csvUploadDescription', typ: '' },
      { json: 'nftsPerWalletTitle', js: 'nftsPerWalletTitle', typ: '' },
      {
        json: 'nftsPerWalletDescription',
        js: 'nftsPerWalletDescription',
        typ: '',
      },
    ],
    false
  ),
  AllowList: o(
    [
      { json: 'dateOverlapIssue', js: 'dateOverlapIssue', typ: '' },
      { json: 'listRowTitle', js: 'listRowTitle', typ: '' },
      { json: 'allowListName', js: 'allowListName', typ: '' },
      { json: 'allowListDescription', js: 'allowListDescription', typ: '' },
      { json: 'addListButton', js: 'addListButton', typ: '' },
      { json: 'createListButton', js: 'createListButton', typ: '' },
      { json: 'listNamePlaceholder', js: 'listNamePlaceholder', typ: '' },
      { json: 'walletsListTitle', js: 'walletsListTitle', typ: '' },
      { json: 'walletsListDescription', js: 'walletsListDescription', typ: '' },
      { json: 'mintsCount', js: 'mintsCount', typ: '' },
      { json: 'csvUploadTitle', js: 'csvUploadTitle', typ: '' },
      { json: 'csvUploadDescription', js: 'csvUploadDescription', typ: '' },
      { json: 'wallets', js: 'wallets', typ: '' },
      { json: 'addList', js: 'addList', typ: '' },
      { json: 'saveList', js: 'saveList', typ: '' },
      { json: 'listAddSuccess', js: 'listAddSuccess', typ: '' },
      { json: 'noAllowListTitle', js: 'noAllowListTitle', typ: '' },
      { json: 'mintPrice', js: 'mintPrice', typ: '' },
      { json: 'allowlistInfo', js: 'allowlistInfo', typ: '' },
      { json: 'allowlistLimit', js: 'allowlistLimit', typ: '' },
    ],
    false
  ),
  CandyMachine: o(
    [
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'createAirdropButton', js: 'createAirdropButton', typ: '' },
      { json: 'createGenerativeButton', js: 'createGenerativeButton', typ: '' },
      { json: 'defaultErrorTitle', js: 'defaultErrorTitle', typ: '' },
      {
        json: 'defaultErrorDescription',
        js: 'defaultErrorDescription',
        typ: '',
      },
      { json: 'noCmErrorTitle', js: 'noCmErrorTitle', typ: '' },
      { json: 'noCmErrorDescription', js: 'noCmErrorDescription', typ: '' },
      { json: 'noAirdropsErrorTitle', js: 'noAirdropsErrorTitle', typ: '' },
      {
        json: 'noAirdropsErrorDescription',
        js: 'noAirdropsErrorDescription',
        typ: '',
      },
      { json: 'newDraftError', js: 'newDraftError', typ: '' },
      { json: 'deleteDraftError', js: 'deleteDraftError', typ: '' },
      { json: 'deleteDraftSuccess', js: 'deleteDraftSuccess', typ: '' },
      { json: 'untitledDraft', js: 'untitledDraft', typ: '' },
      { json: 'mintingStatus', js: 'mintingStatus', typ: '' },
      { json: 'mintingSoonStatus', js: 'mintingSoonStatus', typ: '' },
      { json: 'draftStatus', js: 'draftStatus', typ: '' },
      { json: 'endedStatus', js: 'endedStatus', typ: '' },
      { json: 'generativeFilter', js: 'generativeFilter', typ: '' },
      { json: 'airdropsFilter', js: 'airdropsFilter', typ: '' },
      { json: 'viewCollectionAction', js: 'viewCollectionAction', typ: '' },
      { json: 'editCollectionAction', js: 'editCollectionAction', typ: '' },
      { json: 'createPageAction', js: 'createPageAction', typ: '' },
      { json: 'editPageAction', js: 'editPageAction', typ: '' },
      { json: 'removeDraftAction', js: 'removeDraftAction', typ: '' },
      { json: 'revealArtAction', js: 'revealArtAction', typ: '' },
      { json: 'thawAction', js: 'thawAction', typ: '' },
      { json: 'walletApproval', js: 'walletApproval', typ: '' },
      { json: 'collectFunds', js: 'collectFunds', typ: '' },
      { json: 'pnftTooltip', js: 'pnftTooltip', typ: '' },
      { json: 'standardNftTooltip', js: 'standardNftTooltip', typ: '' },
    ],
    false
  ),
  CandyMachineCollectionDetails: o(
    [
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'pageDescription', js: 'pageDescription', typ: '' },
      { json: 'nameField', js: 'nameField', typ: '' },
      { json: 'nameFieldPlaceholder', js: 'nameFieldPlaceholder', typ: '' },
      { json: 'nameFieldError', js: 'nameFieldError', typ: '' },
      { json: 'descriptionField', js: 'descriptionField', typ: '' },
      {
        json: 'descriptionFieldPlaceholder',
        js: 'descriptionFieldPlaceholder',
        typ: '',
      },
      { json: 'imageUploadPrimary', js: 'imageUploadPrimary', typ: '' },
      { json: 'imageUploadSecondary', js: 'imageUploadSecondary', typ: '' },
    ],
    false
  ),
  CandyMachineConfirmation: o(
    [
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'pageDescription', js: 'pageDescription', typ: '' },
      { json: 'walletApproval', js: 'walletApproval', typ: '' },
    ],
    false
  ),
  CandyMachineRoyalties: o(
    [
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'pageDescription', js: 'pageDescription', typ: '' },
      { json: 'royaltiesTabName', js: 'royaltiesTabName', typ: '' },
      { json: 'creatorsTabName', js: 'creatorsTabName', typ: '' },
      { json: 'creatorSplitsTitle', js: 'creatorSplitsTitle', typ: '' },
      {
        json: 'creatorSplitsDescription',
        js: 'creatorSplitsDescription',
        typ: '',
      },
      { json: 'collectionTypeField', js: 'collectionTypeField', typ: '' },
      {
        json: 'collectionTypeFieldDescription',
        js: 'collectionTypeFieldDescription',
        typ: '',
      },
      {
        json: 'collectionTypeFieldStandard',
        js: 'collectionTypeFieldStandard',
        typ: '',
      },
      {
        json: 'collectionTypeFieldPnft',
        js: 'collectionTypeFieldPnft',
        typ: '',
      },
      { json: 'pnftTitle', js: 'pnftTitle', typ: '' },
      { json: 'pnftDescription', js: 'pnftDescription', typ: '' },
      { json: 'standardNftTitle', js: 'standardNftTitle', typ: '' },
      { json: 'standardNftDescription', js: 'standardNftDescription', typ: '' },
      { json: 'ruleSetField', js: 'ruleSetField', typ: '' },
      {
        json: 'ruleSetFieldDescription',
        js: 'ruleSetFieldDescription',
        typ: '',
      },
      { json: 'feeField', js: 'feeField', typ: '' },
      { json: 'feeFieldDescription', js: 'feeFieldDescription', typ: '' },
      { json: 'ownerWalletField', js: 'ownerWalletField', typ: '' },
      { json: 'creatorWalletField', js: 'creatorWalletField', typ: '' },
      { json: 'walletFieldPlaceholder', js: 'walletFieldPlaceholder', typ: '' },
      { json: 'charityField', js: 'charityField', typ: '' },
      {
        json: 'compatibilityRulesetName',
        js: 'compatibilityRulesetName',
        typ: '',
      },
      {
        json: 'compatibilityRulesetDescription',
        js: 'compatibilityRulesetDescription',
        typ: '',
      },
      { json: 'metaplexRulesetName', js: 'metaplexRulesetName', typ: '' },
      {
        json: 'metaplexRulesetDescription',
        js: 'metaplexRulesetDescription',
        typ: '',
      },
    ],
    false
  ),
  CandyMachineSettings: o(
    [
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'pageDescription', js: 'pageDescription', typ: '' },
      { json: 'priceField', js: 'priceField', typ: '' },
      { json: 'priceFieldDescription', js: 'priceFieldDescription', typ: '' },
      { json: 'launchTitle', js: 'launchTitle', typ: '' },
      { json: 'launchDescription', js: 'launchDescription', typ: '' },
      { json: 'startingField', js: 'startingField', typ: '' },
      { json: 'endingField', js: 'endingField', typ: '' },
      { json: 'dangerTitle', js: 'dangerTitle', typ: '' },
      { json: 'dangerDescription', js: 'dangerDescription', typ: '' },
      {
        json: 'dangerDescriptionWarning',
        js: 'dangerDescriptionWarning',
        typ: '',
      },
      { json: 'preMintField', js: 'preMintField', typ: '' },
      { json: 'preMintDescription', js: 'preMintDescription', typ: '' },
      { json: 'delayedRevealField', js: 'delayedRevealField', typ: '' },
      {
        json: 'delayedRevealDescription',
        js: 'delayedRevealDescription',
        typ: '',
      },
      { json: 'freezeField', js: 'freezeField', typ: '' },
      { json: 'freezeDescription', js: 'freezeDescription', typ: '' },
      { json: 'freezeWarning', js: 'freezeWarning', typ: '' },
      { json: 'freezeWarningBoldText', js: 'freezeWarningBoldText', typ: '' },
      { json: 'botTaxField', js: 'botTaxField', typ: '' },
      { json: 'botTaxDescription', js: 'botTaxDescription', typ: '' },
      { json: 'antiBotField', js: 'antiBotField', typ: '' },
      {
        json: 'antiBotFieldDescription',
        js: 'antiBotFieldDescription',
        typ: '',
      },
      { json: 'immutableField', js: 'immutableField', typ: '' },
      {
        json: 'immutableFieldDescription',
        js: 'immutableFieldDescription',
        typ: '',
      },
      { json: 'relinquishField', js: 'relinquishField', typ: '' },
      {
        json: 'relinquishFieldDescription',
        js: 'relinquishFieldDescription',
        typ: '',
      },
      { json: 'advancedOptions', js: 'advancedOptions', typ: '' },
      { json: 'moreOptions', js: 'moreOptions', typ: '' },
      { json: 'moreOptionsWarning', js: 'moreOptionsWarning', typ: '' },
      {
        json: 'moreOptionsWarningBoldText',
        js: 'moreOptionsWarningBoldText',
        typ: '',
      },
      { json: 'treasuryWalletField', js: 'treasuryWalletField', typ: '' },
      {
        json: 'treasuryWalletFieldError',
        js: 'treasuryWalletFieldError',
        typ: '',
      },
      {
        json: 'treasuryWalletFieldPlaceholder',
        js: 'treasuryWalletFieldPlaceholder',
        typ: '',
      },
      {
        json: 'treasuryWalletFieldDescription',
        js: 'treasuryWalletFieldDescription',
        typ: '',
      },
      { json: 'token', js: 'token', typ: '' },
      { json: 'splWarning', js: 'splWarning', typ: '' },
    ],
    false
  ),
  CandyMachineUpdate: o(
    [
      { json: 'loadingModalTitle', js: 'loadingModalTitle', typ: '' },
      {
        json: 'loadingModalDescription',
        js: 'loadingModalDescription',
        typ: '',
      },
      {
        json: 'updateCollectionSuccessTitle',
        js: 'updateCollectionSuccessTitle',
        typ: '',
      },
      {
        json: 'updateCollectionSuccessDescription',
        js: 'updateCollectionSuccessDescription',
        typ: '',
      },
    ],
    false
  ),
  CandyMachineUploadAssets: o(
    [
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'pageDescription', js: 'pageDescription', typ: '' },
      { json: 'stepOneFolderTitle', js: 'stepOneFolderTitle', typ: '' },
      { json: 'stepOneCidTitle', js: 'stepOneCidTitle', typ: '' },
      {
        json: 'stepOneFolderDescription',
        js: 'stepOneFolderDescription',
        typ: '',
      },
      { json: 'stepOneCidDescription', js: 'stepOneCidDescription', typ: '' },
      { json: 'stepOneWarning', js: 'stepOneWarning', typ: '' },
      { json: 'stepTwoTitle', js: 'stepTwoTitle', typ: '' },
      { json: 'stepTwoDescription', js: 'stepTwoDescription', typ: '' },
      { json: 'stepThreeTitle', js: 'stepThreeTitle', typ: '' },
      { json: 'stepThreeDescription', js: 'stepThreeDescription', typ: '' },
      {
        json: 'stepThreeDescriptionCID',
        js: 'stepThreeDescriptionCID',
        typ: '',
      },
      { json: 'imageUploadPrimary', js: 'imageUploadPrimary', typ: '' },
      { json: 'imageUploadSecondary', js: 'imageUploadSecondary', typ: '' },
      {
        json: 'imageUploadErrorInvalidJson',
        js: 'imageUploadErrorInvalidJson',
        typ: '',
      },
      {
        json: 'imageUploadErrorImagesOnly',
        js: 'imageUploadErrorImagesOnly',
        typ: '',
      },
      {
        json: 'imageUploadErrorNumericalNames',
        js: 'imageUploadErrorNumericalNames',
        typ: '',
      },
      { json: 'assetUploadButton', js: 'assetUploadButton', typ: '' },
    ],
    false
  ),
  Page: o(
    [
      { json: 'tempTitle', js: 'tempTitle', typ: '' },
      { json: 'tempDescription', js: 'tempDescription', typ: '' },
    ],
    false
  ),
  DelayedRevealForm: o(
    [
      { json: 'imageTitle', js: 'imageTitle', typ: '' },
      { json: 'imageError', js: 'imageError', typ: '' },
      { json: 'nameTitle', js: 'nameTitle', typ: '' },
      { json: 'nameError', js: 'nameError', typ: '' },
      { json: 'descriptionTitle', js: 'descriptionTitle', typ: '' },
    ],
    false
  ),
  Edition: o(
    [
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'pageDescription', js: 'pageDescription', typ: '' },
    ],
    false
  ),
  EditionCreation: o(
    [
      { json: 'editionCreationTitle', js: 'editionCreationTitle', typ: '' },
      {
        json: 'editionCreationDescription',
        js: 'editionCreationDescription',
        typ: '',
      },
    ],
    false
  ),
  EditionDetails: o(
    [
      { json: 'imageUploadDescription', js: 'imageUploadDescription', typ: '' },
      { json: 'noExistingCollections', js: 'noExistingCollections', typ: '' },
      {
        json: 'noExistingCollectionsDescription',
        js: 'noExistingCollectionsDescription',
        typ: '',
      },
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'pageDescription', js: 'pageDescription', typ: '' },
      { json: 'propertiesGroupTab', js: 'propertiesGroupTab', typ: '' },
      { json: 'otherInfoLabel', js: 'otherInfoLabel', typ: '' },
      { json: 'nftTypeTitle', js: 'nftTypeTitle', typ: '' },
      {
        json: 'secondaryRoyaltiesTitle',
        js: 'secondaryRoyaltiesTitle',
        typ: '',
      },
      {
        json: 'secondaryRoyaltiesDescription',
        js: 'secondaryRoyaltiesDescription',
        typ: '',
      },
      { json: 'singleEdition', js: 'singleEdition', typ: '' },
      { json: 'limitedEdition', js: 'limitedEdition', typ: '' },
      { json: 'openEdition', js: 'openEdition', typ: '' },
      { json: 'collectionNft', js: 'collectionNft', typ: '' },
      { json: 'linkPlaceHolder', js: 'linkPlaceHolder', typ: '' },
      { json: 'invalidLinkMessage', js: 'invalidLinkMessage', typ: '' },
      { json: 'royaltiesTitle', js: 'royaltiesTitle', typ: '' },
      { json: 'royaltiesToolTip', js: 'royaltiesToolTip', typ: '' },
      { json: 'royaltiesDescription', js: 'royaltiesDescription', typ: '' },
      { json: 'propertiesError', js: 'propertiesError', typ: '' },
      { json: 'propertiesDescription', js: 'propertiesDescription', typ: '' },
      { json: 'addProperty', js: 'addProperty', typ: '' },
      { json: 'supplyTitle', js: 'supplyTitle', typ: '' },
      { json: 'supplyDescription', js: 'supplyDescription', typ: '' },
      {
        json: 'limitedSupplyDescription',
        js: 'limitedSupplyDescription',
        typ: '',
      },
      { json: 'namePlaceholder', js: 'namePlaceholder', typ: '' },
    ],
    false
  ),
  Editions: o(
    [
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'noNftsTitle', js: 'noNftsTitle', typ: '' },
      { json: 'ctaButtonText', js: 'ctaButtonText', typ: '' },
      { json: 'errorTitle', js: 'errorTitle', typ: '' },
      { json: 'errorDescription', js: 'errorDescription', typ: '' },
      { json: 'createPageAction', js: 'createPageAction', typ: '' },
      { json: 'editPageAction', js: 'editPageAction', typ: '' },
      { json: 'viewInExplorer', js: 'viewInExplorer', typ: '' },
    ],
    false
  ),
  ExplorerPage: o(
    [
      { json: 'shareText', js: 'shareText', typ: '' },
      { json: 'shareDescription', js: 'shareDescription', typ: '' },
      { json: 'createButton', js: 'createButton', typ: '' },
    ],
    false
  ),
  LaunchPageProjectDetails: o(
    [
      { json: 'invalidUrl', js: 'invalidUrl', typ: '' },
      { json: 'projectURL', js: 'projectURL', typ: '' },
      { json: 'projectUrlPlaceholder', js: 'projectUrlPlaceholder', typ: '' },
      { json: 'projectUrlTooltip', js: 'projectUrlTooltip', typ: '' },
      {
        json: 'saveSuccessToastDescription',
        js: 'saveSuccessToastDescription',
        typ: '',
      },
      {
        json: 'saveErrorToastDescription',
        js: 'saveErrorToastDescription',
        typ: '',
      },
      { json: 'urlInUseError', js: 'urlInUseError', typ: '' },
      { json: 'linksMetaTitle', js: 'linksMetaTitle', typ: '' },
      { json: 'linkLabel', js: 'linkLabel', typ: '' },
      { json: 'addLinks', js: 'addLinks', typ: '' },
      { json: 'addMeta', js: 'addMeta', typ: '' },
      { json: 'metaLabel', js: 'metaLabel', typ: '' },
      { json: 'metaTitle', js: 'metaTitle', typ: '' },
      { json: 'metaHelp', js: 'metaHelp', typ: '' },
      { json: 'metaTitleTag', js: 'metaTitleTag', typ: '' },
      { json: 'metaDescriptionTag', js: 'metaDescriptionTag', typ: '' },
      { json: 'metaImageTag', js: 'metaImageTag', typ: '' },
      { json: 'website', js: 'website', typ: '' },
      { json: 'youtube', js: 'youtube', typ: '' },
      { json: 'instagram', js: 'instagram', typ: '' },
      { json: 'twitch', js: 'twitch', typ: '' },
      { json: 'discord', js: 'discord', typ: '' },
    ],
    false
  ),
  ListMintPages: o(
    [
      { json: 'pageTitle', js: 'pageTitle', typ: '' },
      { json: 'publishedFilter', js: 'publishedFilter', typ: '' },
      { json: 'draftsFilter', js: 'draftsFilter', typ: '' },
      { json: 'unPublishedFilter', js: 'unPublishedFilter', typ: '' },
      { json: 'mintingStatus', js: 'mintingStatus', typ: '' },
      { json: 'notStartedStatus', js: 'notStartedStatus', typ: '' },
      { json: 'endedStatus', js: 'endedStatus', typ: '' },
      { json: 'editPageAction', js: 'editPageAction', typ: '' },
      { json: 'viewPageAction', js: 'viewPageAction', typ: '' },
      { json: 'publishPageAction', js: 'publishPageAction', typ: '' },
      { json: 'unPublishPageAction', js: 'unPublishPageAction', typ: '' },
      { json: 'deletePageAction', js: 'deletePageAction', typ: '' },
      { json: 'sharePageAction', js: 'sharePageAction', typ: '' },
      { json: 'defaultErrorTitle', js: 'defaultErrorTitle', typ: '' },
      {
        json: 'defaultErrorDescription',
        js: 'defaultErrorDescription',
        typ: '',
      },
      { json: 'noPagesErrorTitle', js: 'noPagesErrorTitle', typ: '' },
      {
        json: 'noPagesErrorDescription',
        js: 'noPagesErrorDescription',
        typ: '',
      },
      {
        json: 'successfullyPublishingPage',
        js: 'successfullyPublishingPage',
        typ: '',
      },
      { json: 'errorPublishingPage', js: 'errorPublishingPage', typ: '' },
      {
        json: 'successfullyUnPublishingPage',
        js: 'successfullyUnPublishingPage',
        typ: '',
      },
      { json: 'errorUnPublishingPage', js: 'errorUnPublishingPage', typ: '' },
      {
        json: 'successfullyDeletingPage',
        js: 'successfullyDeletingPage',
        typ: '',
      },
      { json: 'errorDeletingPage', js: 'errorDeletingPage', typ: '' },
      { json: 'shareModalTitle', js: 'shareModalTitle', typ: '' },
      { json: 'shareModalDescription', js: 'shareModalDescription', typ: '' },
      { json: 'recentMintTitle', js: 'recentMintTitle', typ: '' },
      { json: 'defaultMetaTitle', js: 'defaultMetaTitle', typ: '' },
      { json: 'defaultMetaDescription', js: 'defaultMetaDescription', typ: '' },
      { json: 'genericErrorTitle', js: 'genericErrorTitle', typ: '' },
      {
        json: 'genericErrorDescription',
        js: 'genericErrorDescription',
        typ: '',
      },
      { json: 'notPublishedErrorTitle', js: 'notPublishedErrorTitle', typ: '' },
      {
        json: 'notPublishedErrorDescription',
        js: 'notPublishedErrorDescription',
        typ: '',
      },
      { json: 'notFoundErrorTitle', js: 'notFoundErrorTitle', typ: '' },
      {
        json: 'notFoundErrorDescription',
        js: 'notFoundErrorDescription',
        typ: '',
      },
      { json: 'enableWaitMode', js: 'enableWaitMode', typ: '' },
      { json: 'disableWaitMode', js: 'disableWaitMode', typ: '' },
      { json: 'mainImage', js: 'mainImage', typ: '' },
    ],
    false
  ),
  MintPage: o(
    [
      { json: 'aboutTitle', js: 'aboutTitle', typ: '' },
      { json: 'teamMembersTitle', js: 'teamMembersTitle', typ: '' },
      { json: 'recentMintTitle', js: 'recentMintTitle', typ: '' },
      { json: 'defaultMetaTitle', js: 'defaultMetaTitle', typ: '' },
      { json: 'defaultMetaDescription', js: 'defaultMetaDescription', typ: '' },
      { json: 'genericErrorTitle', js: 'genericErrorTitle', typ: '' },
      {
        json: 'genericErrorDescription',
        js: 'genericErrorDescription',
        typ: '',
      },
      { json: 'notPublishedErrorTitle', js: 'notPublishedErrorTitle', typ: '' },
      {
        json: 'notPublishedErrorDescription',
        js: 'notPublishedErrorDescription',
        typ: '',
      },
      { json: 'removedErrorTitle', js: 'removedErrorTitle', typ: '' },
      {
        json: 'removedErrorDescription',
        js: 'removedErrorDescription',
        typ: '',
      },
      { json: 'notFoundErrorTitle', js: 'notFoundErrorTitle', typ: '' },
      {
        json: 'notFoundErrorDescription',
        js: 'notFoundErrorDescription',
        typ: '',
      },
      {
        json: 'fetchingCandyMachineErrorTitle',
        js: 'fetchingCandyMachineErrorTitle',
        typ: '',
      },
      {
        json: 'fetchingCandyMachineErrorDescription',
        js: 'fetchingCandyMachineErrorDescription',
        typ: '',
      },
      { json: 'details', js: 'details', typ: '' },
      { json: 'properties', js: 'properties', typ: '' },
      { json: 'shareModalDescription', js: 'shareModalDescription', typ: '' },
      { json: 'shareModalLinkText', js: 'shareModalLinkText', typ: '' },
      { json: 'insufficientFunds', js: 'insufficientFunds', typ: '' },
    ],
    false
  ),
  Navigation: o(
    [
      { json: 'nfts', js: 'nfts', typ: r('Drops') },
      { json: 'drops', js: 'drops', typ: r('Drops') },
      { json: 'pages', js: 'pages', typ: r('Drops') },
      { json: 'feedback', js: 'feedback', typ: r('Drops') },
      { json: 'help', js: 'help', typ: r('Drops') },
      { json: 'legal', js: 'legal', typ: r('Drops') },
    ],
    false
  ),
  Drops: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'subTitle', js: 'subTitle', typ: u(null, '') },
    ],
    false
  ),
  PageEditor: o(
    [
      {
        json: 'sideToolbarItemLabels',
        js: 'sideToolbarItemLabels',
        typ: r('SideToolbarItemLabels'),
      },
      { json: 'exitButtonLabel', js: 'exitButtonLabel', typ: '' },
      { json: 'publishButtonLabel', js: 'publishButtonLabel', typ: '' },
      { json: 'unpublishButtonLabel', js: 'unpublishButtonLabel', typ: '' },
      { json: 'createMintPageSuccess', js: 'createMintPageSuccess', typ: '' },
      { json: 'createMintPageError', js: 'createMintPageError', typ: '' },
      { json: 'status', js: 'status', typ: r('Status') },
      { json: 'modals', js: 'modals', typ: r('Modals') },
    ],
    false
  ),
  Modals: o(
    [
      { json: 'publish', js: 'publish', typ: r('InitialSetupModal') },
      { json: 'unpublish', js: 'unpublish', typ: r('InitialSetupModal') },
      {
        json: 'publishSuccess',
        js: 'publishSuccess',
        typ: r('InitialSetupModal'),
      },
      {
        json: 'unpublishSuccess',
        js: 'unpublishSuccess',
        typ: r('InitialSetupModal'),
      },
      {
        json: 'initialSetupModal',
        js: 'initialSetupModal',
        typ: r('InitialSetupModal'),
      },
    ],
    false
  ),
  InitialSetupModal: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'primaryButton', js: 'primaryButton', typ: '' },
      { json: 'footnote', js: 'footnote', typ: u(undefined, '') },
      { json: 'secondaryButton', js: 'secondaryButton', typ: u(undefined, '') },
    ],
    false
  ),
  SideToolbarItemLabels: o(
    [
      { json: 'closeButtonLabel', js: 'closeButtonLabel', typ: '' },
      { json: 'backButtonLabel', js: 'backButtonLabel', typ: '' },
      { json: 'saveButtonLabel', js: 'saveButtonLabel', typ: '' },
      { json: 'pageDetails', js: 'pageDetails', typ: '' },
      { json: 'teamMembers', js: 'teamMembers', typ: '' },
      { json: 'collection', js: 'collection', typ: '' },
      { json: 'pageSettings', js: 'pageSettings', typ: '' },
      { json: 'waitMode', js: 'waitMode', typ: '' },
      { json: 'waitModeDisabled', js: 'waitModeDisabled', typ: '' },
      { json: 'projectSettings', js: 'projectSettings', typ: '' },
      { json: 'comingSoon', js: 'comingSoon', typ: r('ComingSoon') },
      { json: 'mintSettings', js: 'mintSettings', typ: r('MintSettings') },
      { json: 'design', js: 'design', typ: '' },
      {
        json: 'designSettings',
        js: 'designSettings',
        typ: r('DesignSettings'),
      },
      {
        json: 'waitModeSettings',
        js: 'waitModeSettings',
        typ: r('WaitModeSettings'),
      },
    ],
    false
  ),
  ComingSoon: o(
    [
      { json: 'teamMembers', js: 'teamMembers', typ: '' },
      { json: 'collection', js: 'collection', typ: '' },
      { json: 'design', js: 'design', typ: '' },
    ],
    false
  ),
  DesignSettings: o(
    [
      { json: 'accentColor', js: 'accentColor', typ: '' },
      { json: 'logo', js: 'logo', typ: '' },
      { json: 'logoHelp', js: 'logoHelp', typ: '' },
      { json: 'backgroundImage', js: 'backgroundImage', typ: '' },
      { json: 'backgroundImageHelp', js: 'backgroundImageHelp', typ: '' },
      { json: 'backgroundImageDrop', js: 'backgroundImageDrop', typ: '' },
      { json: 'blurBackground', js: 'blurBackground', typ: '' },
      { json: 'collectionColors', js: 'collectionColors', typ: '' },
    ],
    false
  ),
  MintSettings: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'subTitle', js: 'subTitle', typ: '' },
      { json: 'editButtonLabel', js: 'editButtonLabel', typ: '' },
      {
        json: 'editionsSaleButtonLabels',
        js: 'editionsSaleButtonLabels',
        typ: r('EditionsSaleButtonLabels'),
      },
      {
        json: 'editionsSaleButtonTooltips',
        js: 'editionsSaleButtonTooltips',
        typ: r('EditionsSaleButtonTooltips'),
      },
      {
        json: 'editionsWarning',
        js: 'editionsWarning',
        typ: r('EditionsWarning'),
      },
      {
        json: 'editionsToastSuccess',
        js: 'editionsToastSuccess',
        typ: r('EditionsToastSuccess'),
      },
      {
        json: 'editionsDateErrors',
        js: 'editionsDateErrors',
        typ: r('EditionsDateErrors'),
      },
      { json: 'fields', js: 'fields', typ: r('Fields') },
      { json: 'disclaimer', js: 'disclaimer', typ: '' },
      { json: 'mintFee', js: 'mintFee', typ: '' },
    ],
    false
  ),
  EditionsDateErrors: o(
    [
      { json: 'startDateInPast', js: 'startDateInPast', typ: '' },
      { json: 'endDateBeforeStartDate', js: 'endDateBeforeStartDate', typ: '' },
    ],
    false
  ),
  EditionsSaleButtonLabels: o(
    [
      { json: 'startSale', js: 'startSale', typ: '' },
      { json: 'endSale', js: 'endSale', typ: '' },
      { json: 'launchUpcoming', js: 'launchUpcoming', typ: '' },
    ],
    false
  ),
  EditionsSaleButtonTooltips: o(
    [
      { json: 'saleNotStarted', js: 'saleNotStarted', typ: '' },
      { json: 'endDateSet', js: 'endDateSet', typ: '' },
    ],
    false
  ),
  EditionsToastSuccess: o(
    [
      { json: 'created', js: 'created', typ: '' },
      { json: 'ended', js: 'ended', typ: '' },
    ],
    false
  ),
  EditionsWarning: o(
    [
      { json: 'saleCreated', js: 'saleCreated', typ: '' },
      { json: 'saleNotCreated', js: 'saleNotCreated', typ: '' },
    ],
    false
  ),
  Fields: o(
    [
      { json: 'price', js: 'price', typ: r('Price') },
      { json: 'nftsPerWallet', js: 'nftsPerWallet', typ: r('NftsPerWallet') },
      { json: 'startDate', js: 'startDate', typ: r('EndDateClass') },
      { json: 'endDate', js: 'endDate', typ: r('EndDateClass') },
      { json: 'antiBot', js: 'antiBot', typ: r('AntiBot') },
      {
        json: 'metadataStatus',
        js: 'metadataStatus',
        typ: r('MetadataStatus'),
      },
      {
        json: 'updateAuthority',
        js: 'updateAuthority',
        typ: r('UpdateAuthority'),
      },
    ],
    false
  ),
  AntiBot: o(
    [
      { json: 'label', js: 'label', typ: '' },
      { json: 'on', js: 'on', typ: '' },
      { json: 'off', js: 'off', typ: '' },
    ],
    false
  ),
  EndDateClass: o(
    [
      { json: 'label', js: 'label', typ: '' },
      { json: 'editionsDropdownLabel', js: 'editionsDropdownLabel', typ: '' },
      { json: 'afterFinalSale', js: 'afterFinalSale', typ: u(undefined, '') },
      { json: 'onDate', js: 'onDate', typ: '' },
      { json: 'editionsLabel', js: 'editionsLabel', typ: '' },
      { json: 'immediately', js: 'immediately', typ: u(undefined, '') },
    ],
    false
  ),
  MetadataStatus: o(
    [
      { json: 'label', js: 'label', typ: '' },
      { json: 'mutable', js: 'mutable', typ: '' },
      { json: 'immutable', js: 'immutable', typ: '' },
    ],
    false
  ),
  NftsPerWallet: o(
    [{ json: 'editionsLabel', js: 'editionsLabel', typ: '' }],
    false
  ),
  Price: o([{ json: 'label', js: 'label', typ: '' }], false),
  UpdateAuthority: o(
    [
      { json: 'label', js: 'label', typ: '' },
      { json: 'reserved', js: 'reserved', typ: '' },
      { json: 'unreserved', js: 'unreserved', typ: '' },
    ],
    false
  ),
  WaitModeSettings: o(
    [
      { json: 'disabled', js: 'disabled', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'subtitle', js: 'subtitle', typ: '' },
      { json: 'waitingTitle', js: 'waitingTitle', typ: '' },
      { json: 'waitingDescription', js: 'waitingDescription', typ: '' },
      { json: 'waitingLink', js: 'waitingLink', typ: '' },
      { json: 'waitingLinkText', js: 'waitingLinkText', typ: '' },
      { json: 'waitingImage', js: 'waitingImage', typ: '' },
      { json: 'waitingGoLiveInfo', js: 'waitingGoLiveInfo', typ: '' },
    ],
    false
  ),
  Status: o(
    [
      { json: 'published', js: 'published', typ: '' },
      { json: 'unpublished', js: 'unpublished', typ: '' },
    ],
    false
  ),
  PageRemoved: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'descriptionLineOne', js: 'descriptionLineOne', typ: '' },
      {
        json: 'descriptionLineOneLinkText',
        js: 'descriptionLineOneLinkText',
        typ: '',
      },
      { json: 'descriptionLineTwo', js: 'descriptionLineTwo', typ: '' },
      { json: 'disclaimer', js: 'disclaimer', typ: '' },
    ],
    false
  ),
  PreMintForm: o(
    [
      { json: 'amountTitle', js: 'amountTitle', typ: '' },
      { json: 'amountDescription', js: 'amountDescription', typ: '' },
      { json: 'amountPlaceholder', js: 'amountPlaceholder', typ: '' },
      { json: 'amountError', js: 'amountError', typ: '' },
      { json: 'walletTitle', js: 'walletTitle', typ: '' },
      { json: 'walletDescription', js: 'walletDescription', typ: '' },
      { json: 'walletPlaceholder', js: 'walletPlaceholder', typ: '' },
      { json: 'walletError', js: 'walletError', typ: '' },
    ],
    false
  ),
  ProcessingModal: o(
    [
      { json: 'fetching', js: 'fetching', typ: '' },
      { json: 'pleaseWait', js: 'pleaseWait', typ: '' },
      { json: 'return', js: 'return', typ: '' },
    ],
    false
  ),
  PublishMintPageFee: o(
    [
      { json: 'walletApproval', js: 'walletApproval', typ: '' },
      { json: 'publishPage', js: 'publishPage', typ: '' },
      { json: 'confirmFeeHelp', js: 'confirmFeeHelp', typ: '' },
      { json: 'mintPageCost', js: 'mintPageCost', typ: '' },
      { json: 'publishingPage', js: 'publishingPage', typ: '' },
      { json: 'pleaseWait', js: 'pleaseWait', typ: '' },
      { json: 'error', js: 'error', typ: '' },
      { json: 'errorRetry', js: 'errorRetry', typ: '' },
    ],
    false
  ),
  RevealNFTs: o(
    [
      { json: 'revealNfts', js: 'revealNfts', typ: '' },
      { json: 'revealNftsHelp', js: 'revealNftsHelp', typ: '' },
      { json: 'revealCost', js: 'revealCost', typ: '' },
      { json: 'revealingNfts', js: 'revealingNfts', typ: '' },
      { json: 'revealingNftsHelp', js: 'revealingNftsHelp', typ: '' },
      { json: 'revealing', js: 'revealing', typ: '' },
      { json: 'closeWarning', js: 'closeWarning', typ: '' },
      { json: 'success', js: 'success', typ: '' },
      { json: 'error', js: 'error', typ: '' },
    ],
    false
  ),
  ThawNFTs: o(
    [
      { json: 'thaw', js: 'thaw', typ: '' },
      { json: 'fetchFrozen', js: 'fetchFrozen', typ: '' },
      { json: 'begin', js: 'begin', typ: '' },
      { json: 'fetching', js: 'fetching', typ: '' },
      { json: 'pleaseWait', js: 'pleaseWait', typ: '' },
      { json: 'thawing', js: 'thawing', typ: '' },
      { json: 'thawingTitle', js: 'thawingTitle', typ: '' },
      { json: 'thawingHelp', js: 'thawingHelp', typ: '' },
      { json: 'start', js: 'start', typ: '' },
      { json: 'error', js: 'error', typ: '' },
      { json: 'unfreezeTitle', js: 'unfreezeTitle', typ: '' },
      { json: 'unfreezeWarning', js: 'unfreezeWarning', typ: '' },
      { json: 'unfreezeCost', js: 'unfreezeCost', typ: '' },
      { json: 'unfreezeRefund', js: 'unfreezeRefund', typ: '' },
      { json: 'unfreezeAction', js: 'unfreezeAction', typ: '' },
      { json: 'thawSuccess', js: 'thawSuccess', typ: '' },
      { json: 'thawSuccessHelp', js: 'thawSuccessHelp', typ: '' },
      { json: 'return', js: 'return', typ: '' },
      { json: 'closeWarning', js: 'closeWarning', typ: '' },
      { json: 'walletApproval', js: 'walletApproval', typ: '' },
    ],
    false
  ),
  Tooltips: o(
    [
      { json: 'royalties', js: 'royalties', typ: '' },
      { json: 'metadataStatus', js: 'metadataStatus', typ: '' },
      { json: 'candyMachineVersion', js: 'candyMachineVersion', typ: '' },
      { json: 'standardEnforced', js: 'standardEnforced', typ: '' },
      { json: 'royaltiesEnforced', js: 'royaltiesEnforced', typ: '' },
    ],
    false
  ),
};
