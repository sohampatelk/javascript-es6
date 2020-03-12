/**
 * Classes...
 * Checkour import that is how we can access it.
 */
export class Movie {
    constructor(name, genre, year) {
        this.name = name;
        this.genre = genre;
        this.year = year;
    }

    get getName() { //How we retrieve property of name
        return this.name;
    }
    set setName(name) { //How we store the value of property.
        if (typeof name == "string") {
            this.name = name;
        } else {
            this.name = name.toString();
        }

    }

    get getGenre(){ //how we retrive property of genre
        return this.genre;
    }

    showPoster() {//This is a method!!We can name them as we would like.
        const info = `
            MOVIE INFO
            ============
            Name: ${this.name}
            Genre: ${this.genre}
            Year: ${this.year}
        `;
        return info;
    }
}