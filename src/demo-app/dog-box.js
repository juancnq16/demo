import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class DogBox extends PolymerElement {
  static get template() {
    return html`
        <style>
            .div{
                width: 100%;
                height: 100%;
            }
        </style>
        <div style="background-color:[[color]];height: 100%;" on-mouseover="set">[[color1]]</div>
    `;
  }
  static get properties() {
    return {
        colors: {
            type: Array,
            value: ['#2A1E5C','#FE4A49','#FEA82F','#FFD002','#FFFECB','#423E3B' ]
        },
        color:{
            type: String,
            value: 'asdf'
        },
        cur:{
            type:Number,
            value:0
        }
    };
  }
  ready(){
    super.ready();
        switch (this.color) {
            case '#2A1E5C':
                this.cur=0;
                break;
            case '#FE4A49':
                this.cur=1;
                break;
            case '#2A1E5C':
                this.cur=2;
                break;
            case '#FEA82F':
                this.cur=3;
                break;
            case '#FFD002':
                this.cur=4;
                break;
            case '#423E3B':
                this.cur=5;
                break;
            default:
                this.cur=6;
                break;
        }
  }
  set(){
    this.color=this.colors[this.cur%6];
    this.cur ++;
  }
  randomize(){
    this.cur=Math.floor(Math.random() * 6);
    this.color=this.colors[this.cur]; 
  }
}

window.customElements.define('dog-box', DogBox);