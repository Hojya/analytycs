
import React from "react";
import { useState } from "react";
import './App.css';
import Main from "./Main";
import Menu from "./Menu/Menu";


const App = () => {
  const [menuActive, setMenuActive] = useState(false)
  const items = [{value: 'Расходы', href: '/main'},{value: 'Все отчеты', href: '/main'},{value: 'Доходы', href: '/mainTwo'},{value: 'Все отчеты', href: '/main'}]
  return(
    <div className="app">
      <nav>
        
          <div className="burger-btn" onClick={()=> setMenuActive(!menuActive)}>
            <div class="tri_poloski ">
              <span >☰ </span>
            </div>
            
          </div>
            <h4>Иванов Иван Иванович</h4>
            
            
            <div className="login"></div>
          
        
        
        
        
        
      </nav>
      <main>
        <Main/> 
      </main>

      <Menu active ={menuActive} setactive={setMenuActive} header={'Главная'} items={items}/>
    </div>
  );
};

export default App;