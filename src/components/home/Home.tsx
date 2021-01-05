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
        Lorem ipsum lacus sit amet lorem placerat congue. 
        Proin venenatis justo id gravida sollicitudin. Morbi eu tincidunt eros. 
        Vestibulum interdum augue a purus semper congue. 
        Aenean non nunc elementum magna ullamcorper rutrum ut id mauris. 
        Maecenas pretium magna placerat odio ornare, ac consectetur augue pellentesque. 
        Aliquam pulvinar condimentum sollicitudin. 
        Morbi pretium ac mi non ornare. Duis eu bibendum urna.
    `;
    
    constructor(props: any) {
        super(props);
        
        this.controller = new ScrollMagic.Controller();

        this.state = {
            sub_title: "_",
            text: ""
        };

        this.onScroll = this.onScroll.bind(this);
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