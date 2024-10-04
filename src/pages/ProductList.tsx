import React from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'

const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList