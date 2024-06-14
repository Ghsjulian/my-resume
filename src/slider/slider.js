document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.getElementById('checkbox');
  checkbox.addEventListener('change', function(){
    setInterval(moveRight, 3000);
  });
  
  var slider = document.getElementById('slider');
  var sliderUl = slider.querySelector('ul');
  var sliderLi = sliderUl.querySelectorAll('li');
  var slideCount = sliderLi.length;
  var slideWidth = sliderLi[0].offsetWidth;
  var slideHeight = sliderLi[0].offsetHeight;
  var sliderUlWidth = slideCount * slideWidth;
  
  slider.style.width = slideWidth + 'px';
  slider.style.height = slideHeight + 'px';
  
  sliderUl.style.width = sliderUlWidth + 'px';
  sliderUl.style.marginLeft = -slideWidth + 'px';
  
  sliderUl.appendChild(sliderUl.querySelector('li:last-child'));

    function moveLeft() {
        sliderUl.style.transition = 'left 0.2s';
        sliderUl.style.left = slideWidth + 'px';
        setTimeout(function() {
            sliderUl.style.transition = 'none';
            sliderUl.style.left = '';
            sliderUl.insertBefore(sliderUl.querySelector('li:last-child'), sliderUl.querySelector('li:first-child'));
        }, 200);
    };

    function moveRight() {
        sliderUl.style.transition = 'left 0.2s';
        sliderUl.style.left = -slideWidth + 'px';
        setTimeout(function() {
            sliderUl.style.transition = 'none';
            sliderUl.style.left = '';
            sliderUl.appendChild(sliderUl.querySelector('li:first-child'));
        }, 200);
    };

    var controlPrev = document.querySelector('a.control_prev');
    controlPrev.addEventListener('click', function () {
        moveLeft();
    });

    var controlNext = document.querySelector('a.control_next');
    controlNext.addEventListener('click', function () {
        moveRight();
    });
});
