$(function(){

    let id = location.search.match(/\bid=([^&]*)/)[1]
    $.get('/json/song.json').then(function(response){
        let songs = response
        let song = songs.filter((s)=>{
            return s.id == id
        })
        let url = song[0].url
        let name = song[0].descript
        let lyric = song[0].lyric
        initPlayer(url)
        initText(name,lyric)
    })
    
})



        
function initPlayer(url){
    $('.song-description>h2').text(name)
    let audio = document.createElement('audio') 
    audio.src=url
    audio.oncanplay=function(){
        audio.play()
        $('.disc').addClass('active')
        $('.icon-pause').addClass('playing')
    }
    $('.icon-pause').on('click',function(){
        $('.icon-pause').removeClass('playing')
        $('.icon-play').addClass('playing')
        $('.disc').removeClass('active')
        audio.pause();
    })
    $('.icon-play').on('click',function(){
        $('.icon-play').removeClass('playing')
        $('.icon-pause').addClass('playing')
        $('.disc').addClass('active')
        audio.play();
    })
    setInterval(()=>{
        console.log(audio.currentTime)
    },1000)
}

function initText(name,lyric){
    let array = lyric.split('\n')
    let regex = /^\[(.+)\](.*)$/
    array = array.map(function(string,index){
        let matches = string.match(regex)
        if(matches){
            return {
                time:matches[1],
                words:matches[2]
            }
        }
    })
    let $line = $('.lyric>.line')
    array.map(function(object){
        let $p = $(`<p>${object.words}</p>`)
        $p.attr('data-time',object.time)
        $line.append($p)
    })
}