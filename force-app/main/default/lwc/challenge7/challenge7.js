import getAContact from '@salesforce/apex/ContactHelper.getAContact';
import { LightningElement, wire } from 'lwc';

export default class Challenge7 extends LightningElement {
    @wire(getAContact)
    contact;

    

    
}