
const NavBar = (props) =>{
return (

    <nav className="navbar navbar-dark bg-primary navbar-fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button type="button" class="btn btn-warning position-relative" disabled>
            Cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.totalCount}
            </span>
            </button>
        </div>
    </nav>
    );
};

 
export default NavBar;



