import { LightningElement, track } from 'lwc';

export default class Challenge1 extends LightningElement {
    @track
    list = [];

    handleClick(){
        let input = this.refs.input.value;
        this.list.push(input);
    }
}