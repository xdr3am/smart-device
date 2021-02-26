'use strict';

(function () {
  const accordionItems = document.querySelectorAll(`.accordion`);
  const accordionPanes = document.querySelectorAll(`.accordion__pane`);

  const hidePane = function (button, pane) {
    button.classList.add(`accordion__toggle--inactive`);
    pane.classList.add(`accordion__pane--hidden`);
  };

  const showPane = function (button, pane) {
    button.classList.remove(`accordion__toggle--inactive`);
    pane.classList.remove(`accordion__pane--hidden`);
  };

  const toggleAccordion = function (evt) {
    Array.prototype.forEach.call(accordionPanes, function (accordionPane) {
      const button = accordionPane.closest(`.accordion`).querySelector(`.accordion__toggle`);
      if (button === evt.target && !button.classList.contains(`accordion__toggle--inactive`) || button !== evt.target) {
        hidePane(button, accordionPane);
      } else if (button === evt.target) {
        showPane(button, accordionPane);
      }
    });
  };

  Array.prototype.forEach.call(accordionItems, function (accordion) {
    const accordionToggleButton = accordion.querySelector(`.accordion__toggle`);
    const accordionPane = accordion.querySelector(`.accordion__pane`);
    hidePane(accordionToggleButton, accordionPane);
    accordionToggleButton.addEventListener(`click`, toggleAccordion);
  });
})();

'use strict';

(function () {
  const anchors = document.querySelectorAll(`a[href*="#"]`);

  for (let anchor of anchors) {
    anchor.addEventListener(`click`, function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute(`href`).substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: `smooth`,
        block: `start`,
      });
    });
  }
})();

/*eslint-disable*/

'use strict';

(function () {
  const maskedInputs = document.querySelectorAll(`input[data-inputmask]`);

  const applyMask = function () {
    Array.prototype.forEach.call(maskedInputs, function (input) {
      const maskOption = {
        mask: input.getAttribute(`data-inputmask`)
      };
      IMask(input, maskOption);
    });
  };

  applyMask();

})();

'use strict';

(function () {
  const KEYCODE = {
    esc: 27
  };
  const link = document.querySelector(`.main-nav__button`);
  const popup = document.querySelector(`.modal`);
  const close = popup.querySelector(`.modal__close`);
  const form = popup.querySelector(`.modal__form`);
  const userName = popup.querySelector(`#call-name`);
  const userPhone = popup.querySelector(`#call-phone`);
  const question = popup.querySelector(`#call-question`);
  const isStorageSupport = true;
  const storage = {};

  const openPopup = function () {
    popup.classList.add(`modal--show`);
    document.body.classList.add(`modal__no-scroll`);
  };

  const closePopup = function () {
    popup.classList.remove(`modal--show`);
    document.body.classList.remove(`modal__no-scroll`);
  };

  try {
    storage.name = localStorage.getItem(`name`);
    storage.phone = localStorage.getItem(`phone`);
    storage.question = localStorage.getItem(`question`);
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    openPopup();

    if (storage.name) {
      userName.value = storage.name;
      userPhone.value = storage.phone;
      question.value = storage.question;
      question.focus();
    } else {
      userName.focus();
    }
  });

  close.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    closePopup();
  });

  form.addEventListener(`submit`, function () {
    if (isStorageSupport) {
      localStorage.setItem(`name`, userName.value);
      localStorage.setItem(`phone`, userPhone.value);
      localStorage.setItem(`message`, question.value);
    }
  });

  window.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === KEYCODE.esc) {
      evt.preventDefault();
      if (popup.classList.contains(`modal--show`)) {
        closePopup();
      }
    }
  });

  popup.addEventListener(`click`, function (evt) {
    if (evt.target === popup) {
      closePopup();
    }
  });
})();
