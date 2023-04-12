import { ICardValues } from '@services/card/card.service';
import { HTMLInputTypeAttribute } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface ICardDataOpts {
  title: string;
  channelTitle: string;
  image?: FileList;
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

export interface IRegisterOptions {
  pattern?: string;
  required: boolean;
}
export interface IInputValues {
  id: number;
  label: string;
  name: FormFields;
  placeholder: FormFields;
  type: HTMLInputTypeAttribute;
  errorMessage: string;
  children?: Array<ISelectChild>;
  registerOptions?: IRegisterOptions;
}

export const RegExpPattern = {
  title: '[\\w\\W]{3,}',
  description: '[\\w\\W]{1,}',
};

class FormService {
  static createCardData(currentForm: HTMLFormElement): ICardValues {
    const formValues = Object.fromEntries(
      new FormData(currentForm).entries()
    ) as unknown as ICardDataOpts;

    return this.createCardItemDto(formValues);
  }

  static convertNameToLabel(title: string): string {
    const words = title.match(/[a-zA-Z][^A-Z]*/g) || [];

    return words.join(' ');
  }

  static createCardItemDto(opts: ICardDataOpts): ICardValues {
    const { image } = opts;
    const id = uuidv4();
    const imageUrl = image?.length ? URL.createObjectURL(image?.[0]) : '';

    return { id, imageUrl, ...opts };
  }

  static inputsArrayVocabulary: Readonly<Array<IInputValues>> = [
    {
      id: 1,
      label: FormService.convertNameToLabel(FormFields.TITLE),
      name: FormFields.TITLE,
      placeholder: FormFields.TITLE,
      type: 'text',
      errorMessage: 'required field with letters and numbers. Should contain at least 3 symbols.',
      registerOptions: {
        required: true,
        pattern: RegExpPattern.title,
      },
    },
    {
      id: 2,
      label: FormService.convertNameToLabel(FormFields.CHANNEL_TITLE),
      name: FormFields.CHANNEL_TITLE,
      placeholder: FormFields.CHANNEL_TITLE,
      type: 'text',
      registerOptions: {
        required: true,
        pattern: RegExpPattern.title,
      },
      errorMessage: 'required field with letters and numbers. Should contain at least 3 symbols.',
    },
    {
      id: 3,
      label: FormService.convertNameToLabel(FormFields.IMAGE),
      name: FormFields.IMAGE,
      placeholder: FormFields.IMAGE,
      type: 'file',
      registerOptions: {
        required: true,
      },
      errorMessage: 'required',
    },
    {
      id: 4,
      label: FormService.convertNameToLabel(FormFields.DESCRIPTION),
      name: FormFields.DESCRIPTION,
      placeholder: FormFields.DESCRIPTION,
      type: 'text',
      registerOptions: {
        required: true,
        pattern: RegExpPattern.description,
      },
      errorMessage: 'required',
    },
    {
      id: 5,
      label: FormService.convertNameToLabel(FormFields.PRIORITY),
      name: FormFields.PRIORITY,
      placeholder: FormFields.PRIORITY,
      type: 'select',
      registerOptions: {
        required: true,
      },
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
      registerOptions: {
        required: true,
      },
      errorMessage: 'required',
    },
    {
      id: 7,
      label: FormService.convertNameToLabel(FormFields.NOTIFICATIONS),
      name: FormFields.NOTIFICATIONS,
      placeholder: FormFields.NOTIFICATIONS,
      type: 'radio',
      registerOptions: {
        required: false,
      },
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
      registerOptions: {
        required: true,
      },
      errorMessage: 'required',
    },
    {
      id: 9,
      label: FormService.convertNameToLabel(FormFields.CONFIRM_DATA),
      name: FormFields.CONFIRM_DATA,
      placeholder: FormFields.CONFIRM_DATA,
      type: 'checkbox',
      registerOptions: {
        required: true,
      },
      errorMessage: 'required',
    },
  ];
}

export default FormService;
