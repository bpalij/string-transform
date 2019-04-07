import React, {Component} from 'react';
import PropTypes from 'prop-types'

class OutputBlock extends Component {
    render () {
        return (<>
        <h2>{this.props.title}</h2>
        <div>{this.props.value}</div>
        </>
        )
    }
}

OutputBlock.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string
}

OutputBlock.defaultProps = {
    title: "",
    value: ""
}

export default OutputBlock

