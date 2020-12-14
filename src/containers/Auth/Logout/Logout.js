import React, {Component} from "react";

import {connect} from "react-redux";
import * as actionCreators from "../../../store/actions";

import {Redirect} from 'react-router-dom';

class Logout extends Component {

    componentDidMount() {
        // Logs out of the
        this.props.onLogOut();

        // We are redirecting declaratively instead of doing this & executing history.push in the authReducer -> logOut:
        // this.props.onLogOut(this.props.history);
    }

    render() {
        return (
            <Redirect to={'/'}/>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(actionCreators.logOut())
    };
};

// export default Logout;
export default connect(null, mapDispatchToProps)(Logout);