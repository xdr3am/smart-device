/*eslint-disable*/

'use strict';

(function () {
  const maskedInputs = document.querySelectorAll(`input[data-inputmask]`);

  const applyMask = function () {
    maskedInputs.forEach(function (input) {
      const maskOption = {
        mask: input.getAttribute(`data-inputmask`)
      };
      IMask(input, maskOption);
    });
  };

  applyMask();

})();
