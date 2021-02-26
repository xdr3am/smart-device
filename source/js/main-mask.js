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
