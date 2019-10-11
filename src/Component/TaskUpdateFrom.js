import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../Action/index'

class TaskUpdateFrom extends Component {
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
    onSumit=()=>{
        this.props.onUpdateFrom(this.state)
    }
    render() {
        return (
            <div>
                <div class="modal fade" id="exampleModalData" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Update Product</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <label for="recipient-name" class="col-form-label">Id:</label>
                                <input class="form-control" name="id" value={this.state.id}  id="message-text"onChange={this.handleChange}></input>
                            </div>

                            <div class="modal-body">
                                <label for="recipient-name" class="col-form-label">Name:</label>
                                <input class="form-control" name="imgage"  value={this.state.name}  id="message-text" onChange={this.handleChange}></input>
                            </div>

                            <div class="modal-body">
                                <label for="recipient-name" class="col-form-label">Imgage:</label>
                                <input class="form-control" name="name"  value={this.state.imgage} id="message-text"onChange={this.handleChange} ></input>
                            </div>

                            <div class="modal-body">
                                <label for="recipient-name" class="col-form-label">production:</label>
                                <input class="form-control" name="price"   value={this.state.production} id="message-text" type="number" onChange={this.handleChange}></input>
                            </div>

                            <div class="modal-body">
                                <label for="recipient-name" class="col-form-label">Price:</label>
                                <input class="form-control" name="production" value={this.state.price}  id="message-text" onChange={this.handleChange}></input>
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

    ;
const mapDispathToProps = (dispath, props) => {
    return {

        toggleFrom: () => {
            dispath(actions.toggle())
        },
        onUpdateFrom: (id)=>{
            dispath(actions.updateFrom(id))
        }

    }
}
export default connect(mapStateToProps, mapDispathToProps)(TaskUpdateFrom) 
