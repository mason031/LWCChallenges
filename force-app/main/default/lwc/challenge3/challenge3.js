import { LightningElement } from 'lwc';
import "./challenge3";
export default class Challenge3 extends LightningElement {

    changeColor(e){
        let color = e.target.value;
        console.log(color);
        let square = this.template.querySelector('.square');
        square.style.backgroundColor = `${color}`;

    }
}