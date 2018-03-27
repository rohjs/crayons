import React from 'react'
import firebase from 'firebase'
import AppLayout from './components/layout/AppLayout'
import SectionCreator from './components/SectionCreator'
import './styles/App.css'
import ColorPaletteSection from './components/sections/ColorPaletteSection'
import TypographySection from './components/sections/TypographySection'
import TextareaSection from './components/sections/TextareaSection'

const config = {
  apiKey: "AIzaSyDco2xG0mVLFctYGd5WfXAs79l3VpWD_g4",
  authDomain: "crayons-744e6.firebaseapp.com",
  databaseURL: "https://crayons-744e6.firebaseio.com",
  projectId: "crayons-744e6",
  storageBucket: "crayons-744e6.appspot.com",
  messagingSenderId: "211890910579",
};

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

  render () {
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
