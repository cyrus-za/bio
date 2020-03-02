const Icon = require("./icon");
module.exports = function SocialMedia(props) {
  let {
    github,
    medium,
    angelList,
    stackoverflow,
    pocket,
    twitter,
    linkedin,
    instagram,
    facebook
  } = props || {};

  return /*html*/ `
<div class="display-flex">
${
  github
    ? /*html*/ `
  <a
    href="https://github.com/${github}"
    target="_blank"
    rel="noopener"
  >
    <svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 508c0 232-160 429-375 485V862c0-41-10-98-52-131 134-20 239-99 239-223 0-51-21-102-58-144 11-47 17-105-4-148-53 5-106 32-145 56-33-8-67-14-105-14s-73 6-106 14c-39-24-91-51-144-56-21 43-16 101-5 148-37 42-57 93-57 144 0 124 105 203 239 223-20 15-32 36-40 57-105 2-189-81-190-81-5-4-12-5-16-2-6 3-9 10-7 16 2 5 44 124 201 172v100C160 937 0 740 0 508 0 233 223 8 500 8c275 0 500 225 500 500z"></path></svg>
  </a>
  `
    : ""
}
${
  angelList
    ? /*html*/ `
  <a
    href="https://angel.co/${angelList}"
    target="_blank"
    rel="noopener"
  >
    <svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 508c0 232-160 429-375 485V862c0-41-10-98-52-131 134-20 239-99 239-223 0-51-21-102-58-144 11-47 17-105-4-148-53 5-106 32-145 56-33-8-67-14-105-14s-73 6-106 14c-39-24-91-51-144-56-21 43-16 101-5 148-37 42-57 93-57 144 0 124 105 203 239 223-20 15-32 36-40 57-105 2-189-81-190-81-5-4-12-5-16-2-6 3-9 10-7 16 2 5 44 124 201 172v100C160 937 0 740 0 508 0 233 223 8 500 8c275 0 500 225 500 500z"></path></svg>
  </a>
  `
    : ""
}
${
  pocket
    ? /*html*/ `
  <a
    href="https://getpocket.com/@${pocket}"
    target="_blank"
    rel="noopener"
  >
    <svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 508c0 232-160 429-375 485V862c0-41-10-98-52-131 134-20 239-99 239-223 0-51-21-102-58-144 11-47 17-105-4-148-53 5-106 32-145 56-33-8-67-14-105-14s-73 6-106 14c-39-24-91-51-144-56-21 43-16 101-5 148-37 42-57 93-57 144 0 124 105 203 239 223-20 15-32 36-40 57-105 2-189-81-190-81-5-4-12-5-16-2-6 3-9 10-7 16 2 5 44 124 201 172v100C160 937 0 740 0 508 0 233 223 8 500 8c275 0 500 225 500 500z"></path></svg>
  </a>
  `
    : ""
}
${
  stackoverflow
    ? /*html*/ `
  <a
    href="https://stackoverflow.com/story/${stackoverflow}"
    target="_blank"
    rel="noopener"
  >
    <svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 508c0 232-160 429-375 485V862c0-41-10-98-52-131 134-20 239-99 239-223 0-51-21-102-58-144 11-47 17-105-4-148-53 5-106 32-145 56-33-8-67-14-105-14s-73 6-106 14c-39-24-91-51-144-56-21 43-16 101-5 148-37 42-57 93-57 144 0 124 105 203 239 223-20 15-32 36-40 57-105 2-189-81-190-81-5-4-12-5-16-2-6 3-9 10-7 16 2 5 44 124 201 172v100C160 937 0 740 0 508 0 233 223 8 500 8c275 0 500 225 500 500z"></path></svg>
  </a>
  `
    : ""
}
${
  medium
    ? /*html*/ `
  <a
    href="https://medium.com/@${medium}"
    target="_blank"
    rel="noopener"
  >
    <svg class="SVGInline-svg" width="1000" height="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M500 0c276 0 500 224 500 500s-224 500-500 500S0 776 0 500 224 0 500 0zM259.706 352v278.365a32.028 32.028 0 0 1-8.53 27.63L185 738.243v10.582h187.647v-10.581l-66.176-80.247a33.204 33.204 0 0 1-9.118-27.631V389.624l164.706 359.2h19.117l141.471-359.2v286.302c0 7.643 0 9.113-5 14.11l-50.883 49.382V750h247.06v-10.582l-49.118-48.207a14.693 14.693 0 0 1-5.588-14.11V322.899a14.693 14.693 0 0 1 5.588-14.109L815 260.582V250H640.883L516.765 559.524 375.589 250H192.94v10.582l58.824 70.84a24.39 24.39 0 0 1 7.94 20.577z"></path></svg>
  </a>
  `
    : ""
}
${
  twitter
    ? /*html*/ `
  <a
    href="https://twitter.com/${twitter}"
    target="_blank"
    rel="noopener"
  >
    ${Icon({
      class: "margin-right-18 fill-979797 fill-hover-058AEA transition-fill",
      style: "width:1.470625rem;height:1.25rem;",
      href: "twitter"
    })}
  </a>
  `
    : ""
}
${
  linkedin
    ? /*html*/ `
  <a
    href="https://linkedin.com/in/${linkedin}"
    target="_blank"
    rel="noopener"
  >
    ${Icon({
      class: "margin-right-18 fill-979797 fill-hover-058AEA transition-fill",
      style: "width:1.25rem;height:1.25rem;",
      href: "linkedin"
    })}
  </a>
  `
    : ""
}
${
  instagram
    ? /*html*/ `
  <a
    href="https://instagram.com/${instagram}"
    target="_blank"
    rel="noopener"
  >
    ${Icon({
      class: "margin-right-18 fill-979797 fill-hover-058AEA transition-fill",
      style: "width:1.25rem;height:1.25rem;",
      href: "instagram"
    })}
  </a>
  `
    : ""
}
${
  facebook
    ? /*html*/ `
  <a
    href="https://facebook.com/${facebook}"
    target="_blank"
    rel="noopener"
  >
    ${Icon({
      class: "margin-right-18 fill-979797 fill-hover-058AEA transition-fill",
      style: "width:1.25rem;height:1.25rem;",
      href: "facebook"
    })}
  </a>
  `
    : ""
}
</div>
  `;
};
