const BASE = 'https://raw.githubusercontent.com/SnorSnor9998/Payment-Icon/master/Banks';

const bankCodes = [
  {
    name: 'Affin Bank',
    logo: `${BASE}/AffinBank/AffinBank_V1_ROU.svg`,
    entries: [
      { code: 'ABB0233:B2C', name: 'Affin Bank', isOnline: true },
      { code: 'ABB0235:B2B', name: 'AFFINMAX', isOnline: true },
    ],
  },
  {
    name: 'Alliance Bank',
    logo: `${BASE}/AllianceBank/AllianceBank_V1_ROU.svg`,
    entries: [
      { code: 'ABMB0212:B2C', name: 'Alliance Bank (Personal)', isOnline: true },
      { code: 'ABMB0213:B2B', name: 'Alliance Bank (Business)', isOnline: true },
    ],
  },
  {
    name: 'AgroBank',
    logo: `${BASE}/AgroBank/AgroBank_V1_ROU.svg`,
    entries: [
      { code: 'AGRO01:B2C', name: 'AGRONet', isOnline: true },
      { code: 'AGRO02:B2B', name: 'AGRONetBIZ', isOnline: true },
    ],
  },
  {
    name: 'AmBank',
    logo: `${BASE}/AmBank/AmBank_V1_ROU.svg`,
    entries: [
      { code: 'AMBB0209:B2C', name: 'AmBank', isOnline: true },
      { code: 'AMBB0208:B2B', name: 'AmBank', isOnline: true },
    ],
  },
  {
    name: 'CIMB Bank',
    logo: `${BASE}/Cimb/Cimb_V1_ROU.svg`,
    entries: [
      { code: 'BCBB0235:B2C', name: 'CIMB Clicks', isOnline: true },
      { code: 'BCBB0235:B2B', name: 'CIMB Bank', isOnline: true },
    ],
  },
  {
    name: 'Bank Islam',
    logo: `${BASE}/BankIslam/BankIslam_V1_ROU.svg`,
    entries: [
      { code: 'BIMB0340:B2C', name: 'Bank Islam', isOnline: true },
      { code: 'BIMB0340:B2B', name: 'Bank Islam', isOnline: true },
    ],
  },
  {
    name: 'Bank Rakyat',
    logo: `${BASE}/BankRakyat/BankRakyat_V1_ROU.svg`,
    entries: [
      { code: 'BKRM0602:B2C', name: 'Bank Rakyat', isOnline: true },
      { code: 'BKRM0602:B2B', name: 'i-bizRAKYAT', isOnline: true },
    ],
  },
  {
    name: 'Bank Muamalat',
    logo: `${BASE}/BankMuamalat/BankMuamalat_V1_ROU.svg`,
    entries: [
      { code: 'BMMB0341:B2C', name: 'Bank Muamalat', isOnline: true },
      { code: 'BMMB0342:B2B', name: 'Bank Muamalat', isOnline: true },
    ],
  },
  {
    name: 'BNP Paribas',
    logo: `${BASE}/BNPParibasBank/BNPParibasBank_V1_ROU.svg`,
    entries: [
      { code: 'BNP003:B2B', name: 'BNP Paribas', isOnline: false },
    ],
  },
  {
    name: 'BSN',
    logo: `${BASE}/BSN/BSN_V1_ROU.svg`,
    entries: [
      { code: 'BSN0601:B2C', name: 'BSN', isOnline: true },
    ],
  },
  {
    name: 'Citibank',
    logo: `${BASE}/CitiBank/CitiBank_V1_ROU.svg`,
    entries: [
      { code: 'CIT0218:B2B', name: 'Citibank Corporate Banking', isOnline: true },
      { code: 'CIT0219:B2C', name: 'Citibank', isOnline: false },
    ],
  },
  {
    name: 'Deutsche Bank',
    logo: `${BASE}/DeutscheBank/DeutscheBank_V1_ROU.svg`,
    entries: [
      { code: 'DBB0199:B2B', name: 'Deutsche Bank', isOnline: true },
    ],
  },
  {
    name: 'Hong Leong Bank',
    logo: `${BASE}/HongLeongBank/HongLeongBank_V1_ROU.svg`,
    entries: [
      { code: 'HLB0224:B2C', name: 'Hong Leong Bank', isOnline: true },
      { code: 'HLB0224:B2B', name: 'Hong Leong Bank', isOnline: true },
    ],
  },
  {
    name: 'HSBC Bank',
    logo: `${BASE}/HSBC/HSBC_V1_ROU.svg`,
    entries: [
      { code: 'HSBC0223:B2C', name: 'HSBC Bank', isOnline: true },
      { code: 'HSBC0223:B2B', name: 'HSBC Bank', isOnline: true },
    ],
  },
  {
    name: 'Kuwait Finance House',
    logo: `${BASE}/KuwaitFinanceHouse/KuwaitFinanceHouse_V1_ROU.svg`,
    entries: [
      { code: 'KFH0346:B2C', name: 'KFH', isOnline: false },
      { code: 'KFH0346:B2B', name: 'KFH', isOnline: false },
    ],
  },
  {
    name: 'Maybank',
    logo: `${BASE}/Maybank/MayBank_V1_ROU.svg`,
    entries: [
      { code: 'MB2U0227:B2C', name: 'Maybank2U', isOnline: true },
      { code: 'MBB0228:B2C', name: 'Maybank2E', isOnline: true },
      { code: 'MBB0228:B2B', name: 'Maybank2E', isOnline: true },
    ],
  },
  {
    name: 'OCBC Bank',
    logo: `${BASE}/OCBC/OCBC_V1_ROU.svg`,
    entries: [
      { code: 'OCBC0229:B2C', name: 'OCBC Bank', isOnline: true },
      { code: 'OCBC0229:B2B', name: 'OCBC Bank', isOnline: true },
    ],
  },
  {
    name: 'Public Bank',
    logo: `${BASE}/PublicBank/PublicBank_V1_ROU.svg`,
    entries: [
      { code: 'PBB0233:B2C', name: 'Public Bank', isOnline: true },
      { code: 'PBB0233:B2B', name: 'Public Bank PBe', isOnline: true },
      { code: 'PBB0234:B2B', name: 'Public Bank PB enterprise', isOnline: true },
    ],
  },
  {
    name: 'RHB Bank',
    logo: `${BASE}/RHB/RHB_V1_ROU.svg`,
    entries: [
      { code: 'RHB0218:B2C', name: 'RHB Bank', isOnline: true },
      { code: 'RHB0218:B2B', name: 'RHB Bank', isOnline: true },
    ],
  },
  {
    name: 'Standard Chartered',
    logo: `${BASE}/StandardChartered/StandardChartered_V1_ROU.svg`,
    entries: [
      { code: 'SCB0216:B2C', name: 'Standard Chartered', isOnline: true },
      { code: 'SCB0215:B2B', name: 'Standard Chartered', isOnline: true },
    ],
  },
  {
    name: 'UOB Bank',
    logo: `${BASE}/UOB/UOB_V1_ROU.svg`,
    entries: [
      { code: 'UOB0226:B2C', name: 'UOB Bank', isOnline: true },
      { code: 'UOB0228:B2B', name: 'UOB Regional', isOnline: true },
    ],
  },
  {
    name: 'SBI Bank A (Test)',
    logo: null,
    entries: [
      { code: 'TEST0021:B2C', name: 'SBI Bank A', isOnline: true },
      { code: 'TEST0021:B2B', name: 'SBI Bank A', isOnline: true },
    ],
  },
  {
    name: 'SBI Bank B (Test)',
    logo: null,
    entries: [
      { code: 'TEST0022:B2C', name: 'SBI Bank B', isOnline: true },
      { code: 'TEST0022:B2B', name: 'SBI Bank B', isOnline: true },
    ],
  },
  {
    name: 'SBI Bank C (Test)',
    logo: null,
    entries: [
      { code: 'TEST0023:B2C', name: 'SBI Bank C', isOnline: true },
      { code: 'TEST0023:B2B', name: 'SBI Bank C', isOnline: true },
    ],
  },
];

export default bankCodes;
