import { LitElement, html, css } from 'lit-element';

class PolarisChip extends LitElement {
  static get properties() {
    return {
      date: { type: String},
      month: { type: String },
      day: { type: String },
      link: { type: String},
      botdesc: { type: String},
      image: { type: String},
      title: { type: String},
    };
  }

  static get styles() {
    return css`
      .card-container {
        display: inline-block;
        align-items: center;
        background-color: #fff;
        max-width: 400px;
        width: 100%;
        text-align: center;
        padding: 0;
        position: relative;
        margin-top: 20px;
      }
      .images {
        background-color: #005fa9;
        height: 171px;
        width: 386px;
      }
      .images img:hover {
        opacity: 0.7;
      }
      .images {
        position: relative;
        
        margin: 0px;
        padding: 0px;
        border-radius: 0px;
      }
      .mid-wrapper {
        padding-top: 15px;
        display: flex;
        flex-direction: row;
      }
      .month-label .month{
        display: block;
        background: #1E407C;
        border-radius: 0 0 2px 2px;
        color: #FFF;
        font-size: 0.8em;
        font-weight: bold;
        line-height: 1.8;
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
      .title .desc{
          font-size: 1.3em;
          line-height: 1em;
          font-family: 'Roboto',sans-serif;
          text-transform: capitalize;
          color: #96BEE6;
      }
      .desc {
        font-family: 'Roboto',sans-serif;
      }
          a { color: #1E407C}
          a:visited { text-decoration: none; color:#1E407C; }
          a:hover { text-decoration: none; color:#001E44; }
          a:focus { text-decoration: none; color:#001E44; }
          a:hover, a:active { text-decoration: none; color:#001E44 }

          img { color: #1E407C}
          img:visited { text-decoration: none; color:#1E407C; }
          img:hover { text-decoration: none; color:#001E44; }
          img:focus { text-decoration: none; color:#001E44; }
          img:hover, a:active { text-decoration: none; color:#001E44 }
      
      .title .desc:hover{
        color: #1E407C;
      }/*
      .top-title {
        font-size: 1.5em;
        font-weight: 700;
        line-height: 3.6875rem;
        margin: 0 0 0 0;
        padding-bottom: 0px;
        position: left;
        text-align: left;
      }
      /* Add styles for other elements as needed */
      @media screen and (max-width: 600px) {
        .card-container {
          display:grid;
        }
      }
    `;
  }

  constructor() {
    super();
    this.date = 'null';
    this.month = '';
    this.day = '';
    this.botdesc = '';
    this.image = '';
    this.title = '';
    this.link = " ";
  }

  render() {
    return html`
      <div class="card-container">
        <div class="images">
          <a class="link" href="${this.link}">
            <img src="${this.image}" alt="picture :D" width="386" height="171">
          </a>
        </div>
        <div class="mid-wrapper">
          <div class="date-card">
            <div class="month-label">
              <label class="month"><slot>${this.month}</slot></label>
            </div>
            <div class="day-label">
              <label class="day"><slot>${this.day}</slot></label>
            </div>
          </div>
          <div class="title">
            <label class="desc"><a style="text-decoration:none" href="${this.link}"> <slot>${this.title}</slot></label></a>
          </div>
        </div>
        <div class="short-desc">
          <div property="schema:text" class="desc-text"></div>
          <p><slot>${this.botdesc}</slot></p>
        </div>
      </div>
    `;
  }
}

customElements.define('polaris-chip', PolarisChip);