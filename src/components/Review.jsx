import img from "../images/9781250236210_200x_a-psalm-for-the-wild-built.jpeg";

const Review = () => {
  return (
    <article>
    <div className='bg-blue mb-4 ps-5'>
      <div className='lh-2 p-3'>
        <p className='m-0 date'>DAGENS BOK 22 februari 2023</p>
        <h1 className='fs-4 title'>Titel</h1>
        <h2 className='fs-6 sub-title'>av Författare</h2>
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
              <div className='col-md-12 d-flex flex-row'>
                  <div className='col-lg-8 col-md-6 col-sm-9 col text-end p-2'>
                    <p>Titel</p>
                    <p >Författare</p>
                    <p>Årtal</p>
                    <p>Förlag</p>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-3 col d-flex justify-content-center'>
                    <img src={img} alt="Book cover" className='object-fit-contain img-fluid img-thumbnail shadow-sm m-0'/>
                  </div>
              </div>

              <div className='col-12 py-2'>
                <span className='d-flex flex-row justify-content-between bg-light border-top border-bottom py-2'><p>Utgiven</p><p>2022</p></span>
                <span className='d-flex flex-row justify-content-between py-2'> <p>ISBN </p><p>9781250236210</p></span>
                <span className='d-flex flex-row justify-content-between bg-light border-top border-bottom py-2'><p>Sidor</p><p>222</p></span>               
              </div>

              <div className='col-12 p-2'>
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
                <div className='d-flex flex-row flex-wrap justify-content-start'>
                  <p className='bg-greige rounded mb-2 p-1 mx-1'>Skönlitteratur</p>
                  <p className='bg-greige rounded mb-2 mx-1 p-1'>Science-fiction</p>
                  <p className='bg-greige rounded mb-2 mx-1 p-1'>Spänning</p>
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
