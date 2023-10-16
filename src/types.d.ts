import { type ALL_CATEGORIES } from './constants'

type AllCategories = typeof ALL_CATEGORIES

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface Filter {
  minPrice: number
  category: AllCategories | string
}

export interface ProductCart {
  product: Product
  quantity: number
}

export type Cart = ProductCart[]
