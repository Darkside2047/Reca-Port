import React from 'react'
import self from "../assets/portrait1.jpg"

function Main() {
  return (
    <section id="about" className="py-5 bg-black border-bottom border-3 border-black">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src={self} alt="Portrait of William B. Bowens" /></div>
                        <div className="col-lg-6">
                            <h1 className="text-light mt-4"> About Me</h1>
                            <p className="text-light fs-4 fst-italic mt-7P">Business Professional and aspiring web developer with aptitude for technology who brings 6 years of proven experience and leadership in the United States Air Force.
                                Accomplished leader who excelled in a dynamic, fast - paced environment. Excellent decision making, conflict
                                management, and problem-solving skills. Has an extensive background knowledge of various coding languages such as javascript, html, and css.
                            </p>
                            
                            <h1 className="text-light mt-4"> Experience </h1>

                            <ul className="text-light fs-4 fst-italic">
                                <li>Directed operations overseeing day-to-day activities excelled at delegating and demonstrated exceptional communication skills</li>
                                <li>Supervised and coordinated multiple, diverse teams and departments within organization</li>
                                <li>Mastered various computer programs, Microsoft applications, and served as school network tech</li>
                                
                            </ul>

                            <h1 className="text-light mt-4"> Relevent Skills </h1>
                            <ul className="text-light fs-4 fst-italic">
                                <li>Html 5</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Adobe Illustrator</li>
                                <li>Figma</li>
                            </ul>
 

                        </div>
                    </div>
                </div>
               
            </section>

  )
}

export default Main;
