import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
class NavBar extends React.Component {
    render() {
        return (<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Offcanvas navbar</a>
                <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav >)

    }
}

export default NavBar;