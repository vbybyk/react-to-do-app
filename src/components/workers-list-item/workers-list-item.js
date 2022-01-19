import './workers-list-item.css';

const WorkersListItem = (props) => {
      
    const {name, salary, onDelete, onToggleIncrease, onToggleLike, increase, like} = props;

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
                    data-toggle="like"
                    onClick={onToggleLike}>{name}</span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="increase"
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default WorkersListItem;