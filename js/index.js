

$(function(){
    $.get('../json/song.json').then(function(response){
        let items = response
        items.forEach((i)=>{
            let $li = $(`
            <li>
                <h3>${i.name}</h3>
                <div class='sq'></div>
                <p>${i.descript}</p>
                <a href="./song.html?id=${i.id}">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg>
                </a>
            </li>           
            `)
            $('#lastestMusic').append($li)
        })
        $('.loading').remove()

    }  )

})



/*****8
 * 
 * 
 * 
 * 
 * 
 * 
 * <ol>
            <li>
                <h3>大千世界</h3>
                <div class='sq'></div>
                <p>许嵩-大千世界</p>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg>
                </a>
            </li>
            <li>
                <h3>伶仃</h3>
                <div class='sq'></div>
                <p>霍尊 / 张力尹</p>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg>
                </a>
            </li>
            <li>
                <h3>天后</h3>
                <div class='sq'></div>
                <p>陈势安-天后-再爱一遍</p>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg>
                </a>
            </li>
            <li>
                <h3>夜色(粤语版)</h3>
                <div class='sq'></div>
                <p>梁剑东-夜色</p>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg>
                </a>
            </li>
            <li>
                <h3>初梦</h3>
                <div class='sq'></div>
                <p>大梦想家乐园-初梦</p>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg>
                </a>
            </li>
            <li>
                <h3>安和桥</h3>
                <div class='sq'></div>
                <p>宋冬野-安和桥北</p>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg>
                </a>
            </li>
            <li>
                <h3>与你常在</h3>
                <div class='sq'></div>
                <p>与你常在-eason and the duo band</p>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg> 
                </a>
            </li>
            <li>
                <h3>Girl Like You</h3>
                <div class='sq'></div>
                <p>Maroon 5 / Cardi B -Girls Like You</p>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg>
                </a>
            </li>
            <li>
                <h3>Rain after Summer</h3>
                <div class='sq'></div>
                <p>羽肿-Rain after Summer</p>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg>
                </a>
            </li>
            <li>
                <h3>Like That</h3>
                <div class='sq'></div>
                <p>Like That-吴亦凡</p>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play1"></use>
                    </svg>
                </a>
            </li>
        </ol>
 */