import React, { Component } from 'react';

import './app.css';

import AppHeading from '../app-heading'
import SearchPanel from '../search-panel'
import StatusFilter from '../status-filter'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'

export default class App extends Component {
    
    createNewItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++,
        }
    };

    maxId = 0;

    state = {
        todoData: [
            this.createNewItem('Wake up'),
            this.createNewItem('Drink coffee'),
            this.createNewItem('Fix bug'),
            this.createNewItem('Fix bug2'),
        ],
        term: [],
        filter: 'active' // all, active, done, important
    };
    
    delItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex( (el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx+1),
            ];
            return {
                todoData: newArray
            }
        })
    };
    
    addItem = (text) => {
        if(text.length === 0){
            return;
        }
        const newItem = this.createNewItem(text);
        
        this.setState(({todoData})=>{
            const newArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArray
            }
        })
    };

    toggleProp = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx+1),
        ];
    };
    
    onToggleImportant = (id) => {
        this.setState( ( {todoData} ) => {
            return {
                todoData: this.toggleProp(todoData, id, 'important')
            }
        });
    };
    
    onToggleDone = (id) => {
        this.setState( ( {todoData} ) => {
            return {
                todoData: this.toggleProp(todoData, id, 'done')
            }
        });
    };

    onSearch = (term) => {
        this.setState({
            term
        })
    };
    
    onFilter = (filter) => {
        this.setState({
            filter
        })
    };
    
    search = (arr, term) => {
        if (term.length === 0){
            return arr;
        }
        else{
            return arr.filter((el) => el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1)
        }
    };

    filter = (arr, filterType) => {
        switch (filterType){
            case 'active':
                return arr.filter((el) => !el.done);
            
            case 'done':
                return arr.filter((el) => el.done);
            
            case 'important':
                return arr.filter((el) => el.important);

            default: // all
                return arr
        }
    };
    
    render(){
        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter( 
            this.search(todoData, term), 
            filter 
        );
        const cntDone = todoData.filter((el) => el.done).length;
        const cntToDo = todoData.length - cntDone;
        return (
            <main className="container app">
                <AppHeading toDo={cntToDo} done={cntDone}/>
                <div className="d-flex app__contol-panel">
                    <SearchPanel onSearch={(term) => this.onSearch(term)}/>
                    <StatusFilter onFilter={(type) => this.onFilter(type)} currFilter={filter}/>
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={(id) => this.delItem(id)}
                    onToggleImportant={(id) => this.onToggleImportant(id)}
                    onToggleDone={(id) => this.onToggleDone(id)}
                />
                <ItemAddForm onItemAdd={(el) => this.addItem(el)}/>
            </main>
        )        
    }
    
}
