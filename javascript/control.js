"use strict"
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnPlay = $(".btn-toggle-play")
const audio = $("audio")
const topMusic__img = $(".topMusic__img")
const seekbar = $(".seekbar")
const currTime = $(".currTime")
const durrTime = $(".durrTime")
const btn_nextSong = $(".playerBar__item-forward-fast")
const btn_backSong = $(".playerBar__item-backward-fast")
const topMusic_listMusic = $(".topMusic_listMusic")
const timeMusic = $(".timeMusic")
const topMusic__formList = $(".topMusic__formList")
const heart = $(".fa-solid.fa-heart")

const right__anotherSongs = $(".right__anotherSongs")
console.log(right__anotherSongs);


var appSong = {
    isPlaying: false,
    currentIndex: 0,
    arrSong: [
        {
            NameSong: "Vì Em Chưa Bao Giờ Khóc",
            Singer: "Hà Nhi, A.C Xuân Tài",
            path: "./music/viemchuabaogiokhoc.mp3",
            image: "./image/viemchuabaogiokhoc_author.jpg",
        },
        {
            NameSong: "Mưa Tháng Sáu",
            Singer: "Trung Quân, Hứa Kim Tuyền",
            path: "./music/muathangsau.mp3",
            image: "./image/muathangsau_author.jpg",
        },
        {
            NameSong: "Răng Khôn",
            Singer: "Phí Phương Anh, RIN9",
            path: "./music/rangkhon.mp3",
            image: "./image/rangkhon_author.jpg",
        },
        {
            NameSong: "Tình Lãng Phí",
            Singer: "Văn Mai Hương",
            path: "./music/tinhlangphi.mp3",
            image: "./image/tinhlangphi_author.jpg",
        },
    ],


    render: function () {

        const htmls = this.arrSong.map((song, index) => {

            return `
                <div class="topMusic__formList">
                        <div class="topMusic_listMusic ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                            <div style="display: flex;">
                                <div style="display: flex;align-items: center;">
                                    <div>${index + 1}</div>
                                  
                                    <i class="fa-solid fa-heart "></i>
                                 

                                </div>

                                <div class="topMusic__listMusic--infor">
                                    <p>${song.NameSong}</p>
                                    <p>${song.Singer}</p>
                                </div>
                            </div>

                            <div class="iconwageGif"></div>


                            <div>
                                <span class="timeMusic"></span>
                            </div>

                        </div>

                `

        })
        topMusic__formList.innerHTML = htmls.join("\n");
    },


    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.arrSong[this.currentIndex]
            }
        })
    },

    loadCurrentSong: function () {
        topMusic__img.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        console.log(audio);
        console.log(topMusic__img);
    },


    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.arrSong.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
        console.log(this.currentIndex);
    },

    backSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.arrSong.length - 1
        }

        this.loadCurrentSong()
        console.log(this.currentIndex);
    },

    handEvent: function () {
        const _this = this
        btnPlay.onclick = function () {
            if (_this.isPlaying) {
                audio.pause()

            }
            else {
                audio.play()

            }
        }

        audio.onplay = function () {
            _this.isPlaying = true
            btnPlay.classList.add("playing")
        }
        audio.onpause = function () {
            _this.isPlaying = false
            btnPlay.classList.remove("playing")
        }

        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                seekbar.value = progressPercent

            }
        }

        seekbar.onchange = function (e) {

            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        btn_nextSong.onclick = function () {
            _this.nextSong()
            audio.play()
            _this.render()
        }
        btn_backSong.onclick = function () {
            _this.backSong()
            audio.play()
            _this.render()

        }



        topMusic__formList.onclick = function (e) {
            const songNode = e.target.closest('.topMusic_listMusic:not(.active)')
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.render()
                audio.play()
            }

        }

        right__anotherSongs.onclick = function () {

            console.log("right");
                const topMusic_listMusic = $(".topMusic_listMusic")
                const iconwageGif = $(".iconwageGif")
                topMusic_listMusic.classList.add("not")
                iconwageGif.classList.add("not")
           

        }

       
    },




    start: function () {
        this.defineProperties()
        this.loadCurrentSong()
        this.handEvent()

        this.render()

    }
}
appSong.start()


function displayTimer() {



    const { duration, currentTime } = audio;
    currTime.textContent = formatTimer(currentTime)
    if (!duration) {
        currTime.textContent = "0.00"
    }
    else {
        durrTime.textContent = formatTimer(duration)
        timeMusic.textContent = formatTimer(duration)
    }

}

function formatTimer(number) {
    const minutes = Math.floor(number / 60)
    const seconds = Math.floor(number - minutes * 60)
    return `${minutes}:${seconds}`

}


displayTimer()
setInterval(displayTimer, 1000)

