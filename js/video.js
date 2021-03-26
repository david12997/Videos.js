'use strict'
//variables superglobales
let videos_lista = []; //here save videos of playlist case 'list'

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
            btn_play = document.getElementsByClassName('play'),
            time_phone = document.getElementsByClassName('time-phone'),
            container_controles = document.getElementsByClassName('container-controles'),
            icons_end = document.getElementsByClassName('icons-end'),
            icons_between = document.getElementsByClassName('icons-between'),
            icons_start = document.getElementsByClassName('icons-start'),
            speed = document.getElementsByClassName('speed'),
            btn_speed = document.getElementsByClassName('btn-speed'),
            icon_pause = document.getElementsByClassName('icon-pause'),
            icon_play = document.getElementsByClassName('icon-play'),
            timeLine = document.getElementsByClassName('timeline-lleno'),

            Controles = {
                'etiqueta_video': etiqueta_video,
                'btn_play': btn_play,
                'time_phone': time_phone,
                'container_controles': container_controles,
                'icons_end': icons_end,
                'icons_between': icons_between,
                'icons_start': icons_start,
                'speed': speed,
                'btn_speed': btn_speed,
                'icon_play': icon_play,
                'icon_pause': icon_pause,
                'timeline': timeLine
            };
        return Controles;
    }

    ProgressBar(video,timeline,iconPlay,iconPause) {
        
        let current = video.currentTime;
        let duration = video.duration;
        let avance = parseInt(current.toFixed()) * 100 / parseInt(duration.toFixed());

       // console.log(current);
        //console.log(duration);

       //console.log(parseInt(current.toFixed()) * 100 / parseInt(duration.toFixed()));
        
        
        
        if (avance === 100) {

           
            video.pause();
            iconPlay.classList.remove('none');
            iconPause.classList.add('none');

            timeline.style.width = '0%';
            video.currentTime = 0;

        } else {
              timeline.style.width = avance + '%';
        }
      


    }

    Play_pause(video,iconPlay,iconPause) {
        //console.log(video)
        if (video.paused) {
           
            video.play();

            iconPlay.classList.add('none');
            iconPause.classList.remove('none');

        } else if (video.played) {
           
            video.pause();

            iconPlay.classList.remove('none');
            iconPause.classList.add('none');
        }
    }

    Size(los_videos, controles) {
        // console.log(los_videos[0].clientWidth);//tamaño del video
        //console.log(navigator.productSub);//which navigator

        for (let i = 0; i < los_videos.length; i++) {

            

            if (navigator.productSub == '20030107') {

                if (los_videos[i].clientWidth < 380) {
                    controles.time_phone[i].style.marginTop = '-20%';
                    controles.icons_end[i].style.fontSize = '19px';
                    controles.speed[i].style.height = '80px';
                    controles.speed[i].style.width = '70px';
                    controles.speed[i].style.marginTop = '-110px';
                }

                if (los_videos[i].clientWidth >= 380) {

                    controles.time_phone[i].style.marginTop = '-15%';
                    controles.time_phone[i].style.fontSize = '18px';
                    controles.time_phone[i].style.marginLeft = '-5px';
                    controles.btn_play[i].style.width = '100%';
                    controles.speed[i].style.height = '80px';
                    controles.speed[i].style.width = '70px';
                    controles.speed[i].style.marginTop = '-110px';
                }
                if (los_videos[i].clientWidth >= 530) {

                    controles.time_phone[i].style.marginTop = '-12%';
                    controles.time_phone[i].style.fontSize = '20px';
                    controles.container_controles[i].style.height = '30px';
                    controles.time_phone[i].style.marginLeft = '1px';
                    controles.btn_play[i].style.fontSize = '20px';
                    controles.btn_play[i].style.width = '70%';
                    controles.icons_end[i].style.fontSize = '20px';
                    controles.icons_end[i].style.width = '25%';
                    controles.speed[i].style.height = '80px';
                    controles.speed[i].style.width = '70px';
                    controles.speed[i].style.marginTop = '-110px';

                }
                if (los_videos[i].clientWidth >= 705) {

                    controles.time_phone[i].style.marginTop = '-10%';
                    controles.time_phone[i].style.fontSize = '22px';
                    controles.container_controles[i].style.height = '35px';
                    controles.btn_play[i].style.fontSize = '24px';
                    controles.btn_play[i].style.width = '65%';
                    controles.icons_end[i].style.fontSize = '24px';
                    controles.icons_end[i].style.width = '20%';
                    controles.icons_start[i].style.width = '10%';
                    controles.speed[i].style.height = '100px';
                    controles.speed[i].style.width = '65px';
                    controles.speed[i].style.marginTop = '-140px';
                }
                if (los_videos[i].clientWidth >= 1000) {

                    controles.time_phone[i].style.marginTop = '-8%';
                    controles.time_phone[i].style.fontSize = '24px';
                    controles.btn_play[i].style.fontSize = '26px';
                    controles.icons_end[i].style.fontSize = '26px';
                    controles.icons_between[i].style.width = '78%';
                    controles.icons_end[i].style.width = '15%';
                    controles.icons_start[i].style.width = '7%';
                }


            } //end if navigator
            else {
                if (los_videos[i].clientWidth < 380) {

                    controles.time_phone[i].style.marginTop = '-20%';
                    controles.icons_end[i].style.fontSize = '19px';
                    controles.speed[i].style.height = '80px';
                    controles.speed[i].style.width = '70px';
                    controles.speed[i].style.marginTop = '-110px';

                }

                if (los_videos[i].clientWidth >= 380) {

                    controles.time_phone[i].style.marginTop = '-15%';
                    controles.time_phone[i].style.fontSize = '18px';
                    controles.time_phone[i].style.marginLeft = '-5px';
                    controles.btn_play[i].style.width = '100%';
                    controles.speed[i].style.height = '80px';
                    controles.speed[i].style.width = '70px';
                    controles.speed[i].style.marginTop = '-110px';

                }
                if (los_videos[i].clientWidth >= 530) {
                    controles.time_phone[i].style.marginTop = '-12%';
                    controles.time_phone[i].style.fontSize = '20px';
                    controles.container_controles[i].style.height = '30px';
                    controles.time_phone[i].style.marginLeft = '-3px';
                    controles.btn_play[i].style.fontSize = '20px';
                    controles.btn_play[i].style.width = '70%';
                    controles.icons_end[i].style.fontSize = '20px';
                    controles.icons_end[i].style.width = '25%';
                    controles.speed[i].style.height = '80px';
                    controles.speed[i].style.width = '70px';
                    controles.speed[i].style.marginTop = '-110px';

                }
                if (los_videos[i].clientWidth >= 705) {
                    controles.time_phone[i].style.marginTop = '-10%';
                    controles.time_phone[i].style.fontSize = '22px';
                    controles.container_controles[i].style.height = '35px';
                    controles.btn_play[i].style.fontSize = '24px';
                    controles.btn_play[i].style.width = '65%';
                    controles.icons_end[i].style.fontSize = '24px';
                    controles.icons_end[i].style.width = '20%';
                    controles.icons_start[i].style.width = '10%';
                    controles.speed[i].style.height = '100px';
                    controles.speed[i].style.width = '65px';
                    controles.speed[i].style.marginTop = '-140px';
                }
                if (los_videos[i].clientWidth >= 1000) {
                    controles.time_phone[i].style.marginTop = '-7.5%';
                    controles.time_phone[i].style.fontSize = '24px';
                    controles.btn_play[i].style.fontSize = '26px';
                    controles.icons_end[i].style.fontSize = '26px';
                    controles.icons_between[i].style.width = '78%';
                    controles.icons_end[i].style.width = '15%';
                    controles.icons_start[i].style.width = '7%';
                }
            } //end else

        } //end for
    }

    Change_graphics(personal_colors) {

        if (personal_colors[0] !== 'defined') {
            console.log('cambiando colores', personal_colors)
                // instance method's Cambiar_interfaz
        } else {
            console.log('nothing');
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
        conten[0].insertAdjacentHTML('beforeend', `
        <div class="reproductor">
        <div class="container-controles">
            <div class="icons-start">
                <div class="play "><span class="icon-play"><i class="fas fa-play"></i></span><span class="icon-pause none"><i class="fas fa-pause"></i></span></div>
                <div class="time-phone">00:00</div>
            </div>
            <div class="icons-between">
                <div class="timeline-vacio">
                    <div class="timeline-lleno"></div>
                </div>
            </div>
            <div class="icons-end">
                <div class="volumen"><i class="fas fa-volume-up"></i>
                <div class="container-input-vol none"><input class="input-vol" type="range" min="0" max="1" step="0.1"></div>
                </div>
                <div class="herramientas"><i class="fas fa-cog"></i>
                <div class="speed none">
                <div class="btn-speed">2</div>
                <div class="btn-speed">1.75</div>
                <div class="btn-speed">1.5</div>
                <div class="btn-speed">1</div>
                <div class="btn-speed">0.75</div>
                <div class="btn-speed">0.5</div>
                </div>
                </div>
                <div class="expand"><i class="fas fa-expand"></i></div>
            </div>
        </div>
        <video src="${videos}"></video>
    </div><br>`);
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
            case 'listas':
                console.log(this.videos_src.split(",")) //split create array with src of videos  
                console.log(this.container)

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
const controllers = new Reproductor();

let html_label = controllers.Control_Grafics(); // saving  array from method Control_Grafics

for (let i = 0; i < html_label.etiqueta_video.length; i++) { // here it iterates according numbers of video

    //click btn play/pause
    html_label.btn_play[i].addEventListener('click', () => {

        controllers.Play_pause(html_label.etiqueta_video[i], html_label.icon_play[i], html_label.icon_pause[i]);
        
    });

    html_label.etiqueta_video[i].addEventListener('timeupdate', () => {
        
        controllers.ProgressBar(html_label.etiqueta_video[i], html_label.timeline[i], html_label.icon_play[i],html_label.icon_pause[i]);
    })

}






//________________ here I'm  resizing  video control
window.addEventListener('resize', () => {
    controllers.Size(html_label.etiqueta_video, html_label);


});
window.addEventListener('load', () => {
    controllers.Size(html_label.etiqueta_video, html_label);
});