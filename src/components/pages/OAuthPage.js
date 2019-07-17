import React, { Component } from 'react';
import queryStringParser from 'query-string';
import {connect} from 'react-redux';
import * as actions from './../../actions';

class PageOAuth extends Component {
    componentDidMount() {
        const queryString = queryStringParser.parse(window.location.search);

        this.props.setAuthToken(queryString.token);
        this.props.history.push("/feed");
    }
    
    render () {
        return null;
    }
}

export default connect(null, actions)(PageOAuth);