export class User {

    constructor(
        public login: string,
        public bio: string,
        public location: string,
        public avatar_url: string,
        public created_at: Date,
        public public_repos: number

    ) {

    }
}
