const fs = require('fs');
const path = require('path');

const pages = [
// PILLAR 1: E85 Basics & Ethanol Fuel
{ p: "Pillar: E85 Basics", t: "E85 Fuel in India: The Complete Guide to Ethanol Blending (2026)", k: "e85 fuel india", sk: "what is e85 fuel, ethanol blending india, flex fuel meaning", int: "Informational", s: "e85-fuel-india-guide", c: "What is E20 vs E85 Fuel? Key Differences Explained, Does Ethanol Damage Car Engines? Truth Revealed" },
{ p: "E85 Basics", t: "What is E20 vs E85 Fuel? Key Differences Explained", k: "e20 vs e85 fuel", sk: "difference between e20 and e85, e100 fuel, ethanol blend percentage", int: "Informational", s: "e20-vs-e85-difference", c: "" },
{ p: "E85 Basics", t: "Does Ethanol Damage Old Car Engines? The Truth Revealed", k: "does ethanol damage engines", sk: "e85 safe for old cars, ethanol corrosion in fuel lines, e20 engine problems", int: "Informational", s: "ethanol-engine-damage-truth", c: "" },
{ p: "E85 Basics", t: "E100 Fuel: Is India Ready for 100% Ethanol Vehicles?", k: "e100 fuel india", sk: "pure ethanol fuel, e100 bikes in india, nitin gadkari e100", int: "Informational", s: "e100-fuel-india-readiness", c: "" },
{ p: "E85 Basics", t: "Ethanol Octane Rating: Why E85 is 105 Octane (And What It Means)", k: "e85 octane rating", sk: "ethanol octane number, does e85 increase horsepower, premium petrol vs e85", int: "Informational", s: "e85-octane-rating-explained", c: "" },
{ p: "E85 Basics", t: "The History of Ethanol Fuel in India: From Sugarcane to Pumps", k: "history of ethanol fuel india", sk: "sugarcane ethanol production, biofuel policy timeline, ethanol blending history", int: "Informational", s: "history-ethanol-fuel-india", c: "" },
{ p: "E85 Basics", t: "Is E85 Fuel Better for the Environment? Emissions Compared", k: "e85 emissions", sk: "ethanol carbon footprint, e85 vs petrol pollution, green fuel benefits", int: "Informational", s: "e85-environmental-impact", c: "" },
{ p: "E85 Basics", t: "Sugarcane vs Corn Ethanol: How India Produces E85", k: "sugarcane ethanol india", sk: "corn ethanol vs sugarcane, 1g vs 2g ethanol, broken rice ethanol", int: "Informational", s: "sugarcane-vs-corn-ethanol-india", c: "" },
{ p: "E85 Basics", t: "How to Store E85 Fuel Safely at Home or Garage", k: "how to store e85 fuel", sk: "ethanol shelf life, does e85 go bad, water in ethanol tank", int: "Informational", s: "how-to-store-e85-safely", c: "" },
{ p: "E85 Basics", t: "E85 Fuel Glossary: Terms Every Flex Fuel Owner Must Know", k: "e85 glossary", sk: "flex fuel terminology, afr ratio, fuel trim meaning", int: "Informational", s: "e85-flex-fuel-glossary", c: "" },

// PILLAR 2: Flex Fuel Cars (FFVs)
{ p: "Pillar: Flex Fuel Cars", t: "Upcoming Flex Fuel Cars in India: 2026-2027 Launch Timeline", k: "upcoming flex fuel cars in india", sk: "maruti flex fuel cars, toyota e85 cars, bs6 phase 2 flex fuel", int: "Commercial Investigation", s: "upcoming-flex-fuel-cars-india", c: "Maruti Suzuki WagonR Flex Fuel Prototype Review, Toyota Innova HyCross Flex Fuel Specs" },
{ p: "Flex Fuel Cars", t: "Toyota Innova HyCross Flex Fuel: Launch Date, Price & Specs", k: "toyota innova flex fuel", sk: "innova hycross e85, toyota flex fuel launch, innova ethanol version", int: "Transactional", s: "toyota-innova-hycross-flex-fuel", c: "" },
{ p: "Flex Fuel Cars", t: "Maruti Suzuki WagonR Flex Fuel Prototype: What to Expect", k: "wagonr flex fuel", sk: "maruti suzuki e85 cars, wagon r ethanol price, wagonr flex engine", int: "Informational", s: "maruti-wagonr-flex-fuel-review", c: "" },
{ p: "Flex Fuel Cars", t: "Tata Nexon E85 Version: Rumors and Official Updates", k: "tata nexon flex fuel", sk: "tata motors ethanol cars, nexon e85 launch, tata e20 compatible", int: "Informational", s: "tata-nexon-e85-flex-fuel", c: "" },
{ p: "Flex Fuel Cars", t: "Hyundai Creta Flex Fuel: Is the Korean Giant Ready for E85?", k: "hyundai creta flex fuel", sk: "hyundai e85 compatibility, creta ethanol blend, hyundai flex fuel india", int: "Informational", s: "hyundai-creta-flex-fuel", c: "" },
{ p: "Flex Fuel Cars", t: "How Flex Fuel Engines Work: The Tech Behind E85 Sensors", k: "how flex fuel engines work", sk: "flex fuel sensor working, ecu tuning for e85, e85 fuel lines", int: "Informational", s: "how-flex-fuel-engines-work", c: "" },
{ p: "Flex Fuel Cars", t: "Top 5 Benefits of Buying a Flex Fuel Car in India", k: "benefits of flex fuel cars", sk: "why buy flex fuel car, e85 car advantages, petrol vs flex fuel car", int: "Informational", s: "benefits-of-flex-fuel-cars", c: "" },
{ p: "Flex Fuel Cars", t: "Flex Fuel vs Electric Vehicles (EVs): Which is Better for India?", k: "flex fuel vs ev", sk: "e85 vs electric cars, ev vs ethanol, future of mobility india", int: "Commercial Investigation", s: "flex-fuel-vs-ev-india", c: "" },
{ p: "Flex Fuel Cars", t: "BS6 Phase 2 Norms and E20/E85 Compatibility Explained", k: "bs6 phase 2 flex fuel", sk: "rde norms ethanol, obd2 port flex fuel, bs6 e20 compliance", int: "Informational", s: "bs6-phase-2-ethanol-compatibility", c: "" },
{ p: "Flex Fuel Cars", t: "Can I Use Regular Petrol in a Flex Fuel Car?", k: "petrol in flex fuel car", sk: "mixing petrol and e85, flex fuel tank mix, what happens if no e85", int: "Informational", s: "can-you-put-petrol-in-flex-fuel-car", c: "" },

// PILLAR 3: Flex Fuel Bikes & Scooters
{ p: "Pillar: Flex Fuel Bikes", t: "Best Flex Fuel Bikes & Scooters in India (2026 List)", k: "flex fuel bikes india", sk: "e85 motorcycles, flex fuel scooter price, top ethanol bikes", int: "Commercial Investigation", s: "best-flex-fuel-bikes-scooters-india", c: "TVS Apache RTR 160 4V FFV, Honda Activa Flex Fuel Launch" },
{ p: "Flex Fuel Bikes", t: "TVS Apache RTR 160 4V FFV (Flex Fuel): Price, Mileage & Specs", k: "tvs apache flex fuel", sk: "apache rtr 160 e85, tvs ethanol bike, apache ffv price", int: "Transactional", s: "tvs-apache-rtr-160-ffv-review", c: "" },
{ p: "Flex Fuel Bikes", t: "Honda Activa Flex Fuel Launch Timeline and Expected Price", k: "honda activa flex fuel", sk: "activa e85 scooter, honda ethanol scooter, activa 7g flex fuel", int: "Commercial Investigation", s: "honda-activa-flex-fuel-launch", c: "" },
{ p: "Flex Fuel Bikes", t: "Bajaj Pulsar NS160 Flex Fuel: Performance on E85", k: "bajaj pulsar flex fuel", sk: "pulsar ns160 e85, bajaj ethanol bikes, pulsar flex fuel mileage", int: "Informational", s: "bajaj-pulsar-ns160-flex-fuel", c: "" },
{ p: "Flex Fuel Bikes", t: "Hero Glamour XTEC Flex Fuel: The Commuter's Green Choice", k: "hero glamour flex fuel", sk: "hero motocorp ethanol bike, glamour xtec e85, hero flex fuel mileage", int: "Commercial Investigation", s: "hero-glamour-xtec-flex-fuel", c: "" },
{ p: "Flex Fuel Bikes", t: "Royal Enfield E85 Compatibility: Classic 350 on Flex Fuel?", k: "royal enfield flex fuel", sk: "classic 350 e85, royal enfield ethanol blend, re flex fuel launch", int: "Informational", s: "royal-enfield-flex-fuel-compatibility", c: "" },
{ p: "Flex Fuel Bikes", t: "Do Flex Fuel Bikes Have Lower Mileage? Real-World Tests", k: "flex fuel bike mileage", sk: "e85 vs petrol mileage bike, ethanol fuel efficiency, fuel economy of flex fuel bikes", int: "Informational", s: "flex-fuel-bike-mileage-test", c: "" },
{ p: "Flex Fuel Bikes", t: "Flex Fuel Scooters vs Electric Scooters: The Ultimate Comparison", k: "flex fuel vs electric scooter", sk: "ola s1 vs activa e85, ev vs ethanol scooter, cheaper running cost scooter", int: "Commercial Investigation", s: "flex-fuel-vs-electric-scooters", c: "" },
{ p: "Flex Fuel Bikes", t: "Carburetor vs Fuel Injection on E85 Bikes", k: "e85 carburetor vs fi", sk: "ethanol in carburetor, fi system for flex fuel, old bikes on e85", int: "Informational", s: "e85-carburetor-vs-fuel-injection", c: "" },
{ p: "Flex Fuel Bikes", t: "Maintenance Tips for Flex Fuel Motorcycles", k: "flex fuel bike maintenance", sk: "ethanol bike service, cleaning fuel injectors e85, spark plug change flex fuel", int: "Informational", s: "flex-fuel-motorcycle-maintenance-tips", c: "" },

// PILLAR 4: Conversion Kits
{ p: "Pillar: Conversion Kits", t: "E85 Conversion Kits in India: Price, Legality & Top Brands", k: "e85 conversion kit india", sk: "flex fuel kit price, e85 conversion legality, best ethanol kits", int: "Transactional", s: "e85-conversion-kits-india", c: "How to Install an E85 Conversion Kit, Are E85 Conversion Kits RTO Approved in India?" },
{ p: "Conversion Kits", t: "How to Install an E85 Conversion Kit in Your Car (Step-by-Step)", k: "how to install e85 conversion kit", sk: "diy flex fuel kit, e85 sensor installation, wire e85 pigtail", int: "Informational", s: "how-to-install-e85-conversion-kit", c: "" },
{ p: "Conversion Kits", t: "Are E85 Conversion Kits RTO Approved in India?", k: "e85 conversion kit legality india", sk: "rto approval for flex fuel kit, arai certification e85 kit, rc endorsement for ethanol", int: "Informational", s: "are-e85-conversion-kits-legal-india", c: "" },
{ p: "Conversion Kits", t: "Bosch vs Magneti Marelli: Best Flex Fuel Sensors Compared", k: "best flex fuel sensor", sk: "bosch flex fuel sensor, magneti marelli e85, flex fuel sensor price india", int: "Commercial Investigation", s: "bosch-vs-magneti-marelli-flex-fuel-sensors", c: "" },
{ p: "Conversion Kits", t: "Do You Need Upgraded Fuel Injectors for E85?", k: "e85 fuel injectors", sk: "larger injectors for ethanol, e85 injector flow rate, fuel pump upgrade for e85", int: "Informational", s: "do-you-need-upgraded-fuel-injectors-e85", c: "" },
{ p: "Conversion Kits", t: "Fuel Pump Upgrades for E85 Conversions (Walbro, AEM)", k: "e85 fuel pump", sk: "walbro 450 e85, aem ethanol fuel pump, e85 compatible fuel pumps india", int: "Commercial Investigation", s: "best-fuel-pump-upgrades-e85", c: "" },
{ p: "Conversion Kits", t: "Total Cost of Converting a Petrol Car to Flex Fuel in India", k: "cost of flex fuel conversion india", sk: "e85 kit installation price, fuel line replacement cost, ecu tuning price", int: "Informational", s: "cost-of-converting-petrol-to-flex-fuel", c: "" },
{ p: "Conversion Kits", t: "Can You Convert a Carbureted Engine to E85?", k: "convert carburetor to e85", sk: "e85 carburetor kit, old car ethanol conversion, maruti 800 e85", int: "Informational", s: "can-you-convert-carburetor-to-e85", c: "" },
{ p: "Conversion Kits", t: "Piggyback ECU vs Standalone ECU for E85 Tuning", k: "ecu tuning for e85", sk: "haltech e85, piggyback for flex fuel, remap for ethanol", int: "Informational", s: "piggyback-vs-standalone-ecu-e85", c: "" },
{ p: "Conversion Kits", t: "Will an E85 Conversion Kit Void My Car's Warranty?", k: "e85 conversion warranty", sk: "flex fuel kit voids warranty, aftermarket e85 insurance claim, dealer approval for e85 kit", int: "Informational", s: "will-e85-conversion-void-warranty", c: "" },

// PILLAR 5: Stations & Availability
{ p: "Pillar: E85 Stations", t: "E85 Fuel Stations in India: Complete City-Wise Directory (2026)", k: "e85 fuel stations india", sk: "where to buy e85, ethanol petrol pumps near me, iocl flex fuel stations", int: "Navigational", s: "e85-fuel-stations-india-directory", c: "E85 Stations in Delhi NCR, E85 Stations in Mumbai" },
{ p: "E85 Stations", t: "E85 Fuel Stations in Delhi NCR: Locations & Prices", k: "e85 fuel stations delhi", sk: "e85 petrol pump new delhi, gurgaon ethanol stations, noida e85 availability", int: "Navigational", s: "e85-fuel-stations-delhi-ncr", c: "" },
{ p: "E85 Stations", t: "E85 Fuel Stations in Mumbai & Pune: Locations Map", k: "e85 fuel stations mumbai", sk: "pune flex fuel pumps, navi mumbai ethanol stations, maharashtra e85", int: "Navigational", s: "e85-fuel-stations-mumbai-pune", c: "" },
{ p: "E85 Stations", t: "E85 Fuel Stations in Bengaluru & Hyderabad (South India Guide)", k: "e85 fuel stations bengaluru", sk: "hyderabad ethanol pumps, bangalore flex fuel stations, telangana e85", int: "Navigational", s: "e85-fuel-stations-bengaluru-hyderabad", c: "" },
{ p: "E85 Stations", t: "Indian Oil (IOCL) E85 Rollout Plan: Which Pumps Have Ethanol?", k: "iocl e85 stations", sk: "indian oil flex fuel, iocl ethanol pumps, xtra green e85", int: "Informational", s: "iocl-e85-fuel-stations-rollout", c: "" },
{ p: "E85 Stations", t: "Bharat Petroleum (BPCL) & HPCL Ethanol Network Map", k: "bpcl e85 stations", sk: "hpcl flex fuel, bharat petroleum ethanol blend, speed e85", int: "Informational", s: "bpcl-hpcl-e85-stations-map", c: "" },
{ p: "E85 Stations", t: "How to Check Live E85 Availability Before You Drive", k: "live e85 availability", sk: "e85 fuel app, check ethanol stock pump, flex fuel locator india", int: "Informational", s: "how-to-check-live-e85-availability", c: "" },
{ p: "E85 Stations", t: "Jio-bp and Nayara Energy E85 Launch Strategies", k: "jio bp e85", sk: "nayara ethanol pumps, private players e85, reliance flex fuel", int: "Informational", s: "jio-bp-nayara-e85-launch", c: "" },
{ p: "E85 Stations", t: "Highway Flex Fuel Corridors: Traveling on E85 in India", k: "e85 highway corridors india", sk: "delhi mumbai expressway e85, long drive on flex fuel, highway ethanol pumps", int: "Informational", s: "highway-flex-fuel-corridors-india", c: "" },
{ p: "E85 Stations", t: "Why Are Some States Faster at Deploying E85 Stations?", k: "e85 deployment states india", sk: "up ethanol policy, maharashtra flex fuel rollout, sugarcane producing states e85", int: "Informational", s: "state-wise-e85-deployment-speeds", c: "" },

// PILLAR 6: Government Policies
{ p: "Pillar: Gov Policies", t: "India's Ethanol Blending Programme (EBP): 2026 Policy Explained", k: "ethanol blending programme india", sk: "ebp policy 2025, national biofuel policy, nitin gadkari flex fuel", int: "Informational", s: "ethanol-blending-programme-india-policy", c: "Government Subsidies for Flex Fuel Vehicles, GST Rates on E85" },
{ p: "Gov Policies", t: "Government Subsidies & Tax Benefits for Flex Fuel Vehicles", k: "flex fuel vehicle subsidy india", sk: "tax break for e85 cars, road tax exemption flex fuel, fame scheme for ethanol", int: "Informational", s: "government-subsidies-flex-fuel-vehicles", c: "" },
{ p: "Gov Policies", t: "GST Rates on E85 Fuel and Flex Fuel Cars in India", k: "gst on e85 fuel", sk: "gst on flex fuel vehicles, ethanol tax rate, biofuel gst exemption", int: "Informational", s: "gst-rates-e85-fuel-cars", c: "" },
{ p: "Gov Policies", t: "Global Biofuels Alliance: What It Means for India's E85 Future", k: "global biofuels alliance", sk: "g20 biofuel alliance, india brazil usa ethanol, export of flex fuel tech", int: "Informational", s: "global-biofuels-alliance-impact-india", c: "" },
{ p: "Gov Policies", t: "Mandatory Flex Fuel Engine Regulations for OEMs (SIAM)", k: "mandatory flex fuel engines india", sk: "siam ethanol guidelines, car manufacturers e85 deadline, arai flex fuel testing", int: "Informational", s: "mandatory-flex-fuel-regulations-oems", c: "" },
{ p: "Gov Policies", t: "Sugar Mill Diversion Rules: How Govt Manages Ethanol Supply", k: "sugar mill ethanol diversion", sk: "b heavy molasses ethanol, sugarcane juice ethanol, govt limit on ethanol production", int: "Informational", s: "sugar-mill-ethanol-diversion-rules", c: "" },
{ p: "Gov Policies", t: "Maize/Corn based Ethanol Policies and MSP Incentives", k: "maize ethanol policy india", sk: "corn ethanol subsidy, grain based distilleries, msp for maize ethanol", int: "Informational", s: "maize-corn-ethanol-policies", c: "" },
{ p: "Gov Policies", t: "Exporting E85 Technology: India's Role in Global Biofuels", k: "india biofuel exports", sk: "exporting flex fuel bikes, bajaj flex fuel export, tvs ethanol bikes latam", int: "Informational", s: "exporting-e85-technology-india", c: "" },
{ p: "Gov Policies", t: "Flex Fuel vs FAME III: How Subsidies Compare to EVs", k: "fame 3 vs flex fuel", sk: "ev vs ethanol subsidies, govt push for ev vs e85, alternative fuels policy", int: "Commercial Investigation", s: "flex-fuel-vs-fame-3-subsidies", c: "" },
{ p: "Gov Policies", t: "State-Level Biofuel Policies: UP, Maharashtra, and Karnataka", k: "state biofuel policies india", sk: "up ethanol policy, maharashtra flex fuel subsidy, karnataka biofuel board", int: "Informational", s: "state-level-biofuel-policies", c: "" },

// PILLAR 7: Pricing & Economics
{ p: "Pillar: Economics", t: "E85 Fuel Price in India Today: Live Rates & Cost Calculator", k: "e85 fuel price india", sk: "ethanol price per litre, e85 vs petrol price, flex fuel cost calculator", int: "Transactional", s: "e85-fuel-price-india-today", c: "Is E85 Cheaper Than Petrol?, E85 vs CNG Cost per KM" },
{ p: "Economics", t: "Is E85 Really Cheaper Than Petrol? A Mathematical Breakdown", k: "is e85 cheaper than petrol", sk: "e85 cost per km, price difference e85 petrol, fuel economy drop e85", int: "Informational", s: "is-e85-really-cheaper-than-petrol", c: "" },
{ p: "Economics", t: "E85 vs CNG vs LPG: Cost Per KM Comparison in 2026", k: "e85 vs cng cost", sk: "cng vs flex fuel running cost, lpg vs ethanol cost, cheapest fuel india", int: "Commercial Investigation", s: "e85-vs-cng-vs-lpg-cost-per-km", c: "" },
{ p: "Economics", t: "How Global Oil Prices Affect E85 Ethanol Pricing in India", k: "crude oil vs ethanol price", sk: "brent crude effect on e85, why is ethanol price fixed, omc ethanol pricing", int: "Informational", s: "how-global-oil-prices-affect-e85", c: "" },
{ p: "Economics", t: "The Economics of Sugar Mills: Why They Are Pushing for E85", k: "sugar mill economics ethanol", sk: "sugar industry profit ethanol, balrampur chini ethanol, praj industries e85", int: "Informational", s: "economics-sugar-mills-pushing-e85", c: "" },
{ p: "Economics", t: "Resale Value of Flex Fuel Vehicles: Do They Hold Up?", k: "resale value flex fuel cars", sk: "used e85 cars price, depreciation of flex fuel bikes, buying second hand ffv", int: "Informational", s: "resale-value-flex-fuel-vehicles", c: "" },
{ p: "Economics", t: "Hidden Costs of E85: Maintenance, Oil Changes, and Filters", k: "hidden costs of e85", sk: "synthetic oil for flex fuel, fuel filter replacement frequency e85, e85 maintenance cost", int: "Informational", s: "hidden-costs-e85-maintenance", c: "" },
{ p: "Economics", t: "Will E85 Prices Drop Further with Grain-Based Ethanol?", k: "grain ethanol price impact", sk: "corn ethanol cheaper than sugarcane, 2g ethanol cost, future price of e85", int: "Informational", s: "will-e85-prices-drop-with-grain-ethanol", c: "" },
{ p: "Economics", t: "OMC Margins on E85: How Much Do Petrol Pumps Make?", k: "petrol pump margin on e85", sk: "dealer commission on ethanol, iocl profit margin flex fuel, e85 dealer network", int: "Informational", s: "omc-margins-petrol-pumps-e85", c: "" },
{ p: "Economics", t: "Taxation on Ethanol: Why Excise Duty Matters for End Consumers", k: "excise duty on ethanol", sk: "vat on e85 fuel, state taxes on flex fuel, why is e85 expensive in some states", int: "Informational", s: "taxation-on-ethanol-excise-duty", c: "" },

// PILLAR 8: Maintenance & Troubleshooting
{ p: "Pillar: Maintenance", t: "The Ultimate E85 Maintenance Guide for Flex Fuel Vehicles", k: "e85 maintenance guide", sk: "flex fuel service schedule, maintaining ethanol car, e85 bike maintenance", int: "Informational", s: "ultimate-e85-maintenance-guide", c: "Cold Start Issues on E85, How to Prevent Ethanol Corrosion" },
{ p: "Maintenance", t: "Cold Start Issues on E85 in Winters: Fixes & Block Heaters", k: "e85 cold start issues", sk: "car won't start in winter e85, ethanol freezing point, winter blend e85", int: "Informational", s: "cold-start-issues-e85-winters", c: "" },
{ p: "Maintenance", t: "How to Prevent Ethanol Corrosion in Fuel Lines and Tanks", k: "prevent ethanol corrosion", sk: "e85 safe fuel lines, ptfe hoses for ethanol, fuel tank rust e85", int: "Informational", s: "prevent-ethanol-corrosion-fuel-lines", c: "" },
{ p: "Maintenance", t: "Phase Separation in E85: What Happens When Water Mixes?", k: "e85 phase separation", sk: "water in ethanol tank, how to fix phase separation, ethanol absorbing moisture", int: "Informational", s: "phase-separation-e85-water", c: "" },
{ p: "Maintenance", t: "Best Engine Oils for E85 Flex Fuel Vehicles (Synthetic vs Blend)", k: "best engine oil for e85", sk: "sn plus oil for flex fuel, oil change interval e85, oil dilution with ethanol", int: "Commercial Investigation", s: "best-engine-oils-e85-flex-fuel", c: "" },
{ p: "Maintenance", t: "Fuel Injector Clogging on E85: Symptoms and Cleaning Solutions", k: "e85 fuel injector clogging", sk: "black goo on e85 injectors, flex fuel injector cleaner, how to clean ethanol injectors", int: "Informational", s: "fuel-injector-clogging-e85-solutions", c: "" },
{ p: "Maintenance", t: "Why You Need a Flex Fuel Compatible Fuel Filter", k: "e85 fuel filter", sk: "micron rating for e85 filter, stainless steel fuel filter ethanol, how often to change e85 filter", int: "Informational", s: "flex-fuel-compatible-fuel-filter", c: "" },
{ p: "Maintenance", t: "Check Engine Light on E85? Common OBD2 Error Codes", k: "e85 check engine light", sk: "p0171 lean code e85, flex fuel sensor error, obd2 scanner for e85 cars", int: "Informational", s: "check-engine-light-e85-obd2-codes", c: "" },
{ p: "Maintenance", t: "Spark Plug Upgrades for E85: Do You Need Colder Plugs?", k: "e85 spark plugs", sk: "colder spark plugs for ethanol, iridium plugs for flex fuel, spark plug gap e85", int: "Informational", s: "spark-plug-upgrades-e85", c: "" },
{ p: "Maintenance", t: "Long-Term Storage of E85 Vehicles: Fuel Stabilizers Explained", k: "e85 fuel stabilizer", sk: "leaving e85 in tank for months, sta-bil for ethanol, storing flex fuel car", int: "Informational", s: "long-term-storage-e85-fuel-stabilizers", c: "" },

// PILLAR 9: Performance & Racing
{ p: "Pillar: Performance", t: "E85 Performance Tuning: How to Unlock Maximum Horsepower", k: "e85 performance tuning", sk: "dyno tuning for e85, ethanol hp gains, flex fuel remap india", int: "Informational", s: "e85-performance-tuning-horsepower", c: "Why Turbos Love E85, E85 vs XP100" },
{ p: "Performance", t: "Why Turbocharged Cars Love E85 Fuel (Boost & Knock Resistance)", k: "e85 turbo cars", sk: "boost pressure on e85, ethanol knock suppression, turbo upgrade for flex fuel", int: "Informational", s: "why-turbocharged-cars-love-e85", c: "" },
{ p: "Performance", t: "E85 vs XP100 (100 Octane Petrol): Which Makes More Power?", k: "e85 vs xp100", sk: "100 octane petrol vs e85, speed 97 vs ethanol, best performance fuel india", int: "Commercial Investigation", s: "e85-vs-xp100-octane-petrol-power", c: "" },
{ p: "Performance", t: "Ignition Timing Advance on E85: The Tuner's Secret", k: "e85 ignition timing", sk: "timing advance ethanol, mbt timing e85, tuning maps for flex fuel", int: "Informational", s: "ignition-timing-advance-e85", c: "" },
{ p: "Performance", t: "Air/Fuel Ratio (AFR) for E85: Stoichiometric Basics", k: "e85 air fuel ratio", sk: "lambda 1 for e85, 9.7 afr ethanol, wideband o2 sensor for e85", int: "Informational", s: "air-fuel-ratio-afr-e85", c: "" },
{ p: "Performance", t: "Injector Duty Cycle (IDC) Limits When Switching to E85", k: "e85 injector duty cycle", sk: "maxing out injectors on e85, idc calculation flex fuel, 30 percent more fuel ethanol", int: "Informational", s: "injector-duty-cycle-limits-e85", c: "" },
{ p: "Performance", t: "Does E85 Run Cooler? Engine Temperature Myths", k: "does e85 run cooler", sk: "ethanol latent heat of vaporization, e85 egt temperatures, overheating fix with e85", int: "Informational", s: "does-e85-run-cooler-engine-temp", c: "" },
{ p: "Performance", t: "E85 Drag Racing in India: The Rise of Ethanol Motorsports", k: "e85 drag racing india", sk: "valley run e85 cars, motorsport ethanol rules, race gas vs e85", int: "Informational", s: "e85-drag-racing-india-motorsports", c: "" },
{ p: "Performance", t: "Can You Mix E85 and Methanol for Racing?", k: "e85 and methanol mix", sk: "water meth injection with e85, ethanol vs methanol racing, m1 vs e85", int: "Informational", s: "mix-e85-and-methanol-racing", c: "" },
{ p: "Performance", t: "Top 5 Performance Cars to Convert to E85 in India", k: "best cars to convert to e85", sk: "skoda octavia vrs e85, vw polo gti ethanol, bmw 330i flex fuel tune", int: "Informational", s: "top-5-performance-cars-e85-conversion", c: "" },

// PILLAR 10: Environmental & Industry Impacts
{ p: "Pillar: Industry Impact", t: "How E85 is Transforming India's Agricultural and Energy Sectors", k: "e85 impact on india economy", sk: "ethanol agricultural impact, forex savings from biofuels, green energy transition india", int: "Informational", s: "e85-transforming-india-economy", c: "Sugarcane Farmers Revenue, Deforestation Concerns" },
{ p: "Industry Impact", t: "How Ethanol Blending Boosts Sugarcane Farmers' Income", k: "ethanol sugarcane farmers income", sk: "frp for sugarcane, sugar mill arrears paid by ethanol, rural economy biofuels", int: "Informational", s: "ethanol-blending-sugarcane-farmers-income", c: "" },
{ p: "Industry Impact", t: "Forex Savings: How E85 Reduces India's Oil Import Bill", k: "india oil import bill ethanol", sk: "foreign exchange saved by biofuels, crude oil dependency reduction, energy security india", int: "Informational", s: "forex-savings-e85-oil-import-bill", c: "" },
{ p: "Industry Impact", t: "2G Ethanol Plants in India: Converting Agri-Waste to Fuel", k: "2g ethanol plants india", sk: "stubble burning ethanol, panipat 2g ethanol plant, lignocellulosic ethanol", int: "Informational", s: "2g-ethanol-plants-agri-waste-fuel", c: "" },
{ p: "Industry Impact", t: "Deforestation and Food vs Fuel Debate in India's E85 Push", k: "food vs fuel debate india", sk: "ethanol food security, land use change biofuels, sugarcane water consumption", int: "Informational", s: "food-vs-fuel-debate-india-e85", c: "" },
{ p: "Industry Impact", t: "Carbon Intensity of E85 vs EVs: A Well-to-Wheel Analysis", k: "e85 vs ev carbon footprint", sk: "well to wheel emissions ethanol, lifecycle analysis flex fuel, coal power ev vs e85", int: "Informational", s: "carbon-intensity-e85-vs-ev-well-to-wheel", c: "" },
{ p: "Industry Impact", t: "Praj Industries & Other Top Biofuel Companies in India", k: "biofuel companies in india", sk: "praj industries ethanol, balrampur chini mills, top ethanol stocks india", int: "Navigational", s: "top-biofuel-companies-india-praj", c: "" },
{ p: "Industry Impact", t: "Aviation Biofuels (SAF) vs E85: Synergies in Production", k: "sustainable aviation fuel india", sk: "saf from ethanol, alcohol to jet tech, biofuel refineries", int: "Informational", s: "aviation-biofuels-saf-vs-e85", c: "" },
{ p: "Industry Impact", t: "Water Consumption in Ethanol Production: Is it Sustainable?", k: "ethanol water consumption", sk: "sugarcane water footprint, zero liquid discharge ethanol plants, sustainable e85", int: "Informational", s: "water-consumption-ethanol-production-sustainable", c: "" },
{ p: "Industry Impact", t: "The Future of Hydrogen Blending vs Ethanol Blending", k: "hydrogen vs ethanol blending", sk: "h-cng vs e85, green hydrogen cars, future of ic engines india", int: "Informational", s: "future-hydrogen-vs-ethanol-blending", c: "" }
];

