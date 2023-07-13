"use strict"

const topSongSinger = $(".topSongSinger")

var appSongPhiPhuong = {
    isPlaying: false,
    currentIndex: 0,
    arrSongPhiPhuong: [
        {
            NameSong: "Răng Khôn",
            Singer: "Phí Phương Anh, RIN9",
            path: "./music/rangkhon.mp3",
            image: "./image/rangkhon_author.jpg",
        },
        {
            NameSong: "Cánh Bướm Dối Gian",
            path: "./music/listMusicPhiPhuong/CanhBuomDoiGian.mp3",
            image: "./image/imgSingerPhiPhuong/CanhBuomDoiGian.jpg",
        },
        {
            NameSong: "Mập Mờ",
            path: "./music/listMusicPhiPhuong/MapMo.mp3",
            image: "./image/imgSingerPhiPhuong/MapMo.jpg",
        },
        {
            NameSong: "Pháo Hoa",
            path: "./music/listMusicPhiPhuong/PhaoHoa.mp3",
            image: "./image/imgSingerPhiPhuong/PhaoHoa.jpg",
        },
        

    ],

    renderPhiPhuong: function () {
        const data = this.arrSongPhiPhuong.map((song, index) => {
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

    definePropertiesPhiPhuong: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.arrSongPhiPhuong[this.currentIndex]
            }
        })
    },

    loadCurrentSongPhiPhuong: function () {

        topMusic__img.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        // console.log(audio);
        // console.log(topMusic__img);
    },


    eventTopSongSingerPhiPhuong: function () {
        const _this = this

        topSongSinger.onclick = function (e) {
            const songNode = e.target.closest('.recentPlayed__itemImage:not(.active)')
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index)

                _this.loadCurrentSongPhiPhuong()
                _this.renderPhiPhuong()
                audio.play()
            }

        }
    },

    start: function () {
        this.definePropertiesPhiPhuong()
        this.loadCurrentSongPhiPhuong()
        this.eventTopSongSingerPhiPhuong()
        this.renderPhiPhuong()
    }
}
appSongPhiPhuong.start()



