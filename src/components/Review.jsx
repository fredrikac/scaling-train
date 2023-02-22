import img from "../images/9781250236210_200x_a-psalm-for-the-wild-built.jpeg";

const Review = () => {
  return (
    <article>
    <div className='bg-primary-subtle mb-4 ps-5'>
      <div className='lh-2 p-3'>
        <p className='m-0'>DAGENS BOK 22 februari 2023</p>
        <h1 className='fs-4'>Titel</h1>
        <h2 className='fs-6'>av Författare</h2>
      </div>
    </div>

    <div className='container'>
        <div className='row d-flex flex-row justify-content-center'>
          <div className='col-md-6 col-sm-10 p-3 me-2 ms-2'>
            <p className='text-wrap text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. 
              <br />
              <br/>
              Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>Recenserad av Recensör Åsiktsson</p>
          </div>

          <div className='col-md-4 col-sm-10'>
            <div className='row'>
              <div className='col-md-6 col text-end p-2'>
                <p >Titel</p>
                <p >Författare</p>
                <p>Årtal</p>
                <p>Förlag</p>
              </div>

              <div className='col-md-6 col p-2 mb-2'>
                <img src={img} alt="Book cover" className='object-fit-cover img-fluid m-0'/>
              </div>

              <div className='col-12 border-top pt-2 pb-2'>
                <span className='d-flex flex-row justify-content-between bg-light'><p>Utgiven</p><p>2022</p></span>
                <span className='d-flex flex-row justify-content-between'> <p>ISBN </p><p>9781250236210</p></span>
                <span className='d-flex flex-row justify-content-between bg-light'><p>Sidor</p><p>222</p></span>               
              </div>

              <div className='col-12 border-top p-2'>
                <p className='border-bottom'>Om författaren</p>
                <p className='border p-2'>
                  Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <div className='col-12 p-2 d-flex flex-column'>
                <p className='border-bottom'>Etiketter</p>
                <div className='p-2 d-flex flex-row flex-wrap justify-content-start'>
                  <p className='bg-primary-subtle rounded m-2 p-1'>Skönlitteratur</p>
                  <p className='bg-primary-subtle rounded m-2 p-1'>Science-fiction</p>
                  <p className='bg-primary-subtle rounded m-2 p-1'>Spänning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Review;
