import React from 'react'
import './Appointment.css';
function Appointment() {
    return (
        <>
           <h5>Book An Appointment With <span class="Agency">JuJu</span> Agency</h5>
        <div class="Appointment">
            <img src={require("../img/PEEK.jpg")} alt="pit"/>
            <div class="Appointment-1"data-aos="fade-left" >
                <h1>Book An Appointment</h1>
                <form>
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="text" placeholder="Enter Your LastName"/>
                    <input type="text" placeholder="Enter Your Email"/>
                    <textarea class="text" placeholder="Enter Your Message........."></textarea>
                    <button>Book An Appointment</button>
                </form>

            </div>
        </div>  
        </>
    )
}

export default Appointment