let markdown = `# E85 India - Complete 100-Page Topical Authority Architecture (SEO Strategy)

This architecture is uniquely researched to target real search intents for E85 and ethanol fuel in India, eliminating generic duplicates and addressing distinct user queries (informational, transactional, navigational). 

It establishes 10 Core Pillars, each supporting 9 deeply researched child pages. 

---

`;

let pageCounter = 1;
pages.forEach(page => {
    let type = page.t.includes("Pillar") || page.p.includes("Pillar:") ? "Pillar Page" : "Supporting Child Page";
    let priority = type === "Pillar Page" ? "High" : (page.int === "Transactional" || page.int === "Commercial Investigation" ? "High" : "Medium");
    let wordCount = type === "Pillar Page" ? "3000+ Words" : "1200 - 1800 Words";
    let parent = type === "Pillar Page" ? "Home (Root)" : page.p;

    markdown += `### Page ${pageCounter}: ${page.t}
- **Page Number:** ${pageCounter}
- **Page Type:** ${type}
- **SEO Title:** ${page.t}
- **Primary Keyword:** ${page.k}
- **Secondary Keywords:** ${page.sk}
- **Search Intent:** ${page.int}
- **URL Slug:** /blog/${page.s}
- **Parent Page:** ${parent}
- **Child Pages:** ${page.c ? page.c : "None"}
- **Internal Links:** Should link up to [${parent}], laterally to sibling topics under ${page.p}, and to the Fuel Station / Price Calculator utilities.
- **Meta Title:** ${page.t.substring(0, 50)}... | E85 India
- **Meta Description:** Comprehensive guide on ${page.k} in India. Discover insights about ${page.sk.split(',')[0]} and more expert advice on flex fuels.
- **Recommended Word Count:** ${wordCount}
- **Priority:** ${priority}

`;
    pageCounter++;
});

fs.writeFileSync(path.join(__dirname, '../topical_authority_plan_v2.md'), markdown);
console.log('Done writing v2');
