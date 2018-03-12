import React from 'react'
import TypographyInput from './typography/TypographyInput'
import TypographyBlock from './typography/TypographyBlock'

const defaultTypographyStyles = {
  typographyStyleName: '16px — Helvetica Neue',
  fontFamily: 'Helvetica Neue',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0,
  color: '#000000',
  fontStyle: 'normal',
}

class TypographySection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: true,
      ...defaultTypographyStyles,
    }
  }

  updateTypographyStyles = (styles) => {
    this.setState({
      ...styles,
    })
  }

  resetTypographyStyles = () => {
    this.setState({
      ...defaultTypographyStyles,
    })
  }

  stopEditing = () => {
    this.setState({
      isEditing: false,
    })
  }

  render () {
    const {
      isEditing,
      typographyStyleName,
      fontFamily,
      fontSize,
      fontWeight,
      letterSpacing,
      lineHeight,
      color,
      fontStyle,
    } = this.state
    return (
      <div>
        {
          isEditing
          ? <TypographyInput
            typographyStyleName={typographyStyleName}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            color={color}
            fontStyle={fontStyle}
            updateTypographyStyles={this.updateTypographyStyles}
            resetTypographyStyles={this.resetTypographyStyles}
            stopEditing={this.stopEditing}
            />
          : <TypographyBlock
            typographyStyleName={typographyStyleName}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            color={color}
            fontStyle={fontStyle}
            />
        }
      </div>
    )
  }
}

export default TypographySection