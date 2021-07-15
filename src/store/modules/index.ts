import { combineReducers } from "redux";
import card, { ICardState } from "./card";

const rootReducer = combineReducers({
  card,
});

// 스토어의 상태 타입 정의
export interface IStoreState {
  card: ICardState;
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
