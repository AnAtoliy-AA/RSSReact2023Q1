import { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';
import { FormFields } from '@services/form/formService';
import color from '@utils/styles/stylesUtils';

const FormControl = styled.div`
  display: flex;
  width: 120%;
  justify-content: space-between;

  span {
    color: ${color('danger.text')};
    display: none;
  }

  input:invalid ~ span {
    display: block;
  }
`;

const StyledInput = styled.input``;

interface ISelectChild {
  id: number;
  name: string | number;
}

interface IInputValues {
  id: number;
  name: FormFields;
  placeholder: FormFields;
  type: HTMLInputTypeAttribute;
  required: boolean;
  errorMessage: string;
  pattern: string;
  children?: Array<ISelectChild>;
}

export const inputsArray: Array<IInputValues> = [
  {
    id: 1,
    name: FormFields.TITLE,
    placeholder: FormFields.TITLE,
    type: 'text',
    required: true,
    pattern: '^[a-zA-Z0-9 ]{3-16}$',
    errorMessage: 'required field with letters and numbers. Should contain at lest 3 symbols.',
  },
  {
    id: 2,
    name: FormFields.CHANNEL_TITLE,
    placeholder: FormFields.CHANNEL_TITLE,
    type: 'text',
    required: true,
    pattern: '^[a-zA-Z0-9 ]{3-16}$',
    errorMessage: 'required field with letters and numbers. Should contain at lest 3 symbols.',
  },
  {
    id: 3,
    name: FormFields.IMAGE,
    placeholder: FormFields.IMAGE,
    type: 'file',
    required: false,
    pattern: '',
    errorMessage: '',
  },
  {
    id: 4,
    name: FormFields.DESCRIPTION,
    placeholder: FormFields.DESCRIPTION,
    type: 'text',
    required: true,
    pattern: '',
    errorMessage: 'required',
  },
  {
    id: 5,
    name: FormFields.DESCRIPTION,
    placeholder: FormFields.DESCRIPTION,
    type: '',
    required: true,
    pattern: '',
    errorMessage: 'required',
    children: [
      {
        id: 1,
        name: 1,
      },
      {
        id: 2,
        name: 1,
      },
    ],
  },
  {
    id: 6,
    name: FormFields.CREATED_AT,
    placeholder: FormFields.CREATED_AT,
    type: 'date',
    required: true,
    pattern: '',
    errorMessage: 'required',
  },
  {
    id: 7,
    name: FormFields.FAVORITES,
    placeholder: FormFields.FAVORITES,
    type: 'checkbox',
    required: true,
    pattern: '',
    errorMessage: 'required',
  },
];

interface IInputProps {
  inputProps: IInputValues;
}

function CreateCardFormControl(props: IInputProps) {
  const { inputProps } = props;
  const { id, name, type, placeholder, children, required, errorMessage, pattern } = inputProps;

  return (
    <FormControl key={id}>
      <p>{name}</p>
      {children?.length ? (
        <select>
          {children?.map((child) => {
            const { id: childId, name: childName } = child;

            return (
              <option key={childId} value={childName}>
                {childName}
              </option>
            );
          })}
        </select>
      ) : (
        <>
          <StyledInput
            name={name}
            placeholder={placeholder}
            type={type}
            required={required}
            pattern={pattern}
          />
          <span>{errorMessage}</span>
        </>
      )}
    </FormControl>
  );
}

export default CreateCardFormControl;
