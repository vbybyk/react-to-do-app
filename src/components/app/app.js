import { Component } from 'react/cjs/react.development';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import WorkersAddForm from '../workers-add-form/workers-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Matt Damon", salary: 1300 + '$', increase: true, like: false, id: 1},
                {name: "Fred Durst", salary: 1500 + '$', increase: false, like: true, id: 2},
                {name: "Matthew McConaughey", salary: 1800 + '$', increase: false, like: false, id: 3}
            ],
            term: ''
        }
        this.maxId = 4;
    }

    searchPerson = (array, term) => {
        if (term.length == 0){
            return array
        } 
        return array.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id)
            return{
                data: data.filter(elem => elem.id !== id)
            }
        })  
    }

    addNewItem = (name, salary) => { 
       
            const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data,newItem]
            return{
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
       /* this.setState(({data}) => {
           const index = data.findIndex(elem => elem.id === id)

           const oldArr = data[index];
           const newItem = {...oldArr, increase: !oldArr.increase}
           const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
           
           return{
               data: newArr
           }
       }) */

       this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, increase: !item.increase}
                } return item;
            })
       }))

    }

    onToggleLike = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, like: !item.like}
                } return item;
            })
       }))
    }

    /* onToggle = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}    // Общий вариант для двух функций
                } return item;
            })
       }))
    } */

    render() {
        const {data, term} = this.state;
        const teamNumber = this.state.data.length;
        const starsNumber = this.state.data.filter(elem => elem.like).length
        const visibleData = this.searchPerson(data, term);

        return (
        <div className="app">
            <AppInfo teamNumber={teamNumber} starsNumber={starsNumber}/>

            <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter/>
            </div>

            <WorkersList 
                data={visibleData} 
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleLike={this.onToggleLike}
                />

            <WorkersAddForm 
                onAdd={this.addNewItem} />

        </div>
    );
    }
}

export default App;