var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { NavLink, useLocation, Outlet, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback, createElement, useRef, useEffect } from "react";
import { v4 } from "uuid";
import { createApi, fetchBaseQuery } from "s";
import fetch from "isomorphic-fetch";
import { useForm } from "react-hook-form";
const NotFoundImage = "/RSSReact2023Q1/assets/404-1731378f.png";
const StyledImage = styled.img`
  filter: grayscale();
  max-height: 80vh;
  padding-top: 2rem;
`;
function NotFoundPage() {
  return /* @__PURE__ */ jsx(StyledImage, { src: NotFoundImage, alt: "NOT FOUND PAGE" });
}
const color = (colorKey) => {
  const cssVar = colorKey.split(".").reduce((acc, key) => `${acc}-${key}`, "-");
  return `var(${cssVar})`;
};
const StyledButton = styled.button`
  max-height: 4rem;
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: ${color("neutral.button_background")};
  white-space: nowrap;
  cursor: pointer;
`;
const initialState$1 = {
  searchValue: ""
};
const searchSlice = createSlice({
  name: "search",
  initialState: initialState$1,
  reducers: {
    changeValue: (state, action) => {
      state.searchValue = action.payload;
    }
  }
});
const { changeValue } = searchSlice.actions;
searchSlice.reducer;
const useAppDispatch = useDispatch;
const useAppSelector = useSelector;
const SearchContainer = styled.form`
  flex-grow: 3;
  text-align: center;
`;
const SearchBarInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem;
`;
const SearchBarButton = styled(StyledButton)`
  color: ${color("neutral.button_text")};
