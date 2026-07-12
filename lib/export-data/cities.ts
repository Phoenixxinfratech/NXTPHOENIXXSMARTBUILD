import type { ExportCity, ExportPriority } from './types';

function city(
  slug: string,
  name: string,
  countrySlug: string,
  opts: {
    priority?: ExportPriority;
    industrialZones?: string[];
    port?: string;
    keyIndustries?: string[];
    applications?: string[];
    localPainPoint?: string;
  } = {}
): ExportCity {
  const priority = opts.priority ?? 'tier2';
  const industrialZones = opts.industrialZones ?? [];
  const keyIndustries = opts.keyIndustries ?? ['Manufacturing', 'Logistics', 'Cold Chain'];
  const applications = opts.applications ?? [
    'Industrial warehouses',
    'Cold storage facilities',
    'Food processing plants',
    'PEB industrial sheds',
  ];
  const localPainPoint =
    opts.localPainPoint ??
    `Rising energy costs and rapid industrial expansion in ${name} drive demand for insulated building envelopes that cut HVAC loads and accelerate project handover.`;

  return {
    slug,
    name,
    countrySlug,
    priority,
    metaTitle: `PUF Panel Export to ${name} | Insulated Panels & Industrial Buildings`,
    metaDescription: `PHOENIXX SMARTBUILD exports sandwich PUF panels, PIR panels, and cold storage systems to ${name}. Engineering support, container shipping, and turnkey insulated building solutions.`,
    industrialZones,
    port: opts.port,
    keyIndustries,
    applications,
    localPainPoint,
  };
}

