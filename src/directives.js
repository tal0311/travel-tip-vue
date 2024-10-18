

const highlight = {
    mounted(el) {
        el.classList.add('is-highlight')
    }
}

const defaultImg = {
    mounted(el) {
        el.onerror = () => {
            el.src = 'https://via.placeholder.com/300';
            console.debug('Failed to load image, using placeholder');
        };
       
    }
};



export default { highlight, defaultImg }

