import React from 'react';
import ButtonMore from '../Button/Button';

const Card = ({book}) => {
    return(
        <div className='card'>
            {/* <img src={book.volumeInfo.imagesLinks && book.volumeInfo.imagesLinks.smallThumbnail} alt={book.volumeInfo.title} />
            <div className='bottom'>
                <ol>
                <li className='title'>{book.volumeInfo.title}</li>
                <li className='author'>{item.volumeInfo.authors[0]}</li>
                <li className='publisher'>{publisher}</li>
                <li className='publishedDate'>{publishedDate}</li>
                </ol>
            </div>
            <ButtonMore /> */}
        </div>
    )
}

export default Card;