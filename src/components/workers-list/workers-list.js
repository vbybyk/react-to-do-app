import WorkersListItem from '../workers-list-item/workers-list-item'
import './workers-list.css';


const WorkersList = ({data}) => {

    const elements = data.map(item => {
        const {id,...itemProps} = item;
         return (
          <WorkersListItem key={id} {...itemProps}/>  // Object Spread Operator !!!
          // <WorkersListItem name={item.name} salary={item.salary}/>
         )   
    })
    
    return (
      <ul className="app-list list-group">
          {elements}
      </ul>
    );
}

export default WorkersList;