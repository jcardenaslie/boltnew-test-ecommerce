import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Header: React.FC = () => {
  const { cart } = useCart()

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">E-Shop</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li>
              <Link to="/cart" className="flex items-center hover:text-blue-200">
                <ShoppingCart className="mr-1" />
                Cart ({cart.length})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header