import { LightningElement } from 'lwc';
import BandImages from '@salesforce/resourceUrl/BandImages';
export default class Challenge5 extends LightningElement {
    selectValue ='';
    band;
    lpdescription = "Linkin Park is an American rock band formed in Agoura Hills, California, in 1996. The band's current lineup consists of vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, DJ/turntablist Joe Hahn, bassist Dave Farrell, co-lead vocalist Emily Armstrong, and drummer Colin Brittain."
    blinkdescription = "Blink-182 is an American rock band formed in Poway, California, in 1992. Their current and best-known line-up consists of bassist and vocalist Mark Hoppus, guitarist and vocalist Tom DeLonge, and drummer Travis Barker."
    //imageurl = BandImages + '/BandImages/lpimage.jpg';
    linkinpark = {name: "Linkin Park", description:this.lpdescription, image: BandImages + '/BandImages/lpimage.jpg'};
    blink182 = {name: "Blink-182", description:this.blinkdescription, image: BandImages + '/BandImages/blinkimage.jpg'};
    options = [
        {label: "Linkin Park", value: 'linkinpark'},
        {label: "Blink-182", value: 'blink182'},
        

    ]

    handleChange(e){
        switch (e.detail.value){
            case 'linkinpark':
                this.band = this.linkinpark;
                break;
            
            case 'blink182':
                this.band = this.blink182;
                break;
            default:
                break;
        }
        //this.selectValue = e.detail.value;
    }
}