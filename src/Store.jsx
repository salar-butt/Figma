import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { singleuserdata, RegisterStudent,UpdateProfilereducer} from "./Reducer/Reducer";


const reducer = combineReducers({
    Studentdata: RegisterStudent,
    singledata:singleuserdata,
    Profileupdate:UpdateProfilereducer
  
  });

  const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
