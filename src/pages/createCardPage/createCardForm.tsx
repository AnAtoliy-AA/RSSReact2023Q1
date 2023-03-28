import React, { Component, FormEvent } from 'react';
import StyledButton from '@components/styledButton/styledButton';
import styled from 'styled-components';
import { ICardValues } from '@services/card/card.service';
import FormService from '@services/form/formService';
import color from '@utils/styles/stylesUtils';
import CreateCardFormControl from './createCardFormControl';

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
  isFieldsInValid: Record<string, boolean>;
};

const DEFAULT_MESSAGE_TIME = 2 * 1000;

class CreateCardForm extends Component<CreateCardProps, CreateCardState> {
  form: React.RefObject<HTMLFormElement>;

  timer: NodeJS.Timeout | undefined;

  constructor(props: CreateCardProps) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.state = {
      isCardCreated: false,
      isFieldsInValid: {},
    };
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

      const isFieldsInValid = FormService.validateData(newCardData);

      if (isFieldsInValid?.isDataInValid) {
        this.setState((state: CreateCardState) => {
          return { ...state, isFieldsInValid };
        });
      } else {
        const { addCard } = this.props;

        addCard(newCardData);

        this.setState({ isCardCreated: true, isFieldsInValid: {} });

        this.timer = setTimeout(() => {
          this.setState({ isCardCreated: false });
          currentForm.reset();
        }, DEFAULT_MESSAGE_TIME);
      }
    }
  };

  render() {
    const { isCardCreated, isFieldsInValid } = this.state;

    return (
      <CreteForm onSubmit={this.handleOnSubmit} ref={this.form}>
        {FormService.inputsArrayVocabulary.map((inputProps) => {
          const { id, name } = inputProps;
          return (
            <CreateCardFormControl
              key={id}
              inputProps={inputProps}
              isError={!!isFieldsInValid?.[name]}
            />
          );
        })}
        {isCardCreated ? <CreateMessage>Created!</CreateMessage> : <SubmitForm>Submit</SubmitForm>}
      </CreteForm>
    );
  }
}

export default CreateCardForm;
