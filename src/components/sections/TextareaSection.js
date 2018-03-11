
import React from 'react'
import renderMarkdown from '../../lib/renderMarkdown'
import '../../styles/TextareaSection.css'


class TextareaSection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: false,
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
          ? <textarea
            className='md__editor'
            value={content}
            ref={textarea => this.textarea = textarea}
            onChange={this.updateContent}
            onBlur={this.stopEditing}
            onKeyDown={this.handleKeyDown}
          />
          : <div
            dangerouslySetInnerHTML={{__html: renderMarkdown(content)}}
            onClick={this.startEditing}
            className='md__renderer'
          />
        }
      </section>
    )
  }
}

export default TextareaSection