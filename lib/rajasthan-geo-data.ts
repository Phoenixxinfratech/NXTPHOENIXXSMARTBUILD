// ============================================================================
// RAJASTHAN GEO SEO DATA - PHOENIXX PUF ROOFING PANELS
// Beawar, Rajasthan supply hub targeting 23 cities within ~300km
// ============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GeoCity {
  slug: string;
  name: string;
  distanceFromBeawar: number; // km
  lat: number;
  lng: number;
  state: string;
  industrialZones: string[];
  keyIndustries: string[];
  nearbyAreas: string[];
  logisticsNote: string;
  climate: string;
  /** Short paragraph unique to this city for intro variation */
  cityIntro: string;
}

export type GeoPageTypeId =
  | 'general'
  | 'manufacturer'
  | 'supplier'
  | 'price'
  | 'brand';

export interface GeoPageType {
  id: GeoPageTypeId;
  urlPrefix: string;
  h1Template: string;
  metaTitleTemplate: string;
  metaDescTemplate: string;
  focusDescription: string;
}

export type GeoKeywordId =
  | 'sandwich-puf-roofing-panel'
  | 'insulated-roof-panel'
  | 'puf-sandwich-panel'
  | 'polyurethane-roof-panel';

export interface GeoKeywordType {
  id: GeoKeywordId;
  urlPrefix: string;
  h1Template: string;
  metaTitleTemplate: string;
  metaDescTemplate: string;
  focusDescription: string;
}

export interface GeoImageDef {
  src: string;
  altTemplate: string;
}

// ---------------------------------------------------------------------------
// Internal link targets (core pages every geo page must link to)
// ---------------------------------------------------------------------------

export const coreInternalLinks = [
  { href: '/puf-roofing-panels', label: 'PUF Roofing Panels' },
  { href: '/puf-roofing-panel-manufacturer', label: 'PUF Roofing Panel Manufacturer' },
  { href: '/puf-roofing-panel-supplier', label: 'PUF Roofing Panel Supplier' },
  { href: '/puf-roofing-panel-price', label: 'PUF Roofing Panel Price' },
  { href: '/phoenixx-puf-roofing-panels', label: 'Phoenixx PUF Roofing Panels' },
] as const;

// ---------------------------------------------------------------------------
// Images (reusing existing roofing panel assets)
// ---------------------------------------------------------------------------

export const geoImages: GeoImageDef[] = [
  {
    src: '/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL1.png',
    altTemplate: 'Phoenixx PUF roofing panel for industrial warehouse roof in {city}',
  },
  {
    src: '/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL2.png',
    altTemplate: 'Insulated sandwich roof panel installation for factory near {city}',
  },
  {
    src: '/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL5.jpg',
    altTemplate: 'PUF insulated roofing panel system for steel shed in {city}',
  },
  {
    src: '/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL7.webp',
    altTemplate: 'Phoenixx sandwich PUF roofing panel close-up supplied to {city}',
  },
  {
    src: '/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL10.jpeg',
    altTemplate: 'Industrial roofing with Phoenixx PUF panels near {city} Rajasthan',
  },
];

export function getImagesForCity(city: GeoCity): { src: string; alt: string }[] {
  return geoImages.map((img) => ({
    src: img.src,
    alt: img.altTemplate.replace(/\{city\}/g, city.name),
  }));
}

// ---------------------------------------------------------------------------
// 23 Rajasthan cities
// ---------------------------------------------------------------------------

