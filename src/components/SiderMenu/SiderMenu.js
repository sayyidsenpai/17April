import React, { Component } from "react";
// import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "./SiderMenu.css";
import { default as menuData } from './menuData'
import { reduce } from 'lodash'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Divider = Menu.Divider;

// const mapStateToProps = ({ app, routing }, props) => {
//   const { layoutState } = app
//   return {
//     pathname: routing.location.pathname,
//     collapsed: layoutState.menuCollapsed,
//     theme: layoutState.themeLight ? 'light' : 'dark',
//     settingsOpened: layoutState.settingsOpened,
//   }
// }

// connect(mapStateToProps)

class SiderMenu extends Component {
  state = {
    pathname: this.props.pathname,
    collapsed: this.props.collapsed,
    selectedKeys: '',
    openKeys: [''],
  }

  handleClick = e => {
    // set current selected keys
    this.setState({
      selectedKeys: e.key,
    })
  }

  onOpenChange = openKeys => {
    this.setState({
      openKeys: openKeys,
    })
  }

  getPath(data, id, parents = []) {
    const { selectedKeys } = this.state
    let items = reduce(
      data,
      (result, entry) => {
        if (result.length) {
          return result
        } else if (entry.url === id && selectedKeys === '') {
          return [entry].concat(parents)
        } else if (entry.key === id && selectedKeys !== '') {
          return [entry].concat(parents)
        } else if (entry.children) {
          let nested = this.getPath(entry.children, id, [entry].concat(parents))
          return nested ? nested : result
        }
        return result
      },
      [],
    )
    return items.length > 0 ? items : false
  }

  getActiveMenuItem = (props, items) => {
    const { selectedKeys, pathname } = this.state
    let { collapsed } = props
    let [activeMenuItem, ...path] = this.getPath(items, !selectedKeys ? pathname : selectedKeys)

    if (collapsed) {
      path = ['']
    }

    this.setState({
      selectedKeys: activeMenuItem ? activeMenuItem.key : '',
      openKeys: activeMenuItem ? path.map(entry => entry.key) : [],
      collapsed,
    })
  }

  generateMenuPartitions(items) {
    return items.map(menuItem => {
      if (menuItem.children) {
        let subMenuTitle = (
          <span className="menuLeft__title-wrap" key={menuItem.key}>
            {menuItem.icon && <Icon type={menuItem.icon} />}
            <span>{menuItem.title}</span>
          </span>
        )
        return (
          <SubMenu title={subMenuTitle} key={menuItem.key}>
            {this.generateMenuPartitions(menuItem.children)}
          </SubMenu>
        )
      }
      return this.generateMenuItem(menuItem)
    })
  }

  generateMenuItem(item) {
    const { key, title, url, icon, disabled } = item
    return item.divider ? (
      <Divider key={Math.random()} />
    ) : item.url ? (
      <Menu.Item key={key} disabled={disabled}>
        <Link
          to={url}
        >
          {icon && <Icon type={icon} />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    ) : (
      <Menu.Item key={key} disabled={disabled}>
        {icon && <Icon type={icon} />}
        <span>{title}</span>
      </Menu.Item>
    )
  }

  componentDidMount() {
    this.getActiveMenuItem(this.props, menuData)
  }

  componentWillReceiveProps(newProps) {
    this.setState(
      {
        selectedKeys: '',
        pathname: newProps.pathname,
        theme: newProps.theme,
        settingsOpened: newProps.settingsOpened,
      },
      () => {
        if (!newProps.isMobile) {
          this.getActiveMenuItem(newProps, menuData)
        }
      },
    )
  }

  render() {
    const { selectedKeys, openKeys } = this.state;
    const { collapsed, onCollapse } = this.props;
    const menuItems = this.generateMenuPartitions(menuData)

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        id="components-layout-responsive"
        style={{ minHeight: "100vh" }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={this.handleClick}
          selectedKeys={[selectedKeys]}
          openKeys={openKeys}
          onOpenChange={this.onOpenChange}
        >
          {menuItems}
        </Menu>
      </Sider>
    );
  }
}

export default SiderMenu;
