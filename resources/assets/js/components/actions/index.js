export const displayMessage = value => {
  return {
    type: "displayMessage",
    payload: value
  };
};

export const getCategories = (
  categories,
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed
) => {
  return dispatch => {
    dispatch({
      type: "FETCHING",
      payload: {
        categories: categories,
        activePage: activePage,
        itemsCountPerPage: itemsCountPerPage,
        totalItemsCount: totalItemsCount,
        pageRangeDisplayed: pageRangeDisplayed
      }
    });
  };
};

export const categories = data => {
  return dispatch => {
    dispatch({
      type: "changeCategories",
      payload: data
    });
  };
};

export const addCategory = (
  category_name,
  showError = false,
  messages = {}
) => {
  return dispatch => {
    dispatch({
      type: "addCategory",
      payload: {
        category_name: category_name,
        showError: showError,
        messages: messages
      }
    });
  };
};

export const editCategory = (
  category_name,
  category_status,
  showError = false,
  messages = {}
) => {
  return dispatch => {
    dispatch({
      type: "editCategory",
      payload: {
        category_name: category_name,
        category_status: category_status,
        showError: showError,
        messages: messages
      }
    });
  };
};
