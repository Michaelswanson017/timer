window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer


    let deadLine = '2019-12-16';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000/60) % 60),
            hours = Math.floor((t / (1000*60*60)));

            if (hours < 10 ) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

    


        // hours = Math.floor((t / 1000/60/60) % 24),
        // days = Math.floor((t / (1000*60*60*24)));

        return {
            'total' : t,
            'hours': hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }




    function setClock(id, endtime) {
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadLine);

});




// ПРИМЕР РАБОЧЕГО КОДА

// document.querySelector('input[type="button"]').onclick = function(){	
//     var source = document.querySelector('input[type="text"]').value;
//     alert(addZero(4, source));
   	
// }
// function addZero(digits_length, source){
// 	var text = source + '';
//     while(text.length < digits_length)
//         text = '0' + text;
//     return text;
// }