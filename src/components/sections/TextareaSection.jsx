import React from 'react'
import TextArea from 'better-react-textarea-autosize'
import renderMarkdown from '../../lib/renderMarkdown'
import '../../styles/TextareaSection.css'
import { ReactComponent as EditIcon } from '../../assets/images/icon-edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/images/icon-delete.svg'

export default class TextareaSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: true,
      content: ''
    }
  }

  updateContent = () => {
    this.setState({
      content: this.textarea.value
    })
  }

  startEditing = () => {
    this.setState(
      {
        isEditing: true
      },
      () => {
        this.textarea.focus()
      }
    )
  }

  stopEditing = () => {
    const { content } = this.state

    if (content !== '') {
      this.setState({
        isEditing: false
      })
    } else {
      const { deleteSection, index } = this.props

      deleteSection(index)
    }
  }

  deleteSection = () => {
    const { deleteSection, index } = this.props

    deleteSection(index)
  }

  handleKeyDown = e => {
    if (e.key === 'Enter' && e.metaKey) {
      this.stopEditing()
    }
  }

  componentDidMount() {
    this.textarea.focus()
  }

  render() {
    const { isEditing, content } = this.state

    return (
      <section className="md__section">
        {isEditing ? (
          <section className="md__editor">
            <header className="md__editor__header">
              <h1>
                Markdown Editor — Press Cmd + Enter to save{' '}
                <span role="img" aria-label="heart">
                  ❤️
                </span>
              </h1>
            </header>
            <TextArea
              value={content}
              ref={textarea => (this.textarea = textarea)}
              onChange={this.updateContent}
              onBlur={this.stopEditing}
              onKeyDown={this.handleKeyDown}
            />
            <footer className="md__editor__footer">
              <button type="submit" className="md__editor__btn">
                Save
              </button>
            </footer>
          </section>
        ) : (
          <section className="textarea__block" onClick={this.startEditing}>
            <div
              dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
              className="md__renderer"
            />
            <div className="typography__utils">
              <button
                type="button"
                className="typography__btn no-border"
                onClick={this.startEditing}
              >
                <EditIcon />
              </button>
              <button
                type="button"
                className="typography__btn no-border"
                onClick={this.deleteSection}
              >
                <DeleteIcon />
              </button>
            </div>
          </section>
        )}
      </section>
    )
  }
}
