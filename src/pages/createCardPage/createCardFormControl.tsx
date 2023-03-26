import { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';
import FormService, { FormFields } from '@services/form/formService';
import color from '@utils/styles/stylesUtils';

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
    display: none;
  }

  input:invalid ~ span {
    display: block;
  }
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

interface ISelectChild {
  id: number;
  name: string | number;
}

interface IInputValues {
  id: number;
  label: string;
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
    label: FormService.convertNameToLabel(FormFields.TITLE),
    name: FormFields.TITLE,
    placeholder: FormFields.TITLE,
    type: 'text',
    required: true,
    pattern: '[\\w\\W]{3,}',
    errorMessage: 'required field with letters and numbers. Should contain at least 3 symbols.',
  },
  {
    id: 2,
    label: FormService.convertNameToLabel(FormFields.CHANNEL_TITLE),
    name: FormFields.CHANNEL_TITLE,
    placeholder: FormFields.CHANNEL_TITLE,
    type: 'text',
    required: true,
    pattern: '^[\\w\\W]{3,}',
    errorMessage: 'required field with letters and numbers. Should contain at least 3 symbols.',
  },
  {
    id: 3,
    label: FormService.convertNameToLabel(FormFields.IMAGE),
    name: FormFields.IMAGE,
    placeholder: FormFields.IMAGE,
    type: 'file',
    required: false,
    pattern: '',
    errorMessage: '',
  },
  {
    id: 4,
    label: FormService.convertNameToLabel(FormFields.DESCRIPTION),
    name: FormFields.DESCRIPTION,
    placeholder: FormFields.DESCRIPTION,
    type: 'text',
    required: true,
    pattern: '^[\\w\\W]{1,}',
    errorMessage: 'required',
  },
  {
    id: 5,
    label: FormService.convertNameToLabel(FormFields.TO_DO_NAME),
    name: FormFields.TO_DO_NAME,
    placeholder: FormFields.TO_DO_NAME,
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
        name: 2,
      },
    ],
  },
  {
    id: 6,
    label: FormService.convertNameToLabel(FormFields.PUBLISHED_AT),
    name: FormFields.PUBLISHED_AT,
    placeholder: FormFields.PUBLISHED_AT,
    type: 'date',
    required: true,
    pattern: '',
    errorMessage: 'required',
  },
  {
    id: 7,
    label: FormService.convertNameToLabel(FormFields.FAVORITES),
    name: FormFields.FAVORITES,
    placeholder: FormFields.FAVORITES,
    type: 'checkbox',
    required: false,
    pattern: '',
    errorMessage: '',
  },
];

interface IInputProps {
  inputProps: IInputValues;
}

function CreateCardFormControl(props: IInputProps) {
  const { inputProps } = props;
  const { id, label, name, type, placeholder, children, required, errorMessage, pattern } =
    inputProps;

  return (
    <FormControl key={id}>
      <label htmlFor={name}>{label}</label>
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
