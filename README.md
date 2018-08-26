## A React redux demo app

This simple React application was created to show how react redux works together

### get the code

in your terminal, use the following to get source code to your local

```
$git clone https://github.com/yangarnet/qan-test.git
```

### get started

```
npm install
npm run dev
```

### to run the test

```
npm  run test
```


# test 1 pseudo code:
```
//  RequestReturnObject definition
class RequestReturnObject {
  constructor(name, width, height, color, weight) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.color = color;
    this.weight = weight;
  }

  toString() {
    return `object: ${this.name},
              demension: w:${this.width},h:${this.height},
              color:${this.color}
              weight:${this.weight}`;
  }
}


// handle url request
import URL from 'url';
class HandleUrlRequest {
    // given an array of urls
    constructor(urls) {
        this.urls = urls;
    }
    setRequestUrl(urls) {
        this.urls = urls
    }
    async handleSingleRequest(url) {
        try {
            RequestReturnObject requestReturnObject = await requet.get(url);
            if (requestReturnObject) {
                db.save(requestReturnObject);
                const hostName = (URL.parse(url, true)).hostname;
                if (hostName.contains('test.com')) {
                    process.stdout.write(requestReturnObject.toString())
                }
            }
        } catch(err) {
            console.log(JSON.stringify(err, null, 4));
        }
    }

    handleUlrRequests() {
        this.urls.forEach( url => this.handleSingleRequest(url.trim()));
    }

}

// find urls that set cookie

const findSetCookieUrls = () => {
    const regx = new RegExp('/Set-Cookie/', 'i');
    return db.find('url', regx);
};
```
