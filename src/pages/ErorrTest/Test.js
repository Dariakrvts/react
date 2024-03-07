import React from "react";
import { Text } from "../../baseComponents/Text";

class Test extends React.Component {

    render() {        
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