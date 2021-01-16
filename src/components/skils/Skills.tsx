import { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import './Skills.css';

class Skills extends Component {
    soft = [
        {
            id: "Team work",
            value: 90
        },
        {
            id: "Desire to learn",
            value: 100
        },
        {
            id: "Leadership",
            value: 70
        },
        {
            id: "Persistence",
            value: 90
        },
        {
            id: "Performing under pressure",
            value: 100
        },
        {
            id: "Creativity",
            value: 80
        },
        
    ];

    technical = [
        {
            id: "Frontend development",
            value: 73
        },
        {
            id: "Backend development",
            value: 80
        },
        {
            id: "Code quality",
            value: 90
        },
        {
            id: "Databases",
            value: 55
        },
        {
            id: "Algorithms and data structures",
            value: 80
        },
        {
            id: "Artificial intelligence",
            value: 65
        },
    ];

    comfortable_techs = [
        "C",
        "Java",
        "Git",
        "Google Cloud App Engine",
        "Unity",
        "Linux",
        "JavaScript",
        "HTML",
        "Docker",
        "SCSS",
    ];
    
    other_techs = [
        "TypeScript",
        "React",
        "NodeJS",
        "C++",
        "GLSL",
        "Bootstrap",
        "Python",
        "PHP",
        "Laravel",
        "SQLite",
        "Dart",
        "Assembly",
        "MongoDB",
        "C#",
        "OpenGL",
        "Flutter",
        "Prolog",
        "Alloy",
        "CSS",
        "Scikit-learn",
        "EJS",
        "Dafny",
    ];

    render() {
        return (
            <div className="skills-background py-5">
                <div className="Skills container d-flex flex-column align-items-center justify-content-center py-5" id="Skills">
                    <div className="d-flex flex-row w-100">
                        <div className="d-block w-100 pr-5">
                            <div className="title">
                                <span className="mr-2 accent">Soft</span>
                                <span className="ml-2">Skills</span>
                            </div>
                            {this.soft.map((entry, index) => (
                                <div key={index} className="my-4">
                                    <h4>{entry.id}</h4>
                                    <ProgressBar now={entry.value} />
                                </div>
                            ))}
                        </div>
                        <div className="d-block w-100 pl-5">
                        <div className="title">
                                <span className="mr-2 accent">Technical</span>
                                <span className="ml-2">Skills</span>
                            </div>
                            {this.technical.map((entry, index) => (
                                <div key={index} className="my-4">
                                    <h4>{entry.id}</h4>
                                    <ProgressBar now={entry.value} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bottom text-center w-100">
                    <div className="mt-5">
                            <h4>Even though I have <strong>not found my niche yet</strong>, here are some technologies <strong>I feel comfortable with:</strong></h4>
                            <ul className="list-group list-group-horizontal row d-flex justify-content-center confortable-list">
                                {this.comfortable_techs.map((entry, index) => (
                                    <li key={index} className="list-group-item">{entry}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-5">
                            <h5>And a <strong>not exhaustive list</strong> of other technologies I have <strong>used in the past:</strong></h5>
                            <ul className="list-group list-group-horizontal row d-flex justify-content-center other-list">
                                {this.other_techs.map((entry, index) => (
                                    <li key={index} className="list-group-item">{entry}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Skills;