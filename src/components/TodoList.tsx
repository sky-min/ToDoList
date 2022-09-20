import React from 'react';
import Todo from './../todo/Todo'
import TodoItem from './TodoItem';

interface IProps{
	switchChecked: any
	removeTodo: any
	todoList: Todo[]
}

export default class TodoList extends React.Component<IProps, {} >{
	todoId: number;

	constructor(props:any){
		super(props);
		this.todoId = 0;
	}

	private nextTodoId() : number{
		return this.todoId++;
	}

	render(){
		const iprops = this.props;
		return <div className='todolist'>
			{iprops.todoList.map(function(todo: any){
				return <TodoItem
					switchChecked={iprops.switchChecked}
					removeTodo={iprops.removeTodo} 
					key={this.nextTodoId}
					todo={todo}
				/>;
			}.bind(this))}
		</div>
	}

}
