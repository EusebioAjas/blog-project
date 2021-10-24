import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchVideo } from 'src/app/models';
import { YouTubeVideoService } from 'src/app/services';
import { YTB_VIDEO_BASE_URL } from 'src/app/shared/apis';

@Component({
  selector: 'app-ytb-video-frame',
  templateUrl: './ytb-video-frame.component.html',
  styleUrls: ['./ytb-video-frame.component.css']
})
export class YtbVideoFrameComponent implements OnInit {
  searchResult!: SearchVideo;
  queryYtb!: string;

  constructor(private ytbService: YouTubeVideoService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  busqueda = () => {
    this.ytbService.getYouTubeVideos(this.queryYtb)
      .then((response) => {
        this.searchResult = response;
      }, (error) => {
        alert("error: " + error.statusText)
      })
  }

  getVideo(videoId: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(YTB_VIDEO_BASE_URL + videoId);
  }
}
