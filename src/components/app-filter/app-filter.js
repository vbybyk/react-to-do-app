

import './app-filter.css'

const AppFilter = (props) => {
    
    const buttonsData = [
            {name: 'all', text: 'All workers'},
            {name: 'like', text: 'Stars workers'},
            {name: '1000', text: '1000$ plus'}
    ]
        
    const buttons = buttonsData.map(({name, text}) => {
        const active = props.filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button 
                    className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => props.onUpdateFilter(name)}>
                        {text}
                </button>
        )
    })

    // onUpdateFilter = (e) => {
    //     const filter = e.currentTarget.name
    //     props.onUpdateFilter(filter)
    // }


        return (
            <div className="btn-group">
                {buttons}
            </div>
    );
}

export default AppFilter;