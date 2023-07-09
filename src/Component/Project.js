import React from 'react'
import logo1 from '../assets/sunsetbeach.jpg'
import logo2 from '../assets/mediaquery.png'
import logo3 from '../assets/sportsbike.jpg'

function Project() {
  return (
    <section className="bg-black">
    
    <div class="container px-5">
    <div class="row gx-5 align-items-center justify-content-center">

        <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
                <h1 class="mt-5">Web 125 Pleasure Island Project</h1>
                <p class="text-light fs-5 fst-italic">Web 125 Pleasure Island Porject introduced me to the bootstrap framwwork.
                The assignment was to completely revamp the original pleasure island website. First using css grid styles, and then implementing
                bootstrap</p>
            </div>
        </div>
    
        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><a href="https://wcet.waketech.edu/wbbowens/WEB125/island/index.html"target="_blank"><img id="img-dis" className="img-fluid rounded-3 my-5" src={logo1} alt="Sunset over a beach with palmtrees"/></a></div>

        <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
                <h1 class="mt-5">Web 125 Media Query Project</h1>
                <p class="text-light fs-5 fst-italic mt-7P">The web 125 media query assignment introduced students to implementing media queries within their applications
                to make them fully responsive.</p>
            </div>
        </div>
        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><a href="https://wcet.waketech.edu/wbbowens/WEB125/mediaQuery/mediaQuery.html"target="_blank"><img className="img-fluid rounded-3 my-5" src={logo2} alt="ETA logo"/></a></div>
    


        <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
                <h1 class="mt-5">Web 140 Vicious Cycles Project</h1>
                <p class="text-light fs-5 fst-italic mt-7P">The web 140 vicious cycles assignment test students basic knowledge of implementing media queries and including a 
              navigation bar</p>
            </div>
        </div>
        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><a href="https://wcet.waketech.edu/wbbowens/WEB140/WEB140Project2/index.html"target="_blank"><img className="img-fluid rounded-3 my-5" src={logo3} alt="Sports bike" /></a></div>



    </div>
    </div>

    </section>
  
  )
}

export default Project 
