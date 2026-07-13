---
title: "How Long Will E85 Compatible Cars Last?"
description: "An engineering perspective on the lifespan of Flex-Fuel Vehicles (FFVs) under sustained high-ethanol use compared to petrol counterparts."
date: 2026-07-13
category: "Tech & Maintenance"
tags: ["FFV Lifespan", "Engine Longevity", "Ethanol Degradation", "Maintenance Tips", "Car Durability"]
author: "E85 India"
---

## Introduction: The Ethanol Paradigm Shift

The global automotive landscape is undergoing a silent but significant diversification in fuel chemistry. As nations strive to reduce carbon emissions and decouple their economies from fossil fuel volatility, biofuels have emerged as a critical transitional technology. Among these, E85—a high-blend fuel consisting of up to 85% ethanol and 15% gasoline—stands as the most prominent alternative for internal combustion engines (ICEs). Vehicles designed to operate on this fuel, known as Flex-Fuel Vehicles (FFVs), are engineered to seamlessly digest varying ratios of gasoline and ethanol.

However, the widespread adoption of high-ethanol blends has triggered intense debate among automotive enthusiasts, fleet managers, and mechanical engineers alike: *How long will E85 compatible cars actually last?* 

Historically, ethanol has earned a reputation as a hostile agent inside standard gasoline engines. It is accused of corroding fuel lines, dissolving fuel pumps, washing away cylinder lubricants, and shortening the overall service life of the powertrain. While these criticisms are valid for standard petrol vehicles running unauthorized high-ethanol blends, factory-built Flex-Fuel Vehicles are designed from the ground up to withstand these chemical challenges.

To answer the longevity question, we must look beyond marketing brochures and dive deep into the tribology, materials science, and chemical engineering of modern flex-fuel systems. By comparing the wear mechanisms of sustained E85 combustion against traditional petrol engines, we can establish realistic mileage expectations, identify potential failure points, and outline the engineering realities of long-term high-ethanol vehicle ownership.

---

## Chemistry & Combustion: Ethanol vs. Gasoline

To understand why E85 affects engine longevity, we must first analyze the fundamental chemical and physical differences between ethanol ($C_2H_5OH$) and standard octane-based gasoline (typically modeled as $C_8H_{18}$).

```
Ethanol Molecule:      H   H
                       |   |
                    H--C---C--O--H  <-- Hydroxyl Group (polar, hygroscopic)
                       |   |
                       H   H

Gasoline (Octane):     H   H   H   H   H   H   H   H
                       |   |   |   |   |   |   |   |
                    H--C---C---C---C---C---C---C---C--H  <-- Non-polar Hydrocarbon
                       |   |   |   |   |   |   |   |
                       H   H   H   H   H   H   H   H
```

### 1. Stoichiometry and Energy Density
The stoichiometric air-fuel ratio (the exact ratio of air to fuel required for complete combustion) for pure gasoline is approximately 14.7:1. In contrast, pure ethanol has a stoichiometric ratio of 9.0:1, and E85 sits around 9.7:1 to 10.0:1 depending on the seasonal blend. 

Because ethanol contains oxygen bound within its molecular structure, it requires significantly less atmospheric oxygen to burn. Consequently, to produce the same thermal energy and maintain stoichiometric balance, an engine must inject roughly 30% to 35% more fuel by volume when running on E85 compared to pure gasoline. This increased fuel volume has direct implications for fuel pump workload, fuel injector duty cycles, and crankcase oil dilution.

### 2. Octane Rating and Cylinder Pressures
E85 boasts an exceptionally high octane rating, typically ranging from 100 to 105 RON (Research Octane Number). This high knock resistance allows engine control modules (ECMs) to advance ignition timing and increase boost pressures in turbocharged engines without inducing destructive pre-ignition or detonation. 

While this translates to higher power output, it also subjects the engine's rotating assembly (pistons, connecting rods, wrist pins, and crankshaft bearings) to higher peak cylinder pressures. Over hundreds of thousands of miles, these elevated mechanical stresses can accelerate structural fatigue in engines that are not structurally reinforced.

### 3. Latent Heat of Vaporization
One of the most beneficial characteristics of ethanol is its high latent heat of vaporization. Ethanol requires approximately 840 kJ/kg of energy to transition from a liquid to a gas, whereas gasoline requires only about 305 kJ/kg. 

