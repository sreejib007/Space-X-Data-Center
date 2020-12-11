import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer){}

  transform(value: string): SafeUrl {
    let url = value.split('=')
    let Id = url[1];
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+Id);
  }

}
