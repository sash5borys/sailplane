const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_MODAL_CONTENT': {
      return {
        ...state,
        isModalOpen: true,
        modalContent: action.payload
      };
    }
    default:
      throw new Error('there is no action');
  }
};

export default reducer;
