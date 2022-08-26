import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import './ShoppingCart.css'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem'
import { formatCurrency } from '../utils/formatCurrency'

type ShoppingCartProps = {
  isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps ) => {

  const { cartItems, closeCart, getTotal } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          <>
            {cartItems && 
              cartItems.map(item => (
                <CartItem key={item.id} {...item}/>
              ))
            }
            <div className="cart-total">
              Total: {formatCurrency(getTotal())}
            </div>
          </>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export {ShoppingCart}