`;
function SearchBar(props) {
  const { onInputSubmit } = props;
  const { searchValue } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const handleInputChange = (event) => {
    const { value } = event.target;
    dispatch(changeValue(value));
  };
  const handleOnSubmit = (event) => {
    var _a, _b;
    event.preventDefault();
    const searchText = (_b = (_a = event == null ? void 0 : event.currentTarget) == null ? void 0 : _a[0]) == null ? void 0 : _b.value;
    onInputSubmit(searchText);
  };
  return /* @__PURE__ */ jsxs(SearchContainer, { onSubmit: handleOnSubmit, children: [
    /* @__PURE__ */ jsx(SearchBarInput, { value: searchValue, name: "searchInput", onChange: handleInputChange }),
    /* @__PURE__ */ jsx(SearchBarButton, { type: "submit", children: "Search" })
  ] });
}
const NOT_AVAILABLE_TEXT = "N/A";
var FormFields = /* @__PURE__ */ ((FormFields2) => {
  FormFields2["TITLE"] = "title";
  FormFields2["CHANNEL_TITLE"] = "channelTitle";
  FormFields2["IMAGE"] = "image";
  FormFields2["DESCRIPTION"] = "description";
  FormFields2["PRIORITY"] = "priority";
  FormFields2["PUBLISHED_AT"] = "publishedAt";
  FormFields2["FAVORITES"] = "isFavorites";
  FormFields2["NOTIFICATIONS"] = "notifications";
  FormFields2["CONFIRM_DATA"] = "confirmData";
  FormFields2["MARK_ME_AS_CREATOR"] = "markMeAsCreator";
  FormFields2["SEND"] = "send";
  FormFields2["DO_NOT_SEND"] = "doNotSend";
  return FormFields2;
})(FormFields || {});
const RegExpPattern = {
  title: "[\\w\\W]{3,}",
  description: "[\\w\\W]{1,}"
};
const _FormService = class {
  static createCardData(currentForm) {
    const formValues = Object.fromEntries(
      new FormData(currentForm).entries()
    );
    return this.createCardItemDto(formValues);
  }
  static convertNameToLabel(title) {
    const words = title.match(/[a-zA-Z][^A-Z]*/g) || [];
    return words.join(" ");
  }
  static createCardItemDto(opts) {
    const { image } = opts;
    const id = v4();
    const imageUrl = (image == null ? void 0 : image.length) ? URL.createObjectURL(image == null ? void 0 : image[0]) : "";
    const optsCopy = this.removeImage(opts);
    return { id, imageUrl, ...optsCopy };
  }
  static removeImage(opts) {
    const optsCopy = structuredClone(opts);
    delete optsCopy.image;
    return optsCopy;
  }
};
let FormService = _FormService;
__publicField(FormService, "inputsArrayVocabulary", [
  {
    id: 1,
    label: _FormService.convertNameToLabel(
      "title"
      /* TITLE */
    ),
    name: "title",
    placeholder: "title",
    type: "text",
    errorMessage: "required field with letters and numbers. Should contain at least 3 symbols.",
    registerOptions: {
      required: true,
      pattern: RegExpPattern.title
    }
  },
  {
    id: 2,
    label: _FormService.convertNameToLabel(
      "channelTitle"
      /* CHANNEL_TITLE */
    ),
    name: "channelTitle",
    placeholder: "channelTitle",
    type: "text",
    registerOptions: {
      required: true,
      pattern: RegExpPattern.title
    },
    errorMessage: "required field with letters and numbers. Should contain at least 3 symbols."
  },
  {
    id: 3,
    label: _FormService.convertNameToLabel(
      "image"
      /* IMAGE */
    ),
    name: "image",
    placeholder: "image",
    type: "file",
    registerOptions: {
      required: true
    },
    errorMessage: "required"
  },
  {
    id: 4,
    label: _FormService.convertNameToLabel(
      "description"
      /* DESCRIPTION */
    ),
    name: "description",
    placeholder: "description",
    type: "text",
    registerOptions: {
      required: true,
      pattern: RegExpPattern.description
    },
    errorMessage: "required"
  },
  {
    id: 5,
    label: _FormService.convertNameToLabel(
      "priority"
      /* PRIORITY */
    ),
    name: "priority",
    placeholder: "priority",
    type: "select",
    registerOptions: {
      required: true
    },
    errorMessage: "required",
    children: [
      {
        id: 1,
        name: "1"
      },
      {
        id: 2,
        name: "2"
      },
      {
        id: 3,
        name: "3"
      },
      {
        id: 4,
        name: "4"
      },
      {
        id: 5,
        name: "5"
      }
    ]
  },
  {
    id: 6,
    label: _FormService.convertNameToLabel(
      "publishedAt"
      /* PUBLISHED_AT */
    ),
    name: "publishedAt",
    placeholder: "publishedAt",
    type: "date",
    registerOptions: {
      required: true
    },
    errorMessage: "required"
  },
  {
    id: 7,
    label: _FormService.convertNameToLabel(
      "notifications"
      /* NOTIFICATIONS */
    ),
    name: "notifications",
    placeholder: "notifications",
    type: "radio",
    registerOptions: {
      required: false
    },
    errorMessage: "",
    children: [
      {
        id: 1,
        name: "send",
        label: _FormService.convertNameToLabel(
          "send"
          /* SEND */
        )
      },
      {
        id: 2,
        name: "doNotSend",
        label: _FormService.convertNameToLabel(
          "doNotSend"
          /* DO_NOT_SEND */
        )
      }
    ]
  },
  {
    id: 8,
    label: _FormService.convertNameToLabel(
      "markMeAsCreator"
      /* MARK_ME_AS_CREATOR */
    ),
    name: "markMeAsCreator",
    placeholder: "markMeAsCreator",
    type: "checkbox",
    registerOptions: {
      required: true
    },
    errorMessage: "required"
  },
  {
    id: 9,
    label: _FormService.convertNameToLabel(
      "confirmData"
      /* CONFIRM_DATA */
    ),
    name: "confirmData",
    placeholder: "confirmData",
    type: "checkbox",
    registerOptions: {
      required: true
    },
    errorMessage: "required"
  }
]);
const rotateIcon = "/RSSReact2023Q1/assets/rotate-b8a7f0ed.svg";
const SideCardContainer = styled.div`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 15rem;
`;
const FrontSideContainer = styled(SideCardContainer)`
  transform: rotateY(0deg);
`;
const CardTitle = styled.h2`
  width: 100%;
  color: ${color("neutral.card_title")};
`;
const FrontCardTitle = styled(CardTitle)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const CardSubtitle = styled.h4`
  color: ${color("neutral.card_title")};
