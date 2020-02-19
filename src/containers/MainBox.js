import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      display: ''
    }
  }

  notDry = (event) => {
    this.setState({
      display: event.target.id
    })
  }

  display() {
    switch(this.state.display) {
      case 'profile':
        return Profile()
      case 'photo':
        return Photos()
      case 'cocktail':
        return Cocktails();
      case 'pokemon':
        return <Pokemon />
      default:
        return <div>Hi, I'm a div!</div>;
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar notDry={this.notDry} display={this.state.display} />
        {this.display()}
      </div>
    )
  }

}

export default MainBox
