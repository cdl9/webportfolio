import React from 'react';
import '../Styles/about.css'

class About extends React.PureComponent {
    render(){
        return(
          <div className="AboutBody">
            <div className="SmallHeader">Who am I?</div>
            <div className="SmallText">I'm a Front-End Developer in New York City.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special.</div>
            
            <div className="HorizontalBlock">
            <div className="SmallCircle"></div>
            <div className="PicBorder">
              <div className="CircularPic">
              </div>
            </div>
            <div className="SmallCircle"></div>
            </div>
          
          </div>  
        );
    }

}
export default About;