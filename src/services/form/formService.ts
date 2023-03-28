import { ICardValues } from '@services/card/card.service';
import { HTMLInputTypeAttribute } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ICardDataOpts {
  title: string;
  channelTitle: string;
  image?: File;
  description: string;
  priority: string;
  createdAt: string;
  isFavorites: boolean;
}

export enum FormFields {
  TITLE = 'title',
  CHANNEL_TITLE = 'channelTitle',
  IMAGE = 'image',
  DESCRIPTION = 'description',
  PRIORITY = 'priority',
  PUBLISHED_AT = 'publishedAt',
  FAVORITES = 'isFavorites',
  NOTIFICATIONS = 'notifications',
  CONFIRM_DATA = 'confirmData',
  MARK_ME_AS_CREATOR = 'markMeAsCreator',
  SEND = 'send',
  DO_NOT_SEND = 'doNotSend',
}

interface ISelectChild {
  id: number;
  name: string;
  label?: string;
}
export interface IInputValues {
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

class FormService {
  static createCardData(currentForm: HTMLFormElement): ICardValues {
    const formValues = Object.fromEntries(
      new FormData(currentForm).entries()
    ) as unknown as ICardDataOpts;

    return this.createCardItemDto(formValues);
  }

  static validateData(formValue: ICardValues): Record<string, boolean> {
    return Object.keys(formValue).reduce((acc: Record<string, boolean>, fieldName) => {
      const inputParams = this.inputsArrayVocabulary.find((input) => input.name === fieldName);

      if (inputParams) {
        const { required, pattern } = inputParams;

        const fieldValue = formValue?.[fieldName as keyof ICardValues];

        const isRequiredFieldValid = !!(required && fieldValue);
        const isPatternMatch = !!(
          !pattern ||
          (pattern && fieldValue && new RegExp(pattern).test(fieldValue))
        );

        if (!(isRequiredFieldValid && isPatternMatch)) {
          acc.isDataInValid = true;
          acc[fieldName] = true;
        }
      }

      return acc;
    }, {});
  }

  static convertNameToLabel(title: string): string {
    const words = title.match(/[a-zA-Z][^A-Z]*/g) || [];

    return words.join(' ');
  }

  static createCardItemDto(opts: ICardDataOpts): ICardValues {
    const { image } = opts;
    const id = uuidv4();
    const imageUrl = image ? URL.createObjectURL(image) : '';

    return { id, imageUrl, ...opts };
  }

  static inputsArrayVocabulary: Array<IInputValues> = [
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
      type: 'select',
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
      required: false,
      pattern: '',
      errorMessage: '',
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
}

export default FormService;
