import { Component } from 'react';
import queryStringParser from 'query-string';
import {connect} from 'react-redux';
import * as actions from './../../actions';

// Transient component responsible for taking the token off params after LinkedIn OAuth successful, and redirecting to feed
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