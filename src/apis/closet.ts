import {privateAxiosInstance, privateFormDataAxiosInstance} from "./axiosInstance";
import {ClothesBase} from "../types/type";

export const deleteCloset = (id: number) => {
    return privateAxiosInstance.delete(`/closet/${id}`);
}

export const getCloset = () => {
    return privateAxiosInstance.get('/closet');
}

export const postCloset = (clothes: ClothesBase, images: File[]) => {
    const formData = new FormData();
    const requestBody = { clothes: clothes };

    formData.append(
        'requestDTO',
        new Blob([JSON.stringify(requestBody)], { type: 'application/json' }),
    )

    images.forEach(image => {
        if (image.size > 0) {
            formData.append('image', image);
        }
    });

    return privateFormDataAxiosInstance.post('/closet', formData);
}
