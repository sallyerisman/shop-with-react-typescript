import React from 'react'
import './StoreItem.css'
import { Card } from 'react-bootstrap'
import { formatCurrency } from '../utils/formatCurrency'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const formatedPrice = formatCurrency(price)

  return (
    <Card>
      <Card.Img className="card__img" src={imgUrl}/>
      <Card.Body className="card__body">
        <Card.Title className="card__title">
          <span className="card__title--name">{name}</span>
          <span className="card__title--price">{formatedPrice}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export {StoreItem}