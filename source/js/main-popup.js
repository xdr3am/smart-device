'use strict';

(function () {
  const KeyCode = {
    ESC: 27
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
    if (evt.keyCode === KeyCode.esc) {
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
