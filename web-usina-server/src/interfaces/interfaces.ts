import { POST_CATEGORIES } from "../enums/enums";

export interface IPostData {
        id: string|null,
        title: string,
        imgUrl: string|undefined,
        videoUrl: string|undefined,
        category: POST_CATEGORIES,
        content: string,
        likes: null|number,
        commentaries: null|number,
        tags: []=[],
}