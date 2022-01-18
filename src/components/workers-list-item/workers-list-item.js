import { Component } from 'react/cjs/react.production.min';
import './workers-list-item.css';

class WorkersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            // console.log('click')
            increase: !increase
            
        }))
    }
        
    onLike = () => {
        this.setState(({like}) => ({
        // console.log('click')
        like: !like
        
    }))
    }
        

    render(){
       
        const {name, salary} = this.props;
        const {increase, like} = this.state;

        let ClassNames = "list-group-item d-flex justify-content-between";

        if(increase) {
            ClassNames += ' increase'
        }

        if(like) {
            ClassNames += ' like'
        }

        return (
        <li className={ClassNames}>
                <span className="list-group-item-label" 
                        onClick={this.onLike}>{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    defaultValue={salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default WorkersListItem;