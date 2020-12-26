export class Article {
  /*
    public title: string;
    public year: number;
    public image: string;
  
    constructor(title, year, image) { 
      this.title = title;
      this.year = year;
      this.image = image;
    }
  */
  constructor(
    public _id: string,
    public title: string,
    public content: string,
    public image: string,
    public date: any
  ) {}

}