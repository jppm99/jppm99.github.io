import { Component } from 'react';

import './Contact.css';

class Contact extends Component {
    email = "jpmota99@gmail.com";
    link_linkedin = "https://www.linkedin.com/in/jo%C3%A3o-mota-9519821b4/";

    open_linkedin(link: string) {
        let win: any = window.open(link, '_blank');
        win.focus();
    }

    copy_to_clipboard(email: string) {
        navigator.clipboard.writeText(email);
    }
    
    render() {
        return (
            <div className="contact-background py-5">
                <div className="Contact container d-flex flex-column align-items-center justify-content-center mb-0 py-5" id="Contact">
                    <div className="mt-5 mb-4 d-flex name">
                        <span className="mx-2">João</span>
                        <span className="mx-2 lastname">Mota</span>
                    </div>

                    <div title="Copy to clipboard" className="mt-4 mb-2 d-flex align-items-center email" onClick={() => this.copy_to_clipboard(this.email)}>
                        <i className="fas fa-at email-icon mx-2"></i>
                        <div className="h1 mx-2">{this.email}</div>
                    </div>

                    <div title="Open LinkedIn" className="mb-5 mt-3 d-flex align-items-center linkedin" onClick={() => this.open_linkedin(this.link_linkedin)}>
                        <i className="fab fa-linkedin-in linkedin-icon mx-2"></i>
                        <div className="h1 mx-2 mb-0">LinkedIn</div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Contact;