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

    // logData = () => {
    //     console.log(this.state.key)
    // }

    render() {
        return (
            <>
                <Tabs
                    transition={false}
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab eventKey="easy" title="Easy" >
                        {/* {this.logData()} */}
                    </Tab>
                    <Tab eventKey="medium" title="Medium" >
                    </Tab>
                    <Tab eventKey="hard" title="Hard"  >

                    </Tab>
                </Tabs>
                <FormComponent level={this.state.key} />
            </>

        )
    }
}

export default TabsComponent;