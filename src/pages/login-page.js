import { LitElement, html, css, nothing } from 'lit';

import '../components/login-component.js';
import '../components/alert-component.js';

export class LoginPage extends LitElement {
  constructor() {
    super();
    this.alertType = '';
    this.alertMessage = '';
  }

  static get properties() {
    return {
      alertType: { type: String },
      alertMessage: { type: String },
    };
  }

  handleLoginSuccess(event) {
    const { email } = event.detail;
    this.alertType = 'success';
    this.alertMessage = 'login success';
  }

  handleLoginError(event) {
    const { error } = event.detail;
    this.alertType = 'error';
    this.alertMessage = `login failed ${error || ''}`;
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('login-success', this.handleLoginSuccess.bind(this));
    this.addEventListener('login-error', this.handleLoginError.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener(
      'login-success',
      this.handleLoginSuccess.bind(this)
    );
    this.removeEventListener('login-error', this.handleLoginError.bind(this));
    super.disconnectedCallback();
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        width: 100%;
      }
    `,
  ];

  render() {
    return html`
      <login-component></login-component>
      ${this.alertType
        ? html`<alert-component
            .type=${this.alertType}
            .message=${this.alertMessage}
          ></alert-component>`
        : nothing}
    `;
  }
}
customElements.define('login-page', LoginPage);