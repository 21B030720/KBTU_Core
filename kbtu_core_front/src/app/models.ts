export interface Tutorial {
    'id': number
    "title": string,
    "author": string,
    "img": string,
    "like": number,
    "content": string,
    "category":{
        'id': number,
        "name": string,
        "faculty": {
            'id': number,
            "name": string
        }
    }

};

export interface Faculty{
    'id': number,
    "name": string,
    "icon": string,
    'token'?: string;
};

export interface Category{
    'id': number,
    "name": string,
    "faculty": {
        'id': number,
        "name": string,
        "icon": string
    }
}
export interface Admin{
    'user_name': number,
    "password": string,
    "img": string
}
export var User: boolean = true;

export function Arslan(){
    User = !User;
}

