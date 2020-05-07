'use strict'
// filter module
class Receptor {
    constructor(data_video) {

        this.data_video = data_video

    }
    Message() { // this method selection the videos and its container
        for (let i = 0; i < this.data_video.length; i++) {
            let videos_src = this.data_video[i].children;
            let container_video = this.data_video[i].dataset.container;

            console.log(videos_src, container_video)
        }
    }

}
//_____________________________________________________________________________________________________________
// Constructor module

class Reproductor { //abstract class
    constructor(videos_src, container_video) {
        this.videos_src = videos_src,
            this.container_video = container_video

    }
    Build_rep() {

    }
}
//_________________________________________________________________________________________________________
//instantiator module

class Facotory_rep {

}
const data_video = document.getElementsByTagName('data-video');

const Reproductor = new Receptor(data_video);
Reproductor.Message();