import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {Button} from 'antd'
import PCIndex from './components/pc_index'
import MobileIndex from './components/mobile_index'
import 'antd/dist/antd.css';
import './css/pc.css'
import './css/mobile.css'
import MediaQuery from 'react-responsive'
class Index extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('mainContainer'));

