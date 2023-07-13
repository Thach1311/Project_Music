"use strict"

// const topSongSinger = $(".topSongSinger")

var appSongTrungQuan = {
    isPlaying: false,
    currentIndex: 0,
    arrSongTrungQuan: [
        {
            NameSong: "Mưa Tháng Sáu",
            path: "./music/muathangsau.mp3",
            image: "./image/muathangsau_author.jpg",
        },
        {
            NameSong: "Những Ngày Mưa Cô Đơn",
            path: "./music/listMusicTrungQuan/NhungNgayMuaCoDon.mp3",
            image: "./image/imgSingerTrungQuan/NhungNgayMuaCoDon.jpg",
        },
        {
            NameSong: "Nuoc Chay Hoa Troi",
            path: "./music/listMusicTrungQuan/NuocChayHoaTroi.mp3",
            image: "./image/imgSingerTrungQuan/NuocChayHoaTroi.jpg",
        },
        {
            NameSong: "Sau Cơn Mưa",
            path: "./music/listMusicTrungQuan/SauConMua.mp3",
            image: "./image/imgSingerTrungQuan/SauConMua.jpg",
        },

    ],

    renderTrungQuan: function () {
        const data = this.arrSongTrungQuan.map((song, index) => {
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

    definePropertiesTrungQuan: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.arrSongTrungQuan[this.currentIndex]
            }
        })
    },

    loadCurrentSongTrungQuan: function () {

        topMusic__img.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        // console.log(audio);
        // console.log(topMusic__img);
    },


    eventTopSongSingerTrungQuan: function () {
        const _this = this

        topSongSinger.onclick = function (e) {
            const songNode = e.target.closest('.recentPlayed__itemImage:not(.active)')
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index)

                _this.loadCurrentSongTrungQuan()
                _this.renderTrungQuan()
                audio.play()
            }

        }
    },

    start: function () {
        this.definePropertiesTrungQuan()
        this.loadCurrentSongTrungQuan()
        this.eventTopSongSingerTrungQuan()
        this.renderTrungQuan()
    }
}
appSongTrungQuan.start()