export const geoCities: Record<string, GeoCity> = {
  ajmer: {
    slug: 'ajmer',
    name: 'Ajmer',
    distanceFromBeawar: 30,
    lat: 26.4499,
    lng: 74.6399,
    state: 'Rajasthan',
    industrialZones: ['Ajmer RIICO Industrial Area', 'Kishangarh Industrial Zone', 'Ajmer Industrial Estate', 'Makrana Road Industrial Belt'],
    keyIndustries: ['Textile mills', 'Engineering workshops', 'Marble processing', 'Food processing', 'Pharmaceutical units'],
    nearbyAreas: ['Pushkar', 'Nasirabad', 'Kishangarh', 'Beawar'],
    logisticsNote: 'Just 30 km from the Beawar warehouse via NH-48, Ajmer receives same-day delivery with minimal transport cost.',
    climate: 'Hot semi-arid climate with summer temperatures exceeding 45°C and significant monsoon rainfall, demanding robust thermal insulation for industrial roofing.',
    cityIntro: 'Ajmer, a major industrial and cultural centre in central Rajasthan, hosts a growing industrial base along the Delhi-Ahmedabad industrial corridor. Its proximity to Beawar — just 30 km — makes it the most accessible city for Phoenixx PUF roofing panel supply.',
  },
  kishangarh: {
    slug: 'kishangarh',
    name: 'Kishangarh',
    distanceFromBeawar: 40,
    lat: 26.5921,
    lng: 74.8593,
    state: 'Rajasthan',
    industrialZones: ['Kishangarh Marble Market', 'RIICO Industrial Area Kishangarh', 'Kishangarh Ceramic Zone'],
    keyIndustries: ['Marble and granite processing', 'Ceramics and tiles', 'Textile weaving', 'Food processing'],
    nearbyAreas: ['Ajmer', 'Beawar', 'Madanganj', 'Rupangarh'],
    logisticsNote: 'Located 40 km from Beawar on NH-48, Kishangarh benefits from rapid same-day panel dispatch.',
    climate: 'Semi-arid conditions with intense summer heat and dust storms; industrial facilities need insulated roofing to maintain product quality in marble and ceramic factories.',
    cityIntro: 'Known as India\'s marble city, Kishangarh has hundreds of processing units and warehouses that require durable, heat-resistant roofing. Phoenixx PUF roofing panels from Beawar reach Kishangarh within an hour.',
  },
  bhilwara: {
    slug: 'bhilwara',
    name: 'Bhilwara',
    distanceFromBeawar: 85,
    lat: 25.3407,
    lng: 74.6313,
    state: 'Rajasthan',
    industrialZones: ['Bhilwara Textile Park', 'RIICO Industrial Area Bhilwara', 'Hamirgarh Industrial Zone', 'Mandal Industrial Area'],
    keyIndustries: ['Textile manufacturing', 'Yarn and fabric mills', 'Steel re-rolling', 'Marble processing', 'Engineering fabrication'],
    nearbyAreas: ['Gulabpura', 'Mandal', 'Shahpura', 'Asind'],
    logisticsNote: 'Approximately 85 km south-east of Beawar, connected via NH-58. Delivery within 3-4 hours.',
    climate: 'Extreme heat in summer reaching 46°C; textile mills and warehouses require insulated roof panels to protect temperature-sensitive manufacturing processes.',
    cityIntro: 'Bhilwara, the textile capital of Rajasthan, houses over 800 textile units and a growing steel re-rolling sector. The city\'s industrial scale creates sustained demand for premium insulated roofing systems.',
  },
  pali: {
    slug: 'pali',
    name: 'Pali',
    distanceFromBeawar: 65,
    lat: 25.7711,
    lng: 73.3234,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Pali', 'Pali Textile Zone', 'Mandia Road Industrial Belt', 'Rohat Industrial Area'],
    keyIndustries: ['Textile dying and printing', 'Chemical processing', 'Agri-processing', 'Marble and stone'],
    nearbyAreas: ['Marwar Junction', 'Rohat', 'Sojat', 'Desuri'],
    logisticsNote: 'Connected to Beawar via NH-62 at 65 km distance. Direct highway access enables half-day delivery.',
    climate: 'Hot arid climate with summer peaks above 47°C. Industrial sheds without insulated roofing face extreme heat gain, impacting worker safety and product quality.',
    cityIntro: 'Pali is a thriving textile dyeing and industrial hub west of Beawar. Its chemical and textile units require corrosion-resistant, insulated roofing panels to withstand harsh processing environments.',
  },
  jodhpur: {
    slug: 'jodhpur',
    name: 'Jodhpur',
    distanceFromBeawar: 185,
    lat: 26.2389,
    lng: 73.0243,
    state: 'Rajasthan',
    industrialZones: ['Jodhpur RIICO Industrial Area', 'Basni Industrial Area', 'Boranada Industrial Zone', 'Mandore Industrial Estate', 'MIA Jodhpur'],
    keyIndustries: ['Handicrafts and furniture', 'Steel fabrication', 'Food processing', 'Limestone and mineral processing', 'Textile and garments', 'Cold storage'],
    nearbyAreas: ['Pali', 'Barmer', 'Jaisalmer', 'Nagaur', 'Osian'],
    logisticsNote: 'Major industrial city 185 km west of Beawar via NH-62. Full-truckload deliveries complete within a single day.',
    climate: 'Extremely hot desert climate with temperatures above 48°C in summer and wide diurnal temperature swings; insulated PUF roofing is critical for energy-efficient industrial operations.',
    cityIntro: 'Jodhpur, the largest city in western Rajasthan, has a rapidly expanding industrial sector with multiple RIICO zones. Its extreme desert heat makes insulated PUF roofing an operational necessity for factories, warehouses, and cold storage units.',
  },
  udaipur: {
    slug: 'udaipur',
    name: 'Udaipur',
    distanceFromBeawar: 185,
    lat: 24.5854,
    lng: 73.7125,
    state: 'Rajasthan',
    industrialZones: ['Udaipur RIICO Industrial Area', 'Sukher Industrial Zone', 'Debari Industrial Area', 'Kavita Industrial Estate'],
    keyIndustries: ['Mining and mineral processing', 'Zinc smelting', 'Marble and granite', 'Chemical industries', 'Cold storage', 'Pharmaceutical units'],
    nearbyAreas: ['Chittorgarh', 'Rajsamand', 'Dungarpur', 'Banswara', 'Nathdwara'],
    logisticsNote: 'Accessible from Beawar via NH-48 and NH-76 at 185 km. Deliveries typically completed within a single business day.',
    climate: 'Semi-arid with heavy monsoon rainfall and summer heat above 42°C. Zinc smelters and mining facilities demand heat-resistant roofing with corrosion protection.',
    cityIntro: 'Udaipur, South Rajasthan\'s industrial anchor, hosts major zinc smelters (Hindustan Zinc), marble processors, and a growing pharmaceutical cluster. Phoenixx PUF roofing panels serve the city\'s diverse industrial infrastructure needs.',
  },
  chittorgarh: {
    slug: 'chittorgarh',
    name: 'Chittorgarh',
    distanceFromBeawar: 155,
    lat: 24.8887,
    lng: 74.6269,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Chittorgarh', 'Nimbahera Industrial Belt', 'Chittorgarh Cement Zone'],
    keyIndustries: ['Cement manufacturing', 'Limestone mining', 'Steel fabrication', 'Agri-processing', 'Small-scale engineering'],
    nearbyAreas: ['Nimbahera', 'Gangrar', 'Begu', 'Rawatbhata'],
    logisticsNote: '155 km from Beawar via NH-79. Regular panel supply possible with next-day delivery guarantee.',
    climate: 'Hot semi-arid region with monsoon variability. Cement plants and mining facilities need durable, weather-resistant roofing that withstands high particulate environments.',
    cityIntro: 'Chittorgarh is a prominent cement and mining district in southern Rajasthan. Major cement plants and limestone quarries here rely on heavy-duty industrial roofing, making it a key market for Phoenixx PUF panels.',
  },
  rajsamand: {
    slug: 'rajsamand',
    name: 'Rajsamand',
    distanceFromBeawar: 110,
    lat: 25.0713,
    lng: 73.8800,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Rajsamand', 'Rajsamand Marble Processing Zone', 'Kankroli Industrial Area'],
    keyIndustries: ['Marble and granite processing', 'Zinc and lead smelting', 'Chemical units', 'Textile processing'],
    nearbyAreas: ['Kankroli', 'Nathdwara', 'Bhilwara', 'Udaipur'],
    logisticsNote: '110 km from Beawar via state highways. Delivery within 4-5 hours through established transport routes.',
    climate: 'Semi-arid climate with significant summer heat; marble and mining operations generate heat internally, compounding the need for insulated roofing.',
    cityIntro: 'Rajsamand is a marble and mineral processing powerhouse between Beawar and Udaipur. Its stone processing sheds and warehouses require robust, heat-reflective PUF roofing panels.',
  },
  nagaur: {
    slug: 'nagaur',
    name: 'Nagaur',
    distanceFromBeawar: 135,
    lat: 27.2024,
    lng: 73.7350,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Nagaur', 'Merta City Industrial Zone', 'Nagaur Salt Industry Belt'],
    keyIndustries: ['Salt production', 'Agri-processing', 'Steel fabrication', 'Mineral processing', 'Food storage'],
    nearbyAreas: ['Merta City', 'Didwana', 'Ladnun', 'Degana'],
    logisticsNote: '135 km north-west of Beawar. Connected via state highway network with reliable transport availability.',
    climate: 'Hot arid climate with extreme summer temperatures. Salt processing and food storage facilities require insulated roofing to maintain stable internal conditions.',
    cityIntro: 'Nagaur district, known for its salt industry and agri-processing units, presents growing opportunities for industrial roofing upgrades. Phoenixx PUF panels deliver the thermal protection these facilities require.',
  },
  sikar: {
    slug: 'sikar',
    name: 'Sikar',
    distanceFromBeawar: 195,
    lat: 27.6094,
    lng: 75.1399,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Sikar', 'Sikar Electronic Manufacturing Cluster', 'Laxmangarh Industrial Zone'],
    keyIndustries: ['Electronic manufacturing', 'Agri-processing', 'Steel fabrication', 'Marble processing', 'Automotive components'],
    nearbyAreas: ['Laxmangarh', 'Fatehpur', 'Neem Ka Thana', 'Jhunjhunu'],
    logisticsNote: '195 km north-east of Beawar via NH-48 and state highways. Delivery within one business day.',
    climate: 'Semi-arid with hot summers exceeding 45°C. Electronics manufacturing and automotive component plants need temperature-controlled environments under insulated roofing.',
    cityIntro: 'Sikar is part of the Shekhawati industrial belt with expanding electronics and automotive manufacturing. Its modern factories demand energy-efficient insulated roofing solutions from trusted suppliers like Phoenixx.',
  },
  jhunjhunu: {
    slug: 'jhunjhunu',
    name: 'Jhunjhunu',
    distanceFromBeawar: 230,
    lat: 28.1286,
    lng: 75.3983,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Jhunjhunu', 'Khetri Copper Complex Area', 'Chirawa Industrial Zone'],
    keyIndustries: ['Copper smelting', 'Mineral processing', 'Agri-processing', 'Steel fabrication', 'Textile units'],
    nearbyAreas: ['Khetri', 'Chirawa', 'Nawalgarh', 'Mandawa'],
    logisticsNote: '230 km from Beawar in the Shekhawati region. Regular supply dispatched via Jaipur route.',
    climate: 'Arid with extreme summer heat; copper smelting and mineral processing generate substantial internal heat, requiring heavy-duty insulated roofing.',
    cityIntro: 'Jhunjhunu, home to the Khetri Copper Complex and Shekhawati\'s industrial heritage, has specialized industrial roofing requirements for its metal processing and mineral industries.',
  },
  alwar: {
    slug: 'alwar',
    name: 'Alwar',
    distanceFromBeawar: 290,
    lat: 27.5530,
    lng: 76.6346,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Alwar', 'Bhiwadi Industrial Area', 'Matsya Industrial Area', 'Alwar MIA'],
    keyIndustries: ['Automobile manufacturing', 'Electronics assembly', 'Steel and engineering', 'Pharmaceutical', 'FMCG and packaging'],
    nearbyAreas: ['Bhiwadi', 'Neemrana', 'Tijara', 'Kishangarh Bas'],
    logisticsNote: '290 km from Beawar near the Delhi-NCR corridor. Larger projects served via dedicated transport.',
    climate: 'Semi-arid with hot summers and cold winters. Major automobile plants and electronics facilities need year-round climate control under insulated roofing.',
    cityIntro: 'Alwar anchors the Delhi-Mumbai Industrial Corridor in Rajasthan. Its automobile, electronics, and pharmaceutical plants operate at national scale, creating sustained demand for premium insulated roofing panels.',
  },
  neemrana: {
    slug: 'neemrana',
    name: 'Neemrana',
    distanceFromBeawar: 275,
    lat: 27.9880,
    lng: 76.3849,
    state: 'Rajasthan',
    industrialZones: ['Neemrana Japanese Industrial Zone (NJIZ)', 'RIICO Industrial Area Neemrana', 'Neemrana Industrial Hub Phase I-IV'],
    keyIndustries: ['Japanese automotive OEMs', 'Precision engineering', 'Electronics manufacturing', 'Industrial automation', 'Packaging'],
    nearbyAreas: ['Behror', 'Shahjahanpur', 'Alwar', 'Rewari'],
    logisticsNote: '275 km from Beawar on NH-48. This premium industrial zone commands dedicated supply logistics.',
    climate: 'Semi-arid with hot summers; Japanese and multinational factories here maintain strict environmental standards requiring high-specification insulated roofing.',
    cityIntro: 'Neemrana\'s Japanese Industrial Zone is one of India\'s premier manufacturing clusters, housing Daikin, Nissin, and other global OEMs. These world-class factories demand insulated roofing panels that meet international quality benchmarks.',
  },
  kota: {
    slug: 'kota',
    name: 'Kota',
    distanceFromBeawar: 240,
    lat: 25.2138,
    lng: 75.8648,
    state: 'Rajasthan',
    industrialZones: ['Kota RIICO Industrial Area', 'Kota Super Thermal Power Station Area', 'Ranpur Industrial Zone', 'Dara Industrial Area'],
    keyIndustries: ['Power generation', 'Chemical and fertilizer', 'Precision instruments', 'Stone processing', 'Steel fabrication'],
    nearbyAreas: ['Baran', 'Bundi', 'Jhalawar', 'Chambal region'],
    logisticsNote: '240 km south-east of Beawar via NH-76. Regular deliveries for power plant and industrial projects.',
    climate: 'Hot and humid summers with temperatures above 45°C; power plants and chemical industries need corrosion-resistant, thermally insulated roofing.',
    cityIntro: 'Kota is Rajasthan\'s industrial powerhouse on the Chambal river, with major thermal power stations and chemical complexes. These heavy industries require high-performance PUF roofing panels for both roofing and cladding.',
  },
  bundi: {
    slug: 'bundi',
    name: 'Bundi',
    distanceFromBeawar: 200,
    lat: 25.4305,
    lng: 75.6499,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Bundi', 'Keshoraipatan Industrial Belt'],
    keyIndustries: ['Agri-processing', 'Stone quarrying', 'Small-scale manufacturing', 'Food storage'],
    nearbyAreas: ['Kota', 'Chittorgarh', 'Tonk', 'Indergarh'],
    logisticsNote: '200 km from Beawar via state highways. Deliveries coordinated through Kota logistics hub.',
    climate: 'Semi-arid with intense summer heat and monsoon variability. Agricultural processing and food storage need temperature-stable roofing solutions.',
    cityIntro: 'Bundi\'s emerging industrial sector focuses on agri-processing and stone quarrying. As the district modernises its industrial infrastructure, demand for quality insulated roofing is growing steadily.',
  },
  barmer: {
    slug: 'barmer',
    name: 'Barmer',
    distanceFromBeawar: 280,
    lat: 25.7521,
    lng: 71.3967,
    state: 'Rajasthan',
    industrialZones: ['Barmer Oil Refinery Industrial Area', 'RIICO Industrial Area Barmer', 'Balotra Industrial Zone'],
    keyIndustries: ['Oil refinery and petrochemicals', 'Textile printing (Balotra)', 'Mining and minerals', 'Wind energy'],
    nearbyAreas: ['Balotra', 'Jaisalmer', 'Jodhpur', 'Siwana'],
    logisticsNote: '280 km west of Beawar. Major refinery projects serviced via dedicated heavy-transport logistics.',
    climate: 'Extreme desert heat exceeding 50°C in peak summer. Oil refineries and industrial facilities here face the harshest thermal conditions in Rajasthan.',
    cityIntro: 'Barmer is transforming with India\'s newest oil refinery and expanding petrochemical infrastructure. These high-value facilities demand premium insulated roofing panels that can withstand extreme desert conditions.',
  },
  'abu-road': {
    slug: 'abu-road',
    name: 'Abu Road',
    distanceFromBeawar: 210,
    lat: 24.4804,
    lng: 72.7706,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Abu Road', 'Abu Road Marble Processing Zone'],
    keyIndustries: ['Marble and granite processing', 'Textiles', 'Agri-processing', 'Logistics and warehousing'],
    nearbyAreas: ['Sirohi', 'Mount Abu', 'Pindwara', 'Palanpur (Gujarat border)'],
    logisticsNote: '210 km south-west of Beawar on the Gujarat border route. Strategic location for cross-border industrial supply.',
    climate: 'Semi-arid with slightly milder temperatures due to Aravalli proximity. Marble processing units need insulated roofing for dust and heat management.',
    cityIntro: 'Abu Road serves as a key industrial gateway between Rajasthan and Gujarat. Its marble processing and warehousing sector benefits from Phoenixx PUF roofing panels shipped from the nearby Beawar hub.',
  },
  bikaner: {
    slug: 'bikaner',
    name: 'Bikaner',
    distanceFromBeawar: 250,
    lat: 28.0229,
    lng: 73.3119,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Bikaner', 'Karni Industrial Area', 'Bikaner Industrial Estate'],
    keyIndustries: ['Food processing (Bikaneri bhujia)', 'Wool and textile', 'Cold storage', 'Agri-processing', 'Solar energy'],
    nearbyAreas: ['Nokha', 'Lunkaransar', 'Deshnok', 'Kolayat'],
    logisticsNote: '250 km north-west of Beawar via NH-89. Regular supply route established for desert region projects.',
    climate: 'Extreme desert climate with summer temperatures above 48°C and freezing winter nights. Cold storage and food processing demand high-performance insulated roofing.',
    cityIntro: 'Bikaner is a food processing hub famous for its snack industry and growing cold storage infrastructure. The extreme desert climate makes insulated PUF roofing panels essential for virtually every industrial facility.',
  },
  'sri-ganganagar': {
    slug: 'sri-ganganagar',
    name: 'Sri Ganganagar',
    distanceFromBeawar: 300,
    lat: 29.9094,
    lng: 73.8760,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Sri Ganganagar', 'Ganganagar Sugar Mills Area', 'Gharsana Industrial Belt'],
    keyIndustries: ['Sugar mills', 'Agri-processing', 'Cotton ginning', 'Food storage', 'Cold chain logistics'],
    nearbyAreas: ['Hanumangarh', 'Suratgarh', 'Gharsana', 'Anupgarh'],
    logisticsNote: '300 km north of Beawar, at the edge of the supply radius. Projects served via Bikaner logistics route.',
    climate: 'Extreme continental climate — scorching summers above 48°C and cold winters below 2°C. Sugar mills and agri-processing need year-round thermal insulation.',
    cityIntro: 'Sri Ganganagar, Rajasthan\'s northernmost industrial district, is an agricultural powerhouse with sugar mills and food processing plants that require reliable insulated roofing for extreme temperature swings.',
  },
  tonk: {
    slug: 'tonk',
    name: 'Tonk',
    distanceFromBeawar: 140,
    lat: 26.1664,
    lng: 75.7885,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Tonk', 'Newai Industrial Belt'],
    keyIndustries: ['Agri-processing', 'Leather and tanning', 'Handicrafts', 'Small-scale manufacturing'],
    nearbyAreas: ['Newai', 'Deoli', 'Uniara', 'Malpura'],
    logisticsNote: '140 km east of Beawar. Connected via state highways with reliable transport within 5-6 hours.',
    climate: 'Semi-arid with hot summers; leather processing and agri-units need ventilated, insulated roofing to manage heat and odour control.',
    cityIntro: 'Tonk\'s diverse small-scale manufacturing and agri-processing sector is upgrading to modern insulated roofing as the district develops its industrial infrastructure.',
  },
  jhalawar: {
    slug: 'jhalawar',
    name: 'Jhalawar',
    distanceFromBeawar: 280,
    lat: 24.5975,
    lng: 76.1652,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Jhalawar', 'Jhalawar Agri-Processing Zone'],
    keyIndustries: ['Orange and citrus processing', 'Agri-processing', 'Stone quarrying', 'Small-scale engineering'],
    nearbyAreas: ['Bhawani Mandi', 'Aklera', 'Kota', 'Baran'],
    logisticsNote: '280 km south-east of Beawar. Deliveries coordinated via the Kota supply corridor.',
    climate: 'Sub-humid to semi-arid; receives higher rainfall than western Rajasthan, requiring weatherproof roofing with superior sealing.',
    cityIntro: 'Jhalawar, known for its citrus orchards and agri-processing, is developing modern cold storage and processing facilities that benefit from Phoenixx insulated PUF roofing panels.',
  },
  pratapgarh: {
    slug: 'pratapgarh',
    name: 'Pratapgarh',
    distanceFromBeawar: 230,
    lat: 24.0316,
    lng: 74.7795,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Pratapgarh', 'Pratapgarh Mining Area'],
    keyIndustries: ['Mining and quarrying', 'Agri-processing', 'Herbal and medicinal processing', 'Small manufacturing'],
    nearbyAreas: ['Banswara', 'Chittorgarh', 'Mandsaur (MP border)', 'Dungarpur'],
    logisticsNote: '230 km south of Beawar. Supply routed through Udaipur-Chittorgarh corridor.',
    climate: 'Semi-arid transitioning to sub-humid with moderate monsoons. Mining facilities need weather-resistant, durable roofing.',
    cityIntro: 'Pratapgarh\'s mining and herbal processing industries present niche opportunities for industrial roofing. Phoenixx PUF panels provide the durability and insulation these facilities demand.',
  },
  sirohi: {
    slug: 'sirohi',
    name: 'Sirohi',
    distanceFromBeawar: 175,
    lat: 24.8884,
    lng: 72.8630,
    state: 'Rajasthan',
    industrialZones: ['RIICO Industrial Area Sirohi', 'Pindwara Industrial Zone', 'Sirohi Marble Belt'],
    keyIndustries: ['Marble and granite', 'Cement', 'Mining', 'Agri-processing', 'Warehousing'],
    nearbyAreas: ['Abu Road', 'Pindwara', 'Mount Abu', 'Sheoganj'],
    logisticsNote: '175 km south-west of Beawar. Well-connected via NH-14 for regular panel supply.',
    climate: 'Semi-arid with Aravalli influence; marble processing and cement plants produce high internal heat requiring effective roof insulation.',
    cityIntro: 'Sirohi district\'s marble and cement industries create consistent demand for industrial roofing solutions. Phoenixx PUF roofing panels from Beawar provide the thermal performance and durability these heavy industries require.',
  },
};

