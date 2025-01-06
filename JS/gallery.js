const images = [
    {
      preview: 'img/small/img1.jpg',
      original: 'img/big/img1.png',
      description: 'Перше зображення',
    },
    {
      preview: 'img/small/img2.jpg',
      original: 'img/big/img2.png',
      description: 'Друге зображення',
    },
    {
      preview: 'img/small/img3.jpg',
      original: 'img/big/img3.png',
      description: 'Четверте зображення',
    },
        {
          preview: 'img/small/img4.jpg',
          original: 'img/big/img4.jpg',
          description: 'Четверте зображення',
        },
        {
          preview: 'img/small/img5.jpg',
          original: 'img/big/img5.jpg',
          description: 'П’яте зображення',
        },
        {
          preview: 'img/small/img6.jpg',
          original: 'img/big/img6.jpg',
          description: 'Шосте зображення',
        },
        {
          preview: 'img/small/img7.jpg',
          original: 'img/big/img7.jpg',
          description: 'Сьоме зображення',
        },
        {
          preview: 'img/small/img8.jpg',
          original: 'img/big/img8.jpg',
          description: 'Восьме зображення',
        },
        {
          preview: 'img/small/img9.jpg',
          original: 'img/big/img9.jpg',
          description: 'Дев’яте зображення',
        },
        {
          preview: 'img/small/img10.jpg',
          original: 'img/big/img10.jpg',
          description: 'Десяте зображення',
        },
        {
          preview: 'img/small/img11.jpg',
          original: 'img/big/img11.jpg',
          description: 'Одинадцяте зображення',
        },
        {
          preview: 'img/small/img12.jpg',
          original: 'img/big/img12.jpg',
          description: 'Дванадцяте зображення',
        },
        {
          preview: 'img/small/img13.jpg',
          original: 'img/big/img13.jpg',
          description: 'Тринадцяте зображення',
        },
        {
          preview: 'img/small/img14.jpg',
          original: 'img/big/img14.jpg',
          description: 'Чотирнадцяте зображення',
        },
        {
          preview: 'img/small/img15.jpg',
          original: 'img/big/img15.jpg',
          description: 'П’ятнадцяте зображення',
        },
        {
          preview: 'img/small/img16.jpg',
          original: 'img/big/img16.jpg',
          description: 'Шістнадцяте зображення',
        },
        {
          preview: 'img/small/img17.jpg',
          original: 'img/big/img17.jpg',
          description: 'Сімнадцяте зображення',
        },
        {
          preview: 'img/small/img18.jpg',
          original: 'img/big/img18.jpg',
          description: 'Вісімнадцяте зображення',
        },
        {
          preview: 'img/small/img19.jpg',
          original: 'img/big/img19.jpg',
          description: 'Дев’ятнадцяте зображення',
        },
        {
          preview: 'img/small/img20.jpg',
          original: 'img/big/img20.jpg',
          description: 'Двадцяте зображення',
        },
        {
          preview: 'img/small/img21.jpg',
          original: 'img/big/img21.jpg',
          description: 'Двадцять перше зображення',
        },
        {
          preview: 'img/small/img22.jpg',
          original: 'img/big/img22.jpg',
          description: 'Двадцять друге зображення',
        },
        {
          preview: 'img/small/img23.jpg',
          original: 'img/big/img23.jpg',
          description: 'Двадцять третє зображення',
        },
        {
          preview: 'img/small/img24.jpg',
          original: 'img/big/img24.jpg',
          description: 'Двадцять четверте зображення',
        },
        {
          preview: 'img/small/img25.jpg',
          original: 'img/big/img25.jpg',
          description: 'Двадцять п’яте зображення',
        },
        {
          preview: 'img/small/img26.jpg',
          original: 'img/big/img26.jpg',
          description: 'Двадцять шосте зображення',
        },
        {
          preview: 'img/small/img27.jpg',
          original: 'img/big/img27.jpg',
          description: 'Двадцять сьоме зображення',
        },
        {
          preview: 'img/small/img28.jpg',
          original: 'img/big/img28.jpg',
          description: 'Двадцять восьме зображення',
        },
        {
          preview: 'img/small/img29.jpg',
          original: 'img/big/img29.jpg',
          description: 'Двадцять дев’яте зображення',
        },
        {
          preview: 'img/small/img30.jpg',
          original: 'img/big/img30.jpg',
          description: 'Тридцяте зображення',
        },      
  ];
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML  = images.map(({preview,original,description})=>{
    return`<li class = "gallery__item">
    <img class = "gallery__image" src ="${preview}" data-original ="${original}" alt = "${description}"/>
    </li>`;
  }).join('');

gallery.addEventListener('click',(event)=>{
   let target = event.target;
   if(target.tagName !='IMG') return;
    Open_modal_window(target);
});

const Open_modal_window = (img)=>{
    basicLightbox.create(`
    <img src="${img.dataset.original}" alt="${img.alt}">
  `).show();
};
