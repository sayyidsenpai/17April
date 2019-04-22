import React, { Component } from "react";
import { Breadcrumb, Icon } from "antd";

class BreadcrumbCustom extends Component {
    render() {
        return (
            <Breadcrumb style={{ margin: "0 0 15px" }}>
                <Breadcrumb.Item>
                    <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <span>Dashboard</span>
                </Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default BreadcrumbCustom;