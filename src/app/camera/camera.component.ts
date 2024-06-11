import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.scss'
})
export class CameraComponent implements OnInit{
  @ViewChild('video') video: ElementRef | any;

  constructor() {
  }

  ngOnInit(): void {
    navigator.mediaDevices.getUserMedia({video: true})
      .then((stream) => {
        this.video.nativeElement.srcObject = stream;
      })
      .catch((err) => {
        console.error('Error accessing the camera: ', err);
      });
  }
}
