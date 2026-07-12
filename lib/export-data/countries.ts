import type { ExportCountry } from './types';
import { getCitiesForCountry } from './cities';

const DEFAULT_INDUSTRIES = [
  'cold-storage',
  'food-processing',
  'warehousing-logistics',
  'agri-processing',
  'mining',
];

function withCitySlugs(country: Omit<ExportCountry, 'citySlugs'> & { citySlugs?: string[] }): ExportCountry {
  const citySlugs = country.citySlugs ?? getCitiesForCountry(country.slug).map((c) => c.slug);
  return { ...country, citySlugs };
}

export const exportCountries: Record<string, ExportCountry> = {
  kenya: withCitySlugs({
    slug: 'kenya',
    name: 'Kenya',
    capital: 'Nairobi',
    region: 'east-africa',
    priority: 'high',
    metaTitle: 'PUF Panel Export to Kenya | Sandwich Panels & Cold Storage',
    metaDescription:
      'PHOENIXX SMARTBUILD exports PUF panels, sandwich panels, and cold storage solutions to Kenya. Factory-direct pricing, container shipping, and engineering support for East Africa.',
    climate:
      'Tropical along the coast, temperate in the highlands, with two rainy seasons. Temperatures range from 20°C to 35°C in most industrial zones.',
    industries: ['Agriculture & Agro-processing', 'Dairy & Food Processing', 'Pharmaceuticals', 'Logistics & Warehousing', 'Manufacturing', 'Cold Chain'],
    applications: ['Cold storage for horticulture exports', 'Food processing facilities', 'Warehouse roofing and walls', 'Pharmaceutical cleanrooms', 'Industrial sheds', 'PEB structures'],
    climateSuitability:
      'PUF and PIR sandwich panels perform well in Kenya\'s varied climate. The closed-cell foam core resists moisture absorption during monsoon seasons, while high R-value insulation reduces cooling costs in coastal and lowland areas where temperatures exceed 30°C regularly.',
    buildingConsiderations:
      'Import regulations and building codes vary by county and project type. Buyers should consult local building authorities and qualified structural engineers for compliance with Kenyan standards. PHOENIXX provides technical data sheets and panel test certificates to support import clearance and project approval processes.',
    exportCapability:
      'PHOENIXX SMARTBUILD manufactures sandwich PUF panels, PIR panels, roofing panels, and cold room panels at its Gujarat facility with ISO 9001 certified processes. [VERIFY: Confirm actual export experience and certifications for Kenya market before citing specific compliance claims.]',
    shippingNotes:
      'Standard export shipping from Mundra Port (Gujarat) to Mombasa Port typically takes 14–21 days. [VERIFY: Confirm actual shipping routes, transit times, and Incoterms offered.] PHOENIXX coordinates container booking and provides commercial invoice, packing list, and certificate of origin documentation.',
    containerLoading:
      'Panels are stacked vertically with protective interleaving and edge guards. A 40ft container typically accommodates 800–1,200 sqm of 50mm wall panels depending on profile and packaging. Roofing panels with trapezoidal profiles require custom stacking plans. Our logistics team provides optimised loading drawings before dispatch.',
    ports: ['Mombasa Port', 'Nairobi inland depot (via road from Mombasa)'],
    corridors: ['Mombasa–Nairobi highway', 'Northern Corridor to Uganda/Rwanda'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'pharmaceuticals', 'dairy-cold-chain'],
  }),
  tanzania: withCitySlugs({
    slug: 'tanzania',
    name: 'Tanzania',
    capital: 'Dar es Salaam',
    region: 'east-africa',
    priority: 'high',
    metaTitle: 'PUF Panel Export to Tanzania | Insulated Panels & Industrial Buildings',
    metaDescription:
      'Export PUF panels and sandwich panels to Tanzania from PHOENIXX SMARTBUILD. Cold storage, warehouse, and industrial building panels with container shipping to Dar es Salaam.',
    climate:
      'Tropical climate with coastal humidity and inland highland variations. Coastal areas experience high humidity (70–90%) and temperatures of 25–32°C year-round.',
    industries: ['Mining support infrastructure', 'Agriculture & cashew processing', 'Fisheries cold chain', 'Cement & construction materials', 'Pharmaceuticals', 'Logistics'],
    applications: ['Mining camp prefab buildings', 'Cold storage for fisheries', 'Agricultural processing plants', 'Warehouse construction', 'Industrial roofing', 'Cleanroom partitions'],
    climateSuitability:
      'PIR panels with enhanced fire performance are recommended for mining and industrial facilities. PUF panels with anti-condensation fleece suit coastal Dar es Salaam projects where humidity-driven condensation is a concern on metal roofing.',
    buildingConsiderations:
      'Tanzania Bureau of Standards (TBS) requirements may apply to imported building materials. PHOENIXX provides material test reports and product datasheets. Local structural engineers should verify wind load and seismic considerations for the specific site.',
    exportCapability:
      'Factory-manufactured insulated panels with thickness options from 30mm to 150mm. [VERIFY: Confirm Tanzania export history and any specific certifications required.]',
    shippingNotes:
      'Primary route: Mundra to Dar es Salaam port. Transit time approximately 16–24 days. Alternative routing via Durban for inland Tanzania destinations may be evaluated case by case.',
    containerLoading:
      'Flat-pack panel systems maximise container utilisation. Standard 40ft HC containers fit approximately 900–1,100 sqm of 40mm panels. Custom crating available for long-length roofing panels exceeding 12 metres.',
    ports: ['Dar es Salaam Port', 'Tanga Port'],
    corridors: ['Central Corridor to Rwanda/Burundi', 'Southern Corridor to Zambia'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'pharmaceuticals', 'mining'],
  }),
  uganda: withCitySlugs({
    slug: 'uganda',
    name: 'Uganda',
    capital: 'Kampala',
    region: 'east-africa',
    priority: 'high',
    metaTitle: 'PUF Panel Export to Uganda | Sandwich Panels for Cold Storage & Industry',
    metaDescription:
      'PHOENIXX SMARTBUILD exports insulated PUF panels to Uganda for cold storage, warehouses, and industrial buildings. Engineering support and container shipping from India.',
    climate:
      'Equatorial climate moderated by altitude. Kampala sits at 1,200m elevation with temperatures of 17–27°C. Two rainy seasons with high humidity.',
    industries: ['Coffee & tea processing', 'Dairy', 'Pharmaceuticals', 'Food & beverage', 'Horticulture exports', 'Construction'],
    applications: ['Coffee drying and storage facilities', 'Dairy cold rooms', 'Food processing plants', 'Pharmaceutical storage', 'Commercial warehouses', 'Prefab industrial buildings'],
    climateSuitability:
      'Uganda\'s moderate highland temperatures suit standard PUF panel specifications. For coffee and horticulture cold chain, 80–120mm panels maintain stable internal temperatures while reducing refrigeration energy consumption by 25–35% compared to conventional construction.',
    buildingConsiderations:
      'Uganda National Bureau of Standards (UNBS) may require conformity assessment for imported building products. Buyers should engage local agents for import duty classification and standards compliance verification.',
    exportCapability:
      'PHOENIXX supplies panels meeting IS 14925:2015 with optional FM-approved specifications. [VERIFY: Confirm Uganda-specific requirements.]',
    shippingNotes:
      'Typical routing via Mombasa (Kenya) with onward road transport to Kampala, or direct to Dar es Salaam with road transit. Total lead time including manufacturing: 4–6 weeks.',
    containerLoading:
      'Mixed container loads supported — panels, doors, and accessories in a single shipment. Nesting packaging reduces void space and shipping cost per square metre.',
    ports: ['Mombasa (transshipment)', 'Dar es Salaam (transshipment)'],
    corridors: ['Northern Corridor from Mombasa'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'pharmaceuticals', 'dairy-cold-chain', 'agri-processing'],
  }),
  rwanda: withCitySlugs({
    slug: 'rwanda',
    name: 'Rwanda',
    capital: 'Kigali',
    region: 'east-africa',
    priority: 'high',
    metaTitle: 'PUF Panel Export to Rwanda | Insulated Panels for Industry & Cold Chain',
    metaDescription:
      'Export sandwich PUF panels to Rwanda from PHOENIXX SMARTBUILD. Solutions for cold storage, food processing, and industrial construction with shipping support.',
    climate:
      'Temperate tropical highland climate. Kigali averages 19–27°C with moderate rainfall. Lower humidity than coastal East African cities.',
    industries: ['Coffee & tea', 'Food processing', 'Pharmaceuticals', 'Construction & real estate', 'Logistics', 'Mining (tin, tungsten)'],
    applications: ['Coffee washing station buildings', 'Cold storage for agricultural exports', 'Pharmaceutical warehouses', 'Light manufacturing facilities', 'Commercial cold rooms', 'PEB industrial sheds'],
    climateSuitability:
      'Rwanda\'s highland climate is well-suited to standard PUF panel performance. The moderate temperature range means 50–80mm panels suffice for most warehouse and processing applications, optimising cost without over-specifying insulation thickness.',
    buildingConsiderations:
      'Rwanda Housing Authority and Rwanda Standards Board requirements should be verified for each project. PHOENIXX provides technical documentation packages for import and building permit applications.',
    exportCapability:
      'Complete panel systems including walls, roofing, doors, and flashings. [VERIFY: Confirm Rwanda export experience.]',
    shippingNotes:
      'Landlocked country — panels typically route through Mombasa or Dar es Salaam ports with road transport to Kigali. Allow 3–5 weeks total transit from factory dispatch.',
    containerLoading:
      'Optimised flat-pack loading for overland transport. Panels secured with steel strapping and moisture-resistant wrapping for extended transit through varying climates.',
    ports: ['Mombasa/Dar es Salaam (transshipment)'],
    corridors: ['Central Corridor', 'Kigali SEZ logistics'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'pharmaceuticals', 'agri-processing'],
  }),
  ghana: withCitySlugs({
    slug: 'ghana',
    name: 'Ghana',
    capital: 'Accra',
    region: 'west-africa',
    priority: 'high',
    metaTitle: 'PUF Panel Export to Ghana | Sandwich Panels & Cold Storage Solutions',
    metaDescription:
      'PHOENIXX SMARTBUILD exports PUF panels to Ghana for warehouses, cold storage, and industrial buildings. Container shipping to Tema Port with engineering support.',
    climate:
      'Tropical with wet and dry seasons. Coastal Accra: 24–32°C year-round with high humidity. Northern regions are hotter and drier.',
    industries: ['Cocoa & cashew processing', 'Oil & gas support services', 'Mining (gold)', 'Food & beverage', 'Pharmaceuticals', 'Logistics & warehousing'],
    applications: ['Cocoa storage and processing facilities', 'Cold chain for perishable exports', 'Mining camp buildings', 'Oil & gas support structures', 'Industrial warehouses', 'Cleanroom facilities'],
    climateSuitability:
      'Ghana\'s coastal humidity demands panels with proper vapour barrier detailing and anti-condensation measures on roofing. PIR panels offer enhanced fire safety for oil & gas adjacent facilities. UV-resistant outer coatings (PVDF/SMP) extend panel life in high-solar-intensity conditions.',
    buildingConsiderations:
      'Ghana Standards Authority (GSA) certification may be required. Fire safety regulations for industrial buildings should be reviewed with local fire service authorities. PHOENIXX provides fire test reports and material safety datasheets.',
    exportCapability:
      'Panels manufactured to international standards with custom thickness and profile options. [VERIFY: Confirm Ghana market experience and GSA requirements.]',
    shippingNotes:
      'Direct shipping from Mundra to Tema Port, Accra. Transit time approximately 18–25 days. CIF and FOB terms available. [VERIFY: Confirm Incoterms.]',
    containerLoading:
      '40ft containers accommodate 800–1,000 sqm of standard wall panels. Roofing panels with 11.8m length require open-top or flat-rack containers — logistics team advises optimal configuration.',
    ports: ['Tema Port', 'Takoradi Port'],
    corridors: ['Tema–Accra industrial belt', 'Boankra inland port corridor'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'pharmaceuticals', 'oil-gas', 'mining'],
  }),
  zambia: withCitySlugs({
    slug: 'zambia',
    name: 'Zambia',
    capital: 'Lusaka',
    region: 'southern-africa',
    priority: 'high',
    metaTitle: 'PUF Panel Export to Zambia | Insulated Panels for Mining & Industry',
    metaDescription:
      'Export PUF and sandwich panels to Zambia from PHOENIXX SMARTBUILD. Solutions for mining infrastructure, cold storage, and industrial buildings in Southern Africa.',
    climate:
      'Subtropical with three seasons: cool dry (May–Aug), hot dry (Sep–Nov), warm wet (Dec–Apr). Lusaka: 15–32°C range. Copperbelt region experiences high rainfall.',
    industries: ['Copper mining', 'Agriculture & agro-processing', 'Cement production', 'Food & beverage', 'Pharmaceuticals', 'Construction'],
    applications: ['Mining camp accommodation and facilities', 'Copper processing plant buildings', 'Agricultural cold storage', 'Cement plant structures', 'Industrial warehouses', 'Food processing facilities'],
    climateSuitability:
      'Zambia\'s temperature range suits both PUF and PIR panels. Mining facilities in the Copperbelt benefit from Rockwool panels\' A1 fire rating where process heat and fire risk are elevated. Standard PUF panels perform well for warehouses and agricultural applications.',
    buildingConsiderations:
      'Zambia Bureau of Standards (ZABS) requirements apply to imported building materials. Mining sector projects often have additional HSE requirements — PHOENIXX provides fire rating documentation and material compliance certificates.',
    exportCapability:
      'Full range of sandwich panels, doors, and cleanroom systems. [VERIFY: Confirm Zambia export track record.]',
    shippingNotes:
      'Routing via Durban (South Africa) to Dar es Salaam with road transport to Lusaka, or via Walvis Bay (Namibia). Total transit 4–6 weeks from dispatch.',
    containerLoading:
      'Heavy-duty packaging for extended overland transit. Panel edges protected with HDPE guards. Moisture barrier wrapping standard for all export shipments.',
    ports: ['Durban (transshipment)', 'Dar es Salaam (transshipment)', 'Walvis Bay (transshipment)'],
    corridors: ['Copperbelt mining corridor', 'Lusaka South MFEZ'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'mining', 'pharmaceuticals'],
  }),
  botswana: withCitySlugs({
    slug: 'botswana',
    name: 'Botswana',
    capital: 'Gaborone',
    region: 'southern-africa',
    priority: 'high',
    metaTitle: 'PUF Panel Export to Botswana | Sandwich Panels for Industry & Cold Chain',
    metaDescription:
      'PHOENIXX SMARTBUILD exports insulated sandwich panels to Botswana. Mining, agriculture, and industrial building solutions with container shipping support.',
    climate:
      'Semi-arid with hot summers (35–40°C) and mild winters. Low rainfall (250–650mm annually). High solar radiation year-round.',
    industries: ['Diamond mining', 'Beef & livestock', 'Tourism infrastructure', 'Financial services buildings', 'Food processing', 'Construction'],
    applications: ['Mining support buildings', 'Meat cold storage and processing', 'Tourism lodge construction', 'Commercial warehouses', 'Agricultural storage', 'Industrial sheds'],
    climateSuitability:
      'Botswana\'s extreme summer heat makes insulation critical. PUF roofing panels with 80–100mm thickness reduce internal temperatures by 8–12°C compared to uninsulated metal sheeting. PVDF coatings withstand intense UV exposure in semi-arid conditions.',
    buildingConsiderations:
      'Botswana Bureau of Standards (BOBS) may require product registration. Building codes for industrial structures should be verified with local authorities. Dust sealing at panel joints is important in semi-arid environments.',
    exportCapability:
      'Panels engineered for high-temperature performance with UV-resistant coatings. [VERIFY: Confirm Botswana market requirements.]',
    shippingNotes:
      'Primary route via Durban to Gaborone by road. Alternative: Walvis Bay corridor. Manufacturing lead time 2–3 weeks plus 3–4 weeks transit.',
    containerLoading:
      'Standard container loading with dust-sealed packaging. Panel accessories (flashings, screws, sealants) included in the same container to minimise on-site procurement delays.',
    ports: ['Durban (transshipment)', 'Walvis Bay (transshipment)'],
    corridors: ['Durban–Gaborone road', 'Walvis Bay corridor'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'mining', 'dairy-cold-chain'],
  }),
  namibia: withCitySlugs({
    slug: 'namibia',
    name: 'Namibia',
    capital: 'Windhoek',
    region: 'southern-africa',
    priority: 'high',
    metaTitle: 'PUF Panel Export to Namibia | PUF Panels for Mining & Industrial Buildings',
    metaDescription:
      'Export PUF panels and sandwich panels to Namibia from PHOENIXX SMARTBUILD. Mining, cold storage, and industrial construction with Walvis Bay shipping.',
    climate:
      'Arid to semi-arid. Coastal Namib Desert: cool, fog-influenced. Interior: hot summers (35°C+), cold winter nights. Low humidity except coastal areas.',
    industries: ['Mining (uranium, diamonds, zinc)', 'Fishing & seafood processing', 'Agriculture', 'Tourism', 'Logistics (Walvis Bay port)', 'Construction'],
    applications: ['Uranium mine processing buildings', 'Seafood cold storage at Walvis Bay', 'Mining accommodation camps', 'Port logistics warehouses', 'Agricultural storage', 'Tourism infrastructure'],
    climateSuitability:
      'Namibia\'s extreme temperature swings (hot days, cold nights) demand panels with consistent thermal performance across the full service temperature range. PUF panels (-40°C to +80°C) handle both extremes. Coastal fog zones require corrosion-resistant coatings (SMP or PVDF on galvalume substrates).',
    buildingConsiderations:
      'Namibian Standards Institution (NSI) requirements should be confirmed. Mining projects typically require additional fire safety documentation. Walvis Bay port clearance procedures should be planned in advance.',
    exportCapability:
      'Corrosion-resistant panel options for coastal and arid environments. [VERIFY: Confirm Namibia export experience.]',
    shippingNotes:
      'Walvis Bay Port is the primary entry point. Direct shipping from India to Walvis Bay available. Transit approximately 20–28 days.',
    containerLoading:
      'Salt-spray resistant packaging for coastal delivery. Panels pre-cut to container-friendly lengths where possible to maximise load efficiency.',
    ports: ['Walvis Bay Port'],
    corridors: ['Walvis Bay–Windhoek corridor', 'Trans-Kalahari to Botswana'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'mining', 'food-processing'],
  }),
  mozambique: withCitySlugs({
    slug: 'mozambique',
    name: 'Mozambique',
    capital: 'Maputo',
    region: 'southern-africa',
    priority: 'high',
    metaTitle: 'PUF Panel Export to Mozambique | Sandwich Panels & Cold Storage',
    metaDescription:
      'PHOENIXX SMARTBUILD exports PUF panels to Mozambique for industrial buildings, cold storage, and mining infrastructure. Shipping to Maputo and Beira ports.',
    climate:
      'Tropical to subtropical. Coastal areas: hot and humid (25–35°C). Cyclone risk in coastal regions during November–April.',
    industries: ['Natural gas (Cabo Delgado)', 'Coal mining (Tete)', 'Agriculture & cashew', 'Fisheries', 'Construction', 'Logistics'],
    applications: ['LNG project support buildings', 'Coal mining infrastructure', 'Cashew processing plants', 'Fisheries cold storage', 'Port logistics warehouses', 'Industrial facilities'],
    climateSuitability:
      'Coastal Mozambique\'s high humidity and cyclone exposure require robust panel fixing systems and wind-load-rated profiles. Standing seam roofing with concealed fasteners is recommended for cyclone-prone zones. PIR panels preferred for gas industry adjacent facilities.',
    buildingConsiderations:
      'Instituto Nacional de Normalização e Qualidade (INNOQ) standards apply. Cyclone-prone areas require wind load calculations per local codes. PHOENIXX provides wind resistance test data for trapezoidal roofing profiles.',
    exportCapability:
      'Wind-rated roofing panels and fire-rated PIR panels for energy sector projects. [VERIFY: Confirm Mozambique project experience.]',
    shippingNotes:
      'Maputo and Beira ports served from Indian ports. Beira offers better access for central Mozambique mining projects. Transit 18–25 days.',
    containerLoading:
      'Reinforced packaging for tropical transit conditions. Anti-moisture silica gel packs included in sealed panel bundles.',
    ports: ['Maputo Port', 'Beira Port', 'Nacala Port'],
    corridors: ['Maputo corridor', 'Beira–Tete mining corridor', 'Cabo Delgado LNG zone'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'mining', 'oil-gas'],
  }),
  angola: withCitySlugs({
    slug: 'angola',
    name: 'Angola',
    capital: 'Luanda',
    region: 'southern-africa',
    priority: 'high',
    metaTitle: 'PUF Panel Export to Angola | Insulated Panels for Oil, Mining & Industry',
    metaDescription:
      'Export sandwich PUF panels to Angola from PHOENIXX SMARTBUILD. Oil & gas, mining, and industrial building panels with shipping to Luanda Port.',
    climate:
      'Tropical in north, arid in south. Luanda: 23–30°C with high humidity. Rainy season October–April in the north.',
    industries: ['Oil & gas', 'Diamond mining', 'Agriculture', 'Construction & infrastructure', 'Food processing', 'Fisheries'],
    applications: ['Oil & gas support facilities', 'Diamond mining camp buildings', 'Agricultural processing plants', 'Cold storage for fisheries', 'Commercial warehouses', 'Prefab accommodation'],
    climateSuitability:
      'Angola\'s oil & gas sector demands fire-rated panel systems. PIR panels (B-s1,d0) and Rockwool panels (A1/A2) are recommended for hydrocarbon-adjacent facilities. Standard PUF panels suit agricultural and commercial applications in the milder southern regions.',
    buildingConsiderations:
      'Instituto Angolano de Normalização (IANORQ) requirements may apply. Oil & gas projects typically require additional HSE compliance documentation. Import procedures in Angola can be complex — buyers should engage experienced local clearing agents.',
    exportCapability:
      'Fire-rated panel portfolio including PIR and Rockwool options for energy sector projects. [VERIFY: Confirm Angola export experience and IANORQ requirements.]',
    shippingNotes:
      'Luanda Port is the primary entry point. Transit from Mundra approximately 22–30 days. [VERIFY: Confirm shipping frequency and preferred Incoterms.]',
    containerLoading:
      'Full-container and less-than-container (LCL) options available. Fire-rated panels shipped with MSDS and fire test certificates attached to container documentation for faster customs clearance.',
    ports: ['Luanda Port', 'Lobito Port'],
    corridors: ['Lobito Corridor', 'Luanda-Bengo SEZ'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'oil-gas', 'mining'],
  }),
  'south-africa': withCitySlugs({
    slug: 'south-africa',
    name: 'South Africa',
    capital: 'Pretoria',
    region: 'southern-africa',
    priority: 'medium',
    metaTitle: 'PUF Panel Export to South Africa | Insulated Sandwich Panels & PEB',
    metaDescription:
      'PHOENIXX SMARTBUILD exports PUF panels, PIR panels, and industrial building systems to South Africa. Engineering support and container shipping to Durban and Cape Town.',
    climate:
      'Varied: Mediterranean Cape, subtropical KwaZulu-Natal, highveld interior. Summer temperatures 25–35°C in industrial zones with regional frost in winter highveld.',
    industries: ['Mining', 'Automotive support', 'Food & beverage', 'Pharma', 'Logistics', 'Renewable energy'],
    applications: ['Distribution warehouses', 'Mining support buildings', 'Automotive supplier facilities', 'Cold storage', 'PEB industrial sheds', 'Cleanroom partitions'],
    climateSuitability:
      'South Africa\'s diverse climate zones require project-specific panel specification — coastal corrosion resistance, highveld thermal cycling, and fire-rated options for industrial process buildings.',
    buildingConsiderations:
      'South African Bureau of Standards (SABS) and National Building Regulations apply. Local structural engineers should verify wind, fire, and thermal requirements. PHOENIXX provides test certificates and technical datasheets for import clearance.',
    exportCapability:
      'Full sandwich panel portfolio with ISO 9001 manufacturing. [VERIFY: Confirm South Africa export experience and SABS requirements.]',
    shippingNotes:
      'Primary ports: Durban, Cape Town, Port Elizabeth/Ngqura. Direct shipping from Mundra 18–28 days. [VERIFY: Confirm Incoterms and customs procedures.]',
    containerLoading:
      'Standard 40ft HC loading with edge protection. Mixed loads of panels, doors, and accessories supported.',
    ports: ['Durban Port', 'Cape Town Port', 'Port of Ngqura'],
    corridors: ['Gauteng logistics belt', 'Coega IDZ'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'pharmaceuticals', 'mining', 'oil-gas'],
  }),
  nigeria: withCitySlugs({
    slug: 'nigeria',
    name: 'Nigeria',
    capital: 'Abuja',
    region: 'west-africa',
    priority: 'medium',
    metaTitle: 'PUF Panel Export to Nigeria | Sandwich Panels for Industry & Cold Storage',
    metaDescription:
      'Export insulated PUF panels to Nigeria from PHOENIXX SMARTBUILD. Warehouses, cold storage, oil & gas support, and industrial buildings with shipping to Lagos.',
    climate:
      'Tropical: hot and humid in the south (Lagos, Port Harcourt), drier in the north (Kano). Temperatures 28–38°C in coastal industrial zones.',
    industries: ['Oil & gas', 'Food & beverage', 'Pharma', 'Cement', 'Logistics', 'Agro-processing'],
    applications: ['Port-adjacent warehouses', 'Oil & gas support facilities', 'Food processing plants', 'Pharma storage', 'Cold chain hubs', 'PEB structures'],
    climateSuitability:
      'High humidity in Lagos and Port Harcourt requires anti-condensation detailing. PIR panels recommended for oil & gas adjacent facilities. UV-resistant coatings essential for long service life.',
    buildingConsiderations:
      'SON (Standards Organisation of Nigeria) requirements may apply. Import procedures can be complex — experienced clearing agents recommended. PHOENIXX provides documentation packages for customs.',
    exportCapability:
      'Panels manufactured to international standards with fire-rated options. [VERIFY: Confirm Nigeria export experience.]',
    shippingNotes:
      'Lagos and Port Harcourt ports served from Indian ports. Transit 20–30 days. [VERIFY: Confirm routing and Incoterms.]',
    containerLoading:
      'Moisture-resistant packaging for tropical transit. Full-container and LCL options.',
    ports: ['Lagos Port Complex', 'Port Harcourt Port'],
    corridors: ['Lagos industrial belt', 'Lekki Free Zone corridor'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'oil-gas', 'pharmaceuticals'],
  }),
  zimbabwe: withCitySlugs({
    slug: 'zimbabwe',
    name: 'Zimbabwe',
    capital: 'Harare',
    region: 'southern-africa',
    priority: 'medium',
    metaTitle: 'PUF Panel Export to Zimbabwe | Insulated Panels for Industry',
    metaDescription:
      'PHOENIXX SMARTBUILD exports sandwich PUF panels to Zimbabwe for warehouses, tobacco processing, mining support, and industrial buildings.',
    climate:
      'Subtropical highveld: warm wet summers (25–30°C), mild dry winters. Lower veld regions hotter.',
    industries: ['Mining', 'Tobacco processing', 'Agriculture', 'Food & beverage', 'Construction', 'Logistics'],
    applications: ['Tobacco processing facilities', 'Mining support buildings', 'Agricultural storage', 'Industrial warehouses', 'Cold storage', 'PEB sheds'],
    climateSuitability:
      'Standard PUF specifications suit most Zimbabwe industrial applications. Mining projects may require Rockwool fire-rated panels.',
    buildingConsiderations:
      'SAZ (Standards Association of Zimbabwe) requirements should be verified. Import and payment logistics require planning with local partners.',
    exportCapability:
      'Insulated panel systems with optional fire-rated specifications. [VERIFY: Confirm Zimbabwe export experience.]',
    shippingNotes:
      'Routing via Durban or Beira with road transport to Harare. Total transit 4–6 weeks.',
    containerLoading:
      'Heavy-duty packaging for overland transit from regional ports.',
    ports: ['Durban (transshipment)', 'Beira (transshipment)'],
    corridors: ['Harare–Bulawayo industrial corridor'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'mining', 'agri-processing'],
  }),
  ethiopia: withCitySlugs({
    slug: 'ethiopia',
    name: 'Ethiopia',
    capital: 'Addis Ababa',
    region: 'east-africa',
    priority: 'medium',
    metaTitle: 'PUF Panel Export to Ethiopia | Insulated Panels for Industry & Pharma',
    metaDescription:
      'Export PUF panels to Ethiopia from PHOENIXX SMARTBUILD for industrial parks, pharma facilities, textiles, and cold storage — shipping via Djibouti corridor.',
    climate:
      'Highland climate in Addis Ababa (15–25°C). Lowland areas hotter and drier. Two rainy seasons in most regions.',
    industries: ['Textiles', 'Pharma', 'Agro-processing', 'Leather', 'Construction', 'Logistics'],
    applications: ['Industrial park buildings', 'Pharma manufacturing zones', 'Textile processing halls', 'Cold storage', 'Warehouses', 'PEB structures'],
    climateSuitability:
      'Highland temperatures suit standard PUF panels. Industrial parks benefit from rapid-build insulated envelopes.',
    buildingConsiderations:
      'Ethiopian Standards Agency requirements apply. Landlocked — imports route through Djibouti Port. PHOENIXX provides technical documentation for customs.',
    exportCapability:
      'Panels for industrial park and pharma applications. [VERIFY: Confirm Ethiopia export experience.]',
    shippingNotes:
      'Primary route: Mundra to Djibouti Port, road/rail to Addis Ababa. Total lead time 5–7 weeks.',
    containerLoading:
      'Optimised flat-pack for extended overland transit from Djibouti.',
    ports: ['Djibouti Port (transshipment)'],
    corridors: ['Djibouti–Addis Ababa corridor', 'Hawassa Industrial Park'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'pharmaceuticals', 'food-processing'],
  }),
  mauritius: withCitySlugs({
    slug: 'mauritius',
    name: 'Mauritius',
    capital: 'Port Louis',
    region: 'indian-ocean',
    priority: 'medium',
    metaTitle: 'PUF Panel Export to Mauritius | Insulated Panels for Logistics & Industry',
    metaDescription:
      'PHOENIXX SMARTBUILD exports sandwich panels to Mauritius for logistics warehouses, seafood processing, and industrial facilities — Indian Ocean shipping.',
    climate:
      'Tropical maritime: warm year-round (22–30°C), cyclone season November–April. High humidity.',
    industries: ['Logistics', 'Seafood processing', 'Textiles', 'Financial services', 'Tourism', 'Manufacturing'],
    applications: ['Port-adjacent warehouses', 'Seafood cold storage', 'Light manufacturing', 'Free zone buildings', 'Tourism infrastructure'],
    climateSuitability:
      'Cyclone-rated fixing systems recommended. Corrosion-resistant coatings for coastal humidity. PUF panels reduce cooling loads in warehouse applications.',
    buildingConsiderations:
      'Mauritius Standards Bureau requirements apply. Cyclone wind load compliance essential for roofing systems.',
    exportCapability:
      'Insulated panels with coastal-environment coatings. [VERIFY: Confirm Mauritius export experience.]',
    shippingNotes:
      'Direct shipping from Indian ports to Port Louis. Transit approximately 12–18 days.',
    containerLoading:
      'Standard container loading with cyclone-season moisture protection.',
    ports: ['Port Louis Harbour'],
    corridors: ['Jin Fei Economic Trade Zone', 'Port Louis logistics belt'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'food-processing'],
  }),
  drc: withCitySlugs({
    slug: 'drc',
    name: 'Democratic Republic of Congo',
    capital: 'Kinshasa',
    region: 'central-africa',
    priority: 'medium',
    metaTitle: 'PUF Panel Export to DRC | Insulated Panels for Mining & Industry',
    metaDescription:
      'Export sandwich PUF panels to the Democratic Republic of Congo from PHOENIXX SMARTBUILD. Mining infrastructure, warehouses, and industrial buildings.',
    climate:
      'Tropical: equatorial in the centre, wetter in the east. Kinshasa: 22–32°C. High rainfall in eastern mining regions.',
    industries: ['Copper & cobalt mining', 'Diamonds', 'Agriculture', 'Construction', 'Logistics', 'Food processing'],
    applications: ['Mining camp and processing buildings', 'Copperbelt infrastructure', 'Warehouse construction', 'Cold storage', 'Prefab accommodation', 'Industrial sheds'],
    climateSuitability:
      'Mining projects in Katanga benefit from fire-rated Rockwool and PIR panels. Standard PUF for warehouses and commercial applications.',
    buildingConsiderations:
      'Import procedures vary by region. Eastern DRC often routes via Dar es Salaam or Durban. PHOENIXX provides HSE and fire documentation for mining clients.',
    exportCapability:
      'Fire-rated and standard panel portfolio for mining and industrial projects. [VERIFY: Confirm DRC export experience.]',
    shippingNotes:
      'Kinshasa via Matadi Port or transshipment routes. Lubumbashi via Dar es Salaam or Durban corridor. [VERIFY: Confirm preferred routing.]',
    containerLoading:
      'Heavy-duty packaging for extended overland transit in mining corridors.',
    ports: ['Matadi Port', 'Dar es Salaam (transshipment for Lubumbashi)'],
    corridors: ['Copperbelt Lubumbashi–Kolwezi', 'Kinshasa industrial zone'],
    industrySlugs: [...DEFAULT_INDUSTRIES, 'mining', 'oil-gas'],
  }),
};

export const EXPORT_REGION_LABELS: Record<string, string> = {
  'east-africa': 'East Africa',
  'west-africa': 'West Africa',
  'southern-africa': 'Southern Africa',
  'central-africa': 'Central Africa',
  'indian-ocean': 'Indian Ocean',
};
