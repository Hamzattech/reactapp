import React from 'react'
import Image from '../../Imagess/webdev.jpg'
import Hamzah from '../../Imagess/hamzah.png'
import 'bootstrap/dist/css/bootstrap.css'
import FullyFunctional from '../../components/software/fully.jpg'
import MobileOptimized from '../../components/software/mobile.jpg'
import QualityService from '../../components/software/quality.jpg'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-scroll'
import AboutUs from '../../components/software/aboutus.jpg'



function TopContainer(){
return(
        <div id="top" className="contain" style={{fontFamily:"segoe ui",scrollBehavior:"smooth"}}>
             <div style={{backgroundImage:`url(${Image})`,width:"100%",height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                        <div style={{backgroundColor:"rgba(53, 55, 55, 0.89)",width:"100%",height:"100%"}}>
                     <div className="navbar" style={{display:"flex",justifyContent:"space-between",padding:"1rem"}}>
                             <div className="logo"><img src={Hamzah}></img></div>
                             <div className="regLogin">
                                     <button className="btn btn-success" >Register</button>
                                     <button className="btn button-transparent text-white" style={{border:"1px solid green"}}>Login</button>

                             </div>
                     </div>
                     <div className="logoTextSection" style={{display:"flex",flexDirection:"column",alignItems:"center",color:"white"}}>
                        <img src={Hamzah} style={{width:"100px",height:"100px"}}></img>
                        <h1>Hamzat</h1>
                        <h3 style={{textAlign:"center"}}>Website development made simple. <br></br> Get your Website ready in an excellent way.</h3>
                        <br></br>
                        <button className="btn btn-success" style={{marginBottom:"5rem"}}>Start your project</button>
                        <div style={{transform:"rotate:(90deg)",padding:"5px",borderRadius:"50%"}}><Link to="bestQuality" smooth={true} duration={400}> <FontAwesomeIcon icon={faChevronDown}/> </Link></div>
                     </div>
                     </div>
                     
             </div>
             
             <section style={{fontFamily:"segoe ui"}}>
                     <h1 id="bestQuality" style={{textAlign:"center",color:"black",padding:"1rem"}} title="best">Best Quality Software</h1>

                     <div className="best" style={{display:"flex",alignItems:"center",justifyContent:"space-around",padding:"5rem"}}>
                             <div>
                                    <h1 style={{marginBottom:"5px",textAlign:"center",color:"black"}}>Fully Integrated Services</h1> 
                                    <p style={{textAlign:"center"}}>We build and deliver fully integrated webapps <br></br>
                                        with customized control panel that fits your company needs.
                                    </p>
                             </div>
                             <div><img src={FullyFunctional}></img></div>
                     </div>
                     <div  className="best" style={{display:"flex",alignItems:"center",justifyContent:"space-around",padding:"5rem"}}>
                           
                             <div><img src={MobileOptimized}></img></div>
                             <div>
                                    <h1 style={{marginBottom:"5px",textAlign:"center",color:"black"}}>Mobile Optimized</h1> 
                                    <p style={{textAlign:"center",color:"black"}}>We build and deliver fully integrated webapps <br></br>
                                        with customized control panel that fits your company needs.
                                    </p>
                             </div>
                     </div>
                     <div  className="best" style={{display:"flex",alignItems:"center",justifyContent:"space-around",padding:"5rem"}}>
                             <div>
                                    <h1 style={{marginBottom:"5px",textAlign:"center",color:"black"}}>Quality is our priority</h1> 
                                    <p style={{textAlign:"center",color:"black"}}>We have teams of professional developers,<br></br>
                                       designers and managers that ensure delivering the <br></br> best software quality for your company.
                                    </p>
                             </div>
                             <div><img src={QualityService}></img></div>
                     </div>
             </section>
             <div className="btn btn-sm"> <Link to="top" smooth={true} duration={400}> <FontAwesomeIcon icon={faChevronUp} style={{position:"fixed",right:"2rem",bottom:"20px"}}/> </Link> </div>
             <section className="moreAboutUS">
             <h1 style={{textAlign:"center",color:"black"}}>About us</h1>

                     <div className="moreAbout" style={{display:"flex",alignItems:"center",padding:"5rem",justifyContent:"space-around",color:"black"}}>
                        <div>
                               <p style={{textAlign:"center",color:"black"}}> Tecspot is about designing,developing and <br></br> delivering best Quality web app for 
                                your company.
                                <br></br>We ,make sure that you get best software <br></br> infrastructure for better experience of your clients.
                                <br></br> How you get here doesn't matter because you have taken a <b>bold</b> step.</p>
                        </div>
                                <div>
                                        <img src={AboutUs} style={{width:"275px",height:"183px"}}></img>
                                </div>

                     </div>
             </section>
             <footer style={{backgroundColor:"rgba(53, 55, 55, 0.89)"}} >
                     <div style={{alignItems:"center",display:"flex",flexDirection:"column",padding:"5rem"}}>
             <img src={Hamzah} style={{width:"100px",height:"100px"}}></img>
                        <h1 style={{color:"white"}}>Hamzat</h1>
                        <p style={{textAlign:"center",color:"white"}}><b> Just say the magical word <br></br> and we will do the rest.</b></p>
                        <button className="btn btn-success" style={{marginBottom:"5rem"}}>Start your project</button>
                               
                        </div>
                        <div style={{padding:"5rem"}}>
                                <hr style={{borderColor:"white"}}></hr>
                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                        <div>
                                                <ul style={{listStyleType:"none",display:"inline",color:"white"}}>
                                                        <li>Privacy policy</li>
                                                        <li>Terms and services</li>
                                                        <li>contacts</li>

                                                </ul>
                                        </div>
                                        <div>
                                                new
                                        </div>
                                </div>
                                </div>
                                <p style={{textAlign:"center",color:"white"}}> &copy; 2020 Hamzat All rights reserved </p>
             </footer>

        
        </div>
)
}

export default TopContainer