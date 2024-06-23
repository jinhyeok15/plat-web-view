export type SearchAddressResponse = Readonly<{
  meta: unknown
  documents: Document[]
}>

type Document = {
  address_name: string
  address_type: string
  x: string
  y: string
  address: Address
  road_address: unknown
}

type Address = {
  address_name: string
  region_1depth_name: string
  region_2depth_name: string
  region_3depth_name: string
  region_3depth_h_name: string
} & unknown
