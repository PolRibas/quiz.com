import React, { Component } from 'react'
import withAuth from '../context/withAuth'

class Create extends Component {
    state = {
        type: 'Mundial',
        title: '', 
        description: '',
        answer: '', 
        previouse: '',
        posibles: [], 
        haveFormation: false, 
        formation: '4-3-3'
    }

    addAnswer = () => {
        const {previouse, posibles} = this.state
        posibles.push(previouse)
        this.setState({
            posibles,
            previouse: ''
        })
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value})

    render() {
        const {type, title, description, answer, previouse, posibles} = this.state
        return (
            <div>
                <h2>Create question</h2>
                <form>
                    <div>
                        <label>Type</label>
                        <input type='text' name='type' value={type} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Title</label>
                        <input type='text' name='title' value={title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type='text' name='description' value={description} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Correct Answer</label>
                        <input type='text' name='answer' value={answer} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Answers</label>
                        <input type='text' name='previouse' value={previouse} onChange={this.handleChange} />
                    </div>
                    <div>
                        <h3 onClick={this.addAnswer}>+</h3>
                        <ul>
                            {posibles.map(i => <li key={i}>
                                <p>{i}</p>
                                <p>X</p>
                            </li>)}
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}

export default withAuth(Create)