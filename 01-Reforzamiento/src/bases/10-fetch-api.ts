const API_KEY = 'SYTfEMl2VmtCcS8qG7UjGLsGMizMBQtW';

const myResquest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`);

myResquest
  .then( (response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on api server!");
      
    }
  })
  .then( (data) => {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl)

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;

    document.body.append(imgElement);
  })
  .catch( error => console.error(error))