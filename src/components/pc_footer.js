import React from 'react'
import {Row, Col} from 'antd'

export default class PCFooter extends React.Component{
   
    render(){
        return(
            <footer>
                <Row>
                    {/*24格左右两边各留2个空格*/}
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2017 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}