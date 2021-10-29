import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(
    private ytbService: YouTubeVideoService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.searchVideos();
  }

  searchVideos() {
    this.ytbService
      .searchYouTubeVideo(this.queryYtb)
      .subscribe((videos) => (this.videos = videos.items));
  }

  getVideo(videoId: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      YOUTUBE_BASE_URL + videoId
    );
  }
}
