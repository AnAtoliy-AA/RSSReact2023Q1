import { ICardValues } from '@services/card/card.service';
import { v4 as uuidv4 } from 'uuid';

interface ICardDataOpts {
  title: string;
  channelTitle: string;
  image?: File;
  description: string;
  todoName: string;
  createdAt: string;
  isFavorites: string;
}

enum FormFields {
  TITLE,
  CHANNEL_TITLE,
  IMAGE,
  DESCRIPTION,
  TO_DO_NAME,
  CREATED_AT,
  FAVORITES,
}

enum FormFileFields {
  FIRST,
}

class FormService {
  static createCardData(currentForm: HTMLFormElement): ICardValues {
    const formValues = this.getCardFormData(currentForm);

    return this.createCardItemDto(formValues);
  }

  private static getCardFormData(currentForm: HTMLFormElement) {
    const title = (currentForm?.[FormFields.TITLE] as HTMLInputElement)?.value;
    const channelTitle = (currentForm?.[FormFields.CHANNEL_TITLE] as HTMLInputElement)?.value;
    const image = (currentForm?.[FormFields.IMAGE] as HTMLInputElement)?.files?.[
      FormFileFields.FIRST
    ];
    const description = (currentForm?.[FormFields.DESCRIPTION] as HTMLInputElement)?.value;
    const todoName = (currentForm?.[FormFields.TO_DO_NAME] as HTMLSelectElement)?.value;
    const createdAt = (currentForm?.[FormFields.CREATED_AT] as HTMLInputElement)?.value;
    const isFavorites = (currentForm?.[FormFields.CREATED_AT] as HTMLInputElement)?.value;

    return {
      title,
      channelTitle,
      image,
      description,
      todoName,
      createdAt,
      isFavorites,
    };
  }

  private static createCardItemDto(opts: ICardDataOpts): ICardValues {
    const { image } = opts;
    const id = uuidv4();
    const imageUrl = image ? URL.createObjectURL(image) : '';

    return { id, imageUrl, ...opts };
  }
}

export default FormService;
