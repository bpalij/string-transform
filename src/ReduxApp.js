import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputForm from './InputForm.js';
import OutputBlock from './OutputBlock.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReduxApp.css';

import { changeValue } from './actions.js';

const mapStateToProps = state => { return { ...state } };
const mapDispatchToProps = dispatch => { return { changeValue: e => dispatch(changeValue(e.target.value)) } };

class ReduxApp extends Component {
    render() {
        return (<>
        <header>
          <h1>String-transform mini-app</h1>
        </header> 
        <main className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 pad-10px">
              <InputForm value={this.props.normal} change={this.props.changeValue}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 pad-10px">
              <OutputBlock title={"Upper case"} value={this.props.upperCase}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 pad-10px">
              <OutputBlock title={"Lower case"} value={this.props.lowerCase}/>
            </div>
          </div>
        </main>
        </> 
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxApp);