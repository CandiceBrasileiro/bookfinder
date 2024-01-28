import React from 'react';
import ButtonMore from '../Button/Button';

const Card = ({book}) => {
    console.log('book', book)
    return(
        <div className='card'>
             <img src={book.thumbnail} alt='' />
            <div className='bottom'>
                <ol>
                <li className='title'>{book.title}</li>
                <li className='author'>{book.author}</li>
                <li className='publisher'>{book.publisher}</li>
                <li className='publishedDate'>{book.publishedDate}</li>
                </ol>
            </div>
            <ButtonMore /> 
        </div>
    )
}

export default Card;