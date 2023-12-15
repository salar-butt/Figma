const initialState = {
    data: [],
  };
  
  export const RegisterStudent = (state = initialState, action) => {
    switch (action.type) {
      case "STUDENT_REGISTER_REQUEST":
        return {
          loading: true,
        };
  
      case "STUDENT_REGISTER_SUCCESS":
        return {
          ...state,
          Student: action.payload,
        };
      case "STUDENT_REGISTER_FAIL":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };



  export const singleuserdata = (state = { singleuser:{} }, action) => {
    switch (action.type) {
      case "SINGLE_USER_REQUEST":
        return {
          loading: true,
        };
  
      case "SINGLE_USER_SUCCES":
        return {
          ...state,
          loading:false,
          singleuser: action.payload,
        };
      case "SINGLE_USER_FAIL":
        return {
          ...state,
          loading:false,
          error: action.payload,
        };
      default:
        return state;
    }
  };




  export const loginreducer = (state={user:{}}, action) => {
    switch (action.type) {
      case "GETTING_DATA_REQUEST":
        return {
          loading: true,
        };
  
      case "GETTING_DATA_SUCCESS":
        return {
          loading:false,
          ...state,
          user: action.payload,
        };
      case "GETTING_DATA_FAIL":
        return {
          loading:false,
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };


  
  export const UpdateProfilereducer = (state = { profile:{} }, action) => {
    switch (action.type) {
      case "UPDATE_PROFILE_REQUEST":
        return {
          loading: true,
        };
  
      case "UPDATE_PROFILE_SUCCESS":
        return {
          ...state,
          loading:false,
          singleuser: action.payload,
        };
      case "UPDATE_PROFILE_FAIL":
        return {
          ...state,
          loading:false,
          error: action.payload,
        };
      default:
        return state;
    }
  };




  // export const AddingData = (state={basicinfo:{}}, action) => {
  //   switch (action.type) {
  //     case "ADDING_DATA_REQUEST":
  //       return {
  //         loading: true,
  //       };
  
  //     case "ADDING_DATA_SUCCESS":
  //       return {
  //         loading:false,
  //         ...state,
  //         user: action.payload,
  //       };
  //     case "ADDING_DATA_FAIL":
  //       return {
  //         loading:false,
  //         ...state,
  //         error: action.payload,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  
