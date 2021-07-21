import React, {useRef, useEffect} from 'react';

function Tv() {


const headerRef = useRef(null)

  useEffect(() => {
    console.log(headerRef)
  }, [headerRef])

return (
    <>
       <section class="tv">
      <div class="tv-intro" >
        <h2 class="the" ref={headerRef}>The</h2>
        <h2 class="trading">Trading</h2>
        <h2 class="revolution">Revolution</h2>
      </div>
    </section>
    </>
  );
}
export default Tv;