import React from 'react'
import '../styles/SectionCreator.css'
import * as ColorPaletteIcon from '../assets/images/icon-color-palette.svg'
import * as TypographyIcon from '../assets/images/icon-typography.svg'
import * as TextIcon from '../assets/images/icon-text.svg'

class SectionCreator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sectionMode: null,
    }
  }

  setColorPaletteBlock = () => {
    this.props.addSection('color-palette')
  }

  setTypographyBlock = () => {
    this.props.addSection('typography')
  }

  setTextAreaBlock = () => {
    this.props.addSection('textarea')
  }

  render () {
    return (
      <section className='section-creator'>
        {
          this.state.sectionMode === null &&
          <React.Fragment>
            <button
              type='button'
              onClick={this.setColorPaletteBlock}
            >
              <img
                src={ColorPaletteIcon}
                alt='Color Palette'
              />
            </button>
            <button
              type='button'
              onClick={this.setTypographyBlock}
            >
              <img
                src={TypographyIcon}
                alt='Typography'
              />
            </button>
            <button
              type='button'
              onClick={this.setTextAreaBlock}
            >
              <img
                src={TextIcon}
                alt='More'
              />
            </button>
          </React.Fragment>
        }
      </section>
    )
  }
}

export default SectionCreator