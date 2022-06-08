const initialState = {
  err: "",
  fetching: false,
  fetched: false,
  laptop: {
    title: "",
    cover: "",
    brand: "",
    cpu: "",
    gpu: "",
    ssd_memory: "",
    ram_memory: "",
    os: "",
    price: "",
  },

  allLaptops: [],
};

const laptopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_LAPTOPS_PENDING":
      return { ...state, fetched: false, fetching: true };
    case "FETCH_LAPTOPS_FULFILLED":
      return { ...state, allLaptops: payload, fetched: true, fetching: false };
    case "FETCH_LAPTOPS_REJECTED":
      return { ...state, fetched: false, fetching: false, err: payload };
    //////////////////////////////////////////////////////////////////////////////////////
    case "ADD_LAPTOP_PENDING":
      return { ...state, fetched: false, fetching: true };
    case "ADD_LAPTOP_FULLFILLED":
      return { ...state, laptop: payload, fetched: true, fetching: false };
    case "ADD_LAPTOP_REJECTED":
      return { ...state, fetched: false, fetching: false, err: payload };
    //////////////////////////////////////////////////////////////////////////////////////////////
    case "UPDATE_LAPTOP_PENDING":
      return { ...state, fetched: false, fetching: true };
    case "UPDATE_LAPTOP_FULLFILLED":
      return { ...state, laptop: payload, fetched: true, fetching: false };
    case "UPDATE_LAPTOP_REJECTED":
      return { ...state, fetched: false, fetching: false, err: payload };
    //////////////////////////////////////////////////////////////////////////////////////////////

    default:
      return state;
  }
};
export default laptopReducer;
