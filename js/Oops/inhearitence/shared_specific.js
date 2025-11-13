// B3: Content → Article/Video
class Content {
  // TODO: constructor(title)
  constructor(title)
  {
    this.title=title;
  }
  // TODO: details()
  details()
  {
    console.log(`the title ${this.title}`);
  }
}

class Article extends Content {
  // TODO: constructor(title, wordCount)
  constructor(title,wordCount)
  {
    super(title);
    this.wordCount=wordCount;
  }
  // TODO: details() // override
  details()
  {
    console.log(`artical ${this.title} have ${this.wordCount} word count`);
  }
}

class Video extends Content {
  // TODO: constructor(title, durationSec)
  // TODO: details() // override
  constructor(title,durationSec)
  {
    super(title);
    this.durationSec=durationSec;
  }
  details()
  {
  console.log(`video ${this.title} and its duration is ${this.durationSec} seconds`)
}
}

let content = new Content("article");
content.details();

let artical = new Article("Why Kiran is not Bad person","32");
artical.details();

let video = new Video("why iron destroys the core of a sun","360");
video.details();

// TODO: demo list of mixed contents
