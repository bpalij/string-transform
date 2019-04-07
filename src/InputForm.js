import React, {Component} from 'react';
import PropTypes from 'prop-types'

class InputForm extends Component {
    render() {
        return (<div>
            <textarea className="form-control" placeholder="Input your text here" value={this.props.value} onChange={this.props.change} />
        </div>);
    }    
}

InputForm.propTypes = {
    value: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired
}

export default InputForm
