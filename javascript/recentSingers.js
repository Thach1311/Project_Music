"use strict"




const recentSingers__Form = $(".recentSingers__Form")
const recentSingers__item = $(".recentSingers__item")

var appSongRecent = {
    isPlaying: false,
    currentIndex: 0,
    arrSongRecent: [
        {

            Singer: "Hà Nhi",
            online: "3 minutes ago",
            avatar: '/image/imgSingerHaNhi/avata.jpg'
        },
        {

            Singer: "Trung Quân",
            online: "10 minutes ago",
            avatar: '/image/imgSingerTrungQuan/avata.jpg'

        },
        {

            Singer: "Phí Phương Anh",
            online: "6 minutes ago",
            avatar: '/image/imgSingerPhiPhuong/avata.jpg'

        },
        {

            Singer: "Văn Mai Hương",
            online: "7 minutes ago",
            avatar: '/image/imgSingerVanMaiHuong/avata.jpg'
        },
    ],


    render: function () {

        const htmls = this.arrSongRecent.map((song, index) => {

            return `
                <div class="recentSingers__item ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                                <div class="recentSingers__imgHaNhi" style="background-image: url('${song.avatar}');">

                                </div>
                                <div class="recentSinger__inforSinger">
                                    <p>${song.Singer} <br> ${song.online}</p>
                                </div>
                                <div class="listMusic__OfSingerGif  ${index === this.currentIndex ? 'active' : ''}">
                                <img src="./image/list.gif" alt="">
                            </div>
                            </div>
               `
        })
        recentSingers__Form.innerHTML = htmls.join("\n");
    },









    handEvent: function () {
        const _this = this

        recentSingers__Form.onclick = function (e) {
            const songNode = e.target.closest('.recentSingers__item:not(.active)')
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index)
                // _this.loadCurrentSong()
                _this.render()
                // audio.play()
                // recentSingers__item.classList.add("active")
                console.log(songNode);
                console.log(_this.currentIndex);

                if (_this.currentIndex == 0) {

                    console.log("ha nhi");
                    "use strict"

                    const topSongSinger = $(".topSongSinger")

                    var appSongHaNhi = {
                        isPlaying: false,
                        currentIndex: 0,
                        arrSongRecentHaNhi: [

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
                            const data = this.arrSongRecentHaNhi.map((song, index) => {
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
                                    return this.arrSongRecentHaNhi[this.currentIndex]
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
                        arrSongRecentTrungQuan: [
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
                            const data = this.arrSongRecentTrungQuan.map((song, index) => {
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
                                    return this.arrSongRecentTrungQuan[this.currentIndex]
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
        this.handEvent()
        this.render()

    }
}
appSongRecent.start()



