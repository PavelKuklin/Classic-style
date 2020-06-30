const calcScroll = () => {
    let div = document.createElement('div');

    div.style.cssText = `
    width: 50px;
    height: 50px;
    overflow-Y: scroll;
    visibility: hidden;`;

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
    
}

export default calcScroll;