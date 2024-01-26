import React from 'react'
import { Container } from 'react-bootstrap'
import Laptop from './Laptop'
import laptopData from '../data'

const Laptoplist = () => {
  return (
    <Container className=''>
      <div className='row justify-content-center'>
        {laptopData.map((lap, index) => {
          return (
            <Laptop
              key={lap.id}
              number={index}
              title={lap.title}
              img={lap.img}
              price={lap.price}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Laptoplist
