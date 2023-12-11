import Link from 'next/link';

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
        <div className='wrapper'>
          <div className='main-block__content'>
            {/*<span className='saint-text'>Professional</span>
            <h1 className='main-text'>Beauty &amp; Care</h1>*/}
            <p>
              <br></br>
              <br></br>
              <br></br>
              Pacific coast-inspired,<br></br>handmade wares and fragrances.
              <br>
              </br>
              
            </p>

            <Link href='/shop'>
              {/*<div className='centered-text'>*/}
                <a className='btn'>Shop now</a>
              {/*</div>*/}
            </Link>
          </div>
        </div>
        {/*<img
          className='main-block__decor'
          src='/assets/img/main-block-decor.png'
          alt=''
        />*/}
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
