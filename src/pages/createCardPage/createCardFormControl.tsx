import { Component } from 'react';
import styled from 'styled-components';
import { IInputValues } from '@services/form/formService';
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
  }
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

interface IInputProps {
  inputProps: IInputValues;
  isError: boolean;
}

type IFormControlWithChildrenProps = Partial<IInputValues> & { isError: boolean };

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
    const { type, children, name, errorMessage, isError } = this.props;
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

        {isError && <span>{errorMessage}</span>}
      </>
    );
  }
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
