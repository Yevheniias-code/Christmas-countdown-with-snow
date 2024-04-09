gsap.from("h1", {y: -100, duration: 3, opacity: 0,})
gsap.from(".blok", {x: -300, duration: 2, opacity: 0, delay: 1,  rotation: -360, stagger: 0.5})

function christmasCountDown() {
    const christmasDate = new Date("December 25, 2024 00:00");
    const now = new Date();
    const diff = christmasDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".day").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hour").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minute").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".second").textContent = displaySecond;

    if(diff <= 0) {
        document.querySelector(".day").textContent = 0;
        document.querySelector(".hour").textContent = 0;
        document.querySelector(".minute").textContent = 0;
        document.querySelector(".second").textContent = 0;

        clearInterval(timerID);

        merryChristmas();
    }
}

let timerID = setInterval(christmasCountDown, 1000);

function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO";
    heading.classList.add("text");
}

const btnPlayMusic = document.querySelector("#btn_playMusic");
const audio = document.querySelector("#myAudio");

btnPlayMusic.addEventListener("click", function() {
    if(audio.paused) {
        audio.play();
        btnPlayMusic.textContent = "Pause";
    }

    else {
        audio.pause();
        btnPlayMusic.textContent = "Play music";
    }
})


const buttonSnow = document.querySelector('#btn');
const snow = document.querySelector("#particles-js");

buttonSnow.addEventListener('click', startSnow);

function startSnow() {
    snow.classList.toggle("active");
}



particlesJS("particles-js", {
    "particles":{
        "number":{
            "value":800,
            "density":{
                "enable":true,
                "value_area":800
            }
        },
        "color":{
            "value":"#fff"
        },
        "shape":{
            "type":"circle","stroke":{
                "width":0,
                "color":"#000000"
            },
            "polygon":{
                "nb_sides":5
            },
            "image":{
                "src":"img/github.svg",
                "width":100,
                "height":100
            }
        },
        "opacity":{
            "value":0.5,
            "random":true,
            "anim":{
                "enable":false,
                "speed":1,
                "opacity_min":0.1,
                "sync":false
            }
        },
        "size":{
            "value":10,
            "random":true,
            "anim":{
                "enable":false,
                "speed":40,
                "size_min":0.1,
                "sync":false
            }
        },
        "line_linked":{
            "enable":false,
            "distance":500,
            "color":"#ffffff",
            "opacity":0.4,
            "width":2
        },
        "move":{
            "enable":true,
            "speed":2,
            "direction":"bottom",
            "random":false,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{
                "enable":false,
                "rotateX":600,
                "rotateY":1200
            }
        }
    },
    "interactivity":{
        "detect_on":"canvas",
        "events":{
            "onhover":{
                "enable":true,
                "mode":"bubble"
            },
            "onclick":{
                "enable":true,
                "mode":"repulse"
            },
            "resize":true
        },
        "modes":{
            "grab":{
                "distance":400,
                "line_linked":{
                    "opacity":0.5
                }
            },
            "bubble":{
                "distance":100,
                "size":50,
                "duration":0.3,
                "opacity":3,
                "speed":10
            },
            "repulse":{
                "distance":200,
                "duration":0.4
            },
            "push":{
                "particles_nb":4
            },
            "remove":{
                "particles_nb":2
            }
        }
    },
    "retina_detect":true
});