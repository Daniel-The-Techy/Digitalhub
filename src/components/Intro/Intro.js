import React from 'react'
import './intro.css'
import pic from "../img/PRIOE.jpg"

function Intro() {
    return (
       <>
       <div className="container" data-aos="fade-right">
    <img src={pic} alt="PRI"/>
         <div className="Container-1" data-aos="fade-right">
             <h1>
      We Are <span className="bin">JuJu</span> The Connector To Your Audience
             </h1>
                    <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eum ratione asperiores.
       Doloribus sed aliquid ipsam suscipit quisquam, quod saepe libero dolorem, dolorum voluptatibus
       reprehenderit, ullam vitae. Laudantium cum ducimus ad rerum, numquam debitis eum corporis enim 
       fugiat rem facere ipsam, esse veritatis dolor amet eius eaque. Dignissimos praesentium voluptas 
       omnis odio molestias quisquam culpa, eaque repellat ut, ea reprehenderit!
                     </p>
     <button type="button" className="Appoint">Book An Appointment</button>
     <button type="button" className="Contact">Contact Us</button>
                        </div>

     </div>

     <h2>Why We are The Right People To Connect You To Your Audience</h2>
     <div class="Consider">
         <img src={pic}  alt="peek"/>
         <div class="Consider-1" data-aos="fade-right">
            <h3>Why You Should Choose Us</h3>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, maiores. Cupiditate soluta, quos nulla optio obcaecati deserunt enim eveniet mollitia placeat quae non ea, error doloribus ut aut laborum tempora quo recusandae! Aliquid dolore quae enim explicabo, ipsam, quibusdam nihil autem, quidem sunt officia ducimus sit.
         Quae aliquid ipsam laudantium culpa officiis, amet blanditiis, unde accusamus ab eius repellat totam!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum, quaerat facere sed at voluptate optio ab expedita cum vero ducimus ipsam necessitatibus, repellat deleniti voluptas tenetur a officiis earum odio inventore pariatur illum! Deleniti id blanditiis at molestiae maiores.
    </p>

    <button type="button">See More</button>
         </div>
     </div>

        </>
    )
}

export default Intro
