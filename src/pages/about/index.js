import React, { Component } from 'react'
import { connect } from 'react-redux';

class About extends Component {
    constructor(props){
        super(props);
        console.log(props.counter.count);
    }
    
    render () {
        return (
            <div>
                About
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(About)