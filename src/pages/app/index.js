import React, { Component } from "react";
import { Switch, Route  } from 'react-router-dom';
import { Layout, Icon } from "antd";
import SiderMenu from "../../components/SiderMenu/SiderMenu";
// import LayoutCustom from '../../components/Layout';

import Home from '../home'
import About from '../about'

const { Header, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <SiderMenu collapsed={collapsed} onCollapse={this.onCollapse}/>        
        <Layout>
          <Header style={{ background: "#fff", padding: '0 20px' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <span className="float-right text-right" style={{ float: 'right' }}>
              Avatar
            </span>
          </Header>
          <Content style={{ margin: "20px 16px 0" }}>
            {/* <LayoutCustom/> */}
            <Switch>
                <Route exact path="/dashboard" component={Home} />
                <Route exact path="/about-us" component={About} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
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
