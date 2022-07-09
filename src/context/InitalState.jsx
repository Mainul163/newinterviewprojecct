import { fetchUser } from "../utils/FetchLocalStoreageData";

const user = fetchUser();
export const initialState = {
  user: user,
};
