
## Summary
### Webpack
* Environment variables - can be passed to Webpack's command line using <code>--env</code> parameters.
* Boolean values should be passed as switches, e.g., <code>--env USE_MOCK_DATA</code>.
* String values should be passed as key value pairs, e.g., <code>--env MY_SECRET=abcd1234</code>.
* Use [<code>webpack.DefinePlugin()</code>](https://webpack.js.org/plugins/define-plugin/) to interpolate values in place of definitions (e.g., <code>MY_DEFINED_VARIABLE</code>).


## Katelyn
### Outline - Intersection Observer API
* https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
* Module organization - We've organized all of our OCDLA modules (either from the <code>@ocdla</code> or <code>@ocdladefense</code> prefixes) into <code>dev_modules/@ocdla</code>.
* Build a TOC from an XML file with the underlying chapters in Felony Sentencing Manual (FSM).  Use a mocking class for this.


## Trung
### <code>OrsChapter.toString()</code>
Display and format the entire text/html of ORS Chapter 1 using the <code>innerHTML</code>.

### ORS table of contents
Use the sample XML file to build a table of contents for navigating around various chapters.  URLs should change to ?chapter={chapterNum}#section-{sectionNum} for loading the text of a different chapter.

### Global components
Split out <code>Hyperlink</code> code into separate components with _semantic_ names like "Logo", "Map", "Button", "UserIcon", etc.  For <code>SidabrLeft and Right</code> go in reverse: consolidate functionality into <code>Sidebar / SidebarItem</code> components so that we no longer try to distinguish between <code>Left</code> versus <code>Right</code>.  Depending on the input array of links, use <code>map()</code> to transform the arrays into the single structure of <code>href, body, active</code> expected by the <code>SidebarItem</code> components.




## Mocking
Mocking is enabled via a CLI environment flag.  See this GitHub Pages [static site](https://ocdladefense.github.io/babel-webpack-javascript-template/).

The following test function can be run in the JavaScript console to demonstrate mocking.


```javascript
function testMock(chapter = 1, book = 'fsm') {
  // Make sure we have something reasonable stored in mocks.
  console.log(HttpClient.mocks);
let url = `https://pubs.ocdla.org/${book}/${chapter}`;
  let client = new HttpClient();

  let req = new Request(url);

  let resp = client.send(req);

  resp.text().then(html => console.log(html));
}

// Pass the chapter explicitly (which has no effect as the mock class is returning a synthetic response).
testMock(1);

// Or simply:
testMock();
```


## Other links
* https://pubs.ocdla.org/fsm/1
* https://azure.microsoft.com/en-us/products/app-service/static