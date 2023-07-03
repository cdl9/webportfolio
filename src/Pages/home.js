import React from 'react';
import SubmitButton from '../Components/SubmitButton';
import '../Styles/home.css';

class Home extends React.PureComponent {
    render(){
        return(
          <div className="HomeBody">
            <div className="NameTitle">Christian Leon</div>
            <div className="Subtitle">Software Developer</div>
            <SubmitButton label="Download CV" marginTop="140px"/>
            <div className="CoverDesign"></div>

          </div>
        );
    }

}
export default Home;