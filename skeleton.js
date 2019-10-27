const html = name => {
  return `<h1>The component ${name} works</h1>`
}

const scss = () => {
  return `h1 {
  color: 'red';
}`
}

const js = (className, componentName) => {
  return `class ${className} extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
  }
  connectedCallback() {
    // COMPONENT HAS MOUNTED
  }
  disconnectedCallback() {
    // COMPONENT HAS DISMOUNTED
  }
  attributeChangedCallback(name, oldValue, newValue) {
    // COMPONENT HAS CHANGED
    this.render()
  }
  
  static get observedAttributes() {
    // WATCH FOR ATTRIBUTE CHANGES
    return []
  }
  
  render() {
    // RENDER COMPONENT
  }
}

customElements.define('app-${componentName}', ${className})`
}

module.exports = {
  html,
  scss,
  js
}