// ---------------------------------------------------------------------------
// 5 Page types
// ---------------------------------------------------------------------------

export const geoPageTypes: Record<GeoPageTypeId, GeoPageType> = {
  general: {
    id: 'general',
    urlPrefix: 'puf-roofing-panel',
    h1Template: 'PUF Roofing Panel in {city}',
    metaTitleTemplate: 'PUF Roofing Panel in {city} | Phoenixx',
    metaDescTemplate: 'Buy PUF roofing panels in {city} from Phoenixx, Beawar. Insulated sandwich roof panels for factories, warehouses & cold storage. Fast delivery.',
    focusDescription: 'Comprehensive overview of Phoenixx PUF roofing panel availability, applications, and supply in the target city.',
  },
  manufacturer: {
    id: 'manufacturer',
    urlPrefix: 'puf-roofing-panel-manufacturer',
    h1Template: 'PUF Roofing Panel Manufacturer in {city}',
    metaTitleTemplate: 'PUF Roofing Panel Manufacturer {city} | Phoenixx',
    metaDescTemplate: 'Phoenixx — trusted PUF roofing panel manufacturer supplying {city}. Insulated sandwich panels from Beawar warehouse. Get a free project quote.',
    focusDescription: 'Positions Phoenixx as the preferred PUF roofing panel manufacturer serving the target city from its Beawar production facility.',
  },
  supplier: {
    id: 'supplier',
    urlPrefix: 'puf-roofing-panel-supplier',
    h1Template: 'PUF Roofing Panel Supplier in {city}',
    metaTitleTemplate: 'PUF Roofing Panel Supplier {city} | Phoenixx',
    metaDescTemplate: 'Reliable PUF roofing panel supplier in {city}. Phoenixx delivers insulated sandwich roof panels from Beawar with ready stock & fast dispatch.',
    focusDescription: 'Emphasises supply capability, ready stock at Beawar warehouse, logistics speed, and delivery network to the target city.',
  },
  price: {
    id: 'price',
    urlPrefix: 'puf-roofing-panel-price',
    h1Template: 'PUF Roofing Panel Price in {city}',
    metaTitleTemplate: 'PUF Roofing Panel Price {city} 2026 | Phoenixx',
    metaDescTemplate: 'Check PUF roofing panel price in {city}. Phoenixx offers competitive rates from ₹90/sq ft. Get instant price quote for your industrial roofing project.',
    focusDescription: 'Explains pricing factors — thickness, density, coating, project size, transport — and positions Phoenixx as competitively priced.',
  },
  brand: {
    id: 'brand',
    urlPrefix: 'phoenixx-puf-roofing-panel',
    h1Template: 'Phoenixx PUF Roofing Panel in {city}',
    metaTitleTemplate: 'Phoenixx PUF Roofing Panel {city} | Premium',
    metaDescTemplate: 'Phoenixx PUF roofing panels — the preferred brand in {city} for industrial roofing. Premium polyurethane insulated panels from Beawar. Request a quote.',
    focusDescription: 'Strongly brand-focused page positioning Phoenixx as the premium industrial roofing panel brand for the target city.',
  },
};

