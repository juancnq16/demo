import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "@polymer/polymer/lib/elements/dom-repeat.js";
/**
 * @customElement
 * @polymer
 */
class PersonalGrid extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../styles/shadowBox.css">
        <div class = "barra" >
            <p style="display:inline-block;" on-mouseover="notifier">COLORES</p>
            <button class="button" on-click="testHandler">BOTON 1</button>
            <p style="display:inline-block; font-size:1.5vw;">
                HOLA, pasa por encima del letrero para comprobar
                U oprime el botón para saltar de nivel
            </p>
        </div>
          <div class = "gridBox" id = "tablero">
              <template is="dom-repeat" items=[[colors]] as="color" id="template">
                <dog-box color="[[color]]"></dog-box>
              </template>
          </div>
    `;
  }
  static get properties() {
    return {
      colors: {
        type: Array,
        value: ['#2A1E5C','#FE4A49','#FEA82F','#FFD002','#FFFECB','#423E3B' ]
      },
      percentages:{
        type: Array,
        value:['33%','24%',"20%"]
      },
      cur:{
        type: Number,
        value: 0
      },
      color1:{
        type: String,
        value: '#2A1E5C'
      },
      color2:{
        type: String,
        value: '#FE4A49'
      },
      color3:{
        type: String,
        value: '#FEA82F'
      },
      color4:{
        type: String,
        value: '#FFD002'
      },
      color5:{
        type: String,
        value: '#FFFECB'
      },
      color6:{
        type: String,
        value: '#423E3B'
      },
      rows:{
        type: Number,
        value:4
      },
      col:{
        type: Number,
        value:0
      },
      time:{
        type: Date
      }
    };
  }
    ready() {
        super.ready();
        console.log('setting image');
        import('./dog-box.js');
        this.time = Date.now();
        //document.documentElement.style.setProperty('--colore', "red")
        //document.documentElement.style.setProperty('--doge', "url('/styles/resources/loly1.jpeg')")
        //var dog = url("resources/loly1.jpeg");
        //var dog = URL(dog);
        //console.log(dog)
    }
    setAll(){
      this.color6=this.colors[this.cur%6];
      this.cur ++;
      this.color5=this.colors[this.cur%6];
      this.cur ++;
      this.color4=this.colors[this.cur%6];
      this.cur ++;
      this.color3=this.colors[this.cur%6];
      this.cur ++;
      this.color2=this.colors[this.cur%6];
      this.cur ++;
      this.color1=this.colors[this.cur%6];
      this.cur ++;
    }
    testHandler(){
      document.documentElement.style.setProperty('--rows', this.rows);
      this.incrementador(2+this.col);
      if(this.rows%5==0){
        document.documentElement.style.setProperty('--col', this.percentages[this.col]);
        this.incrementador(this.rows);
        this.col++;
      }
      this.rows++;
    }
    incrementador(columnas){
      for (let index = 0; index < columnas; index++) {
        this.colors.push(this.colors[Math.floor(Math.random() * this.colors.length)]);  
      }
      this.randomizer();
      this.$.template.render();
      this.time=Date.now();
    }
    notifier(){
      let squares = [];
      for (let i = 0;i<this.$.tablero.childNodes.length-2;i++){
        //console.log("in bucle: ", i);
          if(String(this.$.tablero.childNodes[i])=="[object HTMLElement]"){
            //console.log(this.$.tablero.childNodes[i])
            squares.push(this.$.tablero.childNodes[i].color);
          }
      }
      const allEqual = arr => arr.every( v => v === arr[0] );
      console.log(squares);
      if(allEqual(squares)){
        var now = Date.now();
        let deltime = now-this.time;
        deltime=deltime/1000;
        console.log("lastone: ", deltime);
        alert("NIVEL SUPERADO!!! \n su tiempo: "+deltime);
        this.testHandler();
      }
      //console.log(this.$.tablero.childNodes.length);
      //console.log(this.$.tablero.childNodes[1].style.backgroundColor);
    }
    randomizer(){
      for (let i = 0;i<this.$.tablero.childNodes.length-2;i++){
          if(String(this.$.tablero.childNodes[i])=="[object HTMLElement]"){
            this.$.tablero.childNodes[i].randomize();
          }
      }
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
 * <template is="dom-repeat" items=[[coleccion]] as="pais">
				  <option value="[[pais]]">[[pais]]</option>
			  </template>
import "../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
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