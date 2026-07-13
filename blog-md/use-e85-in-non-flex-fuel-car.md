---
title: "What Happens if I Use E85 in a Non-Flex Fuel Car?"
description: "A comprehensive breakdown of the mechanical and chemical failures that occur when misfueling a standard petrol car with E85."
date: 2026-07-13
category: "Tech & Maintenance"
tags: ["Misfueling E85", "Non-Flex Cars", "Engine Damage", "Fuel Lines", "Leaning Out"]
author: "E85 India"
---

# What Happens if I Use E85 in a Non-Flex Fuel Car?

As biofuels gain traction globally as a means to reduce carbon footprints and lower reliance on fossil fuels, ethanol-blended petrol has become a standard offering at fuel stations. In many markets, standard consumer gasoline contains up to 10% ethanol (E10) or, in some regions, 15% (E15). However, standing apart from these low-level blends is E85—a high-concentration biofuel consisting of up to 85% ethanol and 15% gasoline.

E85 is highly attractive to performance enthusiasts due to its high octane rating (typically between 100 and 105 octane) and its lower price per gallon or liter compared to premium unleaded petrol. This cost differential and pump proximity occasionally lead to a critical question—or worse, a costly mistake at the refueling island: *What happens if I pump E85 into a non-Flex Fuel vehicle?*

If you run E85 in a vehicle designed strictly for standard gasoline (E0 to E10), you initiate a series of electronic, chemical, and mechanical failures. While a single accidental top-off of a few liters might only cause minor drivability issues, running a high concentration of E85 in a non-Flex Fuel car will trigger severe issues, ranging from lean-burn engine damage to the rapid degradation of your fuel system components.

---

## E85 vs. Standard Petrol: The Chemical and Physical Divergence

To understand why E85 causes issues in standard engines, we must look at the physical and chemical properties of ethanol (ethyl alcohol) compared to standard petroleum-based gasoline.

```
+-----------------------------------------------------------------------+
|                       Fuel Property Comparison                        |
+------------------------------------+----------------------------------+
| Property                           | Gasoline (E0)   | E85 Blend      |
+------------------------------------+-----------------+----------------+
| Chemical Structure                 | Hydrocarbons    | Hydroxyl (-OH) |
| Stoichiometric Air-Fuel Ratio      | 14.7:1          | ~9.76:1        |
| Energy Density (Lower Heating Val) | ~42.4 MJ/kg     | ~29.1 MJ/kg    |
| Research Octane Number (RON)       | 91 - 98         | 105 - 108      |
| Latent Heat of Vaporization        | ~350 kJ/kg      | ~840 kJ/kg     |
| Hygroscopic Property               | Hydrophobic     | Polar/Hygro    |
+------------------------------------+-----------------+----------------+
```

### 1. Molecular Structure and Polarity
Standard gasoline is a complex mixture of non-polar hydrocarbons (primarily alkanes, cycloalkanes, and aromatics) containing 4 to 12 carbon atoms per molecule. These hydrocarbons do not mix with water (they are hydrophobic). 

Ethanol ($C_2H_5OH$), on the other hand, is a simple, single-molecule alcohol characterized by a polar hydroxyl group ($-OH$) bound to an ethyl chain. The presence of the oxygen atom within this hydroxyl group gives ethanol its chemical polarity. This polar nature makes ethanol highly soluble in water (hygroscopic) and turns it into a powerful solvent capable of dissolving materials that are completely stable in the presence of non-polar gasoline.

### 2. Energy Density and Heating Value
One of the most critical differences between the two fuels is their energy content. Gasoline has a high gravimetric energy density, with a lower heating value (LHV) of approximately 42.4 megajoules per kilogram (MJ/kg). Ethanol's LHV is significantly lower, at roughly 26.8 MJ/kg.

Because of this, E85 (which contains between 51% and 83% ethanol depending on the season and region) carries about 27% to 30% less energy per unit of volume than pure gasoline. To produce the same amount of combustion energy and maintain correct engine operation, an engine must burn roughly 30% to 35% more E85 by volume than gasoline.

### 3. Stoichiometric Air-Fuel Ratio (AFR)
Stoichiometry refers to the chemically ideal ratio of air to fuel required for complete combustion, where all fuel is burned and all oxygen is consumed.
* For pure gasoline (E0), the stoichiometric air-fuel ratio is **14.7:1** (14.7 kg of air is needed to burn 1 kg of fuel).
* For pure ethanol (E100), the stoichiometric ratio drops to **9.0:1**.
* For E85, the stoichiometric ratio is approximately **9.76:1**.

