import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import WorkersAddForm from '../workers-add-form/workers-add-form';
import './app.css';

const data = [
    {name: "Matt Damon", salary: 1300 + '$',  id: 1},
    {name: "Fred Durst", salary: 1500 + '$',  id: 2},
    {name: "Matthew McConaughey", salary: 1800 + '$',  id: 3}
]

function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <WorkersList data={data}/>

            <WorkersAddForm/>

        </div>
    );
}

export default App;