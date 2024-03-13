import { Component } from 'react'
import { IconSwitch } from '../IconSwitch/IconSwitch';
import { CardsView } from '../CardsView/CardsView';
import { ListView } from '../ListView/ListView';

export class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [{
                name: "Nike Metcon 2",
                price: "130",
                color: "red",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
              }, {
                name: "Nike Metcon 2",
                price: "130",
                color: "green",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
              }, {
                name: "Nike Metcon 2",
                price: "130",
                color: "blue",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
              }, {
                name: "Nike Metcon 2",
                price: "130",
                color: "black",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
              }, {
                name: "Nike free run",
                price: "170",
                color: "black",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
              }, {
                name: "Nike Metcon 3",
                price: "150",
                color: "green",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
              }],
              icon: 'view_module',
          }
        this.state.newIcon = this.state.icon;  
    }
  

  onSwitch = () => {
    this.setState({icon: this.state.icon === 'view_module' ? 'view_list' : 'view_module'});
  }

  render() {
    let view;
    this.state.icon === 'view_module' ? view = <CardsView cards={this.state.products}/> : view = <ListView items={this.state.products}/>
    return (
      <>
      <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch}/>
      {view}
      </>
    )
  }
}
