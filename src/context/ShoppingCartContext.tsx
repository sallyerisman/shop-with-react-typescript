import { createContext, ReactNode, useContext, useState } from 'react';
import { ShoppingCart } from '../components/ShoppingCart'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContextType = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}


const ShoppingCartContext = createContext({} as ShoppingCartContextType) 

const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0   
  }

  const increaseItemQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    }) 
  }

  const decreaseItemQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })  
  }

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <ShoppingCartContext.Provider 
      value={{ 
        openCart,
        closeCart,
        getItemQuantity, 
        increaseItemQuantity, 
        decreaseItemQuantity, 
        removeFromCart,
        cartQuantity,
        cartItems,  
      }}>
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  )
}

export { useShoppingCart, ShoppingCartProvider }