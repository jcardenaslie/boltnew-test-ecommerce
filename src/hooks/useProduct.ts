import { useState, useEffect } from 'react'

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
}

export const useProduct = (id: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError('Product ID is required')
      setLoading(false)
      return
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch product')
        }
        const data = await response.json()
        setProduct(data)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  return { product, loading, error }
}