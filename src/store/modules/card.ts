import { createAction, handleActions } from "redux-actions";

//Actions
const ADD_CARD = "card/ADD_CARD" as const;
const REMOVE_CARD = "card/REMOVE_CARD" as const;

//Reducers
export const addCard = createAction(ADD_CARD);
export const removeCard = createAction(REMOVE_CARD);

/////////////////////////////////////////////////////////
export type Card = {
  no: number;
  type: string;
  title: string;
  body: string;
};

export interface ICardState {
  no: number;
  data: Card[];
}

// type CardPayload = ReturnType<typeof addCard>;

const initialState: ICardState = {
  no: 6,
  data: [
    { no: 1, type: "note", title: "test1", body: "test" },
    { no: 2, type: "task", title: "test1", body: "test" },
    {
      no: 3,
      type: "video",
      title: "test2",
      body: "https://www.youtube.com/embed/28-1zR6Xaek",
    },
    {
      no: 4,
      type: "image",
      title: "IMAGE2",
      body: "http://placehold.it/400x200/efa/aae&text=placehold.it",
    },
    {
      no: 5,
      type: "image",
      title: "IMAGE1",
      body: "http://placehold.it/400x200/efa/aae&text=placehold.it",
    },
  ],
};

export default handleActions<ICardState, any>(
  {
    [ADD_CARD]: (state, { payload: { type, title, body } }) => ({
      ...state,
      data: state.data.concat({ no: state.no, type, title, body }),
      no: state.no + 1,
    }),
    [REMOVE_CARD]: (state, { payload: no }) => ({
      ...state,
      data: state.data.filter((card) => card.no !== no),
    }),
  },
  initialState
);
