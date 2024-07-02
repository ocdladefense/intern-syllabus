

class Carousel {


    constructor(iamges,videos) {

        this.images = images;
        this.videos = videos;
    }

    render() {


        let images = this.images;
        let videos = this.videos;
        let indicators = "";
        let imageList = "";
        let videoList = "";
        let active = `class="active" aria-current="true"`;


        
        //^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$
        const re = new RegExp("^(http(s):\/\/.)");
        
        // Cleans the arrays
        images = images.filter(function (item) {
            return re.test(item);
        });

        videos = videos.filter(function (item) {
            return re.test(item);
        });



        for (let i = 0; i < images.length + videos.length; i++) {
            indicators = `${indicators}<button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="${i}" ${active}></button>`;
            active = `aria-current="false"`;
        }

        active = "active";
        
        for (let i = 0; i < videos.length; i++) {
            videoList = `
                ${videoList}<div class="carousel-item ${active}">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="${videos[i]}" allowfullscreen></iframe>
                    </div>
                </div>
            `;
            active = "";
        }

        for (let i = 0; i < images.length; i++) {
            imageList = `${imageList}<div class="carousel-item ${active}">
                <img src="${images[i]}" class="d-block sliderItem" alt="...">
            </div>`
            active = "";
        }


        return `
            <div class="carousel-indicators">${indicators}</div>
            <div class="carousel-inner">${videoList}${imageList}</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#modalCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#modalCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        `;
    }



}