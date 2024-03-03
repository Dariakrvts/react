import React from "react";
import { Flex, Column } from "../../baseComponents/Layout/Flex";
// import { Card, Text } from "../../baseComponents/Layout/Card";
import * as All from "../../baseComponents";
import { Text } from "../../baseComponents/Text";
class Test extends React.Component {

    render() {
        // console.log(All);
        
        return (
            <div>
                <div>My Component</div>
                <Text text="Lorem Lorem" />
                <button onClick={this.handleError}>Button</button>
            </div>
        );
    }
}

export default Test;