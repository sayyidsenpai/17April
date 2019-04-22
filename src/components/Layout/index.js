import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb/Breadcrumb';

class Layout extends Component {
    render () {
        return (
            <div>
                <Breadcrumb/>
                <div style={{ padding: 24, background: "#fff", minHeight: '75vh', maxHeight: '75vh', overflowY: 'auto', overflowX: 'hidden' }}>
                Content
                {/* <Switch>
                    <Route exact path="/dashboard" component={Home} />
                    <Route exact path="/about-us" component={About} />
                </Switch> */}
                </div>
            </div>
        )
    }
}

export default Layout