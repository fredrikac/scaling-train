import placeholder from "../assets/book-cover-placeholder.png"
import { Link } from "react-router-dom";
import img from "../assets/9781250236210_200x_a-psalm-for-the-wild-built.jpeg";

const BookCard = ({ title, author, body, reviewer, color}) => {
    

    return(
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 book-card">
        <div className={` ${color} d-flex flex-row align-items-start p-2 hs-book`}>
            <img src={placeholder} alt="Book cover" className='object-fit-contain h-100 mx-1 shadow-sm'/>
            <div className='col-4  w-auto d-flex flex-column justify-content-between mx-2 h-100'>
                <div className='d-flex flex-column'>
                    <span className='d-flex flex-row'><p className='me-1 date font-xs bold'>DAGENS BOK </p><p className='font-1 font-xs'>23 februari 2023</p></span>    
                    <Link to={`/datum/${title}`} state={{color}} className='book-card-title'>{title}</Link>
                    <p>{author}</p>
                </div>
                <span className='d-flex flex-row'><p>av</p><p className='bold ms-1'>{reviewer}</p></span>
            </div>
        </div>
        </div>
    )
}

const TodaysBookCard = ({ title, author, body, reviewer, color }) => {
    return (
        <>
            <div className={`${color} col-sm-12 col-md-8 col-lg-6 d-flex flex-row align-items-start p-2`}>
                <img src={img} alt="Book cover" className='object-fit-contain h-auto  w-25 mx-1 shadow-sm'/>
                <div className='d-flex flex-column mx-4'>
                    <span className='d-flex flex-row'><p className='me-1 date bold'>DAGENS BOK </p><p className='font-1'>23 februari 2023</p></span>    
                    <Link to='/23-02-2023/Boktitel' state={{ color }} className='todays-title'>{title}</Link>
                    <p>{author}</p>
                    <p>{body}</p>
                    <span className='d-flex flex-row'><p>av</p><p className='bold ms-1'>{reviewer}</p></span>
                </div>
            </div>
            <div className='col-sm-12 col-md-4 col-lg-6 bg-light p-2'>
                <h2 className='sub-title'>Plats för special</h2>
            </div>
        </>
    )
}

export { TodaysBookCard }; 
export default BookCard;