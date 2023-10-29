export const getAllImages = (state) => state.images;

const createActionName = actionName => `app/images/${actionName}`;
const UPDATE_IMAGES = createActionName('UPDATE_IMAGES');

export const updateImages = payload => ({type: UPDATE_IMAGES, payload});

export const fetchImages = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/images')
      .then(response => response.json())
      .then(images => dispatch(updateImages(images)))
  }
};

const imagesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_IMAGES:
      return [...action.payload];
    default:
      return statePart;
  };
}

export default imagesReducer;