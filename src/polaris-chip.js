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
      :host {
        display: inline-block;
        padding: 25px;
        color: var(--polaris-chip-text-color, #000);
      }
 // allign the date-card nwxt to the h1 text
  .date-card{
    display: inline-block;
    margin: 0 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    font-family: 'Roboto',sans-serif;
    font-size: 1.3em;
    line-height: 1.8;
    text-transform: capitalize;
    color: #005fa9;
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
      `;
    }
  
    constructor() {
        super();
        this.month = 'Oct';
        this.day = "14";
      }
  
    }
  