In chemical terms, if an engine calibrated for gasoline attempts to burn E85, it will introduce a air-fuel mixture that is far too lean. The engine control unit (ECU) will register an excess of unburned oxygen in the exhaust stream, because the physical volume of fuel injected was based on a target ratio of 14.7:1, whereas the fuel actually requires a ratio of 9.76:1.

---

## The Electronic Struggle: How the ECU Reacts to E85

When you start a modern non-Flex Fuel car containing E85, the vehicle's engine management system immediately enters a state of digital emergency. 

### 1. The Closed-Loop Feedback Loop
Modern gasoline engines operate in two primary modes: **Open-Loop** and **Closed-Loop**. During closed-loop operation (typically active during idling, light acceleration, and cruising), the Engine Control Unit (ECU) constantly monitors the exhaust gas composition using oxygen sensors (or wideband lambda sensors) placed before the catalytic converter.

The oxygen sensor measures the partial pressure of oxygen in the exhaust gases. If the sensor detects a high oxygen concentration, it signals to the ECU that the combustion mixture is "lean" (too much air, not enough fuel). If it detects low oxygen, it signals that the mixture is "rich" (too much fuel, not enough air).

### 2. Short-Term and Long-Term Fuel Trims (STFT & LTFT)
In response to the oxygen sensor feedback, the ECU adjusts the injector pulse width—the amount of time the fuel injectors remain open during each cycle. This adjustment is measured as **Fuel Trim**:
* **Short-Term Fuel Trim (STFT):** Immediate, real-time corrections made to the injector pulse width, fluctuating second by second.
* **Long-Term Fuel Trim (LTFT):** A learned correction factor that adjusts the baseline fueling map over time to account for permanent changes, such as component wear or fuel quality variations.

When E85 is introduced into a standard car, the oxygen sensor registers an extremely lean condition. The ECU immediately responds by ramping up the STFT, injecting more fuel to compensate. As the vehicle continues to run, these corrections are transferred to the LTFT.

### 3. Hitting the Calibration Limits
A standard gasoline ECU is programmed with safety parameters that limit how much fuel it can add or subtract. In most non-Flex Fuel vehicles, the maximum allowable positive fuel trim (the sum of STFT and LTFT) is capped between **+20% and +25%**. 

Because E85 requires a **30% to 35% increase** in fuel volume to achieve stoichiometry, the ECU's adjustments are insufficient. The fuel trims will quickly max out at their upper limits (e.g., +25%), but the oxygen sensor will continue to report that the air-fuel mixture remains dangerously lean.

```
       +-------------------------------------------------------+
       |             ECU Fuel Trim Compensation                |
       +-------------------------------------------------------+
       | E85 Fuel Target:       +30% to +35% Fuel Volume       |
       | ECU Maximum Limit:     +20% to +25% Fuel Volume       |
       |                      ===================              |
       | Deficit (Lean Gap):    -10% to -15% Fuel Shortage     |
       +-------------------------------------------------------+
```

### 4. Triggering the Check Engine Light (DTCs)
Once the fuel trims remain pegged at their maximum limit for a predetermined duration without achieving stoichiometry, the ECU determines that a system malfunction has occurred. It will illuminate the Check Engine Light (CEL) and store Diagnostic Trouble Codes (DTCs) in its memory:
* **P0171:** System Too Lean (Bank 1)
* **P0174:** System Too Lean (Bank 2 - for V6/V8 engines)
* **P0300 series:** Random/Multiple Cylinder Misfire (due to poor combustion propagation in lean mixtures)

