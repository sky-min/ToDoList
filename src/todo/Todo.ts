export default class Todo{
	constructor(
		public readonly id: number,
		public readonly text: string,
		public checked: boolean = false
	){}
}