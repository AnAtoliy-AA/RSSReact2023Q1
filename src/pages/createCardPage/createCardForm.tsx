import React, { Component, FormEvent } from 'react';
import StyledButton from '@components/styledButton/styledButton';
import styled from 'styled-components';
import { ICardValues } from '@services/card/card.service';
import FormService from '@services/form/formService';
import CreateCardFormControl, { inputsArray } from './createCardFormControl';

const CreteForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 450px;
  height: 100%;
`;

const SubmitForm = styled(StyledButton)``;

interface CreateCardProps {
  addCard: (card: ICardValues) => void;
}

type CreateCardState = object;

class CreateCardForm extends Component<CreateCardProps, CreateCardState> {
  form: React.RefObject<HTMLFormElement>;

  constructor(props: CreateCardProps) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.form = React.createRef();
  }

  handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { current: currentForm } = this.form;

    if (currentForm) {
      const newCardData = FormService.createCardData(currentForm);

      const { addCard } = this.props;

      addCard(newCardData);

      currentForm.reset();
    }
  };

  render() {
    return (
      <CreteForm onSubmit={this.handleOnSubmit} ref={this.form}>
        {inputsArray.map((inputProps) => (
          <CreateCardFormControl key={inputProps.id} inputProps={inputProps} />
        ))}
        <SubmitForm>Submit</SubmitForm>
      </CreteForm>
    );
  }
}

export default CreateCardForm;
