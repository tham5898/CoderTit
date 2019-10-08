import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
    onRender = () => {
        return this.props.todos.map((value, index) => {
            return (<tr>
                <th>{index + 1}</th>
                <th>{value.id}</th>
                <th>{<img style={{ width: 150, height: 'auto' }} src={value.imgage} alt="logo1"></img>}</th>
                <th>{value.name}</th>
                <th>{value.price}</th>
                <th>{value.production}</th>
                <th>
                <button type="button" class="btn btn-danger">Delete</button>
                <button type="button" class="btn btn-success">Update</button>
                </th>
            </tr>)
        })
    }
    render() {
        console.log(this.props.todos)
        return (
            <div>
                <table class="table table-striped " style={{ marginTop: 50 }}>
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col"> production </th>
                            <th scope="col"> Action </th>

                        </tr>
                    </thead>
                    {this.onRender()}
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.task
    }
}
export default connect(mapStateToProps, null)(List)
