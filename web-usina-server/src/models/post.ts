import { IdGenerator } from './../services/IdGenerator';
export class Post {


    private id:string|undefined;
    private tagTile: sting;


    constructor(id:string|null){
        this.id=this.checkIdExists(id);
    }

    private checkIdExists(id:string|null, tagTitle:string|undefined):string{
        if(id==null){
            return new IdGenerator().generate();
        }
        return id;
    }
}