import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

class DancingGrid extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <style>
        :host {
            background-color:#2A1E5C;
        }
        .barra{
            height: 12%;
            width: 100%;
        } 
        .barra > p{
            font-family: 'Roboto Condensed', sans-serif;
            font-size: 6vh;
            margin: 18px;
            color:white;
        }
        .gridBox{
            height: 84.6%;
            display: grid;
            background-color:black;
            /*grid-template-columns: 2fr 1fr;*/
            grid-template-columns:repeat(3, 1fr);
            grid-auto-rows: 50%;
            grid-gap: 18px;
        }
      </style>
        <div class = "barra">
            <p>COLORES</p>
        </div>
        <div class = "gridBox">
            <div style="background-color:[[color1]];"></div>
            <div style="background-color:[[color2]];"></div>
            <div style="background-color:[[color3]];"></div>
            <div style="background-color:[[color4]];"></div>
            <div style="background-color:[[color5]];"></div>
            <div style="background-color:[[color6]];"></div>
        </div>
      
    `;
  }

  static get properties() {
    return {
      colors: {
        type: Array,
        value: ['#2A1E5C', '#FE4A49', '#FEA82F', '#FEA82F', '#FFD002', '#FFFECB', '#423E3B']
      },
      color1: {
        type: String,
        value: '#2A1E5C'
      },
      color2: {
        type: String,
        value: '#FE4A49'
      },
      color3: {
        type: String,
        value: '#FEA82F'
      },
      color4: {
        type: String,
        value: '#FFD002'
      },
      color5: {
        type: String,
        value: '#FFFECB'
      },
      color6: {
        type: String,
        value: '#423E3B'
      }
    };
  }

  ready() {
    super.ready();
    console.log('my-element is ready!');
    this.trigger();
  }

  test() {
    this.color6 = this.colors[Math.floor(Math.random() * 7)];
    this.color5 = this.colors[Math.floor(Math.random() * 7)];
    this.color4 = this.colors[Math.floor(Math.random() * 7)];
  }

  test2() {
    this.color3 = this.colors[Math.floor(Math.random() * 7)];
    this.color2 = this.colors[Math.floor(Math.random() * 7)];
    this.color1 = this.colors[Math.floor(Math.random() * 7)];
  }

  asdf() {
    document.getElementById("grid").test();
  }

  asdfg() {
    document.getElementById("grid").test2();
  }

  ad() {
    var myVar = setInterval(this.asdf, 400);
  }

  df() {
    var myVar2 = setInterval(this.asdfg, 600);
  }

  trigger() {
    console.log("trigger activated");
    console.log(this.colors);

    function myTimer() {
      var colors = ['#2A1E5C', '#FE4A49', '#FEA82F', '#FEA82F', '#FFD002', '#FFFECB', '#423E3B'];
      console.log(colors[Math.floor(Math.random() * 6)]);
    }

    setTimeout(this.ad(), 3000);
    setTimeout(this.df(), 15000);
  }

}

window.customElements.define('dancing-grid', DancingGrid);
/**
 * ${this.estilo}
 * :host {
            display: grid;
            /*grid-template-columns: 2fr 1fr;*
            grid-template-columns:repeat(3, 1fr);
            grid-auto-rows: 50vh;
            grid-gap: 5px;
        }
 * var numero = Math.floor(Math.random() * 6)
 this.color#=this.colors[numero];
 numero ++
 print(numero%6)
 * 
 * 
 * 
 * 
 */