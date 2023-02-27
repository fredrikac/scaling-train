import { useState, useEffect } from 'react';
import img from "../assets/9781250236210_200x_a-psalm-for-the-wild-built.jpeg";
import BookCard from "./BookCard";
import data from "../assets/data.json"
//den här komponenten ska rendera 1 block för DAGENS recension högst upp
//under det ska den rendera komponenter för de 6 senaste recensionerna
//under det ska det finnas ytterligare ett block med 6st recensioner 
//bok-kortet ska tilldelas en färg dynamiskt. Den färgen ska sedan följa med till den individuella recensions-sidan

const StartFeed = () => {
    //Här vill jag hämta dummy-data och rendera ett BookCard för varje post i datan
    const [books, setBooks] = useState([]);

    const getData = () => {
        fetch('./data.json')
        .then(response => response.json())
        .then((data) => setBooks(data))
    }

    useEffect(()=> {
        getData();
    }, []);

    const colors = [
        'bg-1', 
        'bg-2',
        'bg-3', 
        'bg-4', 
        'bg-5', 
        'bg-6', 
        'bg-7', 
        'bg-8',
        'bg-9', 
        'bg-10', 
        'bg-11', 
        'bg-12', 
        'bg-13', 
        'bg-14', 
        'bg-15', 
        'bg-16', 
        'bg-17', 
        'bg-18'
    ];

    return (
        <div className='container'>
            <div className='row col-12'>
                <div className='col bg-2 d-flex flex-row align-items-start p-2'>
                    <img src={img} alt="Book cover" className='object-fit-contain h-auto  mx-1 shadow-sm'/>
                    <div className='d-flex flex-column mx-4'>
                    <span className='d-flex flex-row'><p className='me-1 date bold'>DAGENS BOK </p><p className='font-1'>23 februari 2023</p></span>    
                        <h2 className='todays-title'>Boktitel</h2>
                        <p>Författarens namn</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. 
                        </p>
                        <span className='d-flex flex-row'><p>recenserad av</p><p className='bold ms-1'>Recensör Åsiktsson</p></span>
                    </div>
                </div>
                <div className='col bg-light'>
                    <h2 className='sub-title'>Plats för special</h2>
                </div>
            </div>

            <div className='row col-12'>
            {books.map((book, i) => {

                    return (
                        <BookCard
                        color={`bg-${i}`}
                        key={`${book.title}-${i}`}
                        title={book.title}
                        author={book.author}
                        body={book.body}
                        reviewer={book.reviewer}
                        />
                    )
                })}
            
            </div>
        </div>
    )
  }
  
  export default StartFeed;