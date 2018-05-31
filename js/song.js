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
    audio.src='https://dl.stream.qqmusic.qq.com/C400003IdQud1T4ZlL.m4a?vkey=26CFDB5B006B4BDB455930334194F6FE30B258799247DA76B9C3307DD10CF119A3C43321018A3802BD1D52EB98B3816251F506AFEC3C7A06&guid=4960192346&uin=0&fromtag=66'
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