// ---------------------------------------------------------------------------
// 4 Keyword expansion types
// ---------------------------------------------------------------------------

export const geoKeywordTypes: Record<GeoKeywordId, GeoKeywordType> = {
  'sandwich-puf-roofing-panel': {
    id: 'sandwich-puf-roofing-panel',
    urlPrefix: 'sandwich-puf-roofing-panel',
    h1Template: 'Sandwich PUF Roofing Panel in {city}',
    metaTitleTemplate: 'Sandwich PUF Roofing Panel {city} | Phoenixx',
    metaDescTemplate: 'Sandwich PUF roofing panels in {city} from Phoenixx. Insulated sandwich panels for industrial roofing. Fast supply from Beawar warehouse.',
    focusDescription: 'Focuses on the sandwich construction — two steel skins bonded to a PUF core — and its advantages for industrial roofing.',
  },
  'insulated-roof-panel': {
    id: 'insulated-roof-panel',
    urlPrefix: 'insulated-roof-panel',
    h1Template: 'Insulated Roof Panel in {city}',
    metaTitleTemplate: 'Insulated Roof Panel {city} | Phoenixx PUF',
    metaDescTemplate: 'Premium insulated roof panels in {city} by Phoenixx. PUF-core insulated roofing panels for warehouses, factories & cold storage. Fast supply from Beawar.',
    focusDescription: 'Emphasises thermal insulation performance, energy savings, and R-value benefits of PUF-insulated roof panels.',
  },
  'puf-sandwich-panel': {
    id: 'puf-sandwich-panel',
    urlPrefix: 'puf-sandwich-panel',
    h1Template: 'PUF Sandwich Panel in {city}',
    metaTitleTemplate: 'PUF Sandwich Panel {city} | Phoenixx Supply',
    metaDescTemplate: 'PUF sandwich panels in {city} from Phoenixx Smart Build. Polyurethane insulated panels for roofing & cladding. Beawar warehouse stock available.',
    focusDescription: 'Covers both roofing and wall cladding applications of PUF sandwich panels, including technical specifications and project suitability.',
  },
  'polyurethane-roof-panel': {
    id: 'polyurethane-roof-panel',
    urlPrefix: 'polyurethane-roof-panel',
    h1Template: 'Polyurethane Roof Panel in {city}',
    metaTitleTemplate: 'Polyurethane Roof Panel {city} | Phoenixx',
    metaDescTemplate: 'Polyurethane roof panels in {city}. Phoenixx manufactures high-density PU-core insulated roofing panels. Competitive pricing from Beawar, Rajasthan.',
    focusDescription: 'Focuses on the polyurethane material science — closed-cell structure, density, thermal conductivity — and how it outperforms alternatives.',
  },
};

