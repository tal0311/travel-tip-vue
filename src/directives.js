

const highlight = {
    mounted(el) {
        el.classList.add('is-highlight')
    }
}

const defaultImg = {
    mounted(el) {
        
        el.classList.toggle('temp-outline');
        el.onload = () => {
            el.classList.toggle('temp-outline');
            console.debug('Image loaded');
        };
        el.onerror = () => {
            el.src = 'https://via.placeholder.com/300';
            console.debug('Failed to load image, using placeholder');
        };
    }
};



export default { highlight, defaultImg }

