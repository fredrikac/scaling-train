import placeholder from "../assets/book-cover-placeholder.png"

const BookCard = ({ title, author, body, reviewer, color}) => {
    

    return(
        <div className={` ${color} d-flex flex-row align-items-start p-2 col-4 hs-book`}>
            <img src={placeholder} alt="Book cover" className='object-fit-contain h-100 mx-1 shadow-sm'/>
            <div className='col-4  w-auto d-flex flex-column justify-content-between mx-2 h-100'>
                <div className='d-flex flex-column'>
                    <span className='d-flex flex-row'><p className='me-1 date bold'>DAGENS BOK </p><p className='font-1'>23 februari 2023</p></span>    
                    <h3 className='book-card-title'>{title}</h3>
                    <p>{author}</p>
                </div>
                <span className='d-flex flex-row'><p>recenserad av</p><p className='bold ms-1'>{reviewer}</p></span>
            </div>
        </div>
    )
}

export default BookCard;