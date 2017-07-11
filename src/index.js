import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

class Index extends React.Component {
    render() {
        return (
            <div>
                Init
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('example'));

