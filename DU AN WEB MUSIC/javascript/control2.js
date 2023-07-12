"use strict"

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



    render2 : function(){
        const data = this.arrSong.map((song,index)=>{
            return `<div class="itemSongSinger">
                        <div class="recentPlayed__itemImage" style=" background-image: url('${song.image}');margin-bottom:20px">
                        
                        </div>
                        <div class="recentPlayed__item--nameSong">
                             ${song.NameSong}
                        </div>
                    </div>`
        })
        document.querySelector(".topSongSinger").innerHTML = data.join("\n")
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

    start: function () {
        this.defineProperties()
        this.loadCurrentSong()
        this.render2()
    }
}
appSong.start()



