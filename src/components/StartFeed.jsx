import img from "../images/9781250236210_200x_a-psalm-for-the-wild-built.jpeg";
//den här komponenten ska rendera 1 block för DAGENS recension högst upp
//under det ska den rendera komponenter för de 6 senaste recensionerna
//under det ska det finnas ytterligare ett block med 6st recensioner 
//bok-kortet ska tilldelas en färg dynamiskt. Den färgen ska sedan följa med till den individuella recensions-sidan

const StartFeed = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col bg-greyish-blue d-flex flex-row align-items-start p-2'>
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

            <div className='row '>
                <div className='col-4 bg-light-green d-flex flex-row align-items-start p-2 w-auto hs-book'>
                <img src={img} alt="Book cover" className='object-fit-contain h-100 mx-1 shadow-sm'/>
                <div className='col-4  w-auto'>
                    <div className='d-flex flex-column mx-4'>
                        <span className='d-flex flex-row'><p className='me-1 date bold'>DAGENS BOK </p><p className='font-1'>23 februari 2023</p></span>    
                        <h3 className='book-card-title'>Boktitel</h3>
                        <p>Författarens namn</p>
                        <span className='d-flex flex-row'><p>recenserad av</p><p className='bold ms-1'>Recensör Åsiktsson</p></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
  }
  
  export default StartFeed;