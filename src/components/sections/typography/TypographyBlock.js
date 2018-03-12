import React from 'react'
import copyText from 'copy-text-to-clipboard'
import '../../../styles/TypographyBlock.css'

class TypographyBlock extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: false,
      showCopyMessage: 'Copy text styles',
    }
  }

  copyTextStyles = () => {
    const {
      fontFamily,
      fontSize,
      fontWeight,
      letterSpacing,
      lineHeight,
      color,
      fontStyle,
    } = this.props

    const textStyles = `{
      font-family: ${fontFamily};
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      letter-spacing: ${letterSpacing};
      line-height: ${lineHeight};
      color: ${color};
      font-style: ${fontStyle};
    }`

    copyText(textStyles)

    this.setState({
      showCopyMessage: 'Copied!',
    }, () => {
      if (this.timer) {
        window.clearTimeout(this.timer)
      }
      this.timer = window.setTimeout(this.resetCopyMessage, 2000)
    })
  }

  resetCopyMessage = () => {
    this.setState({
      showCopyMessage: 'Copy text styles',
    })
  }

  startEditingTypographyStyle = () => {
    this.setState({
      isEditing: true,
    }, () => {
      this.input.focus()
    })
  }

  stopEditingTypographyStyle = () => {
    this.setState({
      isEditing: false,
    })
  }

  updateTypographyName = () => {
    const {
      updateTypographyName,
    } = this.props

    updateTypographyName(this.input.value)
  }

  render () {
    const {
      typographyStyleName,
      fontFamily,
      fontSize,
      fontWeight,
      letterSpacing,
      lineHeight,
      color,
      fontStyle,
      deleteSection,
    } = this.props

    const {
      showCopyMessage,
      isEditing,
    } = this.state

    return (
      <article className='typography__block'>
        <div
          className='typography__preview'
          onClick={this.copyTextStyles}
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

          <div className='typography__overlay'>
            <span>{showCopyMessage}</span>
          </div>
        </div>
        <footer className='typography__footer'>
          {
            isEditing
            ? <input
              className='typography__summary__input'
              ref={input => this.input = input}
              value={typographyStyleName}
              onChange={this.updateTypographyName}
              onBlur={this.stopEditingTypographyStyle}
            />
            : <p
              className='typography__summary'
              onClick={this.startEditingTypographyStyle}
            >
              { typographyStyleName }
            </p>
          }
        </footer>
      </article>
    )
  }
}

export default TypographyBlock