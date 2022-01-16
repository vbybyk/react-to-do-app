import './app-filter.css'

const AppFilter = () => {
    return(
      <div className="btn-group">
          <button 
              className="btn btn-light"
              type="button">
                  All workers
          </button>
          <button 
              className="btn btn-outline-light"
              type="button">
                  Stars workers
          </button>
          <button 
              className="btn btn-outline-light"
              type="button">
                  1000$ plus 
          </button>
      </div>
    );
}

export default AppFilter;