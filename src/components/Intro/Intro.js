import React, {useContext} from 'react'
import IntroSlider from './IntroSlider';
import { sliderData } from './sliderData';
import AuthContext from './../../store/auth-context';


function Intro(p) {

const context = useContext(AuthContext)

  return (
    <>
       <section className={`intro ${p.current === 0 ? 'slideIn' : 'slide-out'}` } >
       <div class="intro-cards">
      <section class="pp-intro">
      <div class="box-image">
      </div>
      <h2>Content Creator</h2>
      </section>
      <div class="intro-phrase">
        <h3>A digital expression of my discoveries, works and passions.</h3>
      </div>
      </div>
      <button class="next" onClick={context.nextSlide}></button>
    </section>
    </>
  );
}

export default Intro;
