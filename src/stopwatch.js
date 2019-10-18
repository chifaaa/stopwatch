import React, {Component} from 'react'
import Time from './stopwatchdisplay'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
    }
    render() {
        return <Time ms={this.state.timeMs} />
    }
}

export default Timer