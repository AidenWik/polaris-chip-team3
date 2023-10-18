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
        display: block;
        padding: 25px;
        color: var(--polaris-chip-text-color, #000);
      }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0;
        padding: 0;
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
  