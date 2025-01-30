import getContact from '@salesforce/apex/ContactHelper.getContact';
import { api, LightningElement, wire } from 'lwc';

export default class Challenge8 extends LightningElement {
    @api
    recordId;
    
    @wire(getContact, {id: '$recordId'})
    contact;

}