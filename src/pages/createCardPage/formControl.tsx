/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { IInputValues } from '@services/form/formService';
import color from '@utils/styles/stylesUtils';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
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
  isError?: Partial<FieldError> | null;
  register: UseFormRegister<FieldValues>;
}

function CustomFormControl(props: IInputProps) {
  const { inputProps, isError, register } = props;
  const { id, label, name, type, placeholder, children, errorMessage } = inputProps;

  return (
    <FormControl key={id}>
      <label htmlFor={name}>{label}</label>
      {children?.length ? (
        <FormControlWithChildren
          type={type}
          errorMessage={errorMessage}
          isError={isError}
          {...register(name)}
        >
          {children}
        </FormControlWithChildren>
      ) : (
        <>
          <StyledInput
            placeholder={placeholder}
            type={type}
            {...register(name, { required: true })}
          />
          {isError && <span>{errorMessage}</span>}
        </>
      )}
    </FormControl>
  );
}

CustomFormControl.defaultProps = { isError: null };

export default CustomFormControl;
