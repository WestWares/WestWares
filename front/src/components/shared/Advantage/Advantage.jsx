import { Card } from './Card/Card';
import advantagesData from 'data/advantage/advantage';

export const Advantage = () => {
  const advantages = [...advantagesData];
  return (
    <>
      {/* <!-- BEGIN ADVANTAGES --> */}
      <div className='advantages'>
        <div id="centered-text">
          <center>
            <iframe width="960" height="540" display="block" allow="fullscreen;"
            src="https://www.youtube.com/embed/jYbCOS3wvGA?autoplay=1&mute=1&color=white&rel=0&modestbranding=1" allowfullscreen></iframe>
          </center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className='wrapper'>
          <div className='advantages-items'>
            {advantages.map((advantage, index) => (
              <Card key={index} advantage={advantage} />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- ADVANTAGES EOF   --> */}
    </>
  );
};
