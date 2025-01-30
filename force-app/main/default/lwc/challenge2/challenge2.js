import { LightningElement } from 'lwc';

export default class Challenge2 extends LightningElement {
    render;
    text = '';
    handleClick(){
        this.render = !this.render;
    }

    handleChange(){
        let input = this.refs.input.value;
        this.text = input;
    }


}