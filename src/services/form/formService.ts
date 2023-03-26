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

export enum FormFields {
  TITLE = 'title',
  CHANNEL_TITLE = 'channelTitle',
  IMAGE = 'image',
  DESCRIPTION = 'description',
  TO_DO_NAME = 'todoName',
  PUBLISHED_AT = 'publishedAt',
  FAVORITES = 'isFavorites',
}

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

  private static createCardItemDto(opts: ICardDataOpts): ICardValues {
    const { image } = opts;
    const id = uuidv4();
    const imageUrl = image ? URL.createObjectURL(image) : '';

    return { id, imageUrl, ...opts };
  }
}

export default FormService;
