import React from 'react';
import App from './../App';
import Todo from './../todo/Todo';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdDelete} from 'react-icons/md';
import './TodoItem.css';

interface IProps{
	app: App,
	todo: Todo
}

export default class TodoItem extends React.Component<IProps>{
	public render(){
		const iprops = this.props;
		const {id, text, checked} = iprops.todo;
		const app = iprops.app;
		return <div className='todoItem'>
			<div className='content'>
				{checked ? <MdCheckBox onClick={function(){
					app.switchChecked(id);
				}}/> : <MdCheckBoxOutlineBlank onClick={function(){
					app.switchChecked(id);
				}}/>}
			</div>
			<span>&nbsp;<span className={checked ? 'line text' : 'text'}>{text}</span>&nbsp;</span>
			<div className='content'>
				<MdDelete onClick={function(){
					app.removeTodo(id);
				}}/>
			</div>
		</div>
	}
}