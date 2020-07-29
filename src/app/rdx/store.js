import { configureStore } from "@reduxjs/toolkit";

import {
  userReducer,
  requestLimitReducer,
} from "../../app/rdx";

export default configureStore({
  reducer: {
    user: userReducer,
    requestLimit: requestLimitReducer,
  },
});
