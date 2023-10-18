import { LitElement, html, css } from 'lit-element';

class PolarisChip extends LitElement {
  static get properties() {
    return {
      month: { type: String },
      day: { type: String },
    };
  }

  static get styles() {
    return css`
      .card-container {
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      }
      .images:hover {
        opacity: 0.6;
      }
      .mid-wrapper {
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
      
      .title h1{
          font-size: 1.3em;
          line-height: 1em;
          text-transform: capitalize;
      }
      .top-title {
        font-size: 2.3em;
        font-weight: 700;
        line-height: 3.6875rem;
        margin: 0 0 5px 0;
      }
      /* Add styles for other elements as needed */
    `;
  }

  constructor() {
    super();
    this.month = 'Oct';
    this.day = '14';
  }

  render() {
    return html`
      <div class="card-container">
        <div class="top-title">
          <h2>Recent News</h2>
        </div>
        <div class="images">
          <a href="https://hr.psu.edu/news/university-reminds-employees-flu-covid-19-vaccines-resources-and-policies">
            <img src="https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-10/FluVaccines_HRFeature.jpg?h=09bc788e&itok=KEMIew2T" alt="picture :D" width="386" height="171">
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
            <h1><a style="text-decoration:none" href="https://hr.psu.edu/news/university-reminds-employees-flu-covid-19-vaccines-resources-and-policies"> University reminds employees of flu, COVID-19 vaccines, resources and policies</h1></a>
          </div>
        </div>
        <div class="short-desc">
          <div property="schema:text" class="desc-text"></div>
          <p>Updated information for University employees, as it relates to flu and COVID-19 vaccine resources, health plan coverage, and absence policies.</p>
        </div>
      </div>
    `;
  }
}

customElements.define('polaris-chip', PolarisChip);