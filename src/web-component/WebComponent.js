export default class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open',
    });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <h1>Hello World!</h1>
    `;
  }
}
