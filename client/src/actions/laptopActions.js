import * as api from "../api/api";
///////////// showLaptops///////////////////////////////////////////////////
export const showLaptops = () => async (dispatch) => {
  try {
    dispatch({
      type: "FETCH_LAPTOPS_PENDING",
    });
    const response = await api.getLaptops();

    dispatch({
      type: "FETCH_LAPTOPS_FULFILLED",
      payload: response.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: "FETCH_LAPTOPS_REJECTED",
      payload: err.message,
    });
  }
};

///////////////////////addLaptop/////////////////////////////////////////////////////
export const addLaptop = (laptop) => async (dispatch) => {
  try {
    dispatch({type: "ADD_LAPTOP_PENDING" })

    const response = await api.postLaptop(laptop);

    dispatch({
      type: "ADD_LAPTOP_FULLFILLED",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
        type: "ADD_LAPTOP_REJECTED",
        payload: err.message,
      });
  }
};
//////////////////////////////////updateLaptop//////////////////////////////////////////
export const updateLaptop = (id) => async (dispatch) => {
  try {
    const response = await api.putLaptop(id);

    dispatch({
      type: "UPDATE_LAPTOP",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
