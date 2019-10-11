import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../Action/index'
import TaskUpdateFrom from './TaskUpdateFrom'
import { networkInterfaces } from 'os'


class List extends Component {
    onDeleteList = (id) => {
        this.props.onDelete(id)
        // console.log(id)
    }
    onClickUpdate = (id) => {

        const product = this.props.todos.find((value) => {
            return value.id === id
        })
        if (product) {
            //console.log(product)
            this.props.onUpdateFrom(product)
        }
    }
    componentWillMount() {
        console.log('componentWillMount', this.props)
        if (this.props.itemEdit && this.props.itemEdit.id !== null) {
            this.setState({
                id: this.props.itemEdit.id,
                name: this.props.itemEdit.name,
                imgage: this.props.itemEdit.imgage,
                production: this.props.itemEdit.production,
                price: this.props.itemEdit.price

            })
        } else {
            this.onClear()
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
            console.log(nextProps)
            if( nextProps && nextProps.itemEdit){
                this.setState({
                    id: nextProps.itemEdit.id,
                    name: nextProps.itemEdit.name,
                    imgage: nextProps.itemEdit.imgage,
                    production: nextProps.itemEdit.imgage,
                    price: nextProps.itemEdit.imgage

                })
            }else{
                this.onClear()
            }
    }
    onClear = () => {
        this.setState({
            id: "",
            name: "",
            imgage: "",
            production: "",
            price: ""
        });
    }
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
                    <button type="button" class="btn btn-danger" onClick={() => this.onDeleteList(value.id)}>Delete</button>
                    <button type="button"

                        class="btn btn-success" data-toggle="modal" data-target="#exampleModalData" data-whatever="@mdo" onClick={() => {
                            this.onClickUpdate(value.id)
                        }}
                    >Edit</button>
                </th>
            </tr>)
        })
    }
    render() {
        console.log(this.props.itemEdit)
        console.log(this.props.todos)
        return (
            <div>
                <TaskUpdateFrom />
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
        todos: state.task,
        itemEdit: state.itemEditing
    }
}
const mapDispathToProps = (dispath, props) => {
    return {
        onDelete: (id) => {
            dispath(actions.deleteTask(id))
        },

        toggleFrom: () => {
            dispath(actions.toggle())
        },
        onUpdateFrom: (task) => {
            dispath(actions.updateFrom(task))
        }


    }
}
export default connect(mapStateToProps, mapDispathToProps)(List)
