import { Component } from 'react';
import wip from '../../assets/work-in-progress.png';

class Skills extends Component {
    render() {
        return (
            <div className="skills-background">
                <div className="Skills container d-flex align-items-center justify-content-center my-5" id="Skills">
                    <img className="wip my-5" src={wip} alt="skills" />
                </div>
            </div>
        );
    }
}
  
export default Skills;