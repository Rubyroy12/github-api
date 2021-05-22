export class User {

    constructor(
        public login: string,
        public bio: string,
        public created_at: Date,
        public location: string,
        public avatar_url: string,
        public public_repos:number

    ){

    }
}
