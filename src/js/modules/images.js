import calcScroll from './calcscroll';

const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img'),
        scroll = calcScroll();

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.cssText = `
        justify-content: center;
        align-items: center;
        display: none;
        background-color: rgba(0, 0, 0, .8);
        `;
        
    bigImage.style.cssText = `
        max-width: 80%;
        max-height: 80%;    
    `;

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.cssText = `
                overflow: hidden;
                margin-right: ${scroll}px;
                `;
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.cssText = `
                overflow: '';
                margin-right: 0;
            `;
        }
    })
};

export default images;