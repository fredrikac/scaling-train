import { useState, useEffect } from 'react';
import img from "../assets/9781250236210_200x_a-psalm-for-the-wild-built.jpeg";
import BookCard, { TodaysBookCard } from "./BookCard";
import { Link } from 'react-router-dom';
//den här komponenten ska rendera 1 block för DAGENS recension högst upp
//under det ska den rendera komponenter för de 6 senaste recensionerna
//under det ska det finnas ytterligare ett block med 6st recensioner 
//bok-kortet ska tilldelas en färg dynamiskt. Den färgen ska sedan följa med till den individuella recensions-sidan
//jag vill rendera dagens kort tillsammans med korten nedan
//koda så att första kortet får special-utseende

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
    const color = 'bg-2'

    return (
        <div className='container'>           
            <div className="row">
            <div className="col-12 d-flex flex-row flex-wrap m-0">
            {books.map((book, i) => {
                if(i === 0){
                    return <TodaysBookCard 
                    color={`bg-${i}`}
                    key={`${book.title}-${i}`}
                    title={book.title}
                    author={book.author}
                    body={book.body}
                    reviewer={book.reviewer}/>
                }else{
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
                }

                })}
                </div>
            </div>
          </div>
    )
  }
  
  export default StartFeed;