/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { IInputValues } from '@services/form/formService';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

export const StyledInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

type IFormControlWithChildrenProps = Partial<IInputValues> & {
  isError?: Partial<FieldError> | null;
  register: UseFormRegister<FieldValues>;
};

function FormControlWithChildren(props: IFormControlWithChildrenProps): JSX.Element {
  const { type, children, name, errorMessage, isError, register } = props;

  return (
    <>
      {type === 'select' && (
        <select {...register(name || type)}>
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
        <fieldset>
          {children?.map((child) => {
            const { id: childId, name: childName, label: childLabel } = child;

            return (
              <div key={`${childId}-${type}`}>
                <label htmlFor={childName}>{childLabel}</label>
                <StyledInput
                  {...register(String(name))}
                  key={`${childId}-${type}`}
                  id={childName}
                  type={type}
                  value={childName}
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

FormControlWithChildren.defaultProps = { isError: null };

export default FormControlWithChildren;