### 5. Drivability Failures and Cold-Start Stalling
Because the engine is running lean, drivers will notice immediate symptoms:
* **Severe Hesitation and Stumble:** Under acceleration, the lack of sufficient fuel volume causes the engine to bog down, hesitate, or jerk.
* **Rough Idle:** The engine will vibrate excessively at stops, and the idle RPM may fluctuate wildly.
* **Extreme Cold Start Difficulty:** Ethanol has a significantly lower vapor pressure than gasoline. While gasoline vaporizes readily at low temperatures to support cold starting, ethanol requires much more heat to vaporize (its latent heat of vaporization is roughly 840 kJ/kg, compared to gasoline's 350 kJ/kg). At temperatures below 15°C (59°F), a non-Flex Fuel engine running on E85 may crank indefinitely without starting, as the liquid ethanol pools in the intake manifold or cylinders instead of vaporizing.

---

## Material Incompatibility: The Chemical Destruction of the Fuel System

Beyond electronic struggles, E85 presents a severe chemical threat to the physical components of a non-Flex Fuel car's fuel delivery system. 

```
   [Fuel Tank] ----> [Fuel Pump] ----> [Fuel Lines] ----> [Fuel Injectors]
        |                  |                 |                  |
   • Corrodes steel   • Low lubricity   • Degrades NBR    • Clogs micro-
   • Phase separation   causes wear       rubber hoses      filters with
     creates sludge   • Electrical short  • Swells O-rings  plastic debris
```

### 1. Elastomer Degradation (Rubber and Plastics)
For decades, automotive manufacturers constructed fuel hoses, seal rings, O-rings, and gaskets out of standard elastomers like Nitrile butadiene rubber (NBR), Neoprene, and polyurethane. These materials are highly resistant to the non-polar hydrocarbons found in gasoline.

However, when exposed to high concentrations of polar ethanol, these elastomers undergo plasticizer extraction:
* **Swelling and Softening:** Ethanol molecules penetrate the polymer matrix of the rubber, causing it to swell, lose tensile strength, and soften.
* **Drying and Cracking:** As the fuel system cycles between wet and dry conditions, the extracted plasticizers leave the rubber brittle. The hoses, O-rings, and seals crack, leading to external fuel leaks or internal pressure losses.
* **Debris Generation:** The degrading interior lining of fuel hoses sheds microscopic particles of rubber and plastic. This debris travels down the fuel line, quickly clogging the fuel filter and the micro-screen filters located inside the fuel injectors.

In contrast, Flex-Fuel vehicles utilize fluoropolymer elastomers like Viton (FKM) or synthetic fluorocarbon resins (PTFE/Teflon) that do not degrade when exposed to alcohol.

### 2. Metallic Corrosion and Galvanic Reactions
Ethanol is mildly acidic (due to carbon dioxide absorption and oxidation into acetic acid) and highly polar, making it an electrolyte. When E85 enters a fuel system made of incompatible metals, it accelerates corrosion:
* **Zinc and Aluminum Degradation:** Older fuel systems, particularly carburetors and fuel rails, utilize zinc alloys, brass, and bare aluminum. Ethanol reacts with these metals, producing zinc oxides and aluminum hydroxide (a white, powdery substance). This corrosion corrodes structural walls and blocks fuel passages.
* **Galvanic Corrosion:** Because ethanol conducts electricity far better than gasoline, it facilitates galvanic corrosion between dissimilar metals in the fuel pump and sending unit assembly.
* **Steel Rusting:** E85's affinity for water brings moisture directly into contact with bare steel surfaces inside the fuel tank and fuel lines, leading to red iron oxide (rust) formation. Rust flakes quickly detach, clogging fuel filters and injectors.

### 3. Fuel Pump Lubricity and Electrical Wear
In-tank electric fuel pumps rely on the passing fuel to lubricate their internal moving parts (such as gears, rollers, or vanes) and cool the electric motor.
* **Lack of Lubricity:** Gasoline contains heavy hydrocarbons that act as a light lubricant. Ethanol has a much lower viscosity and provides virtually no boundary lubrication. Running E85 through a standard fuel pump leads to rapid metal-on-metal wear of the pump's internal pumping gears, eventually causing the pump to seize.
* **Electrical Shorting:** The armature and commutator brushes of standard fuel pumps are exposed to the fuel flowing through them. While gasoline is a non-conductive dielectric, E85 is electrically conductive. Over time, the passing current causes electro-chemical erosion of the commutator copper contacts and can cause internal electrical short circuits, blowing the fuel pump fuse or burning out the motor.

---

## Severe Mechanical Engine Damage: The Consequences of Running Lean

If a non-Flex Fuel car is driven for an extended period under high load (such as highway cruising or uphill driving) on E85, the resulting lean air-fuel mixture can cause catastrophic engine failure.

### 1. Combustion Temperature Spikes
When an engine runs lean ($\lambda > 1.0$), there is excess oxygen and insufficient fuel in the combustion chamber. This state alters the combustion dynamics:
* **Slower Flame Propagation:** A lean mixture burns more slowly than a stoichiometric or slightly rich mixture. 
* **Late-Cycle Burning:** Because the flame front travels slowly, the combustion process continues long after the piston has passed Top Dead Center (TDC) and is moving down the cylinder. This means the burning fuel remains in contact with the cylinder walls, piston crown, and exhaust valves for a longer duration, failing to convert heat into kinetic energy.
* **Exhaust Gas Temperature (EGT) Spike:** The late-burning fuel dumps heat directly into the exhaust system, causing exhaust gas temperatures to spike up to several hundred degrees Celsius above design limits.

### 2. Piston Crown and Cylinder Wall Damage
The extreme localized heat in a lean-burning cylinder can quickly exceed the thermal limits of the engine’s internal alloys:
* **Piston Melting:** Pistons in passenger cars are typically made of cast aluminum alloys. Under extreme lean conditions, the temperature of the piston crown can reach its melting point (~660°C or 1220°F). The center of the piston crown can soften, warp, or blow out completely (known as "holing a piston").
* **Ring Land Failure:** The excessive heat causes the piston rings to expand until their end gaps close completely. Once the ring ends butt together, the ring buckles, breaking the piston ring lands and scoring the cylinder walls, leading to an immediate loss of compression.

```
       [Piston Meltdown Scenario (Lean Running)]
       
          Excess Oxygen + Insufficient Fuel (E85)
                         │
                         ▼
             Slower, Late Combustion
                         │
                         ▼
         Exhaust Gas Temperatures Spike (EGT)
                         │
        ┌────────────────┴────────────────┐
        ▼                                 ▼
   Piston Crown Softens (~660°C)     Exhaust Valves Warp
        │                                 │
        ▼                                 ▼
   Piston Hole / Compression Loss    Total Valve Failure
```

### 3. Exhaust Valve Burning and Recession
Exhaust valves rely on making contact with the cylinder head valve seats to transfer heat away from the valve face. Under lean E85 combustion:
* The valves run red-hot due to the elevated EGTs.
* The valve faces can warp, prevent a tight seal, or develop structural cracks (known as "burned valves"). Once a valve burns, compressed gases escape during the compression stroke, destroying the cylinder's ability to produce power.

### 4. Detonation (Engine Knock) and Pre-Ignition
Although E85 has a high octane rating that naturally resists detonation under normal circumstances, running extremely lean under load changes the equation. 
* **Pre-Ignition:** The elevated combustion chamber temperatures can cause spark plug electrodes or carbon deposits to glow white-hot. These hot spots ignite the incoming air-fuel mixture *before* the spark plug fires.
* **Detonation:** As the piston compresses this prematurely ignited mixture, cylinder pressures spike violently. This pressure wave collisions (detonation) can shatter spark plug insulators, destroy connecting rod bearings, and bend connecting rods.

---

## Phase Separation: The Silent Tank Destroyer

One of the most complex threats of E85 in a non-Flex Fuel system is a chemical phenomenon known as **Phase Separation**. 

```
               [ Normal E85 Blend ]
          ┌───────────────────────────┐
          │ Ethanol and Gasoline fully│
          │ dissolved in one phase.   │
          └───────────────────────────┘
                        │
                        ▼ + Moisture (Water)
               [ Phase Separated ]
          ┌───────────────────────────┐
          │ Gasoline Layer (Top)      │
          ├───────────────────────────┤
          │ Ethanol + Water (Bottom)  │ <-- Pump sucks this in!
          └───────────────────────────┘
```

### 1. The Hygroscopic Action
Ethanol is highly hygroscopic; it has a strong chemical affinity for water. It will actively absorb moisture from the surrounding air through the fuel tank's ventilation system or from condensation on the inner walls of the tank.

### 2. The Saturation Point
A specific blend of E85 can hold a small amount of water in solution at a given temperature. For example, at 21°C (70°F), E85 can hold about 0.5% water by volume without any issues. However, if the water content exceeds this saturation threshold, or if the temperature drops, a critical chemical shift occurs.

### 3. The Separation Process
Once the saturation limit is reached, the water molecules bind tightly to the polar ethanol molecules. This water-ethanol mixture becomes insoluble in the non-polar gasoline hydrocarbons. 

Because the water-ethanol mixture is denser than gasoline, it separates from the fuel blend and settles to the bottom of the fuel tank. This leaves two distinct layers:
1. **Top Layer:** A low-octane, ethanol-depleted gasoline layer.
2. **Bottom Layer:** A corrosive mixture of ethanol, water, and dissolved fuel additives.

### 4. Consequences of Ingesting Phase-Separated Fuel
The fuel pump pickup is located at the absolute bottom of the fuel tank to scavenge all available fuel. When phase separation occurs:
* The fuel pump draws in the bottom layer—which is primarily water and ethanol.
* Since this mixture lacks the vapor pressure and combustion properties of gasoline, the engine will instantly stall, misfire, or refuse to start.
* If a large volume of water-ethanol mix enters the cylinders, it can lead to **hydrolock**—a catastrophic event where the piston attempts to compress an incompressible liquid, resulting in bent connecting rods and a destroyed engine block.
* The highly concentrated acidic water-ethanol layer sits in contact with the fuel pump and metal tank floor, causing rapid corrosion.

---

## Recovery and Mitigation: What to Do if You Misfueled

If you realize you have pumped E85 into your non-Flex Fuel car, your immediate actions will determine whether you face a minor maintenance bill or a complete engine replacement.

### 1. Scenario A: You Realize the Mistake at the Pump (Before Starting the Engine)
This is the best-case scenario. If the nozzle is back in the holster and you realize you just filled your tank with E85:
* **Do NOT turn the key or press the start button.** Even turning the key to the "ON" or "Accessory" position can prime the fuel pump, sending E85 from the tank directly into the fuel lines and engine bay.
* **Put the car in neutral and push it away from the pump** to a safe parking space.
* **Call a tow truck** to transport the vehicle to a professional repair facility.
* **Drain the tank:** The mechanic will use a fuel extraction pump to empty the fuel tank completely. Once empty, they can add a few liters of gasoline, drain it again to flush any residue, and refill the tank with fresh gasoline. The car can then be started safely without any risk to the fuel system or engine.

### 2. Scenario B: You Realize the Mistake After Driving (Engine Runs Rough, CEL on)
If you drove away and the engine began to sputter, shake, or illuminate the Check Engine Light:
* **Pull over safely immediately** and shut off the engine. Do not attempt to "drive it off" or burn through the fuel.
* **Tow the vehicle** to a workshop.
* **Perform a complete system flush:**
  1. Drain the fuel tank completely.
  2. Flush the fuel lines with fresh gasoline under low pressure.
  3. Replace the fuel filter, as the ethanol may have loosened tank deposits that are now clogging the filter medium.
  4. Remove the fuel injectors and inspect their micro-filters for rubber particles or rust debris. Clean or replace them if necessary.
  5. Refill the tank with fresh gasoline and start the engine. Monitor the fuel trims using an OBD2 scanner to ensure they return to normal levels (close to 0%).

### 3. Scenario C: Dilution Calculations for Small Misfuels
If you accidentally pumped a small amount of E85 into a partially full tank, you may be able to dilute it to a safe level. Standard modern cars can generally tolerate up to 10% to 15% ethanol (E10 to E15) without throwing codes or damaging components.

To calculate the resulting ethanol concentration, use this formula:

$$\text{Final Ethanol \%} = \frac{(V_{\text{E85}} \times 0.85) + (V_{\text{Gas}} \times E_{\text{Gas}})}{V_{\text{Total}}}$$

*Where:*
* $V_{\text{E85}}$ = Volume of E85 added
* $V_{\text{Gas}}$ = Volume of standard gasoline already in or added to the tank
* $E_{\text{Gas}}$ = Ethanol content of your standard gasoline (e.g., 0.10 for E10, 0.05 for E5)
* $V_{\text{Total}}$ = Total fuel volume in the tank ($V_{\text{E85}} + V_{\text{Gas}}$)

#### Example Calculation:
You accidentally put **5 liters of E85** into a **50-liter tank**, and fill the remaining **45 liters with E10 gasoline**:

$$\text{Final Ethanol \%} = \frac{(5 \times 0.85) + (45 \times 0.10)}{50}$$

$$\text{Final Ethanol \%} = \frac{4.25 + 4.5}{50} = \frac{8.75}{50} = 0.175 \text{ or } 17.5\%$$

At 17.5% ethanol, the mixture is slightly above the E15 limit. In most modern cars (post-2010), this will likely not trigger a Check Engine Light, but you should drive gently, avoid high engine loads, and top off the tank with premium, low-ethanol (E0 or E5) gasoline every 50-100 kilometers to dilute the mixture further. If the amount of E85 added exceeds 15-20% of your tank's capacity, draining the tank is the safest course of action.

---

## Flex-Fuel Vehicles: The Engineering Differences

To appreciate why a Flex-Fuel vehicle (FFV) handles E85 with ease, we must examine the specific hardware and software modifications implemented by manufacturers at the factory.

```
+--------------------------------------------------------------------+
|                Flex-Fuel vs. Non-Flex Fuel Hardware                |
+--------------------------------------------------------------------+
| Component       | Non-Flex Vehicle       | Flex-Fuel Vehicle       |
+-----------------+------------------------+-------------------------+
| Fuel Lines      | NBR Rubber / Steel     | PTFE / Stainless Steel  |
| Fuel Pump       | Standard Carbon Brushes| Sealed Brushless / Viton|
| Injectors       | Standard Flow Rate     | High Flow (+35% Cap)    |
| Valve Seats     | Standard Induction     | Hardened Stellite Seats |
| ECU Tuning      | Fixed Map (Narrow Trim)| Dynamic (Sensor/Virtual)|
+-----------------+------------------------+-------------------------+
```

### 1. Robust Fuel System Hardware
* **PTFE-Lined Hoses:** Flex-fuel cars use polytetrafluoroethylene (PTFE) or specialized multi-layer nylon hoses that are chemically inert to alcohols.
* **Corrosion-Resistant Metals:** Fuel rails and connections are made of stainless steel or highly anodized aluminum. Tanks are constructed from high-density polyethylene (HDPE) or polymer-coated steel to prevent corrosion.
* **Heavy-Duty Fuel Pumps:** FFV pumps use brushless motors or sealed commutators with carbon-alloy brushes to prevent electrical wear. The internal pump components are designed to tolerate low lubricity.
* **High-Flow Fuel Injectors:** Because E85 requires a larger fuel volume, FFVs are equipped with fuel injectors that have 30% to 40% larger flow capacities, alongside beefier fuel pressure regulators.

### 2. Engine Hardening
Ethanol burns with a dry flame and lacks the valve-cushioning properties of gasoline. FFV engines feature hardened valve seats (often alloyed with Stellite) and hardened exhaust valves to prevent valve recession under high-temperature running.

### 3. Active Combustion Management (ECU Adjustments)
The core of any FFV is its ability to adapt to any blend of gasoline and ethanol in real-time.
* **Physical Ethanol Sensors:** Many early and performance-oriented FFVs use an inline fuel composition sensor. This sensor measures the fuel's dielectric constant and electrical conductivity to determine the exact percentage of ethanol in the line.
* **Virtual Sensor Algorithms:** Many modern FFVs estimate the ethanol percentage using closed-loop oxygen sensor feedback. When the tank level sensor detects refuel activity, the ECU enters a learning state, monitoring fuel trims. If it sees a predictable shift toward positive trims, it recalculates the ethanol percentage.
* **Dynamic Mapping:** Once the ECU determines the ethanol content (e.g., E50), it dynamically scales the primary fuel maps, increases injector pulse width, and advances ignition timing (taking advantage of ethanol’s high octane to optimize torque and efficiency).

---

## Conclusion: The Risk is Never Worth the Reward

While ethanol-blended fuels play an important role in modern energy strategies, E85 is a highly specialized fuel designed exclusively for vehicles engineered to receive it. 

If you pump E85 into a non-Flex Fuel car, you are forcing the vehicle to operate outside its designed parameters. The immediate consequences include an illuminated check engine light, lean-burn diagnostic trouble codes, and severe drivability issues like stuttering and cold-start failures. If ignored, you risk destroying the fuel pump, corroding the fuel rail, degrading rubber hoses to the point of a hazardous fuel leak, or melting pistons from extreme combustion chamber heat.

If you make the mistake of misfueling with E85, remember: **do not start the engine.** Tow the vehicle, drain the tank, and flush the system. It is a minor inconvenience that prevents a catastrophic repair bill.
