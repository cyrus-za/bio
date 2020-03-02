const Icon = require("./icon");

module.exports = function() {
  const footer = /*html*/ `
  <div
    class="
      display-flex
      align-items-center
      justify-content-space-between
      padding-top-16
      padding-right-32
      padding-left-32
      padding-right-48-large
      padding-bottom-16
      padding-left-48-large
      color-5A5C5B
      background-color-F2F0F3
    "
  >
    <span
      class="
        display-flex
        align-item-center
      "
    >
      <span
        class="
          margin-right-8
          color-979797
        "
      >
        Check my blog
      </span>
      <a
        class="
          fill-979797
          fill-hover-FD6D6D
          transition-fill
        "
        href="https://medium.com/@pieter_venter"
        target="_blank"
        rel="noopener"
      >
        ${Icon({
          class: "fill-inherit",
          href: "blog",
          style: "width:4rem;height:1.2725rem;"
        })}
      </a>
    </span>
    <a
      class="
        display-block
        padding-top-8
        padding-right-16
        padding-bottom-8
        padding-left-16
        font-size-12
        font-weight-300
        text-decoration-none
        color-FFFFFF
        border-radius-pill
        background-color-979797
        background-color-hover-058AEA
        transition-background-color
        text-transform-uppercase
      "
      href="https://medium.com/@pieter_venter"
      rel="noopener"
      target="_blank"
    >
      medium.com
      <svg
      style="
          width: 1.2rem;
          height: 1.2rem;
          background: white;
          border-radius: 100%;
          position: relative;
          top: 0.2rem;"
       class="SVGInline-svg" width="1000" height="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M500 0c276 0 500 224 500 500s-224 500-500 500S0 776 0 500 224 0 500 0zM259.706 352v278.365a32.028 32.028 0 0 1-8.53 27.63L185 738.243v10.582h187.647v-10.581l-66.176-80.247a33.204 33.204 0 0 1-9.118-27.631V389.624l164.706 359.2h19.117l141.471-359.2v286.302c0 7.643 0 9.113-5 14.11l-50.883 49.382V750h247.06v-10.582l-49.118-48.207a14.693 14.693 0 0 1-5.588-14.11V322.899a14.693 14.693 0 0 1 5.588-14.109L815 260.582V250H640.883L516.765 559.524 375.589 250H192.94v10.582l58.824 70.84a24.39 24.39 0 0 1 7.94 20.577z"></path></svg>
    </a>
  </div>
  `;

  return "";
};