`;
const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-width: 320px;
    max-height: 180px;

    filter: grayscale();
  }
`;
const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardDescription$1 = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const CardDate = styled.div``;
function FrontCardSide(props) {
  const { title, channelTitle, imageUrl, description, publishedAt, videoId, onRotate, onGetInfo } = props;
  return /* @__PURE__ */ jsxs(FrontSideContainer, { children: [
    /* @__PURE__ */ jsx(StyledButton, { onClick: onRotate, children: /* @__PURE__ */ jsx("img", { src: rotateIcon, alt: "rotate" }) }),
    /* @__PURE__ */ jsx(FrontCardTitle, { title, children: title }),
    /* @__PURE__ */ jsxs(CardSubtitle, { title: channelTitle, children: [
      "by: ",
      channelTitle
    ] }),
    /* @__PURE__ */ jsx(ImageWrapper, { children: /* @__PURE__ */ jsx("img", { src: imageUrl, alt: title }) }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(CardDescription$1, { title: description, children: description }),
      /* @__PURE__ */ jsx(CardDate, { children: publishedAt })
    ] }),
    videoId && /* @__PURE__ */ jsx(StyledButton, { type: "button", onClick: onGetInfo, children: "show more info" })
  ] });
}
FrontCardSide.defaultProps = {
  title: NOT_AVAILABLE_TEXT,
  channelTitle: NOT_AVAILABLE_TEXT,
  imageUrl: NOT_AVAILABLE_TEXT,
  description: NOT_AVAILABLE_TEXT,
  publishedAt: NOT_AVAILABLE_TEXT
};
const BackSideContainer = styled(SideCardContainer)`
  transform: rotateY(180deg);
`;
const CardDescription = styled.p`
  width: 100%;
`;
function BackCardSide(props) {
  const { title, description, priority, markMeAsCreator, notifications, confirmData, onRotate } = props;
  return /* @__PURE__ */ jsxs(BackSideContainer, { children: [
    /* @__PURE__ */ jsx(StyledButton, { onClick: onRotate, children: /* @__PURE__ */ jsx("img", { src: rotateIcon, alt: "rotate" }) }),
    /* @__PURE__ */ jsx(CardTitle, { children: title }),
    /* @__PURE__ */ jsx(CardDescription, { children: description }),
    priority && /* @__PURE__ */ jsxs("p", { children: [
      "Priority: ",
      priority
    ] }),
    notifications === FormFields.SEND && /* @__PURE__ */ jsx("p", { children: "Send notifications to me" }),
    notifications === FormFields.DO_NOT_SEND && /* @__PURE__ */ jsx("p", { children: "Don't send to me notifications" }),
    markMeAsCreator && /* @__PURE__ */ jsx("p", { children: "I've marked as creator" }),
    confirmData && /* @__PURE__ */ jsx("p", { children: "Data confirmed by me" })
  ] });
}
BackCardSide.defaultProps = {
  title: NOT_AVAILABLE_TEXT,
  description: NOT_AVAILABLE_TEXT
};
const CardContainer$1 = styled.div`
  position: relative;
  width: 20rem;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  border: 0.2rem solid ${color("neutral.card_title")};
  border-radius: 1rem;
  user-select: none;
  transform-style: preserve-3d;
  transform: rotateY(${(props) => props.isFrontShown ? "0deg" : "180deg"});
  transition: 300ms;
  background-color: ${color("neutral.card_background")};
  box-shadow: 5px ${color("neutral.shadow")};
`;
function Card(props) {
  const {
    videoId,
    title,
    channelTitle,
    imageUrl,
    description,
    publishedAt,
    priority,
    markMeAsCreator,
    confirmData,
    notifications,
    onGetInfo
  } = props;
  const [isFrontShown, setIsFrontShown] = useState(true);
  const handleRotate = useCallback(() => {
    setIsFrontShown((prev) => !prev);
  }, []);
  const handleGetInfo = useCallback(() => {
    if (onGetInfo && videoId) {
      onGetInfo(videoId);
    }
  }, [onGetInfo, videoId]);
  return /* @__PURE__ */ jsxs(CardContainer$1, { isFrontShown, children: [
    /* @__PURE__ */ jsx(
      FrontCardSide,
      {
        videoId,
        title,
        description,
        imageUrl,
        publishedAt,
        channelTitle,
        onRotate: handleRotate,
        onGetInfo: handleGetInfo
      }
    ),
    /* @__PURE__ */ jsx(
      BackCardSide,
      {
        title,
        description,
        priority,
        markMeAsCreator,
        confirmData,
        notifications,
        onRotate: handleRotate
      }
    )
  ] });
}
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color("neutral.overlay")};
  opacity: 0.5;
  z-index: 10;
