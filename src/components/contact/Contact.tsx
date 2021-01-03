import { Component } from 'react';
import wip from '../../assets/work-in-progress.png';

class Contact extends Component {
    render() {
        return (
            <div className="contact-background">
                <div className="Contact container d-flex align-items-center justify-content-center" id="Contact">
                    <img className="wip my-5" src={wip} alt="contact"/>
                </div>
            </div>
        );
    }
}
  
export default Contact;