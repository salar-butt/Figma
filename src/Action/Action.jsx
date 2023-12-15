import axios from "axios";

export const RegisterStudent = (studentObject) => async (dispatch) => {
  try {
    dispatch({ type: "STUDENT_REGISTER_REQUEST", payload: "Loading..." });

    const { data } = await axios.post(
      "https://json-api-xrl5.onrender.com/data",
      studentObject
    );

    dispatch({ type: "STUDENT_REGISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "STUDENT_REGISTER_FAIL",
      payload: error.response.data || error.message,
    });
  }
};

export const singleuserdata = (id) => async (dispatch) => {
  try {
    dispatch({ type: "SINGLE_USER_REQUEST" });

    const { data } = await axios.get(`https://json-api-xrl5.onrender.com/data/${id}`);

    dispatch({ type: "SINGLE_USER_SUCCES", payload: data });
  } catch (error) {
    dispatch({
      type: "SINGLE_USER_FAIL",
      payload: error.message,
    });
  }
};

export const gettingStudent = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "GETTING_DATA_REQUEST", payload: "Loading..." });

    const { data } = await axios.get("https://json-api-xrl5.onrender.com/data");

    const user = data.find(
      (user) => user.Email === email && user.Password === password
    );
    if (user) {
      console.log(user, "hiiiiiiii");
      dispatch({ type: "GETTING_DATA_SUCCESS", payload: user });
      localStorage.setItem("user", JSON.stringify(user));
    } else {
    }
  } catch (error) {
    dispatch({
      type: "GETTING_DATA_FAIL",
      payload: error.message,
    });
  }
};

export const basicdataaction = (object) => async (dispatch) => {
  console.log(object, "object");

  try {
    dispatch({ type: "ADDING_DATA_REQUEST", payload: "Loading..." });

    const { data } = await axios.put(`https://json-api-xrl5.onrender.com/data/${object.id}`,object);
    dispatch({ type: "ADDING_DATA_SUCCESS", payload: data });
      localStorage.setItem("user", JSON.stringify(object));
  } catch (error) {
    dispatch({
      type: "ADDING_DATA_FAIL",
      payload: error.message,
    });
  }
};

export const addProfileInfo = (id, object) => async (dispatch) => {

  try {
    dispatch({ type: "UPDATE_PROFILE_REQUEST", payload: "Loading..." });

    const { data } = await axios.patch(`https://json-api-xrl5.onrender.com/data/${id}`,object);
    console.log(data,"data")
    dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: data });
  }
   catch (error) {
    dispatch({
      type: "UPDATE_PROFILE_FAIL",
      payload: error.message,
    });
  }
};
