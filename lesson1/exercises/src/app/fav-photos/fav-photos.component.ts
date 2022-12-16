import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here are the movies I am going to watch:';
  image1 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.ruthlessreviews.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fparasite-meta.jpg&f=1&nofb=1&ipt=f0578ee62fdf5bf29e26f3b476f2e5e1fb461d8654364e6879f6a5de00cbbc3c&ipo=images';
  image2 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.theyoungfolks.com%2Fwp-content%2Fuploads%2F2014%2F11%2F0dcfe3c2c4aac937273d5563ca9a029753f1acb6.jpg&f=1&nofb=1&ipt=7aeddfff9f76e90f6ea250b0070dd85e33d1d0e5d96f872d3978fc171254bde7&ipo=images';
  image3 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F86EJh81aylhncq62OlPnjDCXtTv.jpg&f=1&nofb=1&ipt=70c21f6be99a3b633605f5678bcab860b35712ed41fa8e4f1dd68646760721ee&ipo=images';

  constructor() { }

  ngOnInit() {
  }

}