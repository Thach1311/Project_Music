"use strict"
const $ = document.querySelector.bind(document)



var appSong = {
    arrSong : [
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

  
    render : function() {
        
        const htmls = this.arrSong.map((song,index) => {
           
            return `
            <!-- list nhac -->
            <div class="topMusic__formList">
                <div class="topMusic_listMusic">
                    <div>${index+1}</div>
                    <i class="fa-sharp fa-regular fa-heart"></i>
                    <div class="topMusic__listMusic--infor">
                        <p>${song.NameSong}</p>
                        <p>${song.Singer}</p>
                    </div>
                </div>`
              
            
        })
        $(".topMusic__formList").innerHTML = htmls.join("\n");
    },
    

    start : function(){
        this.render()
    }
}
appSong.start()





 

