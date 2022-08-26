import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem'

type ShoppingCartProps = {
  isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps ) => {
  const { cartItems, closeCart } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems && 
            cartItems.map(item => (
              <CartItem key={item.id} {...item}/>
            ))
          }
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export {ShoppingCart}