//

import { Component, Prop, State, EventEmitter, Event, h, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'sgnw-rating',
  styleUrl: 'sgnw-rating.css',
  shadow: true
})

export class SgnwRating {
  /** max number of stars */
  @Prop() maxValue: number = 5;

  /** current number of stars */
  @Prop({mutable: true, reflect: true}) value: number = 0;
  @Watch('value')
  componentWillLoad() {
    this.createStarList(this.value);
  }

  @State() starList: Array<object> = [];

  /** number of stars was updated */
  @Event() ratingUpdated: EventEmitter;

  @Listen('ratingUpdated')
  logUpdate(){
    console.log("ratingUpdated")
  }

  setValue(newValue) {
    this.value = newValue;
    this.createStarList(this.value);
    this.ratingUpdated.emit({value: this.value });
  }

  createStarList(numberOfStars: number) {
    let starList = [];

    for (let i=1; i<=this.maxValue; i++){
      if (i <= numberOfStars){
        starList.push(<span class="rating" onClick={()=>this.setValue(i)} onMouseOver={()=>this.createStarList(i)} onMouseOut={()=>this.createStarList(this.value)}>&#x2605;</span>)
      } else {
        starList.push(<span class="rating" onClick={()=>this.setValue(i)} onMouseOver={()=>this.createStarList(i)} onMouseOut={()=>this.createStarList(this.value)}>&#x2606;</span>)
      }
    }

    this.starList = starList;
  }

  render() {
    return (
      <div>
        {this.starList}
      </div>
    )
  }
}