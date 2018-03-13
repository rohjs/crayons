import React from 'react'

class ColorPaletteInput extends React.Component {
  componentDidMount () {
    this.input.focus()
  }

  setInputRef = input => {
    const {
      innerRef,
    } = this.props

    innerRef(input)
    this.input = input
  }

  render () {
    const {
      updateColorInput,
      stopEditing,
    } = this.props

    return (
      <div className='color-palette'>
        <input
          type='text'
          className='color-palette__input'
          placeholder='i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)...'
          ref={this.setInputRef}
          onChange={updateColorInput}
          onBlur={stopEditing}
        />
        <button
          type='submit'
          className='color-palette__btn'
          onClick={stopEditing}
        >
          Save
        </button>
      </div>
    )
  }
}

export default ColorPaletteInput