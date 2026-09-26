/**
 * Thermodynamic and Energy Calculations for Smart-Breeze Automated Fan
 * University of Moratuwa - MT1940 Fundamentals of Engineering Design
 */

/**
 * Calculates Wet-Bulb Temperature using Stull's empirical psychrometric equation
 * @param tDry Dry bulb ambient temperature in °C
 * @param rh Relative humidity in percent (0 to 100)
 */
export function calculateWetBulb(tDry: number, rh: number): number {
  const t = tDry;
  const h = Math.max(1, Math.min(99, rh));
  
  const tw =
    t * Math.atan(0.151977 * Math.pow(h + 8.313659, 0.5)) +
    Math.atan(t + h) -
    Math.atan(h - 1.676331) +
    0.00391838 * Math.pow(h, 1.5) * Math.atan(0.023101 * h) -
    4.686035;

  return Math.round(tw * 10) / 10;
}

/**
 * Calculates Dew Point using the Magnus-Tetens approximation
 */
export function calculateDewPoint(tDry: number, rh: number): number {
  const a = 17.27;
  const b = 237.7;
  const alpha = ((a * tDry) / (b + tDry)) + Math.log(Math.max(1, rh) / 100);
  const dp = (b * alpha) / (a - alpha);
  return Math.round(dp * 10) / 10;
}

/**
 * Calculates the achievable evaporative cooling output temperature
 * based on wet cotton wicking saturation efficiency (approx 70-75% for capillary wicks)
 */
export function calculateEvapCooling(
  tDry: number,
  rh: number,
  efficiency = 0.72
): {
  tOut: number;
  deltaT: number;
  tWet: number;
  tDew: number;
  comfortLevel: string;
  comfortColor: string;
  skinHydrationRating: string;
} {
  const tWet = calculateWetBulb(tDry, rh);
  const tDew = calculateDewPoint(tDry, rh);
  
  // Evaporative temperature depression
  const maxPossibleDrop = Math.max(0, tDry - tWet);
  const actualDrop = maxPossibleDrop * efficiency;
  const tOut = Math.round((tDry - actualDrop) * 10) / 10;
  const deltaT = Math.round(actualDrop * 10) / 10;

  // Comfort and skin hydration assessment
  let comfortLevel = 'Optimal Cool & Fresh';
  let comfortColor = 'text-emerald-400';
  let skinHydrationRating = 'High Protection (No Drying)';

  if (tDry > 32 && rh > 75) {
    comfortLevel = 'Humid Tropical Peak';
    comfortColor = 'text-amber-400';
    skinHydrationRating = 'Adequate Moisture Balance';
  } else if (rh < 35) {
    comfortLevel = 'Dry Hot Zone';
    comfortColor = 'text-sky-400';
    skinHydrationRating = 'Maximum Humidification Benefit';
  }

  return {
    tOut,
    deltaT,
    tWet,
    tDew,
    comfortLevel,
    comfortColor,
    skinHydrationRating
  };
}

/**
 * Calculates monthly electricity consumption and domestic CEB electricity bill in Sri Lankan Rupees (LKR)
 * @param wattage Power rating in Watts
 * @param hoursPerDay Hours of usage per day
 * @param days Days in month (default 30)
 */
export function calculateCEBMonthlyBill(
  wattage: number,
  hoursPerDay: number,
  days = 30
): {
  kwh: number;
  billLKR: number;
  co2Kg: number;
} {
  const totalKwh = Math.round(((wattage * hoursPerDay * days) / 1000) * 10) / 10;
  
  // Approximate Ceylon Electricity Board (CEB) Sri Lankan Domestic Tariff Bands
  let bill = 0;
  const units = totalKwh;

  if (units <= 30) {
    bill = units * 8.0 + 150;
  } else if (units <= 60) {
    bill = 30 * 8.0 + (units - 30) * 15.0 + 300;
  } else if (units <= 90) {
    bill = 60 * 15.0 + (units - 60) * 25.0 + 400;
  } else if (units <= 180) {
    bill = 60 * 16.0 + 30 * 25.0 + (units - 90) * 38.0 + 1000;
  } else {
    bill = 60 * 16.0 + 30 * 25.0 + 90 * 38.0 + (units - 180) * 50.0 + 1500;
  }

  // Carbon emission factor for national grid: approx 0.65 kg CO2 / kWh
  const co2Kg = Math.round(totalKwh * 0.65 * 10) / 10;

  return {
    kwh: totalKwh,
    billLKR: Math.round(bill),
    co2Kg
  };
}
