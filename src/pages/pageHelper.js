import {Component} from "react";
import FullPageLoader from "../components/FullPageLoader";

export function page(PageComponent) {

    return class extends Component {
        constructor(props) {
            super(props);
            this.showLoader = this.showLoader.bind(this);
            this.hideLoader = this.hideLoader.bind(this);

            this.state = {
                displayLoader: false
            };
        }

        showLoader() {
            this.setState({
                displayLoader: true
            });
        }

        hideLoader() {
            this.setState({
                displayLoader: false
            });
        }

        render() {

            return <>
                <FullPageLoader showLoader={this.state.displayLoader}/>
                <PageComponent showFullPageLoader={this.showLoader}
                               hideFullPageLoader={this.hideLoader} {...this.props}  />
            </>

        }
    };
}
