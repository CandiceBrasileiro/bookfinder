import React from 'react';

const Card = ({book}) => {
    const map = new Map();

  return (
    <>
        {
            book.map((item) => {

                const bookId = item.id;
                const bookThunbnail = item.volumeInfo.imagesLinks && item.volumeInfo.imagesLinks.smallThumbnail;
                const bookTitle = item.volumeInfo.title;
                const bookAuthor = item.volumeInfo.authors;

                if(bookThunbnail != undefined) {
                return (
                    <div className='card'>
                        <img src={bookThunbnail} alt={bookTitle} />
                        <div className='bottom'>
                            <h3 className='title'>Title</h3>
                            <p className='amount'>Amount</p>
                        </div>
                    </div>
                    )
                }
            })
        }
                
            
        
    </>
  )
}

export default Card;