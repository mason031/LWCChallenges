import getAContact from '@salesforce/apex/ContactHelper.getAContact';
import { LightningElement, wire } from 'lwc';

export default class Challenge7 extends LightningElement {
    
    contact;

    

    searchcontact(){
        let contactName = this.refs.input.value;
        getAContact({name: contactName}).then((res)=>{
            
            this.contact = res;
            console.log(this.contact);
        }).catch((e)=>{
            console.log(e);
        })
    }
}