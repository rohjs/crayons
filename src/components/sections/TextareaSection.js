
import React from 'react'
import renderMarkdown from '../../lib/renderMarkdown'
import '../../styles/TextareaSection.css'


class TextareaSection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: true,
      content: '',
    }
  }

  updateContent = () => {
    this.setState({
      content: this.textarea.value,
    })
  }

  startEditing = () => {
    this.setState({
      isEditing: true,
    }, () => {
      this.textarea.focus()
    })
  }

  stopEditing = () => {
    this.setState({
      isEditing: false,
    })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.metaKey) {
      this.stopEditing()
    }
  }

  render () {
    const {
      isEditing,
      content,
    } = this.state

    return (
      <section className='md__section'>
        {
          isEditing
          ? <section className='md__editor'>
            <header className='md__editor__header'>
              <h1>
                Markdown Editor — Press Cmd + Enter to save ❤️
              </h1>
            </header>
            <textarea
              value={content}
              ref={textarea => this.textarea = textarea}
              onChange={this.updateContent}
              onBlur={this.stopEditing}
              onKeyDown={this.handleKeyDown}
            />
          </section>
          : <section className='textarea__block'>
              <div
              dangerouslySetInnerHTML={{__html: renderMarkdown(content)}}
              onClick={this.startEditing}
              className='md__renderer'
            />
          </section>
        }
      </section>
    )
  }
}

export default TextareaSection