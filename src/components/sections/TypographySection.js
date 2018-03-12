import React from 'react'
import TypographyInput from './typography/TypographyInput'
import TypographyBlock from './typography/TypographyBlock'

const defaultTypographyStyles = {
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

  render () {
    const {
      isEditing,
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
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            color={color}
            fontStyle={fontStyle}
            updateTypographyStyles={this.updateTypographyStyles}
            resetTypographyStyles={this.resetTypographyStyles}
            />
          : <TypographyBlock
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