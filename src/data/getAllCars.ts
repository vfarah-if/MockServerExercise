import carsJson from './carlist.json'

export function getAllCars(): any {
  return { count: carsJson.length, result: carsJson }
}
