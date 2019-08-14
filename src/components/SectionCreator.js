import React from 'react'
import '../styles/SectionCreator.css'
import * as ColorPaletteIcon from '../assets/images/icon-color-palette.svg'
import * as TypographyIcon from '../assets/images/icon-typography.svg'
import * as TextIcon from '../assets/images/icon-text.svg'

export const sectionTypes = {
  COLOR_PALLETTE_SECTION: 'COLOR_PALLETTE_SECTION',
  TYPPOGRAPHY_RULES_SECTION: 'TYPPOGRAPHY_RULES_SECTION',
  TEXT_CONTENT_SECTION: 'TEXT_CONTENT_SECTION'
}

class SectionCreator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sectionMode: null
    }
  }

  setColorPaletteSection = () => {
    this.props.addSection(sectionTypes.COLOR_PALLETTE_SECTION)
  }

  setTypographyRulesContent = () => {
    this.props.addSection(sectionTypes.TYPPOGRAPHY_RULES_SECTION)
  }

  setTextContentSection = () => {
    this.props.addSection(sectionTypes.TEXT_CONTENT_SECTION)
  }

  render() {
    return (
      <section className="section-creator">
        {this.state.sectionMode === null && (
          <React.Fragment>
            <button type="button" onClick={this.setColorPaletteSection}>
              <img src={ColorPaletteIcon} alt="Color Palette" />
              <span className="tooltip">Color Palette</span>
            </button>
            <button type="button" onClick={this.setTypographyRulesContent}>
              <img src={TypographyIcon} alt="Typography" />
              <span className="tooltip">Typography</span>
            </button>
            <button type="button" onClick={this.setTextContentSection}>
              <img src={TextIcon} alt="More" />
              <span className="tooltip">Text</span>
            </button>
          </React.Fragment>
        )}
      </section>
    )
  }
}

export default SectionCreator
