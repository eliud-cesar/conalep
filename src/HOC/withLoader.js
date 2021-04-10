import { Component } from "react";
import Loader from "../test/Loader";

const withLoader = (propsValue, WrapperComponent) => {
    return class WithLoader extends Component {
        constructor(props) {
            super(props)
        }

        render() {
            return this.props[propsValue].length === 0
            ? <Loader />
            : <WrapperComponent {...this.props} />
        }
    }
}

export default withLoader;