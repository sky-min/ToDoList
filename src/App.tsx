import React, {useState} from 'react';
import Todo from './todo/Todo';
import TodoList from './components/TodoList';
import './App.css';

interface IState{
	todo: string
	todoList: Todo[]
}

export default class App extends React.Component<{}, IState>{
	constructor(props:any){
		super(props);
		this.state = {
			todo: '',
			todoList: []
		};
		const onSubmit = this.onSubmit.bind(this);
	}

	private onSubmit() : void{
		if(this.state.todo.trim() === ''){
			alert('내용을 입력해주세요');
			return;
		}
		this.setState({
			todo: ''
		});
	}

	switchChecked(id: number) : void{
		
	}

	removeTodo(id: number) : void{
		
	}

	public render(){
		return <div className='App'>
			<input
				autoComplete='off'
				name='todo'
				type='text'
				value={this.state.todo}
				onKeyUp={function(ev: any) : void{
					if(ev.key === 'Enter'){
						this.onSubmit();
					}
				}.bind(this)}
				onChange={function(ev: React.ChangeEvent<HTMLInputElement>) : void{
					this.setState({todo: ev.currentTarget.value});
				}.bind(this)}
			/>
			<button onClick={function() : void{
				this.onSubmit();
			}.bind(this)} >추가</button>
			<h1>TodoList</h1>
			<TodoList
				switchChecked={this.switchChecked}
				removeTodo={this.removeTodo}
				todoList={this.state.todoList}
			/>
		</div>;
	}
}