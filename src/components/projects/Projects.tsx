import { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import './Projects.css';

import img1 from "../../assets/work-in-progress.png";
import img2 from "../../assets/proj-template-square.jpg";
import img3 from "../../assets/proj-template.jpg";

const projects = [
    {
        key: 1,
        image_path: img1,
        title: "Titulo grande gggggg gggggggg gggggg",
        category: "testing",
        redirect: ""
    },
    {
        key: 2,
        image_path: img2,
        title: "t2 titulo",
        category: "testing erhjeoi ioej gioejio oierjg io",
        redirect: ""
    },
    {
        key: 3,
        image_path: img3,
        title: "t3",
        category: "testes - idk",
        redirect: ""
    },
    {
        key: 4,
        image_path: img1,
        title: "t4",
        category: "testes - idk",
        redirect: "4"
    },
    {
        key: 5,
        image_path: img1,
        title: "t5",
        category: "testes - idk",
        redirect: ""
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
        projects.map((element) => {
            return (
                <div key={element.key} className="menu-item m-5">
                    <div className="text-center internal my-0 h-100">
                        <div className="top">
                            <img src={ element.image_path } alt="Project's" className="" />
                        </div>
                        <div className="bottom p-3 text-left">
                            <h4><strong>{element.title}</strong></h4>
                            <p>{ element.category }</p>
                        </div>
                    </div>
                </div>
            )
        }
    );

    arrow_left = (
        <div className="arrow-prev">
            {'<'}
        </div>
    );
    
    arrow_right = (
        <div className="arrow-next">
            {'>'}
        </div>
    );

    on_proj_click(item_key: string | number | null) {
        let item = projects.filter((elem) => `${elem.key}` === item_key);

        if (item[0] && item[0].redirect !== "") {
            window.open(item[0].redirect, '_blank')?.focus();
        }
        
    }

    render() {
        return (
            <div className="projects-background py-5">
                <div className="Projects container d-flex flex-column align-items-center justify-content-center py-5" id="Projects">
                    <h2>Some <strong>projects</strong> I have worked on:</h2>
                    <div className="mt-4 projects-holder">
                        <ScrollMenu
                            data={this.menuItems}
                            arrowLeft={this.arrow_left}
                            arrowRight={this.arrow_right}
                            wheel={false}
                            scrollBy={1}
                            transition={0.7}
                            translate={1}
                            onSelect={this.on_proj_click}
                            itemClass={'align-top'} //! don't remove
                            // alignCenter={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Projects;