When E85 is injected into the intake port or directly into the cylinder, it evaporates and absorbs a tremendous amount of heat from the surrounding air and metal surfaces. This cooling effect decreases the intake charge temperature, increasing air density and further reducing the risk of engine knock. However, as we will explore later, this high cooling capacity can prevent the fuel from fully vaporizing during cold starts, leading to liquid fuel pooling on cylinder walls.

---

## Hardware Engineering: The Anatomy of a Flex-Fuel Vehicle

A common misconception is that a Flex-Fuel Vehicle is simply a standard petrol car with a modified ECU. In reality, adapting a vehicle for sustained E85 use requires comprehensive hardware upgrades across the entire fuel delivery and combustion systems. 

Here is how a factory-built FFV differs from its standard petrol counterpart:

```
+--------------------------------------------------------------------------+
|                        Flex-Fuel Vehicle System                          |
+--------------------------------------------------------------------------+
  [Fuel Tank] ----> [Fuel Pump] ----> [Flex-Fuel Sensor] ----> [Fuel Rail]
  (Stainless/       (Carbon/          (Monitors ethanol        (Stainless/
   HDPE Plastic)     Brushless)        percentage)              No Copper)
                                                                   |
                                                                   v
  [Valves & Seats] <--- [Pistons & Rings] <----------------- [Injectors]
  (Hardened Stellite/   (Tighter tolerances,                 (Larger flow,
   Tool Steel)           PVD coatings)                        Stainless steel)
```

### 1. The Fuel Tank and Delivery Lines
Standard gasoline cars historically utilized steel fuel tanks coated with a lead-tin alloy (terne metal). Ethanol quickly strip-mines this coating, exposing the raw steel to water and oxygen, which leads to rust and clogged fuel systems. Flex-Fuel Vehicles utilize either high-density polyethylene (HDPE) multi-layered plastic tanks or high-grade stainless steel tanks. 

Similarly, standard fuel hoses made of low-grade nitrile rubber (Buna-N) swell, harden, and disintegrate when exposed to high concentrations of ethanol. FFVs replace these with fluorocarbon elastomers (such as Viton) or polytetrafluoroethylene (PTFE/Teflon) lines, which are chemically inert to alcohols.

### 2. Fuel Pumps and Commutators
Electric fuel pumps in standard vehicles rely on copper commutators and brushes that are exposed directly to the fuel for cooling. When running E85, the slight electrical conductivity of the ethanol-water mix induces galvanic corrosion on the copper surfaces. Under continuous voltage, the copper commutator wears thin and eventually fails, stalling the pump. 

FFV fuel pumps overcome this by using carbon-faced commutators, precious metal brushes, or brushless DC motors sealed away from the fuel charge. The pump internal windings are also fully potted to prevent any moisture penetration.

### 3. Fuel Injectors
Due to the 30%+ increase in volume demand, FFV fuel injectors feature larger metering orifices and modified internal geometries. More importantly, the internal pintles and return springs are constructed from high-grade stainless steel or ceramic compounds to resist the corrosive effects of formic acid, an intermediate oxidation product of ethanol.

### 4. The Flex-Fuel Sensor
To run effectively on any blend from E0 to E85, the engine needs to know the exact ratio of ethanol in the fuel system in real time. Modern FFVs utilize an inline fuel composition sensor. This sensor measures both the dielectric constant and the electrical conductivity of the fuel flowing through it, translating these physical properties into a frequency signal sent to the ECM. 

The ECM then adjusts the fuel trim, injection timing, and boost parameters dynamically. If this sensor drifts or fails, the engine may run dangerously lean on E85, causing high exhaust gas temperatures and potential piston melt-down.

### 5. Valves, Valve Seats, and Cylinder Heads
During combustion, gasoline leaves behind trace hydrocarbon deposits that act as a microscopic cushion between the intake/exhaust valves and their corresponding valve seats. Ethanol burns incredibly clean, leaving no such lubricating residue. This lack of lubrication, combined with the higher combustion temperatures of advanced timing, can lead to a phenomenon known as Valve Seat Recession (VSR). 

To prevent this, factory FFVs are equipped with hardened valve seats (often made of cobalt-base stellite alloys or high-alloy tool steels) and exhaust valves coated with sodium or specialized alloys to facilitate rapid heat dissipation.

---

## Chemical and Physical Degradation Mechanisms of Ethanol

