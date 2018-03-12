import React from 'react'
import * as FontFamilyIcon from '../../../assets/images/icon-font-family.svg'
import * as FontSizeIcon from '../../../assets/images/icon-font-size.svg'
import * as FontWeightIcon from '../../../assets/images/icon-font-weight.svg'
import * as LineHeightIcon from '../../../assets/images/icon-line-height.svg'
import * as LetterSpacingIcon from '../../../assets/images/icon-letter-spacing.svg'
import * as ColorIcon from '../../../assets/images/icon-color.svg'
import * as ItalicIcon from '../../../assets/images/icon-italic.svg'
import * as FormatResetIcon from '../../../assets/images/icon-format-reset.svg'
import '../../../styles/TypographyInput.css'

class TypographyInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditingTypographyStyleName: false,
    }
  }
  updateTypographyStyles = () => {
    const {
      updateTypographyStyles
    } = this.props

    const newTypographyStyleName = `${this.fontSize.value} — ${this.fontFamily.value}`

    updateTypographyStyles({
      typographyStyleName: newTypographyStyleName,
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
    this.props.resetTypographyStyles()
  }

  stopEditing = () => {
    this.props.stopEditing()
  }

  startEditingTypographyStyleName = () => {
    this.setState({
      isEditingTypographyStyleName: true,
    }, () => {
      this.typographyNameInput.focus()
    })
  }

  stopEditingTypographyStyleName = () => {
    this.setState({
      isEditingTypographyStyleName: false,
    })
  }

  updateTypographyStyleName = () => {
    const {
      updateTypographyName
    } = this.props

    updateTypographyName(this.typographyNameInput.value)
  }

  render () {
    const {
      typographyStyleName,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      color,
      fontStyle,
    } = this.props

    const {
      isEditingTypographyStyleName
    } = this.state

    return (
      <section className='typography__input'>
        <header className='typography__header'>
          <div className='typography__item'>
            <span>
              <img
                src={FontFamilyIcon}
                alt='Font Family'
              />
            </span>
            <select
              className='typography__font-family'
              onChange={this.updateTypographyStyles}
              value={fontFamily}
              ref={select => this.fontFamily = select}
            >
              <option value='Open Sans'>Open Sans</option>
              <option value='Helvetica Neue'>Helvetica Neue</option>
              <option value='Lato'>Lato</option>
            </select>
          </div>
          <div className='typography__item'>
            <span>
              <img
                src={FontSizeIcon}
                alt='Font Size'
              />
            </span>
            <input
              type='text'
              onChange={this.updateTypographyStyles}
              ref={input => this.fontSize = input}
              value={fontSize}
              style={{ width: 55, }}
            />
          </div>
          <div className='typography__item'>
            <span>
              <img
                src={FontWeightIcon}
                alt='Font Weight'
              />
            </span>
            <select
              onChange={this.updateTypographyStyles}
              ref={select => this.fontWeight = select}
              value={fontWeight}
            >
              <option value='100'>100</option>
              <option value='200'>200</option>
              <option value='300'>300</option>
              <option value='400'>400</option>
              <option value='500'>500</option>
              <option value='600'>600</option>
              <option value='700'>700</option>
              <option value='800'>800</option>
              <option value='900'>900</option>
            </select>
          </div>
          <div className='typography__item'>
            <span>
              <img
                src={LineHeightIcon}
                alt='Line Height'
              />
            </span>
            <input
              type='text'
              onChange={this.updateTypographyStyles}
              ref={input => this.lineHeight = input}
              value={lineHeight}
              style={{ width: 60, }}
            />
          </div>
          <div className='typography__item'>
            <span>
              <img
                src={LetterSpacingIcon}
                alt='Letter Spacing'
              />
            </span>
            <input
              type='text'
              onChange={this.updateTypographyStyles}
              ref={input => this.letterSpacing = input}
              value={letterSpacing}
              style={{ width: 60, }}
            />
          </div>
          <div className='typography__item'>
            <span>
              <img
                src={ColorIcon}
                alt='Color'
              />
            </span>
            <input
              type='text'
              onChange={this.updateTypographyStyles}
              ref={input => this.color = input}
              value={color}
              style={{ width: 85, }}
            />
          </div>
          <div className='typography__item'>
            <button
              type='text'
              onClick={this.toggleItalic}
            >
              <img
                src={ItalicIcon}
                alt='Italic'
              />
            </button>
          </div>
          <div className='typography__item'>
            <button
              type='text'
              onClick={this.props.resetTypographyStyles}
            >
              <img
                src={FormatResetIcon}
                alt='Reset Format'
              />
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

        <footer className='typography__footer'>
          {
            isEditingTypographyStyleName
            ? <input
              className='typography__summary__input'
              ref={input => this.typographyNameInput = input}
              value={typographyStyleName}
              onChange={this.updateTypographyStyleName}
              onBlur={this.stopEditingTypographyStyleName}
            />
            : <p
              className='typography__summary'
              onClick={this.startEditingTypographyStyleName}
            >
              {`${typographyStyleName}`}
            </p>
          }
          <button
            type='submit'
            className='typography__btn'
            onClick={this.stopEditing}
          >
            Create
          </button>
        </footer>
      </section>
    )
  }
}

export default TypographyInput