export const exportCities: Record<string, ExportCity> = {
  // Kenya
  nairobi: city('nairobi', 'Nairobi', 'kenya', {
    priority: 'tier1',
    industrialZones: ['Industrial Area Nairobi', 'Ruaraka Industrial Zone', 'Embakasi Industrial Park'],
    keyIndustries: ['Pharma', 'Food Processing', 'Logistics', 'Manufacturing'],
    applications: ['Distribution warehouses', 'Pharma storage', 'Food processing halls', 'Commercial cold rooms'],
    localPainPoint:
      'Nairobi\'s highland heat spikes and grid instability make uninsulated warehouses expensive to cool — PUF roofing cuts internal temperatures by 8–12°C and reduces HVAC runtime.',
  }),
  'athi-river': city('athi-river', 'Athi River', 'kenya', {
    priority: 'tier1',
    industrialZones: ['Athi River Industrial Area', 'EPZ Athi River', 'Tatu City (nearby corridor)'],
    keyIndustries: ['Manufacturing', 'EPZ Export Processing', 'Logistics', 'Agro-processing'],
    localPainPoint:
      'Athi River EPZ tenants face strict build timelines — prefab insulated panel systems cut enclosure time by 60% versus conventional block construction.',
  }),
  mombasa: city('mombasa', 'Mombasa', 'kenya', {
    priority: 'tier2',
    industrialZones: ['Mombasa Port Industrial Zone', 'Bamburi Industrial Area', 'Mikindani Industrial'],
    port: 'Mombasa Port',
    keyIndustries: ['Port Logistics', 'Fisheries', 'Oil & Gas Support', 'Cold Chain'],
    localPainPoint:
      'Coastal humidity (70–90%) causes condensation on uninsulated metal roofing — anti-condensation PUF panels prevent drip damage in port-adjacent warehouses.',
  }),
  kisumu: city('kisumu', 'Kisumu', 'kenya', { industrialZones: ['Kisumu Industrial Area', 'Kibos'] }),
  nakuru: city('nakuru', 'Nakuru', 'kenya', { industrialZones: ['Nakuru Industrial Area', 'Naivasha corridor link'] }),
  eldoret: city('eldoret', 'Eldoret', 'kenya', { industrialZones: ['Eldoret Industrial Area', 'Huruma'] }),
  thika: city('thika', 'Thika', 'kenya', { industrialZones: ['Thika Industrial Area', 'Del Monte corridor'] }),
  naivasha: city('naivasha', 'Naivasha', 'kenya', {
    industrialZones: ['Naivasha Industrial Park', 'Flower export zone'],
    keyIndustries: ['Horticulture', 'Geothermal energy support', 'Logistics'],
  }),
  'tatu-city': city('tatu-city', 'Tatu City', 'kenya', {
    industrialZones: ['Tatu City SEZ', 'Northlands corridor'],
    keyIndustries: ['Light manufacturing', 'Logistics', 'Technology parks'],
  }),

  // Tanzania
  'dar-es-salaam': city('dar-es-salaam', 'Dar es Salaam', 'tanzania', {
    priority: 'tier1',
    industrialZones: ['Kigamboni Industrial Area', 'Ubungo Industrial', 'Benjamin Mkapa SEZ corridor'],
    port: 'Dar es Salaam Port',
    keyIndustries: ['Fisheries', 'Cement', 'Logistics', 'Mining support'],
    localPainPoint:
      'Dar es Salaam\'s coastal humidity drives condensation in uninsulated sheds — PUF panels with vapour barriers maintain dry interiors year-round.',
  }),
  dodoma: city('dodoma', 'Dodoma', 'tanzania', { industrialZones: ['Dodoma Industrial Area'] }),
  mwanza: city('mwanza', 'Mwanza', 'tanzania', { industrialZones: ['Mwanza Industrial Area', 'Lake Victoria fisheries zone'] }),
  arusha: city('arusha', 'Arusha', 'tanzania', { industrialZones: ['Arusha Industrial Area', 'Njiro'] }),
  mbeya: city('mbeya', 'Mbeya', 'tanzania', { industrialZones: ['Mbeya Industrial Area'] }),
  morogoro: city('morogoro', 'Morogoro', 'tanzania', { industrialZones: ['Morogoro Industrial Area', 'Mkata'] }),
  tanga: city('tanga', 'Tanga', 'tanzania', { port: 'Tanga Port', industrialZones: ['Tanga Industrial Area'] }),
  kigamboni: city('kigamboni', 'Kigamboni', 'tanzania', { industrialZones: ['Kigamboni Industrial Area', 'Port adjunct zone'] }),

  // Rwanda
  kigali: city('kigali', 'Kigali', 'rwanda', {
    priority: 'tier1',
    industrialZones: ['Kigali Special Economic Zone', 'Gikondo Industrial', 'Nyabugogo logistics'],
    keyIndustries: ['Food processing', 'Pharma', 'Construction', 'Logistics'],
    localPainPoint:
      'Kigali SEZ investors need fast-build compliant structures — insulated panel systems align with Rwanda\'s industrial park development timelines.',
  }),
  huye: city('huye', 'Huye', 'rwanda', { industrialZones: ['Huye Industrial Park'] }),
  musanze: city('musanze', 'Musanze', 'rwanda', { industrialZones: ['Musanze industrial zone', 'Tourism support'] }),
  rubavu: city('rubavu', 'Rubavu', 'rwanda', { industrialZones: ['Rubavu border trade zone'] }),
  rusizi: city('rusizi', 'Rusizi', 'rwanda', { industrialZones: ['Rusizi industrial corridor'] }),
  bugesera: city('bugesera', 'Bugesera', 'rwanda', { industrialZones: ['Bugesera Industrial Park', 'Kigali SEZ extension'] }),

  // Ghana
  accra: city('accra', 'Accra', 'ghana', {
    priority: 'tier1',
    industrialZones: ['Tema corridor', 'Spintex industrial', 'North Industrial Area'],
    keyIndustries: ['Oil & gas support', 'Food & beverage', 'Pharma', 'Logistics'],
    localPainPoint:
      'Accra\'s year-round humidity and high solar gain punish uninsulated warehouses — PVDF-coated PUF panels extend roof life and cut cooling costs.',
  }),
  tema: city('tema', 'Tema', 'ghana', {
    priority: 'tier1',
    industrialZones: ['Tema Free Zone', 'Tema Port Industrial', 'Dawa Industrial Zone'],
    port: 'Tema Port',
    keyIndustries: ['Port logistics', 'Oil & gas', 'Manufacturing', 'Cold chain'],
  }),
  kumasi: city('kumasi', 'Kumasi', 'ghana', { industrialZones: ['Kumasi Industrial Area', 'Suame Magazine'] }),
  takoradi: city('takoradi', 'Takoradi', 'ghana', { port: 'Takoradi Port', industrialZones: ['Takoradi industrial zone', 'Oil & gas support'] }),
  tamale: city('tamale', 'Tamale', 'ghana', { industrialZones: ['Tamale industrial area', 'Northern agro-processing'] }),
  koforidua: city('koforidua', 'Koforidua', 'ghana', { industrialZones: ['Koforidua industrial zone'] }),
  dawa: city('dawa', 'Dawa', 'ghana', { industrialZones: ['Dawa Industrial Zone', 'Eastern corridor'] }),

  // Uganda
  kampala: city('kampala', 'Kampala', 'uganda', {
    priority: 'tier1',
    industrialZones: ['Kampala Industrial Business Park (Namanve)', 'Luzira', 'Ntinda industrial'],
    keyIndustries: ['Coffee processing', 'Dairy', 'Pharma', 'Beverages'],
    localPainPoint:
      'Kampala\'s altitude-moderated climate still sees humidity-driven mould in food plants — hygienic panel surfaces support HACCP-style operations.',
  }),
  entebbe: city('entebbe', 'Entebbe', 'uganda', { industrialZones: ['Entebbe logistics zone', 'Airport adjunct'] }),
  jinja: city('jinja', 'Jinja', 'uganda', { industrialZones: ['Jinja Industrial Area', 'Nile corridor manufacturing'] }),
  mbarara: city('mbarara', 'Mbarara', 'uganda', { industrialZones: ['Mbarara industrial park'] }),
  gulu: city('gulu', 'Gulu', 'uganda', { industrialZones: ['Gulu industrial area', 'Northern reconstruction zone'] }),
  mbale: city('mbale', 'Mbale', 'uganda', { industrialZones: ['Mbale Industrial Park', 'Coffee processing'] }),
  namanve: city('namanve', 'Namanve', 'uganda', { industrialZones: ['Namanve Industrial Business Park', 'Kampala IBP'] }),

  // Zambia
  lusaka: city('lusaka', 'Lusaka', 'zambia', {
    priority: 'tier1',
    industrialZones: ['Lusaka South Multi-Facility Economic Zone', 'Industrial Area Lusaka'],
    keyIndustries: ['Mining support', 'Cement', 'Food processing', 'Logistics'],
  }),
  ndola: city('ndola', 'Ndola', 'zambia', { industrialZones: ['Ndola Industrial Area', 'Copperbelt corridor'] }),
  kitwe: city('kitwe', 'Kitwe', 'zambia', { industrialZones: ['Kitwe Industrial Area', 'Copperbelt processing'] }),
  chingola: city('chingola', 'Chingola', 'zambia', { industrialZones: ['Chingola mining support zone'] }),
  livingstone: city('livingstone', 'Livingstone', 'zambia', { industrialZones: ['Livingstone industrial', 'Tourism logistics'] }),
  solwezi: city('solwezi', 'Solwezi', 'zambia', { industrialZones: ['Solwezi mining corridor', 'North-Western province'] }),
  chambishi: city('chambishi', 'Chambishi', 'zambia', { industrialZones: ['Chambishi Multi-Facility Economic Zone'] }),

  // Mozambique
  maputo: city('maputo', 'Maputo', 'mozambique', {
    priority: 'tier1',
    industrialZones: ['Beluluane Industrial Park', 'Maputo Industrial', 'Matola corridor'],
    port: 'Maputo Port',
    keyIndustries: ['LNG support', 'Logistics', 'Fisheries', 'Construction'],
    localPainPoint:
      'Cyclone-season wind loads on coastal Maputo require robust concealed-fix roofing profiles — standing seam PUF roofing rated for high-wind zones.',
  }),
  beira: city('beira', 'Beira', 'mozambique', { port: 'Beira Port', industrialZones: ['Beira Industrial Zone', 'Central corridor'] }),
  nacala: city('nacala', 'Nacala', 'mozambique', { port: 'Nacala Port', industrialZones: ['Nacala SEZ', 'Northern logistics'] }),
  tete: city('tete', 'Tete', 'mozambique', { industrialZones: ['Tete coal corridor', 'Mining support'] }),
  pemba: city('pemba', 'Pemba', 'mozambique', { industrialZones: ['Pemba LNG support zone', 'Cabo Delgado corridor'] }),

  // Namibia
  windhoek: city('windhoek', 'Windhoek', 'namibia', {
    priority: 'tier1',
    industrialZones: ['Windhoek Industrial Area', 'Northern Industrial', 'Southern Industrial'],
    keyIndustries: ['Mining support', 'Logistics', 'Construction', 'Government procurement'],
    localPainPoint:
      'Windhoek\'s hot days and cold nights demand panels with stable R-value across -5°C to +38°C — PUF handles both extremes without performance drift.',
  }),
  'walvis-bay': city('walvis-bay', 'Walvis Bay', 'namibia', {
    industrialZones: ['Walvis Bay Industrial Area', 'Walvis Bay Free Port'],
    port: 'Walvis Bay Port',
    keyIndustries: ['Fisheries', 'Port logistics', 'Mining exports'],
  }),
  swakopmund: city('swakopmund', 'Swakopmund', 'namibia', { industrialZones: ['Swakopmund industrial', 'Coastal logistics'] }),
  oshakati: city('oshakati', 'Oshakati', 'namibia', { industrialZones: ['Oshakati northern industrial'] }),
  'keetmanshoop': city('keetmanshoop', 'Keetmanshoop', 'namibia', { industrialZones: ['Southern corridor industrial'] }),

  // Botswana
  gaborone: city('gaborone', 'Gaborone', 'botswana', {
    priority: 'tier1',
    industrialZones: ['Gaborone Industrial Area', 'Broadhurst industrial', 'Lobatse road corridor'],
    keyIndustries: ['Diamond mining support', 'Beef processing', 'Financial services buildings'],
    localPainPoint:
      'Gaborone summers exceed 38°C — 80–100mm PUF roofing reduces shed internal temperatures by 8–12°C without added HVAC capacity.',
  }),
  francistown: city('francistown', 'Francistown', 'botswana', { industrialZones: ['Francistown industrial', 'Northern mining corridor'] }),
  'selebi-phikwe': city('selebi-phikwe', 'Selebi-Phikwe', 'botswana', { industrialZones: ['Selebi Industrial Zone'] }),
  lobatse: city('lobatse', 'Lobatse', 'botswana', { industrialZones: ['Lobatse Industrial Estate', 'Beef processing'] }),
  palapye: city('palapye', 'Palapye', 'botswana', { industrialZones: ['Palapye industrial', 'Morupule corridor'] }),

  // Angola
  luanda: city('luanda', 'Luanda', 'angola', {
    priority: 'tier1',
    industrialZones: ['Luanda-Bengo Special Economic Zone', 'Viana Industrial Zone', 'Cacuaco industrial'],
    port: 'Luanda Port',
    keyIndustries: ['Oil & gas', 'Diamond mining', 'Fisheries', 'Construction'],
    localPainPoint:
      'Luanda oil-sector projects require fire-rated PIR and Rockwool panels with HSE documentation — standard PUF suits commercial and agricultural builds.',
  }),
  lobito: city('lobito', 'Lobito', 'angola', { port: 'Lobito Port', industrialZones: ['Lobito Corridor', 'Port logistics'] }),
  benguela: city('benguela', 'Benguela', 'angola', { industrialZones: ['Benguela industrial', 'Fisheries processing'] }),
  soyo: city('soyo', 'Soyo', 'angola', { industrialZones: ['Soyo oil & gas support', 'LNG corridor'] }),
  huambo: city('huambo', 'Huambo', 'angola', { industrialZones: ['Huambo industrial area'] }),
  lubango: city('lubango', 'Lubango', 'angola', { industrialZones: ['Southern Angola industrial'] }),

  // South Africa
  johannesburg: city('johannesburg', 'Johannesburg', 'south-africa', {
    priority: 'tier2',
    industrialZones: ['East Rand Industrial', 'Kya Sand', 'Clayville', 'Midrand logistics'],
    keyIndustries: ['Mining support', 'Manufacturing', 'Logistics', 'Pharma'],
  }),
  'cape-town': city('cape-town', 'Cape Town', 'south-africa', {
    port: 'Cape Town Port',
    industrialZones: ['Epping Industrial', 'Bellville', 'Parow industrial'],
    keyIndustries: ['Wine & agri-processing', 'Fisheries', 'Tourism infrastructure'],
  }),
  durban: city('durban', 'Durban', 'south-africa', {
    port: 'Durban Port',
    industrialZones: ['Durban Industrial', 'Pinetown', 'Cato Ridge logistics'],
    keyIndustries: ['Port logistics', 'Sugar processing', 'Automotive support'],
  }),
  pretoria: city('pretoria', 'Pretoria', 'south-africa', { industrialZones: ['Rosslyn industrial', 'Centurion logistics', 'Tshwane corridor'] }),
  gqeberha: city('gqeberha', 'Gqeberha', 'south-africa', { port: 'Port of Ngqura', industrialZones: ['Coega IDZ', 'Gqeberha industrial'] }),

  // Nigeria
  lagos: city('lagos', 'Lagos', 'nigeria', {
    priority: 'tier2',
    industrialZones: ['Apapa industrial', 'Ikeja industrial', 'Lekki Free Zone corridor'],
    port: 'Lagos Port Complex',
    keyIndustries: ['Oil & gas support', 'Food & beverage', 'Pharma', 'Logistics'],
  }),
  abuja: city('abuja', 'Abuja', 'nigeria', { industrialZones: ['Idu Industrial Layout', 'Kubwa corridor'] }),
  'port-harcourt': city('port-harcourt', 'Port Harcourt', 'nigeria', {
    port: 'Port Harcourt Port',
    industrialZones: ['Trans-Amadi industrial', 'Oil & gas support zone'],
    keyIndustries: ['Oil & gas', 'Petrochemicals', 'Logistics'],
  }),
  kano: city('kano', 'Kano', 'nigeria', { industrialZones: ['Sharada industrial', 'Bompai industrial', 'Northern agro-processing'] }),

  // Zimbabwe
  harare: city('harare', 'Harare', 'zimbabwe', {
    industrialZones: ['Workington industrial', 'Graniteside', 'Msasa industrial'],
    keyIndustries: ['Mining support', 'Tobacco processing', 'Manufacturing'],
  }),
  bulawayo: city('bulawayo', 'Bulawayo', 'zimbabwe', { industrialZones: ['Bulawayo industrial', 'Southern corridor'] }),

  // Ethiopia
  'addis-ababa': city('addis-ababa', 'Addis Ababa', 'ethiopia', {
    priority: 'tier2',
    industrialZones: ['Bole Lemi Industrial Park', 'Kilinto pharmaceutical park', 'Eastern industrial zone'],
    keyIndustries: ['Textiles', 'Pharma', 'Agro-processing', 'Logistics'],
  }),
  hawassa: city('hawassa', 'Hawassa', 'ethiopia', { industrialZones: ['Hawassa Industrial Park', 'Textile SEZ'] }),

  // Mauritius
  'port-louis': city('port-louis', 'Port Louis', 'mauritius', {
    port: 'Port Louis Harbour',
    industrialZones: ['Port Louis warehousing', 'Jin Fei Economic Trade Zone'],
    keyIndustries: ['Logistics', 'Seafood processing', 'Financial services buildings'],
  }),
  ebene: city('ebene', 'Ebene', 'mauritius', { industrialZones: ['Ebene Cybercity', 'High-tech park adjunct'] }),

  // DRC
  kinshasa: city('kinshasa', 'Kinshasa', 'drc', {
    priority: 'tier2',
    industrialZones: ['Kinshasa industrial zone', 'Maluku SEZ corridor'],
    keyIndustries: ['Mining support', 'Food & beverage', 'Construction', 'Logistics'],
  }),
  lubumbashi: city('lubumbashi', 'Lubumbashi', 'drc', {
    industrialZones: ['Lubumbashi mining corridor', 'Copperbelt processing'],
    keyIndustries: ['Copper mining', 'Cobalt processing', 'Logistics'],
  }),
  goma: city('goma', 'Goma', 'drc', { industrialZones: ['Goma border trade', 'Eastern logistics'] }),
  kolwezi: city('kolwezi', 'Kolwezi', 'drc', { industrialZones: ['Kolwezi mining support', 'Lualaba province'] }),
};

export function getCityKey(countrySlug: string, citySlug: string): string {
  return `${countrySlug}:${citySlug}`;
}

export function getCitiesForCountry(countrySlug: string): ExportCity[] {
  return Object.values(exportCities).filter((c) => c.countrySlug === countrySlug);
}
