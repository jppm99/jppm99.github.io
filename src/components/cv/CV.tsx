import { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class CV extends Component<{}, { cv: any }> {
    cv_link = "https://raw.githubusercontent.com/jppm99/CV/master/CV.md";

    constructor(props: any) {
        super(props);

        this.state = {
            cv: ""
        };
    }

    componentDidMount() {
        fetch(this.cv_link)
            .then(res => {
                return res.text();
            })
            .then(text => {
                this.setState({
                    cv: text
                })
            });
    }

    render() {
        return (
            <div className="cv-background">
                <div className="CV container d-flex align-items-center justify-content-center my-5" id="CV">
                    <ReactMarkdown allowDangerousHtml>{this.state.cv}</ReactMarkdown>
                </div>
            </div>
        );
    }
}
  
export default CV;