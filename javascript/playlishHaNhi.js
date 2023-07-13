"use strict"

const topSongSinger = $(".topSongSinger")

var appSongHaNhi = {
    isPlaying: false,
    currentIndex: 0,
    arrSongHaNhi: [
       
        {
            NameSong: "Vì Em Chưa Bao Giờ Khóc",
            Singer: "Hà Nhi, A.C Xuân Tài",
            path: "./music/viemchuabaogiokhoc.mp3",
            image: "./image/viemchuabaogiokhoc_author.jpg",
        },
        {
            NameSong: "Dĩ Vãng Nhạt Nhòa",
            Singer: "Hà Nhi",
            path: "./music/listMusicHaNhi/DiVangNhatNhoa.mp3",
            image: "./image/imgSingerHaNhi/DiVangNhatNhoa.jpg",
        },
        {
            NameSong: "Hoa Bằng Lăng",
            Singer: "Hà Nhi",
            path: "./music/listMusicHaNhi/HoaBangLang.mp3",
            image: "./image/imgSingerHaNhi/HoaBangLang.jpg",
        },
        {
            NameSong: "Vẫn Nhớ",
            Singer: "Hà Nhi",
            path: "./music/listMusicHaNhi/VanNho.mp3",
            image: "./image/imgSingerHaNhi/VanNho.jpg",
        },
    ],

    renderHaNhi : function(){
        const data = this.arrSongHaNhi.map((song,index)=>{
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

    definePropertiesHaNhi: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.arrSongHaNhi[this.currentIndex]
            }
        })
    },

    loadCurrentSongHaNhi: function () {
      
        topMusic__img.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        // console.log(audio);
        // console.log(topMusic__img);
    },


    eventTopSongSingerHaNhi: function(){
        const _this = this
        
        topSongSinger.onclick = function(e){
            const songNode = e.target.closest('.recentPlayed__itemImage:not(.active)')
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index)
                
                _this.loadCurrentSongHaNhi()
                _this.renderHaNhi()
                audio.play()
            }
            
        }
    },

    start: function () {
        this.definePropertiesHaNhi()
        this.loadCurrentSongHaNhi()
        this.eventTopSongSingerHaNhi()
        this.renderHaNhi()
    }
}
appSongHaNhi.start()



