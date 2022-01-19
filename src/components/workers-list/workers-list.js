import WorkersListItem from '../workers-list-item/workers-list-item'
import './workers-list.css';


const WorkersList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {

    const elements = data.map(item => {
        const {id,...itemProps} = item;
         return (
          <WorkersListItem 
            key={id} 
            {...itemProps} // Object Spread Operator !!!
            // <WorkersListItem name={item.name} salary={item.salary}/>
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleLike={() => onToggleLike(id)}
            // onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}    Для общей функции onToggle
            />  
            
         )   
    })
    
    return (
      <ul className="app-list list-group">
          {elements}
      </ul>
    );
}

export default WorkersList;