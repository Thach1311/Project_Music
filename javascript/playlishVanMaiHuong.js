"use strict"

const topSongSinger = $(".topSongSinger")

var appSongVanMaiHuong = {
    isPlaying: false,
    currentIndex: 0,
    arrSongVanMaiHuong: [
        {
            NameSong: "Tình Lãng Phí",
            Singer: "Văn Mai Hương",
            path: "./music/tinhlangphi.mp3",
            image: "./image/tinhlangphi_author.jpg",
        },
        {
            NameSong: "Cầu Hôn",
            path: "./music/listMusicVanMaiHuong/CauHon.mp3",
            image: "./image/imgSingerVanMaiHuong/CauHon.jpg",
        },
        {
            NameSong: "Chim Quý Trong Lồng",
            path: "./music/listMusicVanMaiHuong/ChimQuyTrongLong.mp3",
            image: "./image/imgSingerVanMaiHuong/ChimQuyTrongLong.jpg",
        },
        {
            NameSong: "Cho Em Một Lần Yêu",
            path: "./music/listMusicVanMaiHuong/ChoEmMotLanYeu.mp3",
            image: "./image/imgSingerVanMaiHuong/ChoEmMotLanYeu.jpg",
        },
        

    ],

    renderVanMaiHuong: function () {
        const data = this.arrSongVanMaiHuong.map((song, index) => {
            return `<div class="itemSongSinger">
                        <div class="recentPlayed__itemImage" style=" background-image: url('${song.image}');margin-bottom:20px" data-index = "${index}">
                        
                        </div>
                        <div class="recentPlayed__item--nameSong">
                             ${song.NameSong}
                        </div>
                    </div>`
        })
        document.querySelector(".topSongSinger").innerHTML = data.join("\n")
    },

    definePropertiesVanMaiHuong: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.arrSongVanMaiHuong[this.currentIndex]
            }
        })
    },

    loadCurrentSongVanMaiHuong: function () {

        topMusic__img.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        // console.log(audio);
        // console.log(topMusic__img);
    },


    eventTopSongSingerVanMaiHuong: function () {
        const _this = this

        topSongSinger.onclick = function (e) {
            const songNode = e.target.closest('.recentPlayed__itemImage:not(.active)')
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index)

                _this.loadCurrentSongVanMaiHuong()
                _this.renderVanMaiHuong()
                audio.play()
            }

        }
    },

    start: function () {
        this.definePropertiesVanMaiHuong()
        this.loadCurrentSongVanMaiHuong()
        this.eventTopSongSingerVanMaiHuong()
        this.renderVanMaiHuong()
    }
}
appSongVanMaiHuong.start()



