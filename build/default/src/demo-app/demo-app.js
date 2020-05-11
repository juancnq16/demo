import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

class DemoApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .div{
          background-color:#2A1E5C;
          color:white;
        }
        .box{
          background-color:#2A1E5C;
          color:white;
        }
      </style>
      <div class="box"">sbiduvnsdsnviosd</div>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'demo-app'
      }
    };
  }

  ready() {
    super.ready();
    console.log('setting image');
    import('./demo-app.js'); //document.documentElement.style.setProperty('--colore', "red")
    //document.documentElement.style.setProperty('--doge', "url('/styles/resources/loly1.jpeg')")
    //var dog = url("resources/loly1.jpeg");
    //var dog = URL(dog);
    //console.log(dog)
  }

}

window.customElements.define('demo-app', DemoApp);