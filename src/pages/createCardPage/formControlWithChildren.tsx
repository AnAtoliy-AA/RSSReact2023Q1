import { ForwardedRef, forwardRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import { IInputValues } from '@services/form/formService';
import { FieldError } from 'react-hook-form';

export const StyledInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

type IFormControlWithChildrenProps = Partial<IInputValues> & {
  isError?: Partial<FieldError> | null;
};

const FormControlWithChildren = forwardRef(
  (props: IFormControlWithChildrenProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const { type, children, name, errorMessage, isError } = props;

    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleInputChange = useCallback(
      (childId: number) => () => {
        setSelectedOption(childId);
      },
      []
    );

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
                    ref={ref}
                    onChange={handleInputChange(childId)}
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
);

FormControlWithChildren.defaultProps = { isError: null };

export default FormControlWithChildren;
