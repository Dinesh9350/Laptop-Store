import React from 'react'
import { Card } from 'react-bootstrap'
import './Laptop.css'

const Laptop = ({ img, title, price, number }) => {
  return (
    <Card
      className='m-3 p-3 align-items-center text-center'
      style={{ width: '18rem' }}
    >
      <span className='number'>{`#${number + 1}`}</span>
      <Card.Img
        className='img-fluid'
        variant='top'
        src={img}
        alt='Acer Aspire Lite'
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ color: '#B12704' }}>{price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Laptop
