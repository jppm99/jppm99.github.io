import { Component } from 'react';
import { TimelineMax, TweenMax, Expo, Power1 } from 'gsap';
import * as ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import './Home.css';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class Home extends Component<{}, { sub_title: String, text: String }> {
    controller: any;
    scroll_len = 1000;

    title: String = "Hi!";
    sub_title: String = "Nice to meet you";
    text: String = `
        I'm João Mota, a ${this.getCurrentAge()}-years-old
        ML research engineer with a passion for technology.
        From a young age, I aspired to be an inventor, and this drove me into the world
        of tech as I built my first computer and later, during my high school years,
        when I started to learn how to code.

        I have a MSc degree in computer engineering, during which 
        I joined INESCTEC via a research grant.
        Subsequently, I had the opportunity to work on my master's
        thesis through an academic internship with Bosch, which provided
        practical insights into collaborating with industry professionals.

        Following the completion of my degree, I joined Bosch full-time
        to contribute to the THEIA project, focusing in deep-learning
        for LiDAR based perception tasks.

        I am driven to continue learning, growing, and applying my skills
        to innovative projects that make a positive impact.   
    `;
    
    constructor(props: any) {
        super(props);
        
        this.controller = new ScrollMagic.Controller();

        this.state = {
            sub_title: "_",
            text: "",
        };

        this.onScroll = this.onScroll.bind(this);
    }

    getCurrentAge() {
        var ageDifMs = Date.now() - new Date(1999, 1, 13).getTime();
        var ageDate = new Date(ageDifMs); // milliseconds from epoch
        return "" + Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    onScroll() {
        let division_len = this.scroll_len / 4;
            
        if (window.scrollY >= division_len) {
            this.setState({ sub_title: this.sub_title });
            
            if (window.scrollY >= division_len * 2) {
                this.setState({ text: this.text });
            } else {
                this.setState({ text: "_" });
            }
        } else {
            this.setState({ sub_title: "_" });
            this.setState({ text: "" });
        }
    }

    componentDidMount() {
        let trigger = document.querySelector(".home-background");

        let move_left = new TimelineMax().fromTo("#Home", 1, { x: "15%" }, { x: "-5%", ease: Expo.easeOut });
        let fade = new TimelineMax().fromTo("#Home", 1, { opacity: "1" }, { opacity: "0", ease: Power1.easeIn });

        let scene1: any = new ScrollMagic.Scene({
            duration: this.scroll_len,
            triggerElement: trigger,
            triggerHook: 0
        });
        scene1.setPin(trigger).setTween(move_left).addTo(this.controller);
        
        // var must be created with type any, ts hack
        let scene2: any = new ScrollMagic.Scene({
            duration: trigger!.clientHeight / 3,
            triggerElement: document.getElementById("Skills"),
            triggerHook: "onEnter"
        });
        scene2.setTween(fade).addTo(this.controller);
        
        window.addEventListener("scroll", this.onScroll);
    };

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    render() {
        return (
            <div className="Home container" id="Home">
                <div className="d-flex align-items-center justify-content-start">
                    <div className="flex-column">
                        <span className={"home-title px-2"}>
                            {this.title}
                        </span>
                        <span className={"home-subtitle px-2" + (this.state.sub_title === "_" ? " animate" : "")}>
                            {this.state.sub_title}
                        </span>
                        <p className={"home-text px-3" + (this.state.text === "_" ? " animate" : "")}>
                            {this.state.text}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Home;