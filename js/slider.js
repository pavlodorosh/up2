document.addEventListener('DOMContentLoaded', function(){

    let sliderblockWidth = document.querySelector('.slider-block').clientWidth;
    console.log(sliderblockWidth);

    let i = 0;

    let slides = document.querySelectorAll('.slide').length;
    console.log(slides);

    let sliderPanel = document.querySelector('.slider-panel');
    console.log(sliderPanel);

    let startPosX, endPosX;

    let isDragging = false;

    document.querySelectorAll('.slide').forEach( function(slide){
        console.log(slide);
        slide.style.width = sliderblockWidth + 'px';
    });

    document.querySelector('.right').addEventListener('click', function(){
        console.log('click', i ,'right');
        // i += 1;
        // if ( i >= slides){
        //     i = 0;
        // }
        i = i + 1  >= slides ? 0 : i + 1;
        updateSlider();
    });
    document.querySelector('.left').addEventListener('click', function(){
        console.log('click', i ,'left');
        // i -= 1;
        // if ( i < 0 ){
        //     i = slides - 1;
        // }
        i = i - 1 < 0 ? slides - 1 : i - 1;
        // if( i < 0 ) {
        //     i = slides - 1;
        // }else{
        //     i = i - 1;
        //     // i -= 1;
        // }
        updateSlider();
    });

    function updateSlider(){
        console.log(sliderblockWidth);
        console.log(i);
        let pos = i * sliderblockWidth;
        console.log(pos);
        console.log(sliderPanel);
        // sliderPanel.style.left = -pos + 'px';
        sliderPanel.style.transition = 'transform 0.3s ease-in-out';
        sliderPanel.style.transform = `translateX(-${pos}px)`;
    }

    sliderPanel.addEventListener('mousedown',function(event){
        startPosX = event.clientX;
        isDragging = true;
        console.log('mousedown - startPosX - '+startPosX);
    });
    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            endPosX = event.clientX;
            let deltaX = startPosX - endPosX;
            if (deltaX > 50) {
                i += 1;
                if (i >= slides) {
                    i = 0;
                }
                updateSlider();
                isDragging = false;
            } else if (deltaX < -50) {
                i -= 1;
                if (i < 0) {
                    i = slides - 1;
                }
                updateSlider();
                isDragging = false;
            }
        }
    });
    sliderPanel.addEventListener('mouseup',function(event){
        endPosX = event.clientX;
        isDragging = false;
        console.log('mouseup - endPosX - '+endPosX);
        // handlSwipe();
    });

    sliderPanel.addEventListener('touchstart',function(event){
        startPosX = event.touches[0].clientX;
        isDragging = true;
        console.log('touchstart - startPosX - '+startPosX);
    });

    sliderPanel.addEventListener('touchmove', function (event) {
        if (isDragging) {
            endPosX = event.touches[0].clientX;
            let deltaX = startPosX - endPosX;

            if (deltaX > 50) {
                i += 1;
                if (i >= slides) {
                    i = 0;
                }
                updateSlider();
                isDragging = false;
            } else if (deltaX < -50) {
                i -= 1;
                if (i < 0) {
                    i = slides - 1;
                }
                updateSlider();
                isDragging = false;
            }
        }
    });

    sliderPanel.addEventListener('touchend',function(event){
        endPosX = event.changedTouches[0].clientX;
        isDragging = false;
        console.log('touchend - touchend - '+startPosX);
        // handlSwipe();
    });

    // function handlSwipe(){
    //     console.log('handlSwipe');
    //     if(startPosX - endPosX > 50){
    //         i += 1;
    //         if ( i >= slides){
    //             i = 0;
    //         }
    //         updateSlider();
    //     }else if ( endPosX - startPosX > 50){
    //         i -= 1;
    //         if ( i < 0 ){
    //             i = slides - 1;
    //         }
    //         updateSlider();
    //     }
    // }

});