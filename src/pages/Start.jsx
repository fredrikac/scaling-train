import { useState, useEffect } from 'react';
import BookCard, { TodaysBookCard } from "../components/BookCard";
import arrowIcon from "../assets/down-arrow.png"
//den här komponenten ska rendera 1 block för DAGENS recension högst upp
//under det ska den rendera komponenter för de 6 senaste recensionerna
//under det ska det finnas ytterligare ett block med 6st recensioner 
//bok-kortet ska tilldelas en färg dynamiskt. Den färgen ska sedan följa med till den individuella recensions-sidan


const StartFeed = () => {
    const [books, setBooks] = useState([]);

    //den här behöver begränsa hur många som hämtas 
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

    const showMore = () => {
        console.log('klickar på knappen')
        //hämta ytterligare 6 rec
    }

    //kolla vilken färg books[1] har och spara den färgens index
    //den färgens index +1 är sedan den nya bokens färg
    //jag kan inte jobba med index här, jag behöver tilldela varje bok en färg innan den renderas. 
    //Jag tänker på det här fel, alla böcker förutom den nyaste kommer ha en färg... Jag kan tilldela den äldsta en färg. Den färgen har ett visst index i colors. 
    //behöver jag separera ut todaysbook?


    return (
        <div className='container'>           
            <div className="row">
            <div className="col-12 d-flex flex-row flex-wrap m-0">
            {books.map((book, i) => {
                if(i === 0){
                    return (
                    <TodaysBookCard 
                        color={`bg-${i}`}
                        key={`${book.title}-${i}`}
                        title={book.title}
                        author={book.author}
                        body={book.body}
                        reviewer={book.reviewer}
                    />
                    )
                }else if (i > 0 && i < 19){
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
                <div className='m-4 d-flex flex-row justify-content-center'>
                    <div className="d-flex flex-row align-items-center">
                        <button className='d-flex justify-content-end bg-body-secondary btn btn-light rounded-circle p-2' id="showMoreBtn" onClick={showMore} data-toggle="tooltip" data-placement="bottom" title="Visa mer">
                            <img src={arrowIcon} alt='arrow-down-icon' height='15px' width='15px' />
                        </button>
                    </div>
                </div>
            </div>
          </div>
    )
  }
  
  export default StartFeed;