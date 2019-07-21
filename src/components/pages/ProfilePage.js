import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


class ProfilePage extends Component {
    render() {
        const { user, likes } = this.props;
        console.log(this.props);
        console.log(this.state);

        return (
            <h1>Profile</h1>
        );
    }
}

export default ProfilePage;