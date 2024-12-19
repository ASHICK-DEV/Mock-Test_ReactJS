import {Component} from 'react'
import {
  BgContainer,
  CardContainer,
  Heading,
  EditableInputContainer,
  InputField,
  ParagraphText,
  Button,
  Err,
  Own,
} from './styledComponents'

class Home extends Component {
  state = {
    EditableText: '',
    isButtonClicked: false,
    isErr: false,
    ErrMsg: 'Enter any text..!!',
  }

  onChangeSearchInput = event => {
    this.setState({EditableText: event.target.value})
  }

  onButtonClick = () => {
    const {EditableText} = this.state
    if (EditableText.length < 1) {
      this.setState({isErr: true})
    } else if (EditableText.length >= 1) {
      this.setState(prevState => ({
        isButtonClicked: !prevState.isButtonClicked,
      }))
      this.setState({isErr: false})
    }
  }

  render() {
    const {EditableText, isButtonClicked, isErr, ErrMsg} = this.state
    const EditSaveButton = isButtonClicked ? 'Edit' : 'Save'
    return (
      <BgContainer>
        <CardContainer>
          <Own>Designed by Ashiq</Own>
          <Heading>Editable Text Input</Heading>
          <EditableInputContainer>
            {isButtonClicked ? (
              <ParagraphText>{EditableText}</ParagraphText>
            ) : (
              <InputField
                type="text"
                value={EditableText}
                onChange={this.onChangeSearchInput}
              />
            )}
            <Button onClick={this.onButtonClick}>{EditSaveButton}</Button>
          </EditableInputContainer>
          {isErr ? <Err>{ErrMsg}</Err> : null}
        </CardContainer>
      </BgContainer>
    )
  }
}

export default Home
