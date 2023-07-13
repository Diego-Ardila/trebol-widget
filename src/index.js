const template = document.createElement("template");
template.innerHTML = `
  <style>
    #widget-button {
      text-decoration: none;
      background: #fff;
      backface-visibility: hidden;
      border-radius: .375rem;
      border-style: solid;
      border-width: .125rem;
      box-sizing: border-box;
      color: #212121;
      cursor: pointer;
      display: inline-block;
      font-family: Circular,Helvetica,sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
      letter-spacing: -.01em;
      line-height: 1.3;
      padding: .875rem 1.125rem;
      position: relative;
      text-align: left;
      text-decoration: none;
      transform: translateZ(0) scale(1);
      transition: transform .2s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    #widget-button:not(:disabled):hover {
      transform: scale(1.05);
    }

    #widget-button:not(:disabled):hover:active {
      transform: scale(1.05) translateY(.125rem);
    }

    #widget-button:focus {
      outline: 0 solid transparent;
    }

    #widget-button:focus:before {
      content: "";
      left: calc(-1*.375rem);
      pointer-events: none;
      position: absolute;
      top: calc(-1*.375rem);
      transition: border-radius;
      user-select: none;
    }

    #widget-button:focus:not(:focus-visible) {
      outline: 0 solid transparent;
    }

    #widget-button:focus:not(:focus-visible):before {
      border-width: 0;
    }

    #widget-button:not(:disabled):active {
      transform: translateY(.125rem);
    }
  </style>
  <div class="widget-container">
    <a id="widget-button" href="http://localhost:3000/" target="_blank">Verifica tu compañia</a>
  </div>
`;

class Widget extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["key"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#widget-button").href = `https://trebol-app.vercel.app/${this.key}`;
  }
}

customElements.define("trebol-widget", Widget);
