import { Component } from 'react';
import wip from '../../assets/work-in-progress.png';

class Projects extends Component {
    render() {
        return (
            <div className="projects-background">
                <div className="Projects container d-flex align-items-center justify-content-center" id="Projects">
                    <img className="wip my-5" src={wip} alt="projects"/>
                </div>
            </div>
        );
    }
}
  
export default Projects;