import React from 'react';
import '../Navigation/navigation.css';

class Nav extends React.Component {
    myFunction () {
        var x = document.getElementById("collapsed");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }

    render () {
        return <div>
            <div className="w3-bar nav_bar">
                <h1 className="w3-bar-item w3-button title">Quan Nghiem</h1>
                <a href="#" className="w3-bar-item w3-hide-small w3-left nav_link">Project</a>
                {/* <a href="#" className="w3-bar-item w3-button w3-hide-small w3-left nav_link">Link 2</a>
                <a href="#" className="w3-bar-item w3-button w3-hide-small w3-left nav_link">Link 3</a> */}
                <a href="javascript:void(0)" className="w3-bar-item w3-button w3-hide-large w3-hide-medium nav_icon"
                    onClick={ () => this.myFunction() }>&#9776;</a>
            </div>

            <div id="collapsed" className="w3-bar-block w3-hide w3-hide-large w3-hide-medium">
                <a href="#" className="w3-bar-item w3-button">Project</a>
                {/* <a href="#" className="w3-bar-item w3-button">Link 2</a>
                <a href="#" className="w3-bar-item w3-button">Link 3</a> */}
            </div>
        </div>
    }
}

export default Nav;