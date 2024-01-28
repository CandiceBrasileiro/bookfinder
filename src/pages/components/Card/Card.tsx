import React from 'react'
import { CBooks } from '../../../entities/CBooks';

interface BookCardProps extends CBooks {
    onClick:() => void
}



const Card = (props:BookCardProps) => {
    const map = new Map();

  return (
    <>
        {
            book.map((item) => {
                return (
                <div className='card'>
                    <img src='./images/book.png' alt='' />
                    <div className='bottom'>
                        <h3 className='title'>Title</h3>
                        <p className='amount'>Amount</p>
                    </div>
                </div>
                )
            })
        }
    </>
  )
}

export default Card;