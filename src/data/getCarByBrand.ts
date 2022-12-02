import carsJson from './carlist.json'

interface Cars {
  brand: string
  models: string[]
}

export function getCarByBrand(brand: string): Cars | undefined {
  return brand
    ? carsJson.find((item) => item.brand.toLowerCase() === brand.toLowerCase())
    : undefined
}
