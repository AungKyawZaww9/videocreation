const container = document.querySelector('.container');
// console.log(container);
let video = document.getElementById('video');
const play = document.getElementById('play');
const range = document.getElementById('range');
const timespan = document.getElementById('timespan');
const stop = document.getElementById('stop');



//Play Container
function playcontainer(){
    // console.log('hey');

    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
    
}

//Change Icon

function changeicon(){
    if(video.paused){
        play.innerHTML = `<i class="fas fa-play fa-2x"></i>`;
    }else{
        play.innerHTML = `<i class="fas fa-pause fa-2x"></i>`
    }
}


//Change Time

function changetime(){
    range.value = (video.currentTime / video.duration) * 100;
    // console.log(range.value);

    mins = Math.floor(video.currentTime / 60);

    if(mins < 10){
        mins = "0"+mins;
    }
    // console.log(mins);

    secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = "0"+secs;
    }
    // console.log(secs);

    timespan.innerText = `${mins}:${secs}`;
}

//All Stop
function allstop(){
    video.currentTime = 0;

}


//Ranging

function ranging(){
    // console.log('hey');
    video.currentTime = (range.value * video.duration) / 100;
    video.pause();
}


//Event Listener

container.addEventListener('click',playcontainer);
video.addEventListener('play',changeicon);
video.addEventListener('pause',changeicon);
video.addEventListener('timeupdate',changetime);

stop.addEventListener('click',allstop);
range.addEventListener('click',ranging);




// BUTTON NEW


const title = document.getElementById('title');
const next = document.getElementById('next');
const back = document.getElementById('back');
// const poster = document.querySelector('video').getAttribute('poster');

const getallvideo = document.querySelectorAll('#samplevideo');
// console.log(getallvideo);


let index = 0;
const uploadvideo =['IU_NAKKA','IU_CELEBRITY','IU_COIN','IU_LIAC','IU_SOMEDAY','IU_BIBI'];

const videos = document.getElementById('video');

loadingvideo(uploadvideo[index]);
function loadingvideo(video){

    title.innerHTML = video;
    videos.src = `video/${video}.mp4`;
    // poster.innerHTML = `img/${video}.jpg`;
}


//Next Video

function nextvideo(){
    // console.log('hey');

    index++;

    if(index > uploadvideo.length - 1){
        index = 0;
    }

    // console.log(index);
    loadingvideo(uploadvideo[index]);

}


//Back Video

function backvideo(){
    // console.log('hey');
    index--;

    if(index < 0){
        index = uploadvideo.length - 1;
    }

    // console.log(index);
    loadingvideo(uploadvideo[index]);

}


//getallvideo

getallvideo.forEach(function(geteachvideo){
    // console.log(geteachvideo);

    geteachvideo.addEventListener('click',(e)=>{
        console.log('hey');

        // getallvideo.play();
        // console.log(e.target);
        // if(e.target.paused){
        //     e.target.play();
        // }else{
        //     e.target.pause();
        // }
        
    });



});

//Video Ended

video.addEventListener('ended',()=>{
    nextvideo();
    video.play();
});


//one
const main = document.getElementById('main');
// console.log(main);
const one = document.querySelector('.one');
// console.log(one);
const sample = document.querySelector('.sample');
// console.log(sample);

one.addEventListener('click',()=>{
    loadingvideo(uploadvideo[0]);
    videos.play();

    const span = document.createElement('span');
    // // console.log(span);
    // span.classList.add('.span');
    
    
});


//Two
const two = document.querySelector('.two');
// console.log(two);


two.addEventListener('click',()=>{
    loadingvideo(uploadvideo[1]);
    videos.play();
});


//Three
const three = document.querySelector('.three');
// console.log(three);

three.addEventListener('click',()=>{
    loadingvideo(uploadvideo[2]);
    videos.play();
});


//Four
const four = document.querySelector('.four');
// console.log(four);

four.addEventListener('click',()=>{
    loadingvideo(uploadvideo[3]);
    videos.play();
});



//Five
const five = document.querySelector('.five');
// console.log(five);

five.addEventListener('click',()=>{
    loadingvideo(uploadvideo[4]);
    videos.play();
});


//Six
const six = document.querySelector('.six');
// console.log(six);

six.addEventListener('click',()=>{
    loadingvideo(uploadvideo[5]);
    videos.play();
});


//Event Listener


next.addEventListener('click',nextvideo);
back.addEventListener('click',backvideo);


//For Bar

const bar = document.getElementById('bar');
// console.log(bar);

const samplebox = document.getElementById('samplebox');
// console.log(samplebox);

bar.addEventListener('click',()=>{
    // console.log('hello');

    samplebox.classList.toggle('show');
    container.classList.toggle('show');
    // videos.play();
});
