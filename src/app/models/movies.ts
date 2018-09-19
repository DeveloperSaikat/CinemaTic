export class Movies{
    constructor(
        public title: string,
        public overview: string,
        public release_date: string,
        public poster_path: string,
        public vote_average: number
    ){}
}