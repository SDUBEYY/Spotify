console.log("Welcome to Spotify");
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("Progressbar");
let gif = document.getElementById("gif");
let SongItems = Array.from(document.getElementsByClassName("songItem"));




let songs = [
    {SongName: "Kesariya" ,filepath: "songs/1.mp3" , coverpath: "covers/1.jpg"},
    {SongName: "Rabba" ,filepath: "songs/2.mp3" , coverpath: "covers/2.jpg"},
    {SongName: "Humsafar" ,filepath: "songs/3.mp3" , coverpath: "covers/3.jpg"},
    {SongName: "Kabira" ,filepath: "songs/4.mp3" , coverpath: "covers/4.jpg"},
    {SongName: "We Rollin" ,filepath: "songs/5.mp3" , coverpath: "covers/5.jpg"}

]

SongItems.forEach((element, i) =>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;

}
)

//Handle Play/Pause
masterplay.addEventListener ('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log('progress');
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = (myprogressbar.value*audioElement.duration)/100;

})
// audioElement.play();