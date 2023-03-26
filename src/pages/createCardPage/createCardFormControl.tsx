import { Component, HTMLInputTypeAttribute } from 'react';
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
  name: string;
  label?: string;
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
    required: true,
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
    label: FormService.convertNameToLabel(FormFields.PRIORITY),
    name: FormFields.PRIORITY,
    placeholder: FormFields.PRIORITY,
    type: '',
    required: true,
    pattern: '',
    errorMessage: 'required',
    children: [
      {
        id: 1,
        name: '1',
      },
      {
        id: 2,
        name: '2',
      },
      {
        id: 3,
        name: '3',
      },
      {
        id: 4,
        name: '4',
      },
      {
        id: 5,
        name: '5',
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
    label: FormService.convertNameToLabel(FormFields.NOTIFICATIONS),
    name: FormFields.NOTIFICATIONS,
    placeholder: FormFields.NOTIFICATIONS,
    type: 'radio',
    required: true,
    pattern: '',
    errorMessage: 'required',
    children: [
      {
        id: 1,
        name: FormFields.SEND,
        label: FormService.convertNameToLabel(FormFields.SEND),
      },
      {
        id: 2,
        name: FormFields.DO_NOT_SEND,
        label: FormService.convertNameToLabel(FormFields.DO_NOT_SEND),
      },
    ],
  },
  {
    id: 8,
    label: FormService.convertNameToLabel(FormFields.MARK_ME_AS_CREATOR),
    name: FormFields.MARK_ME_AS_CREATOR,
    placeholder: FormFields.MARK_ME_AS_CREATOR,
    type: 'checkbox',
    required: false,
    pattern: '',
    errorMessage: '',
  },
  {
    id: 9,
    label: FormService.convertNameToLabel(FormFields.CONFIRM_DATA),
    name: FormFields.CONFIRM_DATA,
    placeholder: FormFields.CONFIRM_DATA,
    type: 'checkbox',
    required: true,
    pattern: '',
    errorMessage: 'required',
  },
];

interface IInputProps {
  inputProps: IInputValues;
}

type IFormControlWithChildrenProps = Partial<IInputValues>;

interface IFormControlWithChildrenState {
  selectedOption: number;
}

class FormControlWithChildren extends Component<
  IFormControlWithChildrenProps,
  IFormControlWithChildrenState
> {
  constructor(props: IFormControlWithChildrenProps | Readonly<IFormControlWithChildrenProps>) {
    super(props);

    this.state = { selectedOption: 0 };
  }

  render() {
    const { type, children, name, errorMessage } = this.props;
    return (
      <>
        {type === 'select' && (
          <select name={name}>
            {children?.map((child) => {
              const { id: childId, name: childName } = child;

              return (
                <option key={childId} value={childName}>
                  {childName}
                </option>
              );
            })}
          </select>
        )}
        {type === 'radio' && (
          <fieldset name={name}>
            {children?.map((child) => {
              const { id: childId, name: childName, label: childLabel } = child;
              const { selectedOption } = this.state;
              const checked = childId === selectedOption;

              return (
                <div key={childId}>
                  <label htmlFor={childName}>{childLabel}</label>
                  <StyledInput
                    checked={checked}
                    key={childId}
                    id={childName}
                    type={type}
                    name={childName}
                    onChange={() => this.setState({ selectedOption: childId })}
                  />
                </div>
              );
            })}
          </fieldset>
        )}

        <span>{errorMessage}</span>
      </>
    );
  }
}

function CreateCardFormControl(props: IInputProps) {
  const { inputProps } = props;
  const { id, label, name, type, placeholder, children, required, errorMessage, pattern } =
    inputProps;

  return (
    <FormControl key={id}>
      <label htmlFor={name}>{label}</label>
      {children?.length ? (
        <FormControlWithChildren name={name} type={type} errorMessage={errorMessage}>
          {children}
        </FormControlWithChildren>
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