Even with extensive hardware modifications, running E85 places unique chemical stresses on an engine. To predict how long these vehicles will last, we must examine the specific degradation pathways associated with high-ethanol fuels.

```
       +-------------------------------------------------------+
       |             Ethanol Degradation Vectors               |
       +-------------------------------------------------------+
            /                      |                       \
           v                       v                        v
  [Hygroscopic Nature]     [Galvanic Corrosion]     [Chemical Attack]
  Absorbs atmospheric     Conductive fuel sets up   Oxidizes into formic
  moisture, leading to    micro-currents between    acid, eroding bearings
  phase separation.       dissimilar metals.        and soft metals.
```

### 1. The Hygroscopic Effect and Phase Separation
Ethanol is highly hygroscopic, meaning it readily absorbs water directly from the atmosphere. While pure gasoline and water do not mix, ethanol acts as a mutual solvent. E85 can hold a small percentage of water in suspension without issue. However, if the water content exceeds a specific threshold (typically around 0.5% to 0.7% by volume at room temperature), the mixture undergoes "phase separation."

During phase separation, the water and ethanol bind together and drop to the bottom of the fuel tank, forming a distinct, dense layer of water-soaked alcohol. The remaining gasoline floats on top. If the fuel pump draws from the bottom layer, the engine receives a highly concentrated mixture of water and ethanol, which can cause hard starting, severe misfires, and temporary cylinder washing. 

Moreover, this stagnant water-rich layer creates a highly corrosive environment at the bottom of the fuel tank and inside the fuel pump housing.

### 2. Galvanic and Chemical Corrosion
Ethanol is a polar solvent, which makes it far more electrically conductive than non-polar gasoline. If ionic impurities (such as chlorides or sulfates) are present in the fuel or introduced via atmospheric water, the conductivity of E85 increases dramatically. 

This conductivity facilitates galvanic corrosion wherever dissimilar metals are in close proximity in the presence of the fuel. For example, if an aluminum fuel rail is connected to a brass fittings, E85 can act as an electrolyte, causing the aluminum to corrode and pit over time.

Additionally, ethanol can oxidize in the presence of oxygen and heat to form acetaldehyde, which further oxidizes into acetic acid and formic acid:

$$C_2H_5OH + O_2 \xrightarrow{\text{heat/catalyst}} CH_3COOH \xrightarrow{\text{oxidation}} HCOOH$$

These weak organic acids can attack soft metals like copper, zinc, brass, and aluminum, slowly eroding fuel system components from the inside out.

### 3. Elastomer Degradation and Permeation
Plastics and rubbers degrade through two primary mechanisms when exposed to solvents: swelling and chemical degradation. When ethanol penetrates the polymer matrix of a standard rubber hose, it disrupts the intermolecular bonds, causing the material to swell and lose its structural integrity. 

Once the fuel evaporates, the rubber shrinks, hardens, and cracks. Factory FFV seals made of Viton (FKM) or Fluorosilicone resist this swelling, but they are still subject to "fuel permeation." Over long periods, microscopic amounts of fuel vapor can pass through the molecular structure of the hoses, contributing to evaporative emissions and very slow degradation of the outer protective layers of the fuel lines.

---

## Engine Oil & Lubrication: The Crankcase Battle

While much attention is paid to the fuel system, the most significant threat to the long-term lifespan of an E85 engine actually occurs inside the oil pan. The interaction between ethanol, combustion blow-by gases, and engine oil is a complex tribological challenge.

```
       Cold Engine Start (E85 injected)
                 |
                 v
   High Latent Heat of Vaporization
                 |
                 v
   Poor Fuel Atomization (Liquid pools on walls)
                 |
                 v
   Piston Rings Sweep Liquid Fuel Down
                 |
                 v
   Fuel Mixes with Crankcase Engine Oil  ---> [Diluted Lubricant]
                 |
                 v
   Water + Ethanol + Acid Combustion Byproducts
                 |
                 v
   Corrosive Wear on Journal Bearings
```

### 1. Cold Starts and Cylinder Washing
Because ethanol requires three times as much heat to vaporize as gasoline, starting an E85 engine in cold temperatures is difficult. When the cylinder walls are cold, the injected E85 does not atomize completely. Instead, it sprays as a fine liquid mist that condenses onto the cold cylinder walls. 

