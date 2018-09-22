import React, { Component } from 'react'

class AddToCreatures extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            image_url: '',
            scary: {}


        }

    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleChangeImage = (e) => {
        this.setState({ image_url: e.target.value })
    }
    handleChangeScary = (e) => {
        this.setState({ scary: e.target.value })
    }


    render() {
        return (
            <div>
                <label>Name</label><input value={this.state.name} onChange={this.handleChangeName} />
                <label>Image</label><input value={this.state.image_url} onChange={this.handleChangeImage} />
                <label>Scary Level</label><input value={this.state.scary.level} onChange={this.handleChangeScary} />
                <button onClick={() => this.props.onClick(this.state)}>Submit Creature</button>

            </div>
        );
    }



}

export default AddToCreatures;
