import { Component } from 'react';
import Splide from '@splidejs/splide';


import './Projects.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


import ldso from "../../assets/ldso.jpg";
import personalWebsite from "../../assets/personalWebsite.jpg";
import ai from "../../assets/iart.jpg";
import hyperCasual from "../../assets/hypercasual.jpg";
import fileTransfer from "../../assets/fileTransfer.jpg";
import lostForest from "../../assets/lostForest.jpg";

const projects = [
    {
        image_path: hyperCasual,
        title: "Hyper-casual mobile game",
        description: `
                An hyper-casual mobile game developed in Unity called Falling Colors.
                Available on both Google Play and the App Store!
            `,
        redirect: "https://apps.apple.com/us/app/falling-colors-catch-them/id1561799594",
        technologies: [
            "fab fa-unity",
            "fab fa-app-store-ios"
        ]
    },
    {
        image_path: ldso,
        title: "Platform for aeronautical medicine",
        description: `
                The goal is to provide aeronautical doctors in europe 
                a way to share and store information about their patients.
            `,
        redirect: "",
        technologies: [
            "fab fa-docker",
            "fab fa-node-js",
            "fab fa-react",
            "fab fa-bootstrap",
            "fab fa-html5",
            "fab fa-css3-alt",
            "fab fa-js-square",
        ]
    },
    {
        image_path: lostForest,
        title: "Open world survival game",
        description: `
                Lost Forest is a horror-survival game developed in Unity.
                Available on itch.io!
            `,
        redirect: "https://jppm99.itch.io/lost-forest",
        technologies: [
            "fab fa-unity",
        ]
    },
    {
        image_path: ai,
        title: "Predicting the odds for football matches",
        description: `
                Using different supervised learning algorithms to
                best predict the odds for football matches.
            `,
        redirect: "https://github.com/jppm99/IART/blob/master/T2/src/notebook.ipynb",
        technologies: [
            "fab fa-python",
        ]
    },
    {
        image_path: fileTransfer,
        title: "Serial port file transfer",
        description: `
                A C implementation of fail-safe file transfer
                over a serial port connection.
            `,
        redirect: "https://github.com/jppm99/Serial-port-file-transfer",
        technologies: [
            
        ]
    },
    {
        image_path: personalWebsite,
        title: "This website!",
        description: `
                My personal website, that I created to showcase some of my skills,
                projects and CV, while practicing React and Typescript.
            `,
        redirect: "https://github.com/jppm99/jppm99.github.io",
        technologies: [
            "fab fa-react",
            "fab fa-bootstrap",
            "fab fa-html5",
            "fab fa-css3-alt",
        ]
    },
];

class Projects extends Component {
    menuItems: any;

    constructor(props: any) {
        super(props);
        
        this.state = {
            selected: "1"
        };

        this.menuItems = this.get_items();
    }    

    get_items = () =>
        projects.map((element, index) => {
            return (
                <li key={index}
                    className={"menu-item m-5 splide__slide" + ((element.redirect != null && element.redirect !== "") ? " clickable" : "")}
                    onClick={() => this.on_proj_click(index)
                    }>
                    <div className="text-center internal my-0 h-100">
                        <div className="top">
                            <img src={ element.image_path } alt="Project's" className="img-fluid"/>
                        </div>
                        <div className="middle p-3 text-left">
                            <h4><strong>{element.title}</strong></h4>
                            <p>{ element.description }</p>
                        </div>
                        <div className="bottom text-left p-2">
                            {
                                element.technologies.map((tech) => {
                                    return (
                                        <p className={"tech pl-2 " + tech} />
                                        )
                                    })
                                }
                        </div>
                    </div>
                </li>
            )
        }
    );
    
    on_proj_click(item_key: string | number | null) {        
        if (item_key != null && item_key !== "") {
            let item: any = projects[+item_key];
            if (item.redirect !== "") {
                window.open(item.redirect, '_blank')?.focus();
            }
        }
    }

    componentDidMount() {
        new Splide( '#splide', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            pagination: false,
            padding: {
                right: '5rem',
                left : '5rem',
            },
        })
            .mount();
    }

    render() {
        return (
            <div className="projects-background py-5">
                <div className="Projects container d-flex flex-column align-items-center justify-content-center py-5" id="Projects">
                    <h2>Some <strong>projects</strong> I have worked on:</h2>

                    <div className="mt-4 projects-holder">
                        <div id="splide" className="splide">
                            <div className="splide__track">
                                <ul className="splide__list">
                                    {this.menuItems}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Projects;