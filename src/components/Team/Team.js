import React from 'react'
import {MenuTeam} from './MenuTeam';
import './Team.css';
function Team() {
    return (
        <>
           <h2>Meet Our Reliable Team</h2>
        <div class="Team" data-aos="fade-up">
        
       {MenuTeam.map((Met) => {

           return(
        <div class="Team-1">
            <img src={require(`../img/${Met.image}`)} alt="Metaa"/>
            <h3>{Met.name}</h3>
            <h5>{Met.Department}</h5>
            <p>{Met.About}</p>
        <div class="icon-center">
            <span class="icon"><ion-icon name="logo-facebook"></ion-icon></span>
                     <span class="icon"><ion-icon name="logo-instagram"></ion-icon></span>
                     <span class="icon"><ion-icon name="logo-twitter"></ion-icon></span>
                     </div>
            </div>

           )
       })}


        </div>
        </>
    )
}

export default Team