As the piston travels upward, the piston rings sweep this liquid ethanol down into the crankcase. This phenomenon, known as "cylinder washing," temporarily strips the protective hydrodynamic oil film from the cylinder wall, leading to brief periods of boundary lubrication where metal-on-metal contact occurs between the piston rings and the cylinder bore.

### 2. Fuel Dilution of Crankcase Oil
The liquid fuel swept past the piston rings mixes directly with the engine oil. In a vehicle driven primarily on short trips, the engine block never reaches its full operating temperature (typically 90°C to 105°C). 

In a standard gasoline vehicle, light hydrocarbons that enter the oil will eventually evaporate out of the oil once the engine warms up, escaping through the Positive Crankcase Ventilation (PCV) system. However, because ethanol has a higher boiling point than the lightest fractions of gasoline, and because it is present in much larger volumes, it takes much longer to evaporate out of the crankcase.

This results in "fuel dilution." As the concentration of ethanol in the oil rises, the overall viscosity of the engine oil drops. A 5W-30 oil can quickly degrade to a 5W-20 or even a 0W-16 equivalent. This reduced viscosity weakens the hydrodynamic oil film that prevents the crankshaft journals, connecting rod bearings, and camshaft lobes from contacting their mating surfaces.

### 3. Emulsion and Sludge Formation
When water (introduced via E85's hygroscopic nature) mixes with engine oil containing diluted ethanol, it forms a milky, yellowish emulsion. This emulsion can clog oil galleries, restrict flow to the oil pump pickup tube, and reduce the effectiveness of the oil's anti-wear additives. 

Furthermore, the mixture of water, ethanol, and blow-by gases reacts with the oil's detergent package to form a thick, black sludge that settles in the bottom of the oil pan and valve covers, restricting oil flow and accelerating engine wear.

### 4. Corrosion of Bearings
Engine bearings are typically composed of multiple metallic layers, often including copper, lead, aluminum, and tin. The formic and acetic acids generated during E85 combustion can dissolve the lead and copper phases within the bearing material. Over time, this chemical leaching weakens the bearing structure, leading to premature bearing clearance expansion, loss of oil pressure, and eventually, catastrophic engine failure (spun bearings).

---

## Lifespan Projection: E85 vs. Petrol Engine Durability

Having established the chemical and mechanical variables, we can now project the lifespan of an E85-compatible vehicle under different operating conditions.

| Parameter | Standard Gasoline Vehicle (E10/E20) | Flex-Fuel Vehicle (Sustained E85 Use) |
| :--- | :--- | :--- |
| **Average Fuel Pump Lifespan** | 150,000 – 200,000 miles | 120,000 – 150,000 miles |
| **Fuel Injector Service Life** | 200,000+ miles | 150,000 – 180,000 miles |
| **Cylinder Wall / Ring Wear Rate** | Baseline | 1.1x to 1.3x Baseline (Short-trip dependent) |
| **Bearing Wear Rate** | Baseline | 1.15x to 1.25x Baseline (Oil maintenance dependent) |
| **Overall Engine Lifespan (Miles)** | 200,000 – 250,000+ miles | 180,000 – 220,000 miles |

### 1. The High-Mileage FFV Reality
Under ideal operating conditions—such as long-distance highway driving where the engine reaches full operating temperature and burns off diluted fuel—a factory-engineered Flex-Fuel Vehicle running sustained E85 can easily last **180,000 to 220,000 miles (approx. 290,000 to 350,000 km)** without major engine overhaul. 

The structural reinforcements, hardened valve seats, and advanced coatings implemented by manufacturers (such as Ford, GM, and Toyota) are highly effective at mitigating the primary wear mechanisms of ethanol. The slight drop in ultimate longevity compared to a gasoline counterpart (which may reach 250,000 miles) is primarily due to the cumulative effects of minor oil dilution and fuel system component fatigue.

### 2. The Short-Trip Penalty
The longevity equation changes drastically for vehicles subjected to short-trip duty cycles (drives of less than 10 miles or 15 minutes, particularly in cold climates). In these scenarios, the engine spends a significant percentage of its operational life in "cold-start enrichment" mode. 

Because the engine oil never reaches the temperatures required to boil off water and ethanol, fuel dilution rates can easily exceed 5% to 8% of the total oil volume. Under these conditions, bearing wear rates double, sludge accumulation accelerates, and the overall engine lifespan can be cut short to **100,000 to 120,000 miles** if oil change intervals are not adjusted accordingly.

### 3. Component-Specific Lifespans
While the core engine block (block, pistons, crankshaft) of an FFV is highly durable, ancillary components will likely require replacement sooner when running E85:
- **Oxygen Sensors and Catalytic Converters**: The chemical byproducts of E85 combustion can deposit trace silica and carbon residues on oxygen sensors, slow-poisoning them over 100,000 miles. However, the catalytic converter itself often lasts longer because E85 produces lower levels of harmful sulfur compounds and heavy particulates than gasoline.
- **PCV System**: The Positive Crankcase Ventilation valve must work harder to evacuate the higher volume of volatile vapors from the crankcase. A clogged PCV valve on an E85 car will rapidly accelerate oil degradation and cause oil leaks by pressurizing the crankcase.

---

## Myths vs. Reality of E85 Damage

Much of the anxiety surrounding E85 longevity stems from outdated information or aftermarket conversion mishaps. Let us debunk the most common myths with modern engineering facts.

```
+-----------------------------------------------------------------------------+
|                          Myths vs. Reality                                  |
+-----------------------------------------------------------------------------+
| MYTH: E85 dissolves engines from the inside out instantly.                  |
| REALITY: Modern FFVs use Viton, stainless steel, and hardened stellite      |
|          metals that are completely impervious to ethanol corrosion.        |
+-----------------------------------------------------------------------------+
| MYTH: You can convert any car to E85 with just a plug-in chip.              |
| REALITY: Electronic tuning cannot upgrade copper commutators in fuel pumps   |
|          or non-hardened valve seats, leading to mechanical failure.        |
+-----------------------------------------------------------------------------+
| MYTH: E85 causes engines to run hotter.                                     |
| REALITY: E85 has a massive cooling effect due to its high latent heat of     |
|          vaporization, reducing engine cylinder and exhaust temperatures.   |
+-----------------------------------------------------------------------------+
```

### Myth 1: "E85 will dissolve your fuel lines and gas tank within a year."
*Origin of the Myth*: In the 1970s and 1980s, fuel system components were made of natural rubber, polyurethane, and terne-plated steel. When early ethanol blends were introduced, these materials failed rapidly.
*Modern Reality*: Since the mid-1990s, and certainly in all modern vehicles, environmental regulations forced manufacturers to transition to synthetic elastomers and plastic fuel lines to reduce fuel vapor permeation. In a factory-built FFV, every seal, hose, and metal alloy in contact with the fuel is chemically rated for 100% ethanol exposure.

### Myth 2: "Aftermarket E85 conversion kits are just as reliable as factory FFVs."
*Origin of the Myth*: Many companies sell inline wiring harnesses that plug into fuel injectors, lengthening the injection pulse width to deliver the extra fuel required for E85.
*Modern Reality*: While these kits successfully adjust the stoichiometry, they cannot change the physical metallurgy of the engine. A standard vehicle converted to E85 using a simple tuning box still has a copper-commutator fuel pump, soft valve seats, and standard fuel injectors. Over 30,000 to 50,000 miles, these converted vehicles are highly prone to fuel pump failure, injector sticking, and valve seat recession. True flex-fuel durability requires the factory-installed mechanical upgrades outlined above.

### Myth 3: "Ethanol destroys engines because it burns hotter than gasoline."
*Origin of the Myth*: People confuse the flame temperature of pure ethanol with the actual operating temperature of an engine.
*Modern Reality*: In an actual internal combustion engine, the cooling effect of E85's high latent heat of vaporization lowers intake charge temperatures. Furthermore, because E85 burns faster and allows for optimized ignition timing, more of the thermal energy is converted into mechanical work pushing the piston down, rather than being wasted as heat rejected into the cylinder head and cooling jacket. Consequently, E85 engines generally run cooler cylinder head temperatures and lower exhaust gas temperatures (EGTs) than gasoline engines under load.

---

## Maintenance Protocols: Maximizing FFV Longevity

If you operate a Flex-Fuel Vehicle and want it to match or exceed the lifespan of a standard petrol car, you must modify your maintenance schedule to address the specific physical characteristics of ethanol.

```
       +-------------------------------------------------------+
       |             Optimal E85 Maintenance Schedule          |
       +-------------------------------------------------------+
            /                      |                       \
           v                       v                        v
  [Oil Changes: 5k Mi]    [Fuel Cycling: 1 in 5]   [Fuel Stabilizer]
  Use API SP/ILSAC GF-6   Run a tank of E10/E20    Add stabilizer if car
  synthetic oil to combat  to lubricate pumps and  sits for more than
  fuel dilution/acids.     wash away deposits.      2-3 weeks.
```

### 1. Oil Selection and Accelerated Change Intervals
The single most effective action you can take to preserve an E85 engine is to change the engine oil frequently. 
- **The Interval**: While modern synthetic oils can last 7,500 to 10,000 miles in a gasoline vehicle, an E85 vehicle should have its oil changed every **5,000 miles (8,000 km) or 6 months**, whichever comes first. If the vehicle is driven primarily in cold weather or on short trips, this interval should be reduced to **3,000 miles (4,800 km)**.
- **The Specification**: Only use high-quality synthetic oils that carry the latest API SP and ILSAC GF-6 (or newer) classifications. These oil standards contain specific additive packages designed to handle water emulsion, resist fuel-dilution-induced viscosity shear, and protect against low-speed pre-ignition (LSPI). Look for oils that explicitly state they are formulated for flex-fuel applications, as they contain higher concentrations of corrosion inhibitors and acid-neutralizing detergents.

### 2. Implement a Fuel Cycling Regimen
Even though a factory FFV is designed for E85, the fuel system benefit from periodic exposure to standard gasoline. Gasoline contains heavy hydrocarbon fractions and additives that provide superior lubrication to the fuel pump gears, injector pintles, and upper cylinder areas.

A recommended engineering practice is the **"4-to-1 Cycling Rule"**: 
*For every four consecutive tanks of E85 you burn, run one full tank of standard gasoline (E10 or E20).* 

This single tank of gasoline serves to wash away any polar deposits or gums that may have formed due to trace impurities in the ethanol, recoat the fuel delivery system with a protective lubricating film, and allow the PCV system to thoroughly cleanse the crankcase of residual ethanol and water vapors.

### 3. Manage Fuel Freshness and Storage
Due to its hygroscopic nature, E85 has a significantly shorter shelf life than standard gasoline. 
- **Storage Limit**: E85 should not be left in a vehicle's fuel tank if the car is going to sit unused for more than **three to four weeks**. Over this time, the fuel will absorb atmospheric moisture through the fuel tank's evaporative emissions system, risking phase separation.
- **The Solution**: If you must store the vehicle, run the fuel level down as low as possible, fill the remaining tank with high-octane standard gasoline (E10 or less), and add an alcohol-compatible fuel stabilizer (such as *Sta-Bil Storage* or *ISO-HEET*). Run the engine for 15 minutes to ensure the stabilized gasoline mixture has fully populated the fuel lines, rail, and injectors.

### 4. Inspect and Replace the PCV Valve
Because crankcase ventilation is critical to removing water and ethanol vapors from the oil, the PCV system must be kept in pristine condition. Inspect the PCV valve every **30,000 miles** and replace it immediately if it shows signs of sticking or oil contamination. A malfunctioning PCV valve on an E85 engine will accelerate oil sludge formation and lead to rapid bearing wear.

---

## Conclusion: The Engineering Verdict

How long will E85 compatible cars last? 

From a materials and chemical engineering perspective, a factory-built Flex-Fuel Vehicle is highly durable. Under typical driving conditions and a standard maintenance schedule, a modern FFV running continuously on E85 will easily achieve **180,000 to 220,000 miles** of reliable service. The components engineered to withstand ethanol—the stainless steel fuel delivery components, Viton seals, brushless fuel pumps, and hardened valve seats—are remarkably successful at neutralizing the corrosive nature of the fuel.

The ultimate longevity of the vehicle is not limited by the fuel itself, but rather by the **owner's maintenance habits**. 

Because E85 introduces water and acid byproducts into the crankcase, strict adherence to high-quality synthetic oil selection and shorter oil change intervals is mandatory. Drivers who treat an E85 car like a standard gasoline vehicle—stretching oil changes to 10,000 miles or subjecting the car to endless short, cold trips—will see a premature end to their engine's life. 

Conversely, those who understand the chemistry of their fuel, change their oil at 5,000-mile intervals, and periodically cycle standard gasoline through the system will enjoy all the performance and environmental benefits of E85 with virtually no sacrifice in long-term engine durability.