`;
const CardModalContainer = styled.div`
  position: fixed;
  width: 80vw;
  height: 90vh;
  top: 5vh;
  background-color: ${color("neutral.card_background")};
  border-radius: 1rem;
  overflow: hidden;
  padding: 2vh;
  z-index: 20;
`;
const CountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const TagsContainer = styled.div`
  display: flex;
  width: 80vw;
`;
function CardModal(props) {
  const {
    title,
    channelTitle,
    imageUrl,
    description,
    publishedAt,
    viewCount,
    likeCount,
    favoriteCount,
    commentCount,
    tags,
    onClose
  } = props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Overlay, { onClick: onClose }),
    /* @__PURE__ */ jsxs(CardModalContainer, { children: [
      /* @__PURE__ */ jsx(StyledButton, { type: "button", onClick: onClose, children: "X" }),
      /* @__PURE__ */ jsx("p", { children: title }),
      /* @__PURE__ */ jsx("p", { children: channelTitle }),
      /* @__PURE__ */ jsx("img", { src: imageUrl, alt: title }),
      /* @__PURE__ */ jsx("p", { children: description }),
      /* @__PURE__ */ jsx("p", { children: publishedAt }),
      /* @__PURE__ */ jsxs(CountContainer, { children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Wievs: ",
          viewCount
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Likes: ",
          likeCount
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Favorites: ",
          favoriteCount
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Comments: ",
          commentCount
        ] })
      ] }),
      /* @__PURE__ */ jsx(TagsContainer, { children: Array.isArray(tags) && tags.length > 0 && tags.map((tag) => /* @__PURE__ */ jsxs("span", { children: [
        "#",
        tag
      ] }, tag)) })
    ] })
  ] });
}
const Center = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wave = styled.div`
  width: 5px;
  height: 20px;
  background: linear-gradient(
    45deg,
    ${color("primary.wave_animation_start")},
    ${color("primary.wave_animation_end")}
  );
  margin: 10px;
  animation: wave 1s linear infinite;
  border-radius: 20px;
  animation-delay: ${(props) => props.delay}s;

  @keyframes wave {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
const DEFAULT_WAVES_NUMBER = 10;
function WaveAnimation({ wavesNumber = DEFAULT_WAVES_NUMBER }) {
  return /* @__PURE__ */ jsx(Center, { children: Array.from({ length: wavesNumber }, (_, i) => /* @__PURE__ */ jsx(Wave, { delay: i / wavesNumber }, i)) });
}
WaveAnimation.defaultProps = {
  wavesNumber: DEFAULT_WAVES_NUMBER
};
var ApiPath = /* @__PURE__ */ ((ApiPath2) => {
  ApiPath2["SEARCH"] = "search";
  ApiPath2["VIDEOS"] = "videos";
  return ApiPath2;
})(ApiPath || {});
const searchValueApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3/",
    fetchFn: fetch
  }),
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (searchValue) => `${ApiPath.SEARCH}?key=${"AIzaSyA140IZ_dECq0JYl4j0eF7Z_bBzBgf6UVA"}&type=video&part=snippet&maxResults=20&q=${searchValue}`
    }),
    getAdditionalInfoById: builder.query({
      query: (searchId) => `${ApiPath.VIDEOS}?key=${"AIzaSyA140IZ_dECq0JYl4j0eF7Z_bBzBgf6UVA"}&id=${searchId}&&part=snippet,statistics`
    })
  })
});
const { useGetSearchResultsQuery, useGetAdditionalInfoByIdQuery } = searchValueApi;
class CardService {
  static formatCardsData(data = []) {
    return data == null ? void 0 : data.map((item) => this.formatCardData(item));
  }
  static formatCardData(item) {
    var _a, _b;
    const { snippet, statistics } = item;
    const { title, description, channelTitle, publishedAt, thumbnails, tags } = snippet || {};
    const imageUrl = ((_a = thumbnails == null ? void 0 : thumbnails.medium) == null ? void 0 : _a.url) || "";
    const videoId = (_b = item == null ? void 0 : item.id) == null ? void 0 : _b.videoId;
    const id = videoId || `${title}_${channelTitle}`;
    const { viewCount, likeCount, favoriteCount, commentCount } = statistics || {};
    return {
      id,
      videoId,
      title,
      channelTitle,
      imageUrl,
      description,
      publishedAt,
      viewCount,
      likeCount,
      favoriteCount,
      commentCount,
      tags
    };
  }
}
const CardContainer = styled.div`
  background-color: ${color("neutral.background")};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
function CardsList({ formattedCards, isLoading }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skip, setSkip] = useState(true);
  const [activeVideoId, setActiveVideoId] = useState("");
  const { data, isFetching } = useGetAdditionalInfoByIdQuery(activeVideoId, {
    skip
  });
  const additionalInfoArray = CardService.formatCardsData(data == null ? void 0 : data.items);
  const additionalInfo = additionalInfoArray == null ? void 0 : additionalInfoArray[0];
  const handleGetInfo = useCallback((id) => {
    setActiveVideoId(id);
    setSkip(false);
    setIsModalOpen(true);
  }, []);
  const handleCLoseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    (isFetching || isLoading) && /* @__PURE__ */ jsx(WaveAnimation, {}),
    /* @__PURE__ */ jsxs(CardContainer, { children: [
      isModalOpen && /* @__PURE__ */ jsx(
        CardModal,
        {
          title: additionalInfo == null ? void 0 : additionalInfo.title,
          channelTitle: additionalInfo == null ? void 0 : additionalInfo.channelTitle,
          description: additionalInfo == null ? void 0 : additionalInfo.description,
          imageUrl: additionalInfo == null ? void 0 : additionalInfo.imageUrl,
          publishedAt: additionalInfo == null ? void 0 : additionalInfo.publishedAt,
          viewCount: additionalInfo == null ? void 0 : additionalInfo.viewCount,
          likeCount: additionalInfo == null ? void 0 : additionalInfo.likeCount,
          favoriteCount: additionalInfo == null ? void 0 : additionalInfo.favoriteCount,
          commentCount: additionalInfo == null ? void 0 : additionalInfo.commentCount,
          tags: additionalInfo == null ? void 0 : additionalInfo.tags,
          onClose: handleCLoseModal
        }
      ),
      formattedCards == null ? void 0 : formattedCards.map((cardValues) => {
        const {
          id,
          videoId,
          title,
          description,
          imageUrl,
          publishedAt,
          channelTitle,
          priority,
          markMeAsCreator,
          confirmData,
          notifications
        } = cardValues;
        return /* @__PURE__ */ jsx(
          Card,
          {
            videoId,
            title,
            description,
            imageUrl,
            publishedAt,
            channelTitle,
            priority,
            markMeAsCreator,
            confirmData,
            notifications,
            onGetInfo: handleGetInfo
          },
          id
        );
      })
    ] })
  ] });
}
CardsList.defaultProps = {
  isLoading: false
};
function MainPage() {
  const { searchValue: storeSearchValue } = useAppSelector((state) => state.search);
  const [searchTerm, setSearchTerm] = useState(storeSearchValue);
  const { data, isError, isFetching } = useGetSearchResultsQuery(searchTerm);
  const formattedCards = CardService.formatCardsData(data == null ? void 0 : data.items);
  const handleOnInputSubmit = useCallback((searchValue) => {
    setSearchTerm(searchValue);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SearchBar, { onInputSubmit: handleOnInputSubmit }),
    isError && /* @__PURE__ */ jsx("h2", { children: "Please, wait few hours before free api key search request qouta will be updated" }),
    /* @__PURE__ */ jsx(CardsList, { formattedCards, isLoading: isFetching })
  ] });
}
const GitHubLogo = "/RSSReact2023Q1/assets/github-7a0dd11e.svg";
const LinkedInLogo = "/RSSReact2023Q1/assets/linkedin-a16c2fd9.svg";
const PageContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
function AboutUsPage() {
  return /* @__PURE__ */ jsx(PageContainer, { children: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { children: "Developed by: " }),
    /* @__PURE__ */ jsx("p", { children: "Anatoliy Aliaksandrau - Front End React Developer" }),
    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/AnAtoliyAK", children: /* @__PURE__ */ jsx("img", { src: GitHubLogo, alt: "GitHub Logo", title: "Anantoliy Aliaksandrau Github" }) }) }),
    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/anatoliy-aliaksandrau/", children: /* @__PURE__ */ jsx("img", { src: LinkedInLogo, alt: "LinkedIn Logo", title: "Anantoliy Aliaksandrau LinkedIn" }) }) }),
    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "https://rs.school/", children: "© RSSchool 2023" }) })
  ] }) });
}
const baseUrl = "/myApp/";
const HOME_PATH = `${baseUrl}`;
const ABOUT_PATH = `${baseUrl}about`;
const CREATE_CARDS_PATH = `${baseUrl}create-cards`;
const NOT_FOUND_PATH = "*";
const BASE_PATH = "/";
const APP_PATHS = {
  BASE: BASE_PATH,
  HOME: HOME_PATH,
  ABOUT: ABOUT_PATH,
  NOT_FOUND: NOT_FOUND_PATH,
  CREATE_CARDS: CREATE_CARDS_PATH
};
const StyledNavLink = styled(StyledButton)`
  .active {
    color: ${color("danger.text")};
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: capitalize;

    &::before {
      content: '• ';
    }
  }

  .unselected {
    color: ${color("info.text")};

    &:hover {
      font-size: 1.2rem;
    }
  }
