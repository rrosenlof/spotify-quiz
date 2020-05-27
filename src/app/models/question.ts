export class Question {
    id: number;
    song: string;
    artist: string;
    year: number;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.song = data.song;
        this.artist = data.artist;
        this.year = data.year;
    }
}