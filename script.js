console.log("welcome nethaji")

//inti variable
let id = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let git = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    { songName:"Murugaa" ,filePath: 'songs/1.mp3', coverPath: "cover/muruga.jpeg"},
    { songName:"Thangakodam" ,filePath: 'songs/2.mp3', coverPath: "cover/1stc.jpeg"},
    { songName:"Anbe peranbe" ,filePath: 'songs/3.mp3', coverPath: "cover/anbe.jpeg"},
    { songName:"MudhalNee-MudivumNee" ,filePath: 'songs/4.mp3', coverPath: "cover/mnmn.jpeg"},
    { songName:"Minnaleye" ,filePath: 'songs/5.mp3', coverPath: "cover/amaran.jpeg"},
    { songName:"Master-blaster" ,filePath: 'songs/6.mp3', coverPath: "cover/jd.jpeg"},
    { songName:"Na Ready tha varava" ,filePath: 'songs/7.mp3', coverPath: "cover/leo.jpeg"},
    { songName:"Badass" ,filePath: 'songs/8.mp3', coverPath: "cover/leo.jpeg"},
    { songName:"Whistle podu" ,filePath: 'songs/9.mp3', coverPath: "cover/goat.jpeg"},
    { songName:"Matta" ,filePath: 'songs/10.mp3', coverPath: "cover/goat.jpeg"},
    { songName:"Naporen" ,filePath: 'songs/11.mp3', coverPath: "cover/ma.jpeg"},
    { songName:"Life-of-Ram" ,filePath: 'songs/12.mp3', coverPath: "cover/ns.jpeg"},
    { songName:"Vikram title track" ,filePath: 'songs/13.mp3', coverPath: "cover/vikram.jpeg"},
    { songName:"Orey Nalil" ,filePath: 'songs/14.mp3', coverPath: "cover/pp.jpeg"},
    { songName:"Neeye Oli" ,filePath: 'songs/15.mp3', coverPath: "cover/sp.jpeg"},
    { songName:"Chillachiruki"  ,filePath:"songs/16.mp3"   , coverPath:"cover/1stc.jpeg" },
    { songName:"Once Upon a time"  ,filePath:"songs/17.mp3"   , coverPath:"cover/vikram.jpeg" },
    { songName:"Pathala-pathala"  ,filePath:"songs/18.mp3"   , coverPath:"cover/vikram.jpeg" },
    { songName:"Porkanda-Singam"  ,filePath:"songs/19.mp3"   , coverPath:"cover/vikram.jpeg" },
    { songName:"Coolie-Chituku Vibe"  ,filePath:"songs/20.mp3"   , coverPath:"cover/coolie.jpeg" },
    { songName:"Coolie Disco"  ,filePath:"songs/21.mp3"   , coverPath:"cover/coolie.jpeg" },
    { songName:"TVK-anthem"  ,filePath:"songs/22.mp3"   , coverPath:"cover/tvk.jpeg" },
    { songName:"Hunter vantar"  ,filePath:"songs/23.mp3"   , coverPath:"cover/vettaiyan.jpeg" },
    { songName:"Mansilayo"  ,filePath:"songs/24.mp3"   , coverPath:"cover/vettaiyan.jpeg" },
    { songName:"Peelings"  ,filePath:"songs/25.mp3"   , coverPath:"cover/push2.jpeg" },
    { songName:"Kisskie-"  ,filePath:"songs/26.mp3"   , coverPath:"cover/push2.jpeg" },
    { songName:"Achacho"  ,filePath:"songs/27.mp3"   , coverPath:"cover/a4.jpeg" },
    { songName:"Katchi Sera"  ,filePath:"songs/28.mp3"   , coverPath:"cover/katchi.jpeg" },
    { songName:"Adangaatha Asuran"  ,filePath:"songs/29.mp3"   , coverPath:"cover/raayan.jpeg" },
    { songName:"Railin Oligal"  ,filePath:"songs/30.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Ordinary-Person"  ,filePath:"songs/31.mp3"   , coverPath:"cover/leo.jpeg" },
    { songName:"Dhinam Dhinamum"  ,filePath:"songs/32.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Yennai Izhukkuthadi"  ,filePath:"songs/33.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Sawadeeka"  ,filePath:"songs/34.mp3"   , coverPath:"cover/vida.jpeg" },
    { songName:"Hukum-Reloaded"  ,filePath:"songs/35.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Aagasam"  ,filePath:"songs/36.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Kaththi-Aathi song"  ,filePath:"songs/37.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Abinaya"  ,filePath:"songs/38.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Adiye Kolluthey"  ,filePath:"songs/39.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Adiye-Sakkarakatti"  ,filePath:"songs/40.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Antha kanna Pathaka"  ,filePath:"songs/41.mp3"   , coverPath:"cover/jd.jpeg" },
    { songName:"Arabu Nadey"  ,filePath:"songs/42.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Azhagey"  ,filePath:"songs/43.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Chennaicity Gangster"  ,filePath:"songs/44.mp3"   , coverPath:"cover/chennai.jpeg" },
    { songName:"Dammakku Dammakku "  ,filePath:"songs/45.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Edhirthu Nil "  ,filePath:"songs/46.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Ellapugazhum iravanukey "  ,filePath:"songs/47.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" En fusum pochu  "  ,filePath:"songs/48.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" En Iniya thanimaye"  ,filePath:"songs/49.mp3"   , coverPath:"cover/ted.jpeg" },
    { songName:" En Kadhal solla "  ,filePath:"songs/50.mp3"   , coverPath:"cover/paiya.jpeg" },
    { songName:" Enna Nadanthalum  "  ,filePath:"songs/51.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Ennodu Nee Irunthal  "  ,filePath:"songs/52.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Ethir Neechal "  ,filePath:"songs/53.mp3"   , coverPath:"cover/en.jpeg" },
    { songName:" Ey Inga paaru "  ,filePath:"songs/54.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" High on Love "  ,filePath:"songs/55.mp3"   , coverPath:"cover/hol.jpeg" },
    { songName:" Idhayam oru oram "  ,filePath:"songs/56.mp3"   , coverPath:"cover/3m.jpeg" },
    { songName:" Inaye"  ,filePath:"songs/57.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Indru Nettru Naalai"  ,filePath:"songs/58.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Iragai pola"  ,filePath:"songs/58.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Iraiva - Velaikkaran"  ,filePath:"songs/59.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Kadhal endral- Goa"  ,filePath:"songs/60.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Kadhaley-Kadhaley"  ,filePath:"songs/61.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Kanavey Kanavey"  ,filePath:"songs/62.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Kannamma Unna"  ,filePath:"songs/63.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Kanney Kanney"  ,filePath:"songs/64.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Ms.dhoni Konjom-I"  ,filePath:"songs/65.mp3"   , coverPath:"cover/msd.jpeg" },
    { songName:" Ms.dhoni Konjom-II"  ,filePath:"songs/66.mp3"   , coverPath:"cover/msd.jpeg" },
    { songName:" Kodamela Koodavechu"  ,filePath:"songs/67.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Kovaina Gethu"  ,filePath:"songs/68.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Kutty Story"  ,filePath:"songs/69.mp3"   , coverPath:"cover/jd.jpeg" },
    { songName:"Machi engalukku ellam oru loveutha"  ,filePath:"songs/70.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Marvel anthem"  ,filePath:"songs/71.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:" Mun-Sellada"  ,filePath:"songs/72.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Na Konjom Kaarupputhan"  ,filePath:"songs/73.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Nambiye"  ,filePath:"songs/74.mp3"   , coverPath:"cover/ted.jpeg" },
    { songName:"Nee Kavithaigala"  ,filePath:"songs/75.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Neenga Mudiyuma"  ,filePath:"songs/76.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Neenjey ezhu"  ,filePath:"songs/77.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Un Nenappu Baby"  ,filePath:"songs/78.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Urasatha Usuratha"  ,filePath:"songs/79.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Oru Thuli - Etti"  ,filePath:"songs/80.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Pagal Iravai"  ,filePath:"songs/81.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Polakkattum para para"  ,filePath:"songs/82.mp3"   , coverPath:"cover/jd.jpeg" },
    { songName:"Sachin Sachin"  ,filePath:"songs/83.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Natpe Thunai"  ,filePath:"songs/84.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Surviva"  ,filePath:"songs/85.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Thalli Pogathey"  ,filePath:"songs/86.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Thimiru Kaattadhadi"  ,filePath:"songs/87.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Thuli-Thuli Mazhayai Vanthaley"  ,filePath:"songs/88.mp3"   , coverPath:"cover/paiya.jpeg" },
    { songName:"Udhungada Sangu"  ,filePath:"songs/89.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Unna Nenachu Nenachu"  ,filePath:"songs/90.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Vaanathila Nilavirukkum"  ,filePath:"songs/91.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Veera Vinayaka"  ,filePath:"songs/92.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Yaarumillaa"  ,filePath:"songs/93.mp3"   , coverPath:"cover/music.jpeg" },
    { songName:"Yean Ennai Pirindhai"  ,filePath:"songs/94.mp3"   , coverPath:"cover/music.jpeg" },
    
    

]

songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//play;


//handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//list event
audioElement.addEventListener('timeupdate', ()=>{
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        masterSongName.innerText = songs[id].songName;
        id = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${id + 1}.mp3`;
        audioElement.currentTime = 0; 
        audioElement.play(); 
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })

})

document.getElementById('next').addEventListener('click', ()=>{
    if (id>=80)  {
        id =0;
    } else {
        id+=1;
    }
    audioElement.src = `songs/${id + 1}.mp3`;
    masterSongName.innerText = songs[id].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previuos').addEventListener('click', ()=>{
    if (id<=0) {
        id=0;
    } else {
        id-=1;
    }
    audioElement.src = `songs/${id + 1}.mp3`; 
    masterSongName.innerText = songs[id].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
