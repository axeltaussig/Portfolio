import Header from './components/Header/Header';
import Tv  from './components/TV/Tv';
import tvHeader from './components/Header/tvHeader';
import DL from './components/DL/DL.js';
import Piedras from './components/Piedras/piedras.js';
import FirstS from './components/Intro/IntroSlider.js';
import {sliderData} from './components/Intro/sliderData'
import './Styles/_global.scss';



function App() {

  return (
    <>
      <Header name="Axel" />
      <FirstS slides={sliderData}/>
      {/* <tvHeader /> */}
      <Tv />
      <DL />
      <Piedras />
          </>
  );
}

export default App;