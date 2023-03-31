import React, { FormEvent, useEffect, useRef, useState } from 'react';
import StyledButton from '@components/styledButton/styledButton';
import styled from 'styled-components';
import { ICardValues } from '@services/card/card.service';
import FormService from '@services/form/formService';
import color from '@utils/styles/stylesUtils';
import CreateCardFormControl from './formControl';

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

const DEFAULT_MESSAGE_TIME = 2 * 1000;

function CustomForm(props: CreateCardProps): JSX.Element {
  const { addCard } = props;

  const [isCardCreated, setIsCardCreated] = useState<boolean>(false);
  const [isFieldsInValid, setIsFieldsInValid] = useState<Record<string, boolean>>({});

  const form = useRef<HTMLFormElement | null>(null);
  const timerRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    return () => {
      if (timerRef?.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { current: currentForm } = form;

    if (currentForm) {
      const newCardData = FormService.createCardData(currentForm);

      const fieldsValidation = FormService.validateData(newCardData);

      if (fieldsValidation?.isDataInValid) {
        setIsFieldsInValid(fieldsValidation);
      } else {
        addCard(newCardData);

        setIsCardCreated(true);
        setIsFieldsInValid({});

        timerRef.current = setTimeout(() => {
          setIsCardCreated(false);
          currentForm.reset();
        }, DEFAULT_MESSAGE_TIME);
      }
    }
  };

  return (
    <CreteForm onSubmit={handleOnSubmit} ref={form}>
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

export default CustomForm;
