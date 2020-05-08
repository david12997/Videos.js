'use strict'
//_______________ filter module
class Receptor {
    constructor(data_video) {

        this.data_video = data_video

    }
    Message() { // this method selection the videos and its container
        for (let i = 0; i < this.data_video.length; i++) {
            let videos_src = this.data_video[i].children;
            let container_video = this.data_video[i].dataset.container;
            let personal_colors = this.data_video[i].dataset.controls.split(",");

            // here we are creating  all new controls  without  specific type
            const Abstract_rep = new Reproductor();
            Abstract_rep.Build_rep(videos_src, container_video);
            Abstract_rep.Change_graphics(personal_colors)

        }
    }

}
//___________________________________________________________________________________________
// Constructor module
class Reproductor { //abstract class

    Control_Grafics() { // this method contain all  controllers or html labels, return a array
        const etiqueta_video = document.getElementsByTagName('video'),
            btn_play = document.getElementsByTagName('button'),

            Controles = {
                'etiqueta_video': etiqueta_video,
                'btn_play': btn_play
            };
        return Controles;
    }

    Play_pause(video) {
        console.log(video)
        if (video.paused) {
            video.play();
        } else if (video.played) {
            video.pause();
        }


    }
    Change_graphics(personal_colors) {
        if (personal_colors[0] !== 'defined') {
            console.log('cambiando colores')
                // instance method's Cambiar_interfaz
        } else {
            console.log('nothing')
        }

    }
    Build_rep(videos_src, container_video) { // this method instance   factory  controllers 
        for (let i = 0; i < videos_src.length; i++) {
            const abstract_rep = new Facotory_rep(videos_src[i].dataset.tipo, videos_src[i].dataset.src, container_video)
            abstract_rep.Instance_rep();
        }
    }
}

//____________________exted classes
class Videos extends Reproductor {

    Paint(videos, container) {
        console.log(videos, container)

        let conten = document.getElementsByClassName(container);
        conten[0].insertAdjacentHTML('beforeend', `<video src="${videos}" style="width:500px"></video><button>play</button>`)
    }
}
class Listas extends Reproductor {

}
class Youtube_video extends Reproductor {

}
class Youtube_listas extends Reproductor {

}

//_______________________________________________________________________________________
//instantiator module

class Facotory_rep { // this class build specific video controls
    constructor(tipo, videos_src, container) {
        this.tipo = tipo,
            this.videos_src = videos_src,
            this.container = container
    }

    Instance_rep() { // this method instance specific video controls

        switch (this.tipo) {
            case 'videos':
                const rep_instance = new Videos();
                rep_instance.Paint(this.videos_src, this.container);


                break;

            default:
                break;
        } // end switch
    }
}
//______________personalization module
class Cambiar_interfaz {
    //create methods
}

//____________________________________________________________________________________
//______________ START LIBRARY
const data_video = document.getElementsByTagName('data-video'); //this const contain all data
const Mi_reproductor = new Receptor(data_video);
Mi_reproductor.Message();


//___________________here  call functions of video controls
const controllers = new Reproductor()
let html_label = controllers.Control_Grafics(); // saving  array from method Control_Grafics

for (let i = 0; i < html_label.etiqueta_video.length; i++) { // here it iterates according numbers of video
    html_label.btn_play[i].addEventListener('click', () => {

        controllers.Play_pause(html_label.etiqueta_video[i]);
    });
}