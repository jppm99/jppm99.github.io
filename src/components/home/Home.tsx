import { Component } from 'react';
import * as ScrollMagic from 'scrollmagic';
import { TimelineMax } from 'gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

class Home extends Component<{}, { sub_title: String, text: String }> {
    controller: any;
    scroll_len = 600;

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
    }

    componentDidMount() {
        let trigger = document.querySelector(".home-background");

        let wipe = new TimelineMax().fromTo("#Home", { x: 100 }, { x: 0 });

        new ScrollMagic.Scene({
            duration: this.scroll_len,
            triggerElement: trigger,
            triggerHook: 0
        })
            .setPin(trigger)
            .setTweet(wipe)
            .addTo(this.controller);
        
        window.addEventListener("scroll", () => {
            let division_len = this.scroll_len / 3;
            
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
        });
    };

    render() {
        return (
            <div className="Home container" id="Home">
                <div className="d-flex align-items-center justify-content-start text-light">
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