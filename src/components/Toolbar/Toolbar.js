import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import './Toolbar.css';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__togle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">The Logo</a></div>
            <div className="spacer"/>
            <div className="toolbar__navigation-items">
                <ul className="toolbar__menu">
                    <li><span><a href="/">Home</a></span></li>
                    <li><span><a href="/">Dashboard</a></span></li>
                    <li><span>System</span>
                        <ul>
                            <li><span>User Administration</span>
                                <ul>
                                    <li><span>Menu Setup</span></li>
                                    <li><span>Role Setup</span></li>
                                    <li><span>User Setup</span></li>
                                    {/* <li><span>Level 3-A-1</span>
                                        <ul>
                                            <li><span>Level 4-A-1</span>
                                                <ul>
                                                    <li><span>Level 5-A-1</span></li>
                                                </ul>
                                            </li>
                                            <li><span>Level 4-A-2</span></li>                   
                                        </ul>
                                    </li>
                                    <li><span>Level 3-A-2</span></li>                   
                                    <li><span>Level 3-A-3</span></li>                                        */}
                                </ul>
                            </li>
                            <li><span>Level 2-A-2</span></li>
                            <li><span>Level 2-A-3</span></li>            
                            <li><span>Level 2-A-4</span></li>            
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;