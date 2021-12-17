
const setShelf = (state = [], action) => {
        switch (action.type) {
            case 'SET_SHELF':
              return action.payload;
            default:
              return state;

    }
}

export default setShelf;