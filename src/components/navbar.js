import React, {
    Component
} from 'react';

class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <b className="navbar-brand" >ReactJS Props and States</b>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <b className="nav-link">Welcome to ReactJs Application</b>
            </li>
        </ul>
        </div>
        </nav>
        );
    }
}

export default Navbar;