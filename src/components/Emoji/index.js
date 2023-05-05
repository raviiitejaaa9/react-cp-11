import './index.css'

const Emoji = props => {
  const {eachEmoji, onChangeCard} = props
  const {id, name, imageUrl} = eachEmoji

  const onClickEmoji = () => {
    onChangeCard(id)
  }

  return (
    <li className="emoji-box">
      <img src={imageUrl} alt={name} className="emoji" onClick={onClickEmoji} />
      <p className="emoji-name"> {name} </p>
    </li>
  )
}

export default Emoji
