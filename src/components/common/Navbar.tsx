import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [page, setPage] = useState("Home");

  const home_pin_len = 600;

  const get_curr_anchor = () => {
    let containerDiv = document.getElementById("body");
    
    if (containerDiv) {
      // When child crosses middle of yhe screen
      let scrollTop = window.scrollY + window.innerHeight / 2;
      
      let height = 0;
      for (let child of containerDiv.children) {
        let top = height
        let bottom = height += child.clientHeight
        if (top < scrollTop && bottom > scrollTop) {
          // Found the element that's currently viewed!
          let anchor = child.children.item(0)!.id;
          if (!anchor) anchor = "Home";
          setPage(anchor);
          break;
        }
      }
    }
  };

  const scrollWithOffset = (el: any) => {
    let offset = (el.id === "Home" ? -home_pin_len : document.getElementById("Navbar")!.clientHeight);
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  };
  
  const render_btn = (text: String, link: any) => {
    let className: string = "";

    if (page === text) {
      className = "active-underline"; 
    }

    return (
      <HashLink to={link} scroll={el => scrollWithOffset(el)} className="navbar-button text-light text-decoration-none row">
        <span className={className}>
          {text}
        </span>
      </HashLink>
    );
  };

  useEffect(() => {
    // Scroll event to change header background
    window.addEventListener("scroll", () => {
      // Home screen + home pin lenght
      setScroll(window.scrollY >= window.innerHeight + home_pin_len - document.getElementById("Navbar")!.clientHeight);
      get_curr_anchor();
    });

    // Keeping track of current page with hash changes
    // window.addEventListener("hashchange", () => {
    //   setPage("" + window.location.hash);
    // }, false);
  }, []);

  return (
    <nav className={"navbar navbar-expand-md fixed-top" + (scroll ? " navbar-scrolled" : "")} id="Navbar">
        <div className="container">
          <HashLink smooth to="/#Home" className="logo text-decoration-none">
            <h1 className="logo-size">
              <span className="font-weight-bold">Mota</span>
            </h1>
          </HashLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
          </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-items navbar-nav justify-content-end w-100">
              <li className="nav-item ml-sm-5">
                {render_btn("Home", "/#Home")}
              </li>
              <li className="nav-item ml-sm-5">
                {render_btn("Skills", "/#Skills")}
              </li>
              <li className="nav-item ml-sm-5">
                {render_btn("Projects", "/#Projects")}
              </li>
              <li className="nav-item ml-sm-5">
                {render_btn("CV", "/#CV")}
              </li>
              <li className="nav-item ml-sm-5">
                {render_btn("Contact", "/#Contact")}
              </li>
            </ul>
          </div>
      </div>
        </nav>
      );
}

export default Navbar;