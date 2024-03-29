import { NavLink } from "react-router-dom";

const Navbar = props => {
    return (
      <div>

        <div className ="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <nav className ="navbar navbar-expand-lg justify-content-between">
                        <a className ="navbar-brand" href="#">RepoHub</a>
                        <button className ="btn border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        Menu
                        </button>
                    </nav>
                </div>
            </div>
        </div>
        

        <div className ="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div className ="offcanvas-header">
                <h5 className ="offcanvas-title" id="offcanvasTopLabel">RepoHub</h5>
                <button type="button" className ="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className ="">
                    <ul className ="list-group list-group-flush">
                        <li className ="list-group-item border-0"><NavLink to="/" className={ ({isActive}) => isActive ? "text-danger h4 text-decoration-none" : "text-decoration-none h4" } >Home</NavLink></li>
                        <li className ="list-group-item border-0"><NavLink to="/story" className={ ({isActive}) => isActive ? "text-danger h4 text-decoration-none" : "text-decoration-none h4" } >Story</NavLink></li>
                        <li className ="list-group-item border-0"><NavLink to="/services" className={ ({isActive}) => isActive ? "text-danger h4 text-decoration-none" : "text-decoration-none h4" } >Services</NavLink></li>
                        <li className ="list-group-item border-0"><NavLink to="/contact" className={ ({isActive}) => isActive ? "text-danger h4 text-decoration-none" : "text-decoration-none h4" } >Contact</NavLink></li>
                    </ul>
            </div>
        </div>
      </div>
    )
  }
  
  export default Navbar;