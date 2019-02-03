import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import FormComponent from './form'

class TabsComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'easy',
        };
    }

    render() {
        return (
            <Tabs
                className="tabsControll"
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
            >
                <Tab eventKey="easy" title="Easy">
                    <FormComponent />
            </Tab>
                <Tab eventKey="medium" title="Medium">
                    <FormComponent />
            </Tab>
                <Tab eventKey="hard" title="Hard">
                    <FormComponent />
            </Tab>
            </Tabs>
        )
    }
}

export default TabsComponent;