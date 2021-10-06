export class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `hello world`;
  }
}