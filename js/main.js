var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(index){
    showSlides(slideIndex += index);
}

function currentSlides(index){
    showSlides(slideIndex = index);
}

function showSlides(index){
    var slides = document.getElementsByClassName("content-main-scroller-block-item");
    if(index > slides.length){
        slideIndex = 1
    }
    if(index < 1){
        slideIndex = slides.length;
    }

    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function tab() {
    let tabNav = document.querySelectorAll('.tabs-nav-item'),
    tabContent = document.querySelectorAll('.tab'),
    tabName; 

    tabNav.forEach(item=> {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav(){
        tabNav.forEach(item => {
            item.classList.remove('active'); 
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName){
        tabContent.forEach( item => {
            item.classList.contains(tabName)? item.classList.add('active'): item.classList.remove('active');
        })
    }
};

let offset = 0;
const sliderLine = document.querySelector('.conent-main-block-slider-items');

function nextBlock(){
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}

function blockSlider(){
    document.querySelector('.slider-prev').addEventListener('click', function () {
        offset = offset - 256;
        if (offset < 0) {
            offset = 768;
        }
        sliderLine.style.left = -offset + 'px';
    });
}
