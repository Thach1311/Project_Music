"use strict"


const anotherSongs__Form = $(".anotherSongs__Form")
console.log(anotherSongs__Form);
const topMusic = $(".topMusic")
console.log(topMusic);

var appSongAnother = {
    isPlaying: false,
    currentIndex: -1,
    arrSongAnother: [
        {
            NameSong: "Đẫy Xe Bò",
            Singer: "Phương Mỹ Chi",
            path: "./music/listMusicAnother/DayXeBo.mp3",
            image: "./image/imgSingerAnother/DayXeBo.jpg",
        },
        {
            NameSong: "Đưa Em Về Nhà",
            Singer: "GREY D,Chillies",
            path: "./music/listMusicAnother/DuaEmVeNha.mp3",
            image: "./image/imgSingerAnother/DuaEmVeNha.jpg",
        },
        {
            NameSong: "Sự Mập Mờ",
            Singer: "Suni Hạ Linh, GREY D",
            path: "./music/listMusicAnother/SuMapMo.mp3",
            image: "./image/imgSingerAnother/SuMapMo.jpg",
        },
        {
            NameSong: "Ưng Quá Chừng",
            Singer: "AMEE",
            path: "./music/listMusicAnother/UngQuaChung.mp3",
            image: "./image/imgSingerAnother/UngQuaChung.jpg",
        },
       

    ],

    renderAnother: function () {

        const data = this.arrSongAnother.map((song, index) => {
            return `
                <div class="anotherSongs__item ${index === this.currentIndex ? 'active' : ''}"data-index="${index}">

                <div class="anotherSongs__imgNother" style="background-image: url('${song.image}');">

                </div>
                <div class="anotherSongs__inforSinger">
                    <p>${song.NameSong}<br> ${song.Singer} </p>
                    
                </div>
                <div class="another__gifMusic  ${index === this.currentIndex ? 'active' : ''}">
                                
                </div>
        </div>
            `
        })
        anotherSongs__Form.innerHTML = data.join("\n")
    },


    

    definePropertiesAnother: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.arrSongAnother[this.currentIndex]
            }
        })
    },

    loadCurrentSongAnother: function () {

        topMusic__img.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        // console.log(audio);
        // console.log(topMusic__img);
    },


    eventTopSongSingerAnother: function () {
        const _this = this
        const iconwageGif = $(".iconwageGif")
        console.log(iconwageGif);
        const topMusic_listMusic = $(".topMusic_listMusic")
        console.log(topMusic_listMusic);
        
        anotherSongs__Form.onclick = function (e) {
            const songNode = e.target.closest('.anotherSongs__item:not(.active)')
           
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index)

                _this.loadCurrentSongAnother()
                _this.renderAnother()
                audio.play()

               
                
            }
        }

        



    },

    start: function () {
        this.definePropertiesAnother()
        // this.loadCurrentSongAnother()
        this.eventTopSongSingerAnother()
        this.renderAnother()
        
    }
}
appSongAnother.start()



