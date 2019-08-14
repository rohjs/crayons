import React from 'react'
import TypographyInput from './typography/TypographyInput'
import TypographyBlock from './typography/TypographyBlock'
import * as EditIcon from '../../assets/images/icon-edit.svg'
import * as DeleteIcon from '../../assets/images/icon-delete.svg'

const defaultTypographyStyles = {
  previewLanguage: 'en',
  typographyStyleName: '16px — Helvetica Neue',
  fontFamily: 'Helvetica Neue',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0,
  color: '#000000',
  fontStyle: 'normal'
}

const previewText = {
  en:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut est at metus convallis vulputate sed...',
  ko:
    '전인 있을 어디 바이며, 청춘의 넣는 속에 청춘이 황금시대다. 있는 이것은 얼마나 황금시대다. 끓는 놀이 그와 칼이다. 무엇을 꽃이 방지하는 그리하였는가?'
}

class TypographySection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: true,
      ...defaultTypographyStyles
    }
  }

  updateTypographyStyles = styles => {
    this.setState({
      ...styles
    })
  }

  resetTypographyStyles = () => {
    this.setState({
      ...defaultTypographyStyles
    })
  }

  startEditing = () => {
    this.setState({
      isEditing: true
    })
  }

  stopEditing = () => {
    this.setState({
      isEditing: false
    })
  }

  updateTypographyName = newTypographyName => {
    this.setState({
      typographyStyleName: newTypographyName
    })
  }

  updatePreviewLanguage = lang => {
    this.setState({
      previewLanguage: lang
    })
  }

  deleteSection = () => {
    const { deleteSection, index } = this.props

    deleteSection(index)
  }

  render() {
    const {
      isEditing,
      previewLanguage,
      typographyStyleName,
      fontFamily,
      fontSize,
      fontWeight,
      letterSpacing,
      lineHeight,
      color,
      fontStyle
    } = this.state

    return (
      <div>
        {isEditing ? (
          <TypographyInput
            previewText={previewText}
            previewLanguage={previewLanguage}
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
            updatePreviewLanguage={this.updatePreviewLanguage}
            updateTypographyName={this.updateTypographyName}
            deleteSection={this.deleteSection}
          />
        ) : (
          <React.Fragment>
            <div style={{ position: 'relative' }}>
              <TypographyBlock
                previewText={previewText}
                previewLanguage={previewLanguage}
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
              <div className="typography__utils">
                <button
                  type="button"
                  className="typography__btn no-border"
                  onClick={this.startEditing}
                >
                  <img src={EditIcon} alt="Edit" />
                </button>
                <button
                  type="button"
                  className="typography__btn no-border"
                  onClick={this.deleteSection}
                >
                  <img src={DeleteIcon} alt="Delete" />
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default TypographySection