`;
function CustomNavLink(props) {
  const { to, children } = props;
  return /* @__PURE__ */ jsx(StyledNavLink, { children: /* @__PURE__ */ jsx(
    NavLink,
    {
      to,
      className: ({ isActive }) => `nav-link ${isActive ? "active" : "unselected"}`,
      children
    }
  ) });
}
const PageTitle$1 = styled.h1`
  color: ${color("neutral.title")};
  text-align: center;
  flex-grow: 1;

  @media (min-width: 796px) {
    margin-left: 15rem;
  }
`;
function ShowLocation() {
  const location = useLocation();
  const { pathname } = location;
  switch (pathname) {
    case APP_PATHS.HOME:
      return /* @__PURE__ */ jsx(PageTitle$1, { children: "MAIN PAGE" });
    case APP_PATHS.ABOUT:
      return /* @__PURE__ */ jsx(PageTitle$1, { children: "ABOUT PAGE" });
    case APP_PATHS.CREATE_CARDS:
      return /* @__PURE__ */ jsx(PageTitle$1, { children: "NEW CARD PAGE" });
    default:
      return /* @__PURE__ */ jsx(PageTitle$1, { children: "NOT FOUND PAGE" });
  }
}
const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  min-height: 8vh;
  flex-wrap: wrap;
  justify-content: flex-end;
  border-bottom: 2px solid ${color("neutral.card_title")};
`;
const NavContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-around;
`;
function Header() {
  return /* @__PURE__ */ jsxs(HeaderStyles, { children: [
    /* @__PURE__ */ jsx(ShowLocation, {}),
    /* @__PURE__ */ jsxs(NavContainer, { children: [
      /* @__PURE__ */ jsx(CustomNavLink, { to: APP_PATHS.HOME, children: "Home" }),
      /* @__PURE__ */ jsx(CustomNavLink, { to: APP_PATHS.CREATE_CARDS, children: "New card" }),
      /* @__PURE__ */ jsx(CustomNavLink, { to: APP_PATHS.ABOUT, children: "About" })
    ] })
  ] });
}
const StyledLayout = styled.div`
  text-align: center;
