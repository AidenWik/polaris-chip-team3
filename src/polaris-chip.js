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

      .card-date{
    margin-right: 10px;
    text-align: center;
    float: left;
}
.images {
  display: flex;
  justify-content: center;
  align-items: center;
}
.images img {
  height: auto;
  max-width: 30%;
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
  