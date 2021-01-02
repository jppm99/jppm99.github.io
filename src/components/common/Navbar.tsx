import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

function Navbar() {

  const [scroll, setScroll] = useState(false);
  const [page, setPage] = useState('#Home');

  useEffect(() => {
    // Scroll event to change header background
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= window.innerHeight);
    });

    // Keeping track of current page
    window.addEventListener("hashchange", () => {
      setPage("" + window.location.hash);
    }, false);
  }, []);
  
  const render_btn = (text: String, link: any) => {
    let className: string = "";

    if (page === "#/#" + text) {
      className = "active-underline"; 
    }

    return (
      <HashLink smooth to={link} className="navbar-button text-light text-decoration-none row">
        <span className={className}>
          {text}
        </span>
      </HashLink>
    );
  };

  return (
    <nav className={"navbar navbar-expand-md fixed-top" + (scroll ? " navbar-scrolled" : "")}>
        <div className="container">
          <HashLink smooth to="/#Home" className="logo text-decoration-none">
            <h1 className="logo-size secondary-font">
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
                {render_btn("CV", "/#CV")}
              </li>
              <li className="nav-item ml-sm-5">
                {render_btn("Skills", "/#Skills")}
              </li>
              <li className="nav-item ml-sm-5">
                {render_btn("Projects", "/#Projects")}
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