import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

class PersonalGrid extends PolymerElement {
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
            grid-template-columns:repeat(10, 1fr);
            grid-auto-rows: 15%;
            grid-gap: 18px;
        }
        .cuadro:hover{
          background-color:white;
        }
        :host{
          --doge:url("/styles/resources/loly1.jpeg");
        }
        .boxa{
            /*grid-row: 1/3;*/
            background-image: var(--doge);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            transition-duration: 1s;
            overflow: hidden;
        }
        .boxa:hover .shadowb{
          visibility: visible;
        }
        .shadowb{
          visibility: hidden;
          float:left;    
          width: 120%;
          height: 120%;
          margin: -20px;
          background: rgba(0, 0, 0, 0.4);
        }
        .boxc{
          background-image:var(--doge) ;
        }
      </style>
        <div class = "barra" >
            <p on-mouseover="notifier">COLORES</p>
        </div>
          <div class = "gridBox" id = "tablero">
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#FE4A49"></dog-box>
              <dog-box color1="#FEA82F"></dog-box>
              <dog-box color1="#FFD002"></dog-box>
              <dog-box color1="#FFFECB"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#FE4A49"></dog-box>
              <dog-box color1="#FEA82F"></dog-box>
              <dog-box color1="#FFD002"></dog-box>
              <dog-box color1="#FFFECB"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#FE4A49"></dog-box>
              <dog-box color1="#FFD002"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#FE4A49"></dog-box>
              <dog-box color1="#FEA82F"></dog-box>
              <dog-box color1="#FFD002"></dog-box>
              <dog-box color1="#FFFECB"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#423E3B"></dog-box>

              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#FE4A49"></dog-box>
              <dog-box color1="#FEA82F"></dog-box>

              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#FE4A49"></dog-box>
              <dog-box color1="#FFD002"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#FE4A49"></dog-box>
              <dog-box color1="#FEA82F"></dog-box>
              <dog-box color1="#FFD002"></dog-box>
              <dog-box color1="#FFFECB"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#FFFECB"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#FE4A49"></dog-box>
              <dog-box color1="#FEA82F"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#FE4A49"></dog-box>
              <dog-box color1="#FFD002"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
              <dog-box color1="#FE4A49"></dog-box>
              <dog-box color1="#FFD002"></dog-box>
              <dog-box color1="#423E3B"></dog-box>
              <dog-box color1="#2A1E5C"></dog-box>
          </div>
    `;
  }

  static get properties() {
    return {
      colors: {
        type: Array,
        value: ['#2A1E5C', '#FE4A49', '#FEA82F', '#FFD002', '#FFFECB', '#423E3B']
      },
      cur: {
        type: Number,
        value: 0
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
    console.log('setting image');
    import('./dog-box.js'); //document.documentElement.style.setProperty('--colore', "red")
    //document.documentElement.style.setProperty('--doge', "url('/styles/resources/loly1.jpeg')")
    //var dog = url("resources/loly1.jpeg");
    //var dog = URL(dog);
    //console.log(dog)
  }

  setAll() {
    this.color6 = this.colors[this.cur % 6];
    this.cur++;
    this.color5 = this.colors[this.cur % 6];
    this.cur++;
    this.color4 = this.colors[this.cur % 6];
    this.cur++;
    this.color3 = this.colors[this.cur % 6];
    this.cur++;
    this.color2 = this.colors[this.cur % 6];
    this.cur++;
    this.color1 = this.colors[this.cur % 6];
    this.cur++;
  }

  set1(e) {
    console.log(e);
    this.color1 = this.colors[this.cur % 6];
    this.cur++;
  }

  set2() {
    this.color2 = this.colors[this.cur % 6];
    this.cur++;
  }

  set3() {
    this.color3 = this.colors[this.cur % 6];
    this.cur++;
  }

  set4() {
    this.color4 = this.colors[this.cur % 6];
    this.cur++;
  }

  set5() {
    this.color5 = this.colors[this.cur % 6];
    this.cur++;
  }

  set6() {
    this.color6 = this.colors[this.cur % 6];
    this.cur++;
  }

  testHandler() {
    console.log("WORKING");
  }

  notifier() {
    for (let i = 0; i < this.$.tablero.childNodes.length; i++) {
      try {
        console.log(this.$.tablero.childNodes[1].color1);
        return 0;
      } catch (error) {
        console.log("ez");
      }
    } //console.log(this.$.tablero.childNodes.length);
    //console.log(this.$.tablero.childNodes[1].style.backgroundColor);

  }

}

window.customElements.define('personal-grid', PersonalGrid);
/***
 * <div class="boxa" id = "cuadro1">
              <div class="shadowb">
                <p class = "example">dfsghjkda</p>
              </div> 
            </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
              <div style="background-color:[[color1]];" on-mouseover="set1">[[color1]]</div>
 * 
 * 
 */