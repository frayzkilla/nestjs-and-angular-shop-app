import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTitle'
})

export class LimitTitlePipe implements PipeTransform {
  transform(title: string): string {
    if (title.length > 20){
        return (title.substring(0,30)+"...");
    } else {
        return title
    }
  }
}