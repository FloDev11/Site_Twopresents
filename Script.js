const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carrousel {

    constructor(container, items, controls){
        this.carrouselContainer = container;
        this.carrouselControls = controls;
        this.carrouselArray = [...items];
    }

    updateGallery(){
        this.carrouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carrouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });

    }

    setCurrentState(direction){
        if (direction.className == 'gallery-controls-previous'){
            this.carrouselArray.unshift(this.carrouselArray.pop());
        }else{
            this.carrouselArray.push(this.carrouselArray.shift());
        }
        this.updateGallery();
    }

    SetControls() {
        this.carrouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        })
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click',e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })
    }

}

const exampleCarrousel = new Carrousel(galleryContainer, galleryItems, galleryControls);

exampleCarrousel.SetControls();
exampleCarrousel.useControls();