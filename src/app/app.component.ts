import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-portal_v2';

  ngOnInit() {
    let str = 'prashanth reddy'
    console.log(this.countOccString(str));
  }
  countOccString(str: string) {
    var charCount: any = {}
    for (let i = 0; i < str.length; i++) {
      let char = str[i]
      if (charCount[char]) {
        charCount[char]++
      }
      else {
        charCount[char] = 1
      }
    }
    return charCount;
  }
}
