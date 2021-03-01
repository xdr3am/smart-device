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
    accordionPanes.forEach(function (accordionPane) {
      const button = accordionPane.closest(`.accordion`).querySelector(`.accordion__toggle`);
      if (button === evt.target && !button.classList.contains(`accordion__toggle--inactive`) || button !== evt.target) {
        hidePane(button, accordionPane);
      } else if (button === evt.target) {
        showPane(button, accordionPane);
      }
    });
  };

  accordionItems.forEach(function (accordion) {
    const accordionToggleButton = accordion.querySelector(`.accordion__toggle`);
    const accordionPane = accordion.querySelector(`.accordion__pane`);
    hidePane(accordionToggleButton, accordionPane);
    accordionToggleButton.addEventListener(`click`, toggleAccordion);
  });
})();
