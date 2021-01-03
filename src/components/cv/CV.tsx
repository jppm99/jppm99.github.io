import { Component } from 'react';
import wip from '../../assets/work-in-progress.png';

class CV extends Component {
    render() {
        return (
            <div className="cv-background">
                <div className="CV container d-flex align-items-center justify-content-center my-5" id="CV">
                    <img className="wip my-5" src={wip} alt="cv"/>
                </div>
            </div>
        );
    }
}
  
export default CV;