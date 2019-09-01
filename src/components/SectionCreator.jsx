import React from 'react'
import '../styles/SectionCreator.css'
import { ReactComponent as ColorPaletteIcon } from '../assets/images/icon-color-palette.svg'
import { ReactComponent as TypographyIcon } from '../assets/images/icon-typography.svg'
import { ReactComponent as TextIcon } from '../assets/images/icon-text.svg'

export const sectionTypes = {
  COLOR_PALLETTE_SECTION: 'COLOR_PALLETTE_SECTION',
  TYPPOGRAPHY_RULES_SECTION: 'TYPPOGRAPHY_RULES_SECTION',
  TEXT_CONTENT_SECTION: 'TEXT_CONTENT_SECTION'
}

export default class SectionCreator extends React.Component {
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
          <>
            <button type="button" onClick={this.setColorPaletteSection}>
              <ColorPaletteIcon />
              <span className="tooltip">Color Palette</span>
            </button>
            <button type="button" onClick={this.setTypographyRulesContent}>
              <TypographyIcon />
              <span className="tooltip">Typography</span>
            </button>
            <button type="button" onClick={this.setTextContentSection}>
              <TextIcon />
              <span className="tooltip">Text</span>
            </button>
          </>
        )}
      </section>
    )
  }
}
