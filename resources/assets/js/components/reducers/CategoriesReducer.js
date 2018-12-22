const INITIAL_STATE = {
  data: {
    categories: [],
    activePage: 1,
    itemsCountPerPage: 1,
    totalItemsCount: 1,
    pageRangeDisplayed: 3
  },
  category_name: "",
  category_status: "",
  messages: {},
  showError: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        ...state,
        data: {
          ...state.data,
          categories: action.payload.categories,
          activePage: action.payload.activePage,
          itemsCountPerPage: action.payload.itemsCountPerPage,
          totalItemsCount: action.payload.totalItemsCount,
          pageRangeDisplayed: action.payload.pageRangeDisplayed
        }
      };
    case "changeCategories":
      return {
        ...state,
        data: {
          ...state.data,
          categories: action.payload
        }
      };
      break;
    case "addCategory":
      return {
        ...state,
        category_name: action.payload.category_name,
        messages: action.payload.messages,
        showError: action.payload.showError
      };
      break;
    case "editCategory":
      return {
        ...state,
        category_name: action.payload.category_name,
        category_status: action.payload.category_status,
        messages: action.payload.messages,
        showError: action.payload.showError
      };
      break;
    case "displayMessage":
      return {
        ...state,
        showError: action.payload
      };
      break;

    default:
      return state;
  }
};
