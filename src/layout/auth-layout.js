import { LitElement, html, css } from 'lit';

export class AuthLayout extends LitElement {
  static styles = [
    css`
      :host {
        display:grid;
        grid-template-rows: auto 1fr auto
        gap: 16px;
      }

      header, footer {
        background-color: #f8f9fa;
        padding: 16px;
      }

      main {
        padding: 16px;
        background-color: white;
      }
    `,
  ];

  render() {
    return html`
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }
}
customElements.define('auth-layout', AuthLayout);
