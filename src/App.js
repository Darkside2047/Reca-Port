import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./Component/Header";
import Media from "./Component/Media";
import Main from "./Component/Main";
import Project from "./Component/Project";
import Foot from "./Component/Foot";
import logo from "./assets/Reca_Red_Txt_TP.png";

function App(){

  return(
    <>

        <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-3 border-light bg-black fixed-top">
                <div className="container px-5">
                <img src={logo}  width="100" height="75" className="img-fluid img-display" alt="The ETA primary logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item"><a className="nav-link" href="#reca">Top</a></li>
                            <li className="nav-item"><a className="nav-link" href="#home">Title</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#project">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="#footer">Copyright</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
      <Media />
      <Header />
      <Main />
     
      <section id="project" class="bg-black py-5 border-top border-3 border-light">
         <div class="container px-5">
         <div class="row justify-content-center">
            <div class="col-lg-8 col-xxl-6">
                <div class="text-center my-5">
                    <h1 class="mt-5">Previous Project Gallery</h1>
                </div>
            </div>
        </div>
        </div>
     </section>
      <Project />
      
      <Foot />
     
      
    </>

 

  )


}

export default App;