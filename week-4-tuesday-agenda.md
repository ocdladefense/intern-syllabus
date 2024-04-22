# Tuesday, Week 4 Agenda




## Comments for imported modules for OCDLA Books Online (BON) Beta.
Familiarize yourself with the following imports.  Each section provides specific functionality to the BON application.

```html
<!-- Initialize custom components to display ORS/OAR citations. View the page source to identify several of these components and also make note of how these are used. -->
    <script type="module">

        import { WebcOrs } from "/node_modules/@ocdladefense/webc-ors/src/WebcOrs.js";
        import { WebcOar } from "/node_modules/@ocdladefense/webc-oar/src/WebcOar.js";
        import "/node_modules/@ocdladefense/html/html.js";


        // customElements.define("word-count", WordCount, { extends: "p" });
        customElements.define("webc-ors", WebcOrs);
        customElements.define("webc-oar", WebcOar);
    </script>


    <!-- Setup inline and fullscreen modals to display the text of ORS/OAR statutes. -->
    <script type="module">
        import domReady from "/node_modules/@ocdladefense/web/src/web.js";
        import Controller from "/js/BooksOnlineController.js";
        import init from "/js/init.js";
            
        const controller = new Controller();
        domReady(() => document.addEventListener("click", controller));
        domReady(() => controller.convert(".chapter"));
        domReady(init);  

    </script> 
        

    <!-- Process all citations in this document. List the citations as HTML links.  These links can be selected by the customer to navigate to where the source is referenced in the chapter.  -->
    <script type="module">

        import domReady from "/node_modules/@ocdladefense/web/src/web.js";
        import { formatReferences, doRefs } from "/js/citations.js";

        let refContainer = document.querySelector("#all-refs");
        let citations = document.querySelectorAll(".cite");
        let refs = document.querySelectorAll("[references], .cite");

        domReady(function () {
            formatReferences(citations);
            doRefs(refs, refContainer);
        });


        window.addEventListener("hashchange", function(e) {
            e.preventDefault();
            e.stopPropagation();

            let newId = e.newURL.split("#")[1];
            let newElem = document.getElementById(newId);
            console.log(newId);

            newElem.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            }); //({top: (rect.y + offset),behavior:"smooth"});
        });
    </script>


    <!-- Display table of contents (TOC) content and modal. This should display other chapters in the current publication. -->
    <script type="module">

        import { Modal } from "/node_modules/@ocdladefense/modal/dist/modal.js";

        window.loadToc = loadToc;
        function loadToc() {
            let config = {
                style: "display:block; width:auto; vertical-align:top; overflow-x: hidden; overflow-y: auto; height:60vh; padding: 8px;"
            };
            let modal = new Modal(config);
            modal.show();
            fetch("/sites/pubs.ocdla.org/books/"+window.book+"/toc.tpl.php").then((resp) => {
                return resp.text();
            })
            .then((html) => {
                modal.render(html);
            });
        }
    </script>


    <!-- Setup the chapter ouline and display it inside of the div.outline-content element. Currently not displaying so we need to figure out what is going wrong. -->
    <script type="module">

        import domReady from "/node_modules/@ocdladefense/web/src/web.js";
        import { DomDocument } from "/node_modules/@ocdladefense/dom/src/DomDocument.js";
        

        domReady(init);

        // Use these headings to create an on-the-fly outline of the document.
        function init() {
            let doc = new DomDocument();
            let nodes = doc.outline(".mw-headline");
            nodes.forEach((node) => document.querySelector(".outline-content").appendChild(node));
        }

    </script>


</html>
```