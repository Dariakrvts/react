import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Test from "./Test";
class ErrorTest extends React.Component {
    render() {
        return (
            <ErrorBoundary fallback={<p>Something went wrong</p>}>
                <Test />
            </ErrorBoundary>
        );
    }
}

export default ErrorTest;