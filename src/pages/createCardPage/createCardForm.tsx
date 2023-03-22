import React, { ChangeEvent, Component, FormEvent } from 'react';
import StyledButton from '@components/styledButton/styledButton';
import styled from 'styled-components';
import { ICardValues } from '@services/card/card.service';
import FormService from '@services/form/formService';

const CreteForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 450px;
  height: 100%;
`;

const FormControl = styled.div`
  display: flex;
  width: 120%;
  justify-content: space-between;
`;

const SubmitForm = styled(StyledButton)``;

const StyledInput = styled.input``;

interface CreateCardProps {
  addCard: (card: ICardValues) => void;
}

interface CreateCardState {
  title: string;
  imageFile: File | null;
}

class CreateCardForm extends Component<CreateCardProps, CreateCardState> {
  form: React.RefObject<HTMLFormElement>;

  constructor(props: CreateCardProps) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.form = React.createRef();

    this.state = {
      title: '',
      imageFile: null,
    };
  }

  handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { current: currentForm } = this.form;

    if (currentForm) {
      const newCardData = FormService.createCardData(currentForm);

      const { addCard } = this.props;

      addCard(newCardData);
    }
  };

  handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState((prev) => ({ ...prev, imageFile: event?.target?.files?.[0] || null }));
  };

  render() {
    const { imageFile } = this.state;
    return (
      <CreteForm onSubmit={this.handleOnSubmit} ref={this.form}>
        <FormControl>
          <p>Title</p>
          <StyledInput placeholder="Title" />
        </FormControl>
        <FormControl>
          <p>Author</p>
          <StyledInput placeholder="Author" />
        </FormControl>
        {imageFile && <img src={URL.createObjectURL(imageFile)} alt="a" />}
        <FormControl>
          <p>Image</p>
          <StyledInput
            type="file"
            placeholder="Image"
            onChange={this.handleFileInput}
            accept=".png, .jpg, jpeg, .svg"
          />
        </FormControl>
        <FormControl>
          <p>Description</p>
          <StyledInput placeholder="Description" />
        </FormControl>
        <FormControl>
          <p>TODO NAME</p>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </FormControl>
        <FormControl>
          <p>Created at</p>
          <StyledInput type="date" placeholder="Created at" />
        </FormControl>
        <FormControl>
          <p>Save to favorites</p>
          <StyledInput type="checkbox" placeholder="Confirm" />
        </FormControl>
        <SubmitForm>Submit</SubmitForm>
      </CreteForm>
    );
  }
}

export default CreateCardForm;
