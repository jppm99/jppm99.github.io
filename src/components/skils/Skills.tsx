import { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import './Skills.css';

class Skills extends Component {
    soft = [
        {
            id: "s1",
            value: 25
        },
        {
            id: "s2",
            value: 55
        },
        {
            id: "s3",
            value: 95
        }
    ];

    technical = [
        {
            id: "t1",
            value: 95
        },
        {
            id: "t2",
            value: 55
        },
        {
            id: "t3",
            value: 25
        }
    ];

    confortable_techs = [
        "gfjgjfgnb",
        "gfjffgjfgnb",
        "gfjghmghhjdjfgdjfgnb",
        "gfjfmhggjfgfgnb",
        "gfgnfb",
        "gfjfgnb",
        "gfjfgfgjgfjdjfnb",
        "gfjfgfjfgnb",
        "gfjnb",
        "gfjfjjfgfgnb",
        "gfjfnfdb",
        "gjfghgfnb",
        "gfjfddnb",
        "gfjfgolib",
    ];

    other_techs = [
        "fjfgnb",
        "ddggsg",
        "gfjghjdjfgdjfgnb",
        "gfjfgjfgfgnb",
        "gfgnb",
        "gjfgnb",
        "gfjfgfgjgfjdjfhffnb",
        "fgfhgfhg",
        "gffgnb",
        "gfjfgjjfgfgnb",
        "gfjgnb",
        "gfjfnb",
        "gfjfgb",
        "gfjfgn",
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
                                {this.confortable_techs.map((entry, index) => (
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