import React from 'react'
import ColorPaletteInput from './color/ColorPaletteInput'
import ColorChip from './color/ColorChip'
import * as EditIcon from '../../assets/images/icon-edit.svg'
import * as DeleteIcon from '../../assets/images/icon-delete.svg'
import '../../styles/ColorPaletteSection.css'

const colorRegExp = /#[\da-f]{6}|#[\da-f]{3}|rgb\(\d{1,3},\d{1,3},\d{1,3}\)|rgba\(\d{1,3},\d{1,3},\d{1,3},(\d|\d?\.\d)\)/g

class ColorPalette extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: true,
      colors: '',
      colorList: []
    }
  }

  startEditing = () => {
    this.setState(
      {
        isEditing: true
      },
      () => {
        this.input.value = this.state.colors
        this.input.focus()
      }
    )
  }

  stopEditing = colors => {
    const newColorList =
      this.state.colors
        .toLowerCase()
        .replace(/\s/g, '')
        .match(colorRegExp) || []
    const newColors = newColorList.join(', ')

    if (newColorList.length > 0) {
      this.setState({
        isEditing: false,
        colorList: newColorList,
        colors: newColors
      })
    } else {
      const { deleteSection, index } = this.props

      deleteSection(index)
    }
  }

  delete = () => {
    const { deleteSection, index } = this.props

    deleteSection(index)
  }

  updateColorInput = () => {
    this.setState({
      colors: this.input.value
    })
  }

  updateNewHexCode = (index, hexCode) => {
    const { colorList } = this.state

    const newColorList = [...colorList]

    newColorList[index] = hexCode

    this.setState({
      colorList: newColorList,
      colors: newColorList.join(', ')
    })
  }

  componentDidMount() {
    this.input.focus()
  }

  render() {
    const { colorList } = this.state

    return (
      <div>
        {this.state.isEditing === true ? (
          <ColorPaletteInput
            stopEditing={this.stopEditing}
            updateColorInput={this.updateColorInput}
            innerRef={input => (this.input = input)}
          />
        ) : (
          <React.Fragment>
            <div className="color-chips">
              {colorList.map((color, index) => {
                return (
                  <ColorChip
                    key={index}
                    hexCode={color}
                    index={index}
                    updateNewHexCode={this.updateNewHexCode}
                  />
                )
              })}
              <div className="color-chips__utils">
                <button
                  type="button"
                  className="color-chips__btn"
                  onClick={this.startEditing}
                >
                  <img src={EditIcon} alt="Edit" />
                </button>
                <button
                  type="button"
                  className="color-chips__btn"
                  onClick={this.delete}
                >
                  <img src={DeleteIcon} alt="Delete" />
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default ColorPalette
