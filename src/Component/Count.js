import React, { Component } from 'react'
import { connect } from 'react-redux'
class Count extends Component {
    state = {
        item: 0
    }
    onGiam = () => {
        this.setState({
            item: this.state.item - 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.props.onTangAhii}>+</button>
                <span>{this.props.count1}</span>
                <button onClick={this.props.onGiamCount}>-</button>
                
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count1: state.count,
    }
}
const mapDispathToProps = (dispath) => {
    return {
        onTangAhii: () => dispath({ type: 'TANG' }),
        onGiamCount: () => dispath({ type: 'GIAM' })
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Count)
