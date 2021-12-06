import { Component, OnInit } from '@angular/core';
import { MovieNews } from 'src/app/models/movie-news';
import { NytNewsService } from 'src/app/services/nyt-news.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  noticias!: MovieNews;
  constructor(private servicioNoticias: NytNewsService) { }

  ngOnInit(): void {
    this.servicioNoticias.getNews().then((response)=>{
      this.noticias = response
    },(error)=>{
      alert("Error: " + error.statusText)
    })
  }

  getImageUrl(direccion: any): String{
    return "https://static01.nyt.com/" + direccion;
  }

}
