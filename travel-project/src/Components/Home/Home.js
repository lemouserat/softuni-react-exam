

import { CarouselHome } from './Carousel'
import styles from './Home.module.css'


export const Home = () => {
    return (

        <>
        
                 <div className="slider">      
         <div className="Modern-Slider content-section" id="top"> 
             <div className="item item-1"> 
                 <div className="img-fill"> 
                 <CarouselHome />
                <div className="info">
                    <div>
                      <h1>Travel Blog Project<br/>by Anastas</h1>
                      {/* <p>Gaze upon the finest photography work out there.<br/>
                          Please share our site link to your friends.</p> */}
                      <div className="white-button button">
                          <a href="/login">Log in</a>
                      </div>
                    </div>
                    </div> 
                </div> 
            </div> 

         </div> 
     </div> 
        
        </>

    )
}