import React, { Component } from 'react'
import withAuth from '../context/withAuth'
import { Link } from 'react-router-dom';
import question from '../services/question-service';

class Spawn extends Component {

    componentWillMount = () => {
        question.getAll()
            .then(res => console.log(res))
            .catch(e => console.log(e))
    }

    render() {
        console.log(this.props.user)
        return (
            <div>
                <h2>Spawn</h2>
                <p onClick={this.props.logout}>logout</p>
                {this.props.user.isEditor ? <Link to='/create'>Create Question</Link> : null}
            </div>
        )
    }
}

export default withAuth(Spawn)