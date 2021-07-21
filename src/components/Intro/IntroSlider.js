import React, {useState} from 'react';
import {sliderData} from './sliderData';
import Intro from './Intro';
// import AuthContext from "./../../store/auth-context"
import AuthContext from "./../../store/auth-context";
import Intro2 from './Intro2';




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
        <Intro current={current} />

        <Intro2 current={current} />
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