`;
function Layout() {
  return /* @__PURE__ */ jsxs(StyledLayout, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const initialState = {
  formattedCards: []
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.formattedCards.push(action.payload);
    }
  }
});
const { addCard } = formSlice.actions;
formSlice.reducer;
const StyledInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem;
`;
function FormControlWithChildren(props) {
  const { type, children, name, errorMessage, isError, register } = props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    type === "select" && /* @__PURE__ */ jsx("select", { ...register(name || type), children: children == null ? void 0 : children.map((child) => {
      const { id: childId, name: childName } = child;
      return /* @__PURE__ */ jsx("option", { value: childName, children: childName }, childId);
    }) }),
    type === "radio" && /* @__PURE__ */ jsx("fieldset", { children: children == null ? void 0 : children.map((child) => {
      const { id: childId, name: childName, label: childLabel } = child;
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: childName, children: childLabel }),
        /* @__PURE__ */ createElement(
          StyledInput,
          {
            ...register(String(name)),
            key: `${childId}-${type}`,
            id: childName,
            type,
            value: childName
          }
        )
      ] }, `${childId}-${type}`);
    }) }),
    isError && /* @__PURE__ */ jsx("span", { children: errorMessage })
  ] });
}
FormControlWithChildren.defaultProps = { isError: null };
const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    text-transform: capitalize;
    font-size: 1.5rem;
  }

  span {
    color: ${color("danger.text")};
  }
