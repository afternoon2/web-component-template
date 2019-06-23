import WebComponent from './web-component/WebComponent';

[
  { tag: 'web-component', node: WebComponent },
].forEach((element) => {
  if (!customElements.get(element.tag)) {
    customElements.define(element.tag, element.node);
  }
});
