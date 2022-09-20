import React from 'react';
import Todo from './todo/Todo';
import TodoList from './components/TodoList';
import './App.css';

interface IState{
	todo: string
	todoList: Todo[]
}

export default class App extends React.Component<{}, IState>{
	todoId: number = 0;

	constructor(props: {}){
		super(props);
		this.state = {
			todo: '',
			todoList: []
		};
	}

	private nextTodoId() : number{
		return this.todoId++;
	}

	private getTodoList() : Todo[]{
		return this.state.todoList;
	}

	private setNewState(state: any) : void{
		(function() : void{
			this.setState(state)
		}).bind(this)();
	}

	private onSubmit() : void{
		const text = this.state.todo;
		if(text.trim() === ''){
			this.setNewState({
				todo: ''
			});
			alert('Please enter content.');
			return;
		}
		this.setNewState({
			todo: '',
			todoList: this.getTodoList().concat(new Todo(
				this.nextTodoId(),
				text
			))
		});
	}

	public removeTodo(id: number) : void{
		const todos = this.getTodoList().filter(todo => todo.id !== id)
		todos.sort();
		this.setNewState({
			todoList: todos
		});
	}

	public switchChecked(id: number) : void{
		this.setNewState({
			todoList: this.getTodoList().map(function(todo: Todo) : Todo{
				return todo.id === id ? {...todo, checked: !todo.checked} : todo
			})
		});
	}

	public render(){
		return <div className='App'>
			<input
				autoComplete='off'
				name='todo'
				type='text'
				value={this.state.todo}
				onKeyUp={function(ev: React.KeyboardEvent<HTMLInputElement>) : void{
					if(ev.key === 'Enter'){
						this.onSubmit();
					}
				}.bind(this)}
				onChange={function(ev: React.ChangeEvent<HTMLInputElement>) : void{
					this.setState({todo: ev.currentTarget.value});
				}.bind(this)}
			/>
			<button onClick={function() : void{
				this.onSubmit()
			}.bind(this)}>ADD</button>
			<h1>TodoList</h1>
			<TodoList
				app={this}
				todoList={this.getTodoList()}
			/>
		</div>;
	}
}