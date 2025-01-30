import { api, LightningElement } from 'lwc';
//import "./challenge5"
export default class Challenge5child extends LightningElement {
    @api
    band;

    description = false;
    
    displayInfo(){
        this.description = true;
    }

    
}