import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props: unknown) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state?.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        // @ts-ignore
        return this.props.children;
    }
}