import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dynamic-Slider';

  images: any[] = [];

  imageUrl = '';
  indexImage!: number;
  constructor() {}

  getImage(event: any) {
    console.log(event);

    let files = event.target.files;
    let siderLength = this.images.length + files.length;

    if (siderLength > 5) {
      let limit = 5 - this.images.length;
      for (let x = 0; x < limit; x++) {
        let file = files[x];
        console.log(file);

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.images.push(reader.result);
        };
      }
    } else {
      for (let x = 0; x < files.length; x++) {
        let file = files[x];
        console.log(file);

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.images.push(reader.result);
        };
      }
    }
    console.log(this.images);
  }

  showImage(index: number) {
    this.indexImage = index;
    this.imageUrl = this.images[index];
  }

  deleteImage() {
    this.images.splice(this.indexImage, 1);
    if (this.images.length == this.indexImage) {
      --this.indexImage;
      this.imageUrl = this.images[this.indexImage];
    } else {
      this.imageUrl = this.images[this.indexImage];
    }
  }

  previewImage() {
    --this.indexImage;
    this.imageUrl = this.images[this.indexImage];
  }

  nextImage() {
    ++this.indexImage;
    this.imageUrl = this.images[this.indexImage];
  
  }
}
