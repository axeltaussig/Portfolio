import React, {useState} from 'react';
import {sliderData} from './sliderData';
import Intro from './Intro';
// import AuthContext from "./../../store/auth-context"
import AuthContext from "./../../store/auth-context";




function IntroSlider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;


  const nextSlide = () => {
setCurrent(current === length - 1 ? 0 : current + 1)

  }


  // console.log(current);
  let style1 = {
    padding: "1px",
    backgroundColor: "green",
    borderRadious:"5px",
    color: 'black',
    width: '50px',
  }

   return (
<AuthContext.Provider value={{nextSlide}}>
        <React.Fragment >
       <section className='firstslide'>
       <div
        className={current === 0 ? 'slideIn active' : 'slide-out active' }
          style={{ opacity: current === 0 ? 1 : 0 }}>
          {sliderData[0].card}0
        </div>
       <div className={current === 1 ? 'slideIn active' : 'slide-out active'}>{sliderData[1].card}0</div>
        {/* {sliderData.map((slide, index) => {
          console.log(index)
        return(
          <div
          className={index === current ? 'slideIn active' : 'active'}
          key={index}
          >
            {index === current && (
              < >
           {slide.card}
               </>
            )}
            </div>
        );
      })} */}
    </section>
       </React.Fragment>
</AuthContext.Provider>
  )
}
export default IntroSlider;