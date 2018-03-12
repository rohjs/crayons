import React from 'react'
import TypographyInput from './typography/TypographyInput'
import TypographyBlock from './typography/TypographyBlock'
import * as EditIcon from '../../assets/images/icon-edit.svg'
import * as DeleteIcon from '../../assets/images/icon-delete.svg'

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

  startEditing = () => {
    this.setState({
      isEditing: true,
    })
  }

  stopEditing = () => {
    this.setState({
      isEditing: false,
    })
  }

  updateTypographyName = (newTypographyName) => {
    this.setState({
      typographyStyleName: newTypographyName,
    })
  }

  delete = () => {
    const {
      deleteSection,
      index,
    } = this.props

    deleteSection(index)
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
            updateTypographyName={this.updateTypographyName}
            />
          : <React.Fragment>
            <div style={{position: 'relative',}}>
              <TypographyBlock
              typographyStyleName={typographyStyleName}
              fontFamily={fontFamily}
              fontSize={fontSize}
              fontWeight={fontWeight}
              lineHeight={lineHeight}
              letterSpacing={letterSpacing}
              color={color}
              fontStyle={fontStyle}
              updateTypographyName={this.updateTypographyName}
              deleteSection={this.delete}
              />
              <div className='typography__utils'>
                <button
                  type='button'
                  className='typography__btn no-border'
                  onClick={this.startEditing}
                >
                  <img
                    src={EditIcon}
                    alt='Edit'
                  />
                </button>
                <button
                  type='button'
                  className='typography__btn no-border'
                  onClick={this.delete}
                >
                  <img
                    src={DeleteIcon}
                    alt='Delete'
                  />
                </button>
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    )
  }
}

export default TypographySection