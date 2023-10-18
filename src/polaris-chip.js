import { PolarisChip } from './PolarisChip.js';

export class PolarisChip extends LitElement {
    static get properties() {
      return {
        month: { type: String },
        day: { type: String },
      };
    }
  
    static get styles() {
      return css`
    :host(){
        display: block; 
        padding: 10px;  
        
    }

      .date-card{
    margin-right: 10px;
    text-align: center;
    float: left;
}
.date-wrapper{
   width: 64px;
   height: 40px;
   border: 1px solid #ccc;
   text-align: center;
    position: relative;
   
}
.month-label .month{
       display: block;
    background: #1E407C;
    border-radius: 0 0 2px 2px;
    color: #FFF;
    font-size: 0.8em;
    font-weight: bold;
    line-height: 1.8;
    padding: 1px 10px;
    text-transform: uppercase;
}
.day-label .day{
    background: #f7f7f7;
    border-radius: 2px 2px 0 0;
    color: #444;
    display: block;
    font-size: 18px;
    font-weight: 900;
    padding: 10px 20px;
}
@media (max-width: 500px) {
    .date-wrapper {
        max-width: 100%; /* Expand the card to the full width of the viewport */
        padding: 10px; /* Adjust padding for smaller screens if needed */
    }
}
.date-wrapper{
margin-right: 10px;
    text-align: center;
    float: left;
}
.upper{
    display: webkit box;
    display: ms flexbox;
    display: flex
    margin: 20px 0;
}
.upper .title{
    font-size: 2.6px;
    line-height: inherit;
    margin: inherit;
    font-family: 'Roboto',sans-serif;
}
//Will put the h1 and images in the same line
.images{
    display: inline-block;
}
.images img {
  height: auto;
  max-width: 30%;
}
.title .h1 {  
  font-size: 1.3em;
  font-weight: 1em;
  line-height: 1.8;
  padding: 1px 10px;
  text-transform: capitalize;
  color: #005fa9;
}
.card-date .day {
    background: #f7f7f7;
    border-radius: 2px 2px 0 0;
    color: #444;
    display: block;
    font-size: 18px;
    font-weight: 900;
    padding: 10px 20px;
}

.card-date .month {
    display: block;
    background: #1E407C;
    border-radius: 0 0 2px 2px;
    color: #FFF;
    font-size: 0.8em;
    font-weight: bold;
    line-height: 1.8;
    padding: 1px 10px;
    text-transform: uppercase;
}

      `;
    }
  
    constructor() {
        super();
        this.month = 'Oct';
        this.day = "14";
      }
  
    }
  