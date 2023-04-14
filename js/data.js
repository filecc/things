export const iosToggleHTML = `
<div class="ios-container shadow-sm">
          <span class="ios-button"></span>
</div>`;
export const iosToggleCSS = `
:root {
  /* GENERAL */
  --width: 6rem;
  --shadow: 0px 5px 6px -2px rgba(0, 0, 0, 0.1);
  --radiusContainer: calc((var(--width) * 25) / 100);
  --radiusToggle: calc((var(--width) * 25) / 100);
  --toggle: calc(var(--width) * 0.4);
  --cubic: cubic-bezier(.57,.58,.93,.44);
  /* THIS TOGGLE */
  --ios-bg-container: #eee;
  --ios-color: white;
  --ios-bg-container-on: #4CCC61;
}

.ios-container {
  position: relative;
  background-color: var(--ios-bg-container);
  width: var(--width);
  height: calc(var(--width) / 2.1);
  border-radius: var(--radiusContainer);
  transition: background-color .3s var(--cubic);
}

.ios-button {
  cursor: pointer;
  display: block;
  border: none;
  width: var(--toggle);
  height: var(--toggle);
  border-radius: 50%;
  background-color: var(--ios-color);
  margin: 0 5%;
  position: relative;
  top: 50%;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  transition: transform .3s var(--cubic);
  box-shadow: var(--shadow);
}

.ios-on {
  -webkit-transform: translate3d(125%, -50%, 0);
 transform: translate3d(125%, -50%, 0);
}
.ios-container-on{
  background-color: var(--ios-bg-container-on);
}

`;
export const iosToggleJS = `

const handleClick = function (prefix) {
  const button = document.querySelector('.ios-button');
  const container = document.querySelector('.ios-container');
  button.classList.toggle('ios-on');
  container.classList.toggle('ios-container');
};

document.querySelector(".ios-button").addEventListener("click", function () {
  handleClick();
});

`;
export const adToggleHTML = `
<div class="ad-container shadow-sm">
<span class="ad-button"></span>
</div>`;
export const adToggleCSS = `
:root {
    /* GENERAL */
    --width: 6rem;
    --shadow: 0px 5px 6px -2px rgba(0, 0, 0, 0.1);
    --radiusContainer: calc((var(--width) * 25) / 100);
    --radiusToggle: calc((var(--width) * 25) / 100);
    --toggle: calc(var(--width) * 0.4);
    --cubic: cubic-bezier(.57,.58,.93,.44);
    /* THIS TOGGLE */
    --ad-bg-container: #747474;
    --ad-color: white;
    --ad-bg-container-on: #24A4DA;
}

.ad-container {
    position: relative;
    background-color: var(--ad-bg-container);
    width: var(--width);
    height: calc(var(--width) / 2.5);
    border-radius: var(--radiusContainer);
    transition: background-color .3s var(--cubic);
}

.ad-button {
    cursor: pointer;
    display: block;
    border: none;
    width: calc(var(--width) / 3);
    height: calc(var(--width) / 3);
    border-radius: 50%;
    background-color: var(--ad-color);
    margin: 0 5%;
    position: relative;
    top: 50%;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
    transition: transform .3s var(--cubic);
    box-shadow: var(--shadow);
}

.ad-on {
    -webkit-transform: translate3d(125%, -50%, 0);
   transform: translate3d(165%, -50%, 0);
}
.ad-container-on{
    background-color: var(--ad-bg-container-on);
}
`;
export const adToggleJS = `

const handleClick = function () {
  const button = document.querySelector('.ad-button');
  const container = document.querySelector('.ad-container');
  button.classList.toggle('ad-on');
  container.classList.toggle('ad-container');
};

document.querySelector(".ad-button").addEventListener("click", function () {
  handleClick();
});
`;
export const dnToggleHTML = `
<div class="dn-container shadow-sm">
          <span class="dn-button"></span>
        </div>`;
export const dnToggleCSS = `
:root {
    /* GENERAL */
    --width: 6rem;
    --shadow: 0px 5px 6px -2px rgba(0, 0, 0, 0.1);
    --radiusContainer: calc((var(--width) * 25) / 100);
    --radiusToggle: calc((var(--width) * 25) / 100);
    --toggle: calc(var(--width) * 0.4);
    --cubic: cubic-bezier(.57,.58,.93,.44);
    /* THIS TOGGLE */
    --dn-bg-container: #759ace;
    --dn-color: #fef296;
    --dn-color-on: #f3f0d9;
    --dn-bg-container-on: #152830;
    --shadowWidth: calc(var(--width) * -0.1);
    --shadow-on: inset var(--shadowWidth) 0 0 0 var(--dn-color-on);
}

.dn-container {
    position: relative;
    background-color: var(--dn-bg-container);
    width: var(--width);
    height: calc(var(--width) / 2.1);
    border-radius: var(--radiusContainer);
    transition: background-color .3s var(--cubic);
}

.dn-button {
    cursor: pointer;
    display: block;
    border: none;
    width: var(--toggle);;
    height: var(--toggle);;
    border-radius: 50%;
    background-color: var(--dn-color);
    margin: 0 5%;
    position: relative;
    top: 50%;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
    transition: all .3s var(--cubic);
    box-shadow: var(--shadow);
}

.dn-on {
    -webkit-transform: translate3d(125%, -50%, 0);
   transform: translate3d(125%, -50%, 0);
   background-color: transparent;
   box-shadow: var(--shadow-on);
}
.dn-container-on{
    background-color: var(--dn-bg-container-on);
}

`;
export const dnToggleJS = `

const handleClick = function () {
  const button = document.querySelector('.dn-button');
  const container = document.querySelector('.dn-container');
  button.classList.toggle('dn-on');
  container.classList.toggle('dn-container');
};

document.querySelector(".dn-button").addEventListener("click", function () {
  handleClick();
});

`;
export const dnsToggleHTML = `
<div class="dns-container shadow-sm">
          <span class="dns-button">
            <span class="dns-particle one"></span>
            <span class="dns-particle second"></span>
            <span class="dns-particle third"></span>
          </span>
 </div>`;
