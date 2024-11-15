import { privateFormDataAxiosInstance } from './axiosInstance';

export const postSignup = async(username: string, bodyImage: File) => {
  const formData = new FormData();
  const requestBody = { username: username };

  formData.append(
    'requestDTO',
    new Blob([JSON.stringify(requestBody)], { type: 'application/json' }),
  )
  formData.append('image', bodyImage);

  return await privateFormDataAxiosInstance.post('/signup', formData)
    .then((response) => { response.data });
}

export const postBodyMasking = async(image: File) => {
  const formData = new FormData();
  formData.append('image', image);

  return await privateFormDataAxiosInstance.post('/bodymasking', formData)
    .then((response) => { response.data });
}