import React, {useContext} from 'react'
import { sliderData } from './sliderData';
import AuthContext from './../../store/auth-context'

function Intro2() {
  const context = useContext(AuthContext)
  return (
    <>
       <section class="intro2">
        
       <div class="intro-cards3">
       <button onClick={context.nextSlide}></button>
       <div class="intro-cards2">
      <div class="intro-phrase2">
        <p>I seek to create compelling works that move souls and inspire people.</p>
        <p>My main exprtise is on Digital Marketing.</p>
        <p>Website development and online advertising expertise.
Project management experience. Time, budget, workforce and execution from concept to delivery.
Nurture collaborative environments. Seek to create a healthy workplace environment to obtain meaningful results.</p>
      </div>
      </div>
      </div>
 
    </section>
    </>
  );
}

export default Intro2;
