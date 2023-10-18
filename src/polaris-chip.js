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
        .card-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: #f5f5f5;
          border-radius: 5px;
          padding: 20px;
        }
        .top-title .h2 {
          font-size: 25em;
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
  