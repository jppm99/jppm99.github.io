import { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

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
        "gfjfgnb",
        "gfjffgjfgnb",
        "gfjghjdjfgdjfgnb",
        "gfjfgjfgfgnb",
        "gfgnb",
        "gfjfgnb",
        "gfjfgfgjgfjdjfnb",
        "gfjfgfjfgnb",
        "gfjfgnb",
        "gfjfgjjfgfgnb",
        "gfjfgnb",
        "gfjfgnb",
        "gfjfgnb",
        "gfjfgnb",
    ];

    other_techs = [
        "gfjfgnb",
        "gfjffgjfgnb",
        "gfjghjdjfgdjfgnb",
        "gfjfgjfgfgnb",
        "gfgnb",
        "gfjfgnb",
        "gfjfgfgjgfjdjfnb",
        "gfjfgfjfgnb",
        "gfjfgnb",
        "gfjfgjjfgfgnb",
        "gfjfgnb",
        "gfjfgnb",
        "gfjfgnb",
        "gfjfgnb",
    ];

    render() {
        return (
            <div className="skills-background">
                <div className="Skills container d-flex flex-column align-items-center justify-content-center my-5" id="Skills">
                    <div className="d-flex flex-row w-100">
                        <div className="d-block w-100 pr-5">
                            <div className="title">
                                <span className="mr-2 accent">Soft</span>
                                <span className="ml-2">Skills</span>
                            </div>
                            {this.soft.map((entry) => (
                                <div className="my-4">
                                    <h3>{entry.id}</h3>
                                    <ProgressBar now={entry.value} />
                                </div>
                            ))}
                        </div>
                        <div className="d-block w-100 pl-5">
                        <div className="title">
                                <span className="mr-2 accent">Technical</span>
                                <span className="ml-2">Skills</span>
                            </div>
                            {this.technical.map((entry) => (
                                <div className="my-4">
                                    <h3>{entry.id}</h3>
                                    <ProgressBar now={entry.value} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bottom text-center w-100">
                    <div className="mt-5">
                            <h4>Even though I have <strong>not found my niche yet</strong>, here are some technologies <strong>I feel comfortable with:</strong></h4>
                            <ul className="list-group list-group-horizontal row d-flex justify-content-center confortable-list">
                                {this.confortable_techs.map((entry) => (
                                    <li className="list-group-item">{entry}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-5">
                            <h5>And a <strong>not exhaustive list</strong> of other technologies I have <strong>used in the past:</strong></h5>
                            <ul className="list-group list-group-horizontal row d-flex justify-content-center other-list">
                                {this.other_techs.map((entry) => (
                                    <li className="list-group-item">{entry}</li>
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