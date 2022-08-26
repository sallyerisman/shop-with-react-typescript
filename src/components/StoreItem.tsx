import './StoreItem.css'
import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../utils/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const { 
    getItemQuantity, 
    increaseItemQuantity, 
    decreaseItemQuantity, 
    removeFromCart
  } = useShoppingCart()

  const quantity = getItemQuantity(id)
  const formatedPrice = formatCurrency(price)

  return (
    <Card className="card h-100">
      <Card.Img className="card__img" src={imgUrl}/>
      <Card.Body className="card__body">
        <Card.Title className="card__title">
          <span className="card__title--name">{name}</span>
          <span className="card__title--price">{formatedPrice}</span>
        </Card.Title>
        <div className="card__div mt-auto">
          {quantity 
            ? (
                <>
                  <div className="card__button--container">
                    <Button 
                      className="card__button card__button--minus"
                      onClick={() => decreaseItemQuantity(id)}
                    >-
                    </Button>
                    <span className="card__button--info">{quantity} in cart</span>
                    <Button 
                      className="card__button card__button--plus"
                      onClick={() => increaseItemQuantity(id)}
                    >+
                    </Button>
                  </div>
                  <Button 
                    className="card__button card__button--remove"
                    onClick={() => removeFromCart(id)}
                  >Remove
                  </Button>
                </>
              )
            : (
              <Button 
                className="card__button card__button--add"
                onClick={() => increaseItemQuantity(id)}
              >Add to cart
              </Button>
            )

          }
        </div>
      </Card.Body>
    </Card>
  )
}

export {StoreItem}