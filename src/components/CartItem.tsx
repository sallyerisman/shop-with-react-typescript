import { Button, Stack } from "react-bootstrap"
import './CartItem.css'
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
import { formatCurrency } from '../utils/formatCurrency'

type CartItemProps= {
  id: number
  quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (!item ) return null

  return (
    <Stack direction="horizontal" gap={2} className="cart-item__container">
      <img src={item.imgUrl} alt="Product" className="cart-item__img" />
      <div className="cart-item__content">          
        <div className="cart-item__single">
          {item.name} {" "}
          {quantity > 0 &&
            <>
              <span className="cart-item__single--quantity">
                {"x "}{quantity}
              </span>
              <span className="cart-item__single--price">
                {formatCurrency(item.price)}
              </span>
            </>
          } 
        </div>
        <div className="cart-item__total">
          <span>
            {formatCurrency(item.price * quantity)}
          </span>
          <Button
            className="cart-item__total--button"
            onClick={() => removeFromCart(id)}
          >X
          </Button>
        </div>        
      </div>
    </Stack>
  )
}

export {CartItem}