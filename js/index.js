(() => {

  const handleClick = function (prefix) {
    const button = document.querySelector(`.${prefix}-button`);
    const container = document.querySelector(`.${prefix}-container`);
    button.classList.toggle(`${prefix}-on`);
    container.classList.toggle(`${prefix}-container-on`);
  };


  /* IOS TOGGLE */
  document.querySelector(".ios-button").addEventListener("click", function () {
    handleClick("ios");
  });


  /* Android TOGGLE */
  document.querySelector(".ad-button").addEventListener("click", function () {
    handleClick("ad");
  });
  /* /Android TOGGLE */

  /* Day/night TOGGLE */
  document.querySelector(".dn-button").addEventListener("click", function () {
    handleClick("dn");
  });
  /* /Day/night  TOGGLE */

  /* Day/night w/star-clouds TOGGLE */
  document.querySelector(".dns-button").addEventListener("click", function () {
    handleClick("dns");
  });
  /* /Day/night w/star-clouds  TOGGLE */

})();
