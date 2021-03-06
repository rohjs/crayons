import React from 'react'
import AppLayout from './components/layout/AppLayout'
import SectionCreator, { sectionTypes } from './components/SectionCreator'
import ColorPaletteSection from './components/sections/ColorPaletteSection'
import TypographySection from './components/sections/TypographySection'
import TextareaSection from './components/sections/TextareaSection'
import './styles/App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditingTitle: true,
      styleguideTitle: '',
      sections: []
    }
  }

  startEditingTitle = () => {
    this.setState({
      isEditing: true
    })
  }

  stopEditingTitle = () => {
    this.setState({
      isEditing: false
    })
  }

  updateTitle = () => {
    this.setState({
      styleguideTitle: this.titleInput.value
    })
  }

  addSection = sectionMode => {
    this.setState({
      sections: [
        ...this.state.sections,
        {
          mode: sectionMode,
          id: Date.now()
        }
      ]
    })
  }

  deleteSection = index => {
    const newSections = [...this.state.sections]

    newSections.splice(index, 1)

    this.setState({
      sections: newSections
    })
  }

  render() {
    const { styleguideTitle } = this.state

    return (
      <AppLayout styleguideTitle={styleguideTitle}>
        <header className="page__header">
          {this.state.isEditingTitle ? (
            <input
              type="text"
              className="page__title"
              placeholder="Untitled Styleguide"
              onChange={this.updateTitle}
              onBlur={this.stopEditingTitle}
              defaultValue={styleguideTitle}
              ref={input => (this.titleInput = input)}
            />
          ) : (
            <h1 className="page__title" onClick={this.startEditingTitle}>
              {this.props.styleguideTitle}
            </h1>
          )}
        </header>

        <section>
          {this.state.sections.map((section, index) => {
            switch (section.mode) {
              case sectionTypes.COLOR_PALLETTE_SECTION:
                return (
                  <ColorPaletteSection
                    key={index}
                    deleteSection={this.deleteSection}
                    index={index}
                  />
                )
              case sectionTypes.TYPPOGRAPHY_RULES_SECTION:
                return (
                  <TypographySection
                    key={index}
                    deleteSection={this.deleteSection}
                    index={index}
                  />
                )
              case sectionTypes.TEXT_CONTENT_SECTION:
                return (
                  <TextareaSection
                    key={index}
                    deleteSection={this.deleteSection}
                    index={index}
                  />
                )
              default:
                return ''
            }
          })}
          <SectionCreator addSection={this.addSection} />
        </section>
      </AppLayout>
    )
  }
}
