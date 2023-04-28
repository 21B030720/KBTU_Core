export interface Tutorial {
    'id': number
    "title": string,
    "author": string,
    "img": string,
    "like": number,
    "content": string
};

export interface Faculty{
    'id': number,
    "name": string
};

export interface Category{
    'id': number,
    "name": string,
    "faculty": {
        'id': number,
        "name": string
    }
}