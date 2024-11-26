import { LitElement, html, css } from 'lit';

export class LoginComponent extends LitElement {
  constructor() {
    super();
    this.initProperties();
  }

  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 300px;
        max-width: 100%;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        padding: 1pc;
      }

      input[type='email'],
      input[type='password'] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      button {
        padding: 8px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    `,
  ];

  handleSubmit(event) {
    event.preventDefault();
    this.dispatchCustomEvent('login-success', {
      email: this.email,
      password: this.password,
    });

    this.initProperties();
  }

  initProperties() {
    this.email = '';
    this.password = '';
  }

  dispatchCustomEvent(eventName, detail) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <label for="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          .value=${this.email}
          @input=${this.handleInputChange}
        />

        <label for="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          .value=${this.password}
          @input=${this.handleInputChange}
        />

        <button type="submit">Login</button>
      </form>
    `;
  }
}
customElements.define('login-component', LoginComponent);