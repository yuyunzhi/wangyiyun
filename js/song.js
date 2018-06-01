$(function(){
    $.get('/lyric.json').then(function(object){
        let lyric = object.lyric
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.*)$/
        array = array.map(function(string,index){
            let matches = string.match(regex)
            console.log(matches)
            if(matches){
                return {
                    time:matches[1],
                    words:matches[2]
                }
            }
        })
        console.log(array)
        let $line = $('.lyric>.line')
        array.map(function(object){
            let $p = $(`<p>${object.words}</p>`)
            $p.attr('data-time',object.time)
            $line.append($p)
        })

    })

    let audio = document.createElement('audio') 
    audio.src='../xxxx.mp3'
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

    }

)