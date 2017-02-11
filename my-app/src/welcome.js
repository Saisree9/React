import React, { Component, PropTypes } from "react";

export default class Welcome extends Component {
    render() {
        return <div className="welcome">{`Hi ${this.props.name}`} </div>
    }
}

Welcome.propTypes = {
  "name": PropTypes.string.isRequired
};