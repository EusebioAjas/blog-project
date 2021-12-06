import { Component, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YouTubeVideoService } from 'src/app/services';
import { YOUTUBE_BASE_URL } from 'src/app/config';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-ytb-video-frame',
  templateUrl: './ytb-video-frame.component.html',
})
export class YtbVideoFrameComponent implements OnInit {
  videos!: Video[];
  @Input() queryYtb!: string;
  safeURL!: SafeResourceUrl;
  @Output() ytbUrl!: string;

  constructor(
    private ytbService: YouTubeVideoService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.searchVideos();
  }

  searchVideos() {
    this.ytbService.searchYouTubeVideo(this.queryYtb).then(
      (response) =>
        response.items.map((video) => this.getVideo(video.id.videoId)),
      (error) => {
        console.log(error.statusText);
      }
    );
  }

  getVideo(videoId: string) {
    const fullURL = YOUTUBE_BASE_URL + videoId;
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(fullURL);
    this.ytbUrl = fullURL;
  }
}
