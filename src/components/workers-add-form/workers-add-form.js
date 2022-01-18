import { Component } from 'react/cjs/react.development';
import './workers-add-form.css';

class WorkersAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary:''
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        name="name"
                        value={name}
                        placeholder="Type a name" 
                        onChange={this.onChangeValue}/>
                    <input type="number"
                        className="form-control new-post-label"
                        name="salary"
                        value={salary}
                        placeholder="Salary?" 
                        onChange={this.onChangeValue}/>

                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
    )
    }
}

export default WorkersAddForm;