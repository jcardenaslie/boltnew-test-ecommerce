import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct'
import { useCart } from '../context/CartContext'

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { product, loading, error } = useProduct(id)
  const { addToCart } = useCart()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!product) return <div>Product not found</div>

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.title} className="w-full h-auto object-cover" />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails