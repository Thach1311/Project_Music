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
                        <div class="topMusic_listMusic  ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
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

                if (_this.currentIndex == 0) {

                    console.log("ha nhi");
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

                        renderHaNhi: function () {
                            const data = this.arrSongHaNhi.map((song, index) => {
                                return `<div class="itemSongSinger">
                        <div class="recentPlayed__itemImage ${index === this.currentIndex ? 'active' : ''}" style=" background-image: url('${song.image}');margin-bottom:20px" data-index = "${index}">
                        
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


                        eventTopSongSingerHaNhi: function () {
                            const _this = this

                            topSongSinger.onclick = function (e) {
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


                    audio.play()

                }
                else if (_this.currentIndex == 1) {
                    console.log("Trung Quan");
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
                        <div class="recentPlayed__itemImage ${index === this.currentIndex ? 'active' : ''}" style=" background-image: url('${song.image}');margin-bottom:20px" data-index = "${index}">
                        
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


                    audio.play()


                }

                else if (_this.currentIndex == 2) {
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
                        <div class="recentPlayed__itemImage ${index === this.currentIndex ? 'active' : ''}" style=" background-image: url('${song.image}');margin-bottom:20px" data-index = "${index}">
                        
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

                    audio.play()


                }

                else if (_this.currentIndex == 3) {
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
                        <div class="recentPlayed__itemImage ${index === this.currentIndex ? 'active' : ''}" style=" background-image: url('${song.image}');margin-bottom:20px" data-index = "${index}">
                        
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


                    audio.play()

                }
            }

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

