import { LitElement, html, css } from 'lit';

import '../layout/auth-layout.js';

export class HomePage extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
      }

      h1,
      p {
        color: #000;
      }
    `,
  ];

  render() {
    return html`
      <auth-layout>
        <h1 slot="header">Home page</h1>
        <p slot="footer">Todos los derechos reservados</p>
      </auth-layout>
    `;
  }
}
customElements.define('home-page', HomePage);
