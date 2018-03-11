import React from 'react'

class TypographyInput extends React.Component {
  updateTypographyStyles = () => {
    const {
      updateTypographyStyles
    } = this.props

    updateTypographyStyles({
      fontFamily: this.fontFamily.value,
      fontSize: this.fontSize.value,
      fontWeight: this.fontWeight.value,
      lineHeight: this.lineHeight.value,
      letterSpacing: this.letterSpacing.value,
      color: this.color.value,
    })
  }

  toggleItalic = () => {
    const {
      updateTypographyStyles,
      fontStyle
    } = this.props

    updateTypographyStyles({
      fontStyle: fontStyle === 'normal'
        ? 'italic'
        : 'normal'
    })
  }

  resetFormat = () => {

  }

  render () {
    const {
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      color,
      fontStyle,
    } = this.props

    return (
      <section className='typography__input'>
        <header>
          <div className='typography__item'>
            <select
              className='typography__font-family'
              onChange={this.updateTypographyStyles}
              value={this.props.fontFamily}
              ref={select => this.fontFamily = select}
            >
              <option value='SF Pro Display'>SF Pro Display</option>
              <option value='Open Sans'>Open Sans</option>
              <option value='Helvetica Neue'>Helvetica Neue</option>
            </select>
          </div>
          <div className='typography__item'>
            <span>font-size</span>
            <input
              type='text'
              onChange={this.updateTypographyStyles}
              ref={input => this.fontSize = input}
            />
          </div>
          <div className='typography__item'>
            <span>font-weight</span>
            <input
              type='text'
              onChange={this.updateTypographyStyles}
              ref={input => this.fontWeight = input}
            />
          </div>
          <div className='typography__item'>
            <span>line-height</span>
            <input
              type='text'
              onChange={this.updateTypographyStyles}
              ref={input => this.lineHeight = input}
            />
          </div>
          <div className='typography__item'>
            <span>letter-spacing</span>
            <input
              type='text'
              onChange={this.updateTypographyStyles}
              ref={input => this.letterSpacing = input}
            />
          </div>
          <div className='typography__item'>
            <span>font-color</span>
            <input
              type='text'
              onChange={this.updateTypographyStyles}
              ref={input => this.color = input}
            />
          </div>
          <div className='typography__item'>
            <button
              type='text'
              onClick={this.toggleItalic}
            >
              italic
            </button>
          </div>
          <div className='typography__item'>
            <button
              type='text'
              onClick={this.props.resetTypographyStyles}
            >
              Reset
            </button>
          </div>


        </header>

        <div
          className='typography__preview'
          style={{
            fontFamily: fontFamily,
            fontSize: fontSize,
            fontWeight: fontWeight,
            lineHeight: lineHeight,
            letterSpacing: letterSpacing,
            color: color,
            fontStyle: fontStyle,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut est at metus convallis vulputate sed...
        </div>
      </section>
    )
  }
}

export default TypographyInput