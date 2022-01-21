import { Component } from 'react/cjs/react.development';
import './workers-add-form.css';

class WorkersAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary:'',
            noInput: false
        }
    }

    onChangeValue = (e) => {
        if (e.target.value){
            this.setState({
            noInput: false
        })
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.salary === ''){
            this.setState({
            noInput: true
        })
        console.log('no input')
        } else {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                noInput: false
        })
        }
        
    }
    

    render() {
    
        const {name, salary, noInput} = this.state;
        let classNames = "form-control new-post-label";

        if (noInput){
            classNames += ' no-input'
        }
    
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className={classNames}
                        name="name"
                        value={name}
                        placeholder="Type a name" 
                        onChange={this.onChangeValue}/>
                    <input type="number"
                        className={classNames}
                        name="salary"
                        value={salary}
                        placeholder="Salary?" 
                        onChange={this.onChangeValue}/>

                    <button type="submit"
                            className="btn btn-outline-light"
                            >Add</button>
                </form>
            </div>
    )
    }
}

export default WorkersAddForm;