export const dnsToggleCSS = `
:root {
    /* GENERAL */
    --width: 6rem;
    --shadow: 0px 5px 6px -2px rgba(0, 0, 0, 0.1);
    --radiusContainer: calc((var(--width) * 25) / 100);
    --radiusToggle: calc((var(--width) * 25) / 100);
    --toggle: calc(var(--width) * 0.4);
    --cubic: cubic-bezier(.57,.58,.93,.44);
    /* THIS TOGGLE */
    --dns-bg-container: #a4c5f4;
    --dns-color: #fef296;
    --dns-color-on: #f3f0d9;
    --dns-bg-container-on: #182048;
    --shadowWidth: calc(var(--width) * -0.1);
    --shadow-on: inset var(--shadowWidth) 0 0 0 var(--dns-color-on);
    
}

.dns-container {
    position: relative;
    background-color: var(--dns-bg-container);
    width: var(--width);
    height: calc(var(--width) / 2.1);
    border-radius: var(--radiusContainer);
    transition: background-color .3s var(--cubic);
}

.dns-button {
    cursor: pointer;
    display: block;
    border: none;
    width: var(--toggle);
    height: var(--toggle);
    border-radius: 50%;
    background-color: var(--dns-color);
    margin: 0 5%;
    position: relative;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    transition: all .3s linear;
    box-shadow: var(--shadow);
}
.dns-particle{
    position: relative;
    display: block;
    width: calc(var(--width) / 3);
    height: calc(var(--width) * 0.05);
    background-color: white;
    border-radius: 2px;
    transition: all .3s var(--cubic);
}


.dns-particle.one{
    top: 25%;
    left: 30%;
    box-shadow: var(--shadow);
}
.dns-particle.second{
    top: 50%;
    left: 45%;
    box-shadow: var(--shadow);
}

.dns-particle.third{
    width: 0;
    height: 0;
}


.dns-on .dns-particle{
    width: calc(var(--width) * 0.03);
    height: calc(var(--width) * 0.03);
    border-radius: 50%;
    background-color: var(--dns-color-on);
    display: block;
    position: relative;
}

.dns-on .dns-particle.one {
    top: 70%;
    left: 20%;
    box-shadow: none;
}
.dns-on .dns-particle.second{
    width: calc(var(--width) * 0.02);
    height: calc(var(--width) * 0.02);
    border-radius: 50px;
    top: 0;
    left: 10%;
    box-shadow: none;
}
.dns-on .third{
    width: calc(var(--width) * 0.04);
    height: calc(var(--width) * 0.04);
    border-radius: 50px;
    display: block;
    position: relative;
    top: 30%;
    left: -35%;
}

.dns-on {
    -webkit-transform: translate3d(125%, -50%, 0);
   transform: translate3d(125%, -50%, 0);
   background-color: transparent;
   box-shadow: var(--shadow-on);
}
.dns-container-on{
    background-color: var(--dns-bg-container-on);
}


`;
export const dnsToggleJS = `

const handleClick = function () {
  const button = document.querySelector('.dns-button');
  const container = document.querySelector('.dns-container');
  button.classList.toggle('dns-on');
  container.classList.toggle('dns-container');
};

document.querySelector(".dns-button").addEventListener("click", function () {
  handleClick();
});

`;
export const hmToggleHTML = `
<div class="hm-container">
  <div class="hamburger">
    <div class="hm-line one"></div>
    <div class="hm-line two"></div>
    <div class="hm-line three"></div>
  </div>
</div>
`;
export const hmToggleCSS = `
:root {
  /* GENERAL */
  --width: 6rem;
  --shadow: 0px 5px 6px -2px rgba(0, 0, 0, 0.1);
  --radiusContainer: calc((var(--width) * 25) / 100);
  --radiusToggle: calc((var(--width) * 25) / 100);
  --toggle: calc(var(--width) * 0.4);
  --cubic: cubic-bezier(.57, .58, .93, .44);
  /* THIS TOGGLE */

}

.hm-container {
  position: relative;
  width: var(--width);
  height: var(--width);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hamburger {
  width: calc(var(--width) / 2);
  height: calc(var(--width) / 3);
  display: block;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.hm-line {
  background-color: #121f2b;
  width: calc((var(--width)) * .5);
  height: calc((var(--width)) * .04);
  position: relative;
  transition: 0.3s ease all;
  border-radius: 5px;
}

.hm-line.one.on {
  position: absolute;
  transform: rotateZ(45deg);
 
}

.hm-line.two.on {
 width: 0;
}

.hm-line.three.on {
  position: absolute;
  transform: rotateZ(-45deg);

}
`;
export const hmToggleJS = `

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelectorAll('.hm-line').forEach(button => {
    button.classList.toggle('on');
  })
});

`;
