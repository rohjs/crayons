import React from 'react'
import AppLayout from './components/layout/AppLayout'
import SectionCreator from './components/SectionCreator'
import './styles/App.css'
import ColorPaletteSection from './components/sections/ColorPaletteSection'
import TypographySection from './components/sections/TypographySection'
import TextareaSection from './components/sections/TextareaSection'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sections: [],
    }
  }

  addSection = (sectionMode) => {
    this.setState({
      sections: [
        ...this.state.sections,
        {
          mode: sectionMode,
          id: Date.now(),
        },
      ],
    })
  }

  deleteSection = (index) => {
    const newSections = [
      ...this.state.sections,
    ]

    newSections.splice(index, 1)

    this.setState({
      sections: newSections,
    })
  }

  render() {
    return (
      <AppLayout>

        <header className='page__header'>
          <h1 className='page__title'>
            Name of the styleguide
          </h1>
        </header>

        <section>
          {
            this.state.sections.map((section, index) => {
              switch (section.mode) {
                case 'color-palette':
                  return <ColorPaletteSection
                    key={index}
                    deleteSection={this.deleteSection}
                    index={index}
                    />
                case 'typography':
                  return <TypographySection
                    key={index}
                    deleteSection={this.deleteSection}
                    index={index}
                    />
                case 'textarea':
                  return <TextareaSection
                    key={index}
                    deleteSection={this.deleteSection}
                    index={index}
                    />
              }
            })
          }
          <SectionCreator addSection={this.addSection} />
        </section>

      </AppLayout>
    )
  }
}

export default App
