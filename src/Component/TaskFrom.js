import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../Action/index'


class TaskFrom extends Component {
    state = {
        id: "",
        name: "",
        imgage: "",
        production: "",
        price: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSumit = () => {
        this.props.onAddTask(this.state)
        this.onClear()
    }
    // onToggleFrom = () => {
    //    this.props.toggleFrom()
    // }
    onClear = () => {
        this.setState({
            id: "",
            name: "",
            imgage: "",
            production: "",
            price: ""
        });
    }
    render() {
        return (
            <div>
                <button type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={this.onToggleFrom}
                >
                    ADD
                        </button>
                       
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <label for="recipient-name" class="col-form-label">Id:</label>
                                <input value={this.state.id} class="form-control" name="id" id="message-text" onChange={this.handleChange}></input>
                            </div>

                            <div class="modal-body">
                                <label for="recipient-name" class="col-form-label">Image:</label>
                                <input value={this.state.imgage} class="form-control" name="imgage" id="message-text" onChange={this.handleChange}></input>
                            </div>

                            <div class="modal-body">
                                <label for="recipient-name" class="col-form-label">Name:</label>
                                <input value={this.state.name} class="form-control" name="name" id="message-text" onChange={this.handleChange}></input>
                            </div>

                            <div class="modal-body">
                                <label for="recipient-name" class="col-form-label">Price:</label>
                                <input value={this.state.price} class="form-control" name="price" id="message-text" type="number" onChange={this.handleChange}></input>
                            </div>

                            <div class="modal-body">
                                <label for="recipient-name" class="col-form-label">Production:</label>
                                <input value={this.state.production} class="form-control" name="production" id="message-text" onChange={this.handleChange}></input>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.onSumit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        isDisplayFrom: state.isDiplayFrom
    }

}
const mapDispathToProps = (dispath, props) => {
    return {
        onAddTask: (task) => {
            console.log(task)
            dispath(actions.addTask(task))
        },
        toggleFrom: () => {
            dispath(actions.toggle())
        },

        onOpen: () => {
            dispath(actions.onOpen())
        },
        onCloseFrom: () => {
            dispath(actions.onClose())
        },
      
    }
}
export default connect(mapStateToProps, mapDispathToProps)(TaskFrom)