`;
function CustomFormControl(props) {
  const { inputProps, isError, register } = props;
  const { id, label, name, type, placeholder, children, errorMessage } = inputProps;
  return /* @__PURE__ */ jsxs(FormControl, { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, children: label }),
    (children == null ? void 0 : children.length) ? /* @__PURE__ */ jsx(
      FormControlWithChildren,
      {
        type,
        errorMessage,
        isError,
        name,
        register,
        children
      }
    ) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        StyledInput,
        {
          placeholder,
          type,
          ...register(name, { required: true })
        }
      ),
      isError && /* @__PURE__ */ jsx("span", { children: errorMessage })
    ] })
  ] }, id);
}
CustomFormControl.defaultProps = { isError: null };
const CreteForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 450px;
`;
const CreateMessage = styled.p`
  font-size: 2rem;
  color: ${color("success.text")};
`;
const SubmitForm = styled(StyledButton)``;
const DEFAULT_MESSAGE_TIME = 2 * 1e3;
function CustomForm() {
  const [isCardCreated, setIsCardCreated] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit"
  });
  const timerRef = useRef();
  useEffect(() => {
    return () => {
      if (timerRef == null ? void 0 : timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  const onSubmit = (formData) => {
    const newCardData = FormService.createCardItemDto(formData);
    dispatch(addCard(newCardData));
    setIsCardCreated(true);
    timerRef.current = setTimeout(() => {
      setIsCardCreated(false);
      reset();
    }, DEFAULT_MESSAGE_TIME);
  };
  return /* @__PURE__ */ jsxs(CreteForm, { onSubmit: handleSubmit(onSubmit), children: [
    FormService.inputsArrayVocabulary.map((inputProps) => {
      const { id, name } = inputProps;
      return /* @__PURE__ */ jsx(
        CustomFormControl,
        {
          inputProps,
          register,
          isError: errors[name]
        },
        id
      );
    }),
    isCardCreated ? /* @__PURE__ */ jsx(CreateMessage, { children: "Created!" }) : /* @__PURE__ */ jsx(SubmitForm, { children: "Submit" })
  ] });
}
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: calc(100vh - 15vh - 2px);
`;
const PageTitle = styled.h2``;
function NewCardPage() {
  const { formattedCards } = useAppSelector((state) => state.form);
  return /* @__PURE__ */ jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsx(PageTitle, { children: "Create new card" }),
    /* @__PURE__ */ jsx(CustomForm, {}),
    /* @__PURE__ */ jsx(CardsList, { formattedCards })
  ] });
}
function Router() {
  return /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { path: APP_PATHS.BASE, element: /* @__PURE__ */ jsx(Layout, {}), children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(NotFoundPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: APP_PATHS.HOME, element: /* @__PURE__ */ jsx(MainPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: APP_PATHS.ABOUT, element: /* @__PURE__ */ jsx(AboutUsPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: APP_PATHS.CREATE_CARDS, element: /* @__PURE__ */ jsx(NewCardPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: APP_PATHS.NOT_FOUND, element: /* @__PURE__ */ jsx(NotFoundPage, {}) })
  ] }) });
}
const render = ({ path }) => {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: path, children: /* @__PURE__ */ jsx(Router, {}) })
  );
};
export {
  render
};
//# sourceMappingURL=entry-server.js.map
