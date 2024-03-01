import React, { Component, PropTypes } from 'react';

class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            college: 'MKCE',
            department: 'AIML'
        }

    }
    changeDept = () => {
        this.setState({ department: 'ECE' })
    }

    render() {
        return (
            <div>
                <h4>college name:{this.state.college}</h4>
                <h4>department name:{this.state.department}</h4>
                <button onClick={this.changeDept}>Change Department</button>
            </div>

        );
    }
}

componentName.propTypes = {

};

export default componentName;