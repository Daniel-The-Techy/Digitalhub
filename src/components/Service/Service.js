import React from 'react'
import './Service.css'

function Service() {
    return (
        <>
            <h4>Our Services</h4>
    <div class="Service" data-aos="fade-up">
        <div class="Service-1">
            <span class="icon"><ion-icon name="pie"></ion-icon></span>
                  <h1>Digital Marketing</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Soluta doloremque dicta quaerat 
                molestias temporibus nam nostrum tempore officiis placeat quam.</p>
              
        </div>

        <div class="Service-1">
            <span class="icon"><ion-icon name="paper"></ion-icon></span>
                     <h1>Branding</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quam? Eveniet ducimus ab id harum minus modi odit mollitia maiores.</p>
      
        </div>

        <div class="Service-1">
            <span class="icon"><ion-icon name="pin"></ion-icon></span>
                
                  <h1>Web Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Soluta doloremque dicta quaerat 
                molestias temporibus nam nostrum tempore officiis placeat quam.</p>
              

        </div>

        <div class="Service-1">
            <span class="icon"><ion-icon name="stats"></ion-icon></span>
                  <h1>Research</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Soluta doloremque dicta quaerat 
                molestias temporibus nam nostrum tempore officiis placeat quam.</p>
                <span><ion-icon name="arrow-round-forward"></ion-icon>See More</span>
        </div>

    </div>

        </>
    )
}

export default Service
