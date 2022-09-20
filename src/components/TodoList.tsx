import React from 'react';
import App from './../App';
import Todo from './../todo/Todo'
import TodoItem from './TodoItem';
import './TodoList.css';

interface IProps{
	app: App,
	todoList: Todo[]
}

export default class TodoList extends React.Component<IProps>{

	render(){
		const iprops = this.props;
		return <div className='todolist'>
			{iprops.todoList.map(function(todo: Todo){
				return <TodoItem
					app={iprops.app}
					todo={todo}
				/>;
			})}
		</div>
	}

}
