import styled from 'styled-components';
import { IInputValues } from '@services/form/formService';
import color from '@utils/styles/stylesUtils';
import FormControlWithChildren, { StyledInput } from './formControlWithChildren';

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    text-transform: capitalize;
    font-size: 1.5rem;
  }

  span {
    color: ${color('danger.text')};
  }
`;

interface IInputProps {
  inputProps: IInputValues;
  isError: boolean;
}

function CreateCardFormControl(props: IInputProps) {
  const { inputProps, isError } = props;
  const { id, label, name, type, placeholder, children, errorMessage } = inputProps;

  return (
    <FormControl key={id}>
      <label htmlFor={name}>{label}</label>
      {children?.length ? (
        <FormControlWithChildren
          name={name}
          type={type}
          errorMessage={errorMessage}
          isError={isError}
        >
          {children}
        </FormControlWithChildren>
      ) : (
        <>
          <StyledInput name={name} placeholder={placeholder} type={type} />
          {isError && <span>{errorMessage}</span>}
        </>
      )}
    </FormControl>
  );
}

export default CreateCardFormControl;
