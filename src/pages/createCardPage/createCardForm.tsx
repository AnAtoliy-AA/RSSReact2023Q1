import React, { Component, FormEvent } from 'react';
import StyledButton from '@components/styledButton/styledButton';
import styled from 'styled-components';
import { ICardValues } from '@services/card/card.service';
import FormService from '@services/form/formService';
import color from '@utils/styles/stylesUtils';
import CreateCardFormControl, { inputsArray } from './createCardFormControl';

const CreteForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 450px;
`;

const CreateMessage = styled.p`
  font-size: 2rem;
  color: ${color('success.text')};
`;

const SubmitForm = styled(StyledButton)``;

interface CreateCardProps {
  addCard: (card: ICardValues) => void;
}

type CreateCardState = {
  isCardCreated: boolean;
};

const DEFAULT_MESSAGE_TIME = 2 * 1000;

class CreateCardForm extends Component<CreateCardProps, CreateCardState> {
  form: React.RefObject<HTMLFormElement>;

  timer: NodeJS.Timeout | undefined;

  constructor(props: CreateCardProps) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.state = { isCardCreated: false };
    this.form = React.createRef();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { current: currentForm } = this.form;

    if (currentForm) {
      const newCardData = FormService.createCardData(currentForm);

      const { addCard } = this.props;

      addCard(newCardData);

      this.setState({ isCardCreated: true });

      this.timer = setTimeout(() => {
        this.setState({ isCardCreated: false });
        currentForm.reset();
      }, DEFAULT_MESSAGE_TIME);
    }
  };

  render() {
    const { isCardCreated } = this.state;
    return (
      <CreteForm onSubmit={this.handleOnSubmit} ref={this.form}>
        {inputsArray.map((inputProps) => (
          <CreateCardFormControl key={inputProps.id} inputProps={inputProps} />
        ))}
        {isCardCreated ? <CreateMessage>Created!</CreateMessage> : <SubmitForm>Submit</SubmitForm>}
      </CreteForm>
    );
  }
}

export default CreateCardForm;
