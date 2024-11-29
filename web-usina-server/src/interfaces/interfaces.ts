import { AVATAR_OPTIONS, ROLES } from "../enums/enums"

export interface IPostData {
        id: string|null,
        title: string,
        imgUrl: string,
        content: string,
        likes: null|number,
        commentaries: null|number,
        tags: []
}


export interface IUserModel {
        id :string,
        username : string,
        password :string,
        email :string,
        first_name :string,
        last_name :string,
        created_at:string,
        avatar_url :AVATAR_OPTIONS, 
        role_id :ROLES
}