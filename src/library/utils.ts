
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { Photo } from "../components/photo";

export const convertPhotosPropsIntoRequiredProps = (photos: Photos ): Photo[] => {
    const result: Photo[] = []
    for(let i =0; i < photos.results.length; i++) {
        let pic: Photo = {
            id: "",
            url: "",
            text: null
        }
        pic.id = photos.results[i].id
        pic.text = photos.results[i].alt_description
        pic.url = photos.results[i].urls.full

        result.push(pic)
    }
    
    return result
}