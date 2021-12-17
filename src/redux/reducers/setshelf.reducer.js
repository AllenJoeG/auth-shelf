
const setShelf = (state = [], action) => {
  console.log(action)
        switch (action.type) {
            case 'SET_SHELF':
              return action.payload;
            default:
              return state;

    }
}

export default setShelf;