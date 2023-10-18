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
        .date-wrapper{
          width: 64px;
          height: 40px;
          border: 1px solid #ccc;
          text-align: center;
          position: relative;
          margin-right: 10px;
          text-align: center;
          float: left;
   
}
        .top-title .h2 {
          font-size: 25em;
          font-weight: 700;
          line-height: 3.6875rem;
          margin: 0 0 5px 0;
        }
        .top-wrapper {

        }
        .top-wrapper .date-card .month-label .month{
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
        .month-label .day {
          background: #f7f7f7;
          border-radius: 2px 2px 0 0;
          color: #444;
          display: block;
          font-size: 18px;
          font-weight: 900;
          padding: 10px 20px;
        }
      `;
    }
  
    constructor() {
        super();
        this.month = 'Oct';
        this.day = "14";
      }
  
    
    }