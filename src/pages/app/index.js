import React, { Component } from 'react';
// import { Route, Link, Switch } from 'react-router-dom'
// import Home from '../home'
// import About from '../about'
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }
  
  render() {
    const { sideDrawerOpen } = this.state;
    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen}/>
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content!</p>
        </main>
      </div>
    )
  }
}

export default App;


// const App = () => (
//   <div style={{ height: '100%' }}>
//     <Toolbar/>
//     <SideDrawer/>
//     <Backdrop/>
//     <main style={{ marginTop: '64px' }}>
//       <p>This is the page content!</p>
//     </main>
//     {/* <header>
//       <Link to="/">Home</Link>
//       <Link to="/about-us">About</Link>
//     </header>

//     <main>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about-us" component={About} />
//       </Switch>
//     </main> */}
//   </div>
// )

// export default App;