// ---------------------------------------------------------------------------
// All URL prefixes for geo pattern matching (order matters — longest first)
// ---------------------------------------------------------------------------

const allPrefixes = [
  ...Object.values(geoPageTypes).map((pt) => ({ prefix: pt.urlPrefix, kind: 'pageType' as const, id: pt.id })),
  ...Object.values(geoKeywordTypes).map((kt) => ({ prefix: kt.urlPrefix, kind: 'keyword' as const, id: kt.id })),
].sort((a, b) => b.prefix.length - a.prefix.length);

// ---------------------------------------------------------------------------
// Slug parsing
// ---------------------------------------------------------------------------

export interface GeoSlugResult {
  city: GeoCity;
  pageType?: GeoPageType;
  keywordType?: GeoKeywordType;
}

export function parseGeoSlug(slug: string): GeoSlugResult | null {
  for (const entry of allPrefixes) {
    const prefix = entry.prefix + '-';
    if (slug.startsWith(prefix)) {
      const citySlug = slug.slice(prefix.length);
      const city = geoCities[citySlug];
      if (!city) continue;
      if (entry.kind === 'pageType') {
        return { city, pageType: geoPageTypes[entry.id as GeoPageTypeId] };
      }
      return { city, keywordType: geoKeywordTypes[entry.id as GeoKeywordId] };
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getGeoCity(slug: string): GeoCity | undefined {
  return geoCities[slug];
}

export function getAllGeoCitySlugs(): string[] {
  return Object.keys(geoCities);
}

/**
 * Build all static param slugs for geo pages (207 total)
 */
export function generateAllGeoStaticParams(): string[] {
  const params: string[] = [];
  const citySlugs = getAllGeoCitySlugs();

  for (const pt of Object.values(geoPageTypes)) {
    for (const cs of citySlugs) {
      params.push(`${pt.urlPrefix}-${cs}`);
    }
  }
  for (const kt of Object.values(geoKeywordTypes)) {
    for (const cs of citySlugs) {
      params.push(`${kt.urlPrefix}-${cs}`);
    }
  }
  return params;
}

// Template helper
function tpl(template: string, city: GeoCity): string {
  return template.replace(/\{city\}/g, city.name);
}

export function getGeoMetaTitle(result: GeoSlugResult): string {
  const t = result.pageType ?? result.keywordType!;
  return tpl(t.metaTitleTemplate, result.city);
}

export function getGeoMetaDescription(result: GeoSlugResult): string {
  const t = result.pageType ?? result.keywordType!;
  return tpl(t.metaDescTemplate, result.city);
}

export function getGeoH1(result: GeoSlugResult): string {
  const t = result.pageType ?? result.keywordType!;
  return tpl(t.h1Template, result.city);
}

export function getGeoCanonicalSlug(result: GeoSlugResult): string {
  const prefix = result.pageType?.urlPrefix ?? result.keywordType!.urlPrefix;
  return `${prefix}-${result.city.slug}`;
}

// ---------------------------------------------------------------------------
// FAQ generation
// ---------------------------------------------------------------------------

export interface GeoFAQ {
  question: string;
  answer: string;
}

export function generateGeoFAQs(result: GeoSlugResult): GeoFAQ[] {
  const { city } = result;
  const isPrice = result.pageType?.id === 'price';
  const isBrand = result.pageType?.id === 'brand';
  const isManufacturer = result.pageType?.id === 'manufacturer';
  const isSupplier = result.pageType?.id === 'supplier';

  const faqs: GeoFAQ[] = [
    {
      question: `Where can I buy PUF roofing panels in ${city.name}?`,
      answer: `Phoenixx Smart Build supplies premium PUF roofing panels to ${city.name} from its Beawar warehouse, just ${city.distanceFromBeawar} km away. Contact us for same-day dispatch and competitive project pricing.`,
    },
    {
      question: `What types of PUF roofing panels are available in ${city.name}?`,
      answer: `Phoenixx offers roofing PUF panels in 30mm to 150mm thickness with PPGI/PPGL steel skins, polyester or PVDF coatings, and trapezoidal or standing seam profiles — suitable for factories, warehouses, cold storage, and industrial sheds in ${city.name}.`,
    },
    {
      question: `How quickly can Phoenixx deliver PUF roofing panels to ${city.name}?`,
      answer: `${city.logisticsNote} Ready stock panels are dispatched within 24 hours of order confirmation.`,
    },
    {
      question: `What industries in ${city.name} use PUF roofing panels?`,
      answer: `Key industries in ${city.name} using Phoenixx PUF roofing panels include ${city.keyIndustries.slice(0, 4).join(', ')}. These panels provide thermal insulation, weather protection, and energy efficiency for industrial roofing.`,
    },
    {
      question: `Are Phoenixx PUF roofing panels suitable for the ${city.name} climate?`,
      answer: `Yes. ${city.climate} Phoenixx PUF roofing panels with thermal conductivity of 0.024 W/mK and UV-resistant coatings are engineered to perform optimally in these conditions.`,
    },
  ];

  if (isPrice) {
    faqs.push(
      {
        question: `What is the price of PUF roofing panels in ${city.name}?`,
        answer: `PUF roofing panel prices in ${city.name} range from approximately ₹90 to ₹220 per sq. ft. depending on thickness (30–150mm), steel skin grade, coating type, and order volume. Transport from Beawar (${city.distanceFromBeawar} km) is factored into delivered pricing. Contact Phoenixx for a project-specific quotation.`,
      },
      {
        question: `What factors affect PUF roofing panel pricing in ${city.name}?`,
        answer: `Key pricing factors include: panel thickness and PUF density, steel skin material (PPGI vs PPGL vs stainless steel), coating type (polyester, SMP, PVDF), order quantity, profile type (trapezoidal, standing seam), and delivery distance from Beawar. Bulk orders qualify for volume discounts.`,
      }
    );
  }

  if (isBrand) {
    faqs.push({
      question: `Why choose Phoenixx brand PUF roofing panels for projects in ${city.name}?`,
      answer: `Phoenixx PUF roofing panels are manufactured to IS 14925:2015 standards with 40±2 kg/m³ density PUF core, delivering industry-leading thermal conductivity of 0.024 W/mK. The Beawar warehouse maintains ready stock for rapid supply to ${city.name}, backed by dedicated project support and competitive pricing.`,
    });
  }

  if (isManufacturer) {
    faqs.push({
      question: `Is Phoenixx a PUF roofing panel manufacturer or trader in ${city.name}?`,
      answer: `Phoenixx Smart Build is a manufacturer, not a trader. Our panels are produced at our facility and supplied from the Beawar warehouse to ${city.name} and all major cities within 300 km. This ensures factory-direct quality and pricing.`,
    });
  }

  if (isSupplier) {
    faqs.push({
      question: `Does Phoenixx supply PUF roofing panels to industrial zones in ${city.name}?`,
      answer: `Yes, Phoenixx supplies PUF roofing panels to all industrial zones in ${city.name} including ${city.industrialZones.slice(0, 3).join(', ')}. Our Beawar warehouse maintains ready stock for fast dispatch.`,
    });
  }

  faqs.push(
    {
      question: `What certifications do Phoenixx PUF roofing panels carry?`,
      answer: `Phoenixx PUF roofing panels comply with IS 14925:2015 and are manufactured under ISO 9001:2015 and ISO 14001:2015 certified processes. FM 4880 Class 1 panels are available on request for projects requiring international fire safety certification.`,
    },
    {
      question: `Can Phoenixx provide installation support in ${city.name}?`,
      answer: `Phoenixx provides comprehensive technical guidance, installation manuals, and can recommend experienced roofing contractors in and around ${city.name}. On-site supervision is available for large projects.`,
    }
  );

  return faqs;
}

// ---------------------------------------------------------------------------
// Cross-city links for a given city (pick 5-6 nearby)
// ---------------------------------------------------------------------------

export function getCrossCityLinks(currentCity: GeoCity): { name: string; href: string; distance: number }[] {
  return Object.values(geoCities)
    .filter((c) => c.slug !== currentCity.slug)
    .map((c) => ({
      name: c.name,
      href: `/puf-roofing-panel-${c.slug}`,
      distance: Math.abs(c.distanceFromBeawar - currentCity.distanceFromBeawar) || c.distanceFromBeawar,
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 6);
}
