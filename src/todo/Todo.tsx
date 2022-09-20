export default class Todo{
	public id: number;
	public text: string;
	public checked: boolean
	constructor(
		id: number,
		text: string,
		checked: boolean = false
	){
		this.id = id;
		this.text = text;
		this.checked = checked
	}
}