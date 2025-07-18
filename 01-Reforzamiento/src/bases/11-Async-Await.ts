import type { GiphyRandomResponse } from "./interface/giphy.response";

const API_KEY = 'SYTfEMl2VmtCcS8qG7UjGLsGMizMBQtW';

const createImagesInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`);
  const {data}:GiphyRandomResponse = await response.json();
  return data.images.original.url;
}

getRandomGifUrl()
  .then( createImagesInsideDOM )
  .catch( () => { throw new Error("Something went wrong on api server!"); });



