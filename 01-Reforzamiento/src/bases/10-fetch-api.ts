import type { GiphyRandomResponse } from "./interface/giphy.response";

const API_KEY = 'SYTfEMl2VmtCcS8qG7UjGLsGMizMBQtW';

const myResquest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`);

const createImagesInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

myResquest
  .then( (response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on api server!");
      
    }
  })
  .then( ({data}: GiphyRandomResponse) => {
    const imagesUrl = data.images.original.url;
    createImagesInsideDOM(imagesUrl);
  })
  .catch( error => console.error(error))