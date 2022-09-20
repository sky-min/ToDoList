import React from 'react';
import Todo from './../todo/Todo';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdDelete} from 'react-icons/md';

interface IProps{
	switchChecked: any
	removeTodo: any
	todo: Todo
}

export default class TodoItem extends React.Component<IProps>{
	public render(){
		const iprops = this.props;
		const {id, text, checked} = iprops.todo;
		return <div className='todoItem'>
			<div className='content'>
				{checked ? <MdCheckBox onClick={function(){
					iprops.switchChecked(id);
				}}/> : <MdCheckBoxOutlineBlank onClick={function(){
					iprops.switchChecked(id);
				}}/>}
			</div>
			<div className='content'>
				<MdDelete onClick={function(){
					iprops.removeTodo(id);
				}}/>
			</div>
			{checked ? <span className='line text'>&nbsp;{text}</span> : <span className='text'>&nbsp;{text}</span>}
		</div>
	}
}