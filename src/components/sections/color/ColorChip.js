import React from 'react'
import copyText from 'copy-text-to-clipboard'
import '../../../styles/ColorChip.css'

class ColorChip extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showCopyMessage: 'Copy hex code',
      isEditing: false,
    }
  }

  copyHexCode = () => {
    copyText(this.props.hexCode)

    this.setState({
      showCopyMessage: 'Copied!',
    }, () => {
      if (this.timer) {
        window.clearTimeout(this.timer)
      }
      this.timer = window.setTimeout(this.resetCopyMessage, 1500)
    })
  }

  resetCopyMessage = () => {
    this.setState({
      showCopyMessage: 'Copy hex code'
    })
  }

  startEditing = () => {
    this.setState({
      isEditing: true,
    }, () => {
      this.input.focus()
    })
  }

  stopEditing = () => {
    this.setState({
      isEditing: false,
    })
  }

  updateNewHexCode = () => {
    const {
      index,
      updateNewHexCode
    } = this.props

    const newHexCode = this.input.value

    updateNewHexCode(index, newHexCode)
  }

  render () {
    const {
      hexCode,
    } = this.props

    const {
      showCopyMessage,
      isEditing,
    } = this.state

    return (
      <article className='color-chip'>
        <div className='color-chip__block'
          style={{ backgroundColor: hexCode }}
          onClick={this.copyHexCode}>
          <span>
            {showCopyMessage}
          </span>
        </div>
        {
          isEditing
          ? <input
            type='text'
            className='color-chip__input'
            value={hexCode}
            ref={input => this.input = input}
            onChange={this.updateNewHexCode}
            onBlur={this.stopEditing}
            />
          : <h1
            className='color-chip__name'
            onClick={this.startEditing}>
            { hexCode }
          </h1>
        }
      </article>
    )
  }
}

export default ColorChip