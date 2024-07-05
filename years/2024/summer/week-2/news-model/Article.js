import * as bootstrap from 'bootstrap';


export default class Article {

    #article;


    constructor(article) {

        this.article = article;
    }

    
    render() {
        article = this.#article;
        // Make header
        this.$modalHeader.innerHTML = this.buildHeader(article.title, article.url);

        // Make image carousel
        this.$carousel.innerHTML = this.buildImageCarousel(article.images, article.videos);

        // Make body
        this.$modalBody.innerHTML = this.buildBody(article.top_image, article.authors, article.publish_date, article.meta_site_name, article.source_url, article.text);

        // Make footer
        this.$modalFooter.innerHTML = this.buildFooter(article.tags, article.url);

        this.articleModal.show();
    }


    buildHeader(title, url) {
        // TODO: Check if it is favorited for the favorite button
        return `<a href="${url}"><strong class="modal-title" id="newsModalLabel">${title}</strong></a>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>`
    }



    buildImageCarousel(images, videos) {


        let carousel = new Carousel(images,videos);

        return carousel.render();
    }



    buildBody(topImage, authors, published, siteName, source, text) {
        // Loop through authors
        let authorList = "";
        published = new Date(Date.parse(published));
        for (let i = 0; i < authors.length; i++) {
            authorList += authors[i];
            if (i + 1 < authors.length)
            authorList += ", "
        }
        
        return `<div class="row">
        <div class="col">
          <!--Top Image-->
          <img src="${topImage}" class="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-grow-1 bd-highlight">
            <!--Authors-->
            <small>${authorList}</small>
          </div>
          <div class="p-2 bd-highlight">
            <!--Link-->
            <small><a href="${source}">${siteName}</a></small>
          </div>
          <div class="p-2 bd-highlight">
            <!--Publication date-->
            <small>${published.toDateString()}</small>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>
          ${text}
        </p>
      </div>`;
    }



    buildFooter(tags, url) {
        // Loop through tags
        let tagList = "";
        for (let i = 0; i < tags.length; i++) {
            tagList += tags[i];
            if (i + 1 < tags.length)
                tagList += ", "
        }
        return `<div class="row">
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <!--tags-->
            <small>${tagList}</small>
          </div>
          <div class="p-2 bd-highlight">
            <!--Link-->
            <small><a href="${url}">${url}</a></small>
          </div>
        </div>
      </div>`;
    }
}