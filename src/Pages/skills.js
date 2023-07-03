import React from 'react';
import '../Styles/skills.css'

class Skills extends React.PureComponent {
    render(){
        return(
          <div className="SkillsBody">
            <div className="SmallHeader">Skills</div>
              <div className="SquareSkills">
                <div className="SkillTitle">Web Development</div>
                <div className="SkillTitle">Web Development</div>
                <div className="SkillTitle">Web Development</div>
                <div className="SkillTitle">Web Development</div>


              </div>
              <div className="SquareSkills">
                <div className="SkillTitle">Mobile App</div>
                <div className="SkillTitle">Web Development</div>
                <div className="SkillTitle">Web Development</div>
              </div>
              <div className="SquareSkills">
                <div className="SkillTitle">Databases</div>
              </div>
              <div className="SquareSkills">
                <div className="SkillTitle">Software Dev</div>
              </div>
          </div>
        );
    }

}
export default Skills;