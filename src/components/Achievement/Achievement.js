import React from 'react'
import {Menu} from './Menu';
import './Achievement.css';
function Achievement() {
    return (
        <>
             <section class="bg">
           
             <div class="Achievement">
        {Menu.map((Menus, index) => {
              return (
        
             <>
              
             <div class="Achievement-1">
              <h1>{Menus.numbers}</h1>
              <p>{Menus.achievement}</p>
              </div>
            
             </>
      
              )
        })}
     
     
     </div>
      </section>
        </>
    )
}

export default Achievement
