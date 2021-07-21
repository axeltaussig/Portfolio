import { useState } from 'react';

function Header({ role, location }) {
    const [ name, setName ] = useState("");

    function onHeaderClick() {
        let nameArray = ["A", "X", "E", "L" ];
        
        if(name)
        setName(nameArray[name.length]);
        
    }
 
  return (
    <>
      <header class="main" onClick={onHeaderClick}>
      <nav class="home-nav" id="logo sticky">
        <div class="name">
          <h1 class="nav name">Axel Taussig</h1>
        </div>
        <div class="role">
          <h3>2020 - 2021 | Digital Marketing @ Trade View</h3>
          <p>Location | Melbourne, Victoria, Australia.</p>
        </div>
      </nav>
    </header>
    </>
  );
}

export default Header;
