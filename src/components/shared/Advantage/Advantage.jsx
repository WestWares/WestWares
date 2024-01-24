import { Card } from './Card/Card';
import advantagesData from 'data/advantage/advantage';

export const Advantage = () => {
  const advantages = [...advantagesData];
  return (
    <>
      {/* <!-- BEGIN ADVANTAGES --> */}
      <div className='advantages'>
        {/*<div id="centered-text">
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
        </div>*/}
        <div className='wrapper'>
          <div className='advantages-items'>
            {/*{advantages.map((advantage, index) => (*/}
            <Card key="0" advantage={advantages[0]} />
            <Card key="1" advantage={advantages[1]} />
            <Card key="2" advantage={advantages[2]} />
            {/*}))}*/}
          </div>
          <br></br>
          <div className='advantages-items'>
            {/*{advantages.map((advantage, index) => (*/}
            <Card key="3" advantage={advantages[3]} />
            <Card key="4" advantage={advantages[4]} />
            <Card key="5" advantage={advantages[5]} />
            {/*}))}*/}
          </div>
          <br></br>
          <div className='advantages-items'>
            {/*{advantages.map((advantage, index) => (*/}
            <Card key="6" advantage={advantages[6]} />
            <Card key="7" advantage={advantages[7]} />
            <Card key="8" advantage={advantages[8]} />
            {/*}))}*/}
          </div>
        </div>
      </div>
      {/* <!-- ADVANTAGES EOF   --> */}
    </>
  );
};
