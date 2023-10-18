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
          color: white;
        }
        .top-title {
          font-size: 2.2em;
          font-weight: 700;
          line-height: 3.6875rem;
          margin: 0 0 5px 0;

        }
      `;
    }
  
    constructor() {
        super();
        this.month = 'Oct';
        this.day = "14";
      }
  
    }
  