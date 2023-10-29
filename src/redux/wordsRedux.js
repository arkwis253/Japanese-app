//selectors
export const getAllWords = (state) => state.words;
export const getKnownWords = (words, isKnown) => words.filter(word => word.isKnown === isKnown);

// action names
const createActionName = actionName => `app/words/${actionName}`;
const UPDATE_WORDS = createActionName('UPDATE_WORDS');
const ADD_WORD = createActionName('ADD_WORD');
const REMOVE_WORD = createActionName('REMOVE_WORD');

// action creators
export const updateWords = payload => ({type: UPDATE_WORDS, payload});
export const addWord = payload => ({type: ADD_WORD, payload});
export const removeWord = payload => ({type: REMOVE_WORD, payload});

export const fetchWords = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/words')
      .then(response => response.json())
      .then(words => dispatch(updateWords(words)))
  }
};


export const addWordRequest = newWord => {
  return dispatch => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newWord)
    }


    fetch('http://localhost:3131/api/words', options) 
    .then(() => dispatch(addWord(newWord)))
  }
}

export const removeWordRequest = word => {
  return dispatch => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({word})
    }

    fetch(`http://localhost:3131/api/words/${word.id}`, options)

  }
}

export const changeWordIsKnownRequest = word => {
  const updatedWord = {...word, isKnown: !word.isKnown};
  return dispatch => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...updatedWord})
    }

    fetch(`http://localhost:3131/api/words/${word.id}`, options)
  }
}
    
    const wordsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_WORDS:
      return [...action.payload];
    case ADD_WORD: 
      return [...statePart, action.payload];
    case REMOVE_WORD:
      return [...statePart.filter((word) => word.id !== action.payload)];
    default:
      return statePart;
  };
};

export default wordsReducer;