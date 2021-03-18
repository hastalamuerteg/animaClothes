const slider = function () {
    const btnRight = document.querySelector('.slider-btn-right');
    const btnLeft = document.querySelector('.slider-btn-left');

    //Putting slides side by side
    const slides = document.querySelectorAll('.slide');
    const dotContainer = document.querySelector('.dots');

    const maxSlide = slides.length;
    let currentSlide = 0;

    const createDots = function () {
      slides.forEach((_, i) => {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots_dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots_dot')
        .forEach((dot) => dot.classList.remove('dots_dot_active'));

      document
        .querySelector(`.dots_dot[data-slide="${slide}"]`)
        .classList.add('dots_dot_active');
    };

    const goToSlide = function (slide) {
      slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
      });
    };

    // PREVIOUS SLIDE
    const prevSlide = function () {
      if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
      } else {
        currentSlide--;
      }
      goToSlide(currentSlide);
      activateDot(currentSlide);
    };

    //NEXT SLIDE
    const nextSlide = function () {
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      goToSlide(currentSlide);
      activateDot(currentSlide);
    };

    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);
    };

    init();

    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', (e) => {
      e.key === 'ArrowLeft' && prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('dots_dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };

  slider();


  const handleCardPerspective = () => {

  const showCaseCards = document.querySelectorAll('.product-card');

  showCaseCards.forEach((card) => card.addEventListener('mouseover', () => {
      const {id,gender} = card.dataset;
      const isFacingForward = false;
      const imageSource = `./images/${gender}-${isFacingForward}-${id}.jpg`;

      if(isFacingForward) {
        card.setAttribute('src', imageSource);
        }else {
        card.setAttribute('src', imageSource);
        }
    })
  );

  showCaseCards.forEach((card) => card.addEventListener('mouseout', () => {
    const {id,gender} = card.dataset;
    const isFacingForward = true;
    const imageSource = `./images/${gender}-${isFacingForward}-${id}.jpg`;

    if(isFacingForward) {
      card.setAttribute('src', imageSource);
      }
  } ))

};

handleCardPerspective();