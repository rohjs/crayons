import React from 'react'
import fire from './fire'
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
      isEditingTitle: true,
      styleguideTitle: '',
      sections: [],
    }
  }

  startEditingTitle = () => {
    this.setState({
      isEditing: true,
    })
  }

  stopEditingTitle = () => {
    this.setState({
      isEditing: false,
    })
  }

  updateTitle = () => {
    this.setState({
      styleguideTitle: this.titleInput.value,
    })
  }

  saveContent = (e) => {
    e.preventDefault()

    fire.database().ref('sections').push(this.state.sections)
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

  render () {
    const {
      styleguideTitle,
    } = this.state

    return (
      <AppLayout styleguideTitle={styleguideTitle}>

        <header className='page__header'>
          {
            this.state.isEditingTitle
            ? <input
              type='text'
              className='page__title'
              placeholder='Untitled Styleguide'
              onChange={this.updateTitle}
              onBlur={this.stopEditingTitle}
              defaultValue={styleguideTitle}
              ref={input => this.titleInput = input}
            />
            : <h1
              className='page__title'
              onClick={this.startEditingTitle}
            >
              { this.props.styleguideTitle }
            </h1>
          }
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

        <button type='submit'
          className='btn-submit'
          onClick={this.saveContent}
        >
          Save
        </button>

      </AppLayout>
    )
  }
}

export default App
