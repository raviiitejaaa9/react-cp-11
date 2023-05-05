import {Component} from 'react'

import './index.css'

import Emoji from '../Emoji'

class Feedback extends Component {
  state = {
    count: 0,
  }

  onChangeCard = id => {
    if (id === 2) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {resources} = this.props
    console.log(resources)
    console.log(typeof resources)
    const {emojis, loveEmojiUrl} = resources
    console.log(loveEmojiUrl)

    // console.log(emojis)
    //  const firstEmoji = emojis[0]
    //  const {id, name, imageUrl} = firstEmoji
    let reqCardContent

    if (count === 0) {
      reqCardContent = (
        <div className="card">
          <h1 className="head">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-container">
            {emojis.map(eachItem => (
              <Emoji
                eachEmoji={eachItem}
                key={eachItem.id}
                onChangeCard={this.onChangeCard}
              />
            ))}
          </ul>
        </div>
      )
    } else {
      reqCardContent = (
        <div className="card">
          <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
          <h1>Thank You</h1>
          <p>
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      )
    }

    return <div className="app-container">{reqCardContent}</div>
  }
}

export default Feedback
