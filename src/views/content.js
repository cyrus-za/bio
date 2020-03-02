const LargeHeading = require('./heading-large')
const MediumHeading = require('./heading-medium')
const LocationLink = require('./link-location')
const MailLink = require('./link-mail')
const SocialMedia = require('./social-media')
const Footer = require('./footer')

module.exports = function Content(props) {
  let = {
    fullname,
    occupation,
    locationHref,
    location,
    bio,
    email,
    github,
    medium,
    angelList,
    stackoverflow,
    pocket,
    twitter,
    linkedin,
    instagram,
    facebook,
  } = props || {}

  let footer = Footer()
  return /*html*/ `
<section
  class="
    display-flex
    flex-direction-column
    height-content
    height-auto-large
    overflow-auto-large
  "
>
  <div
    class="
      display-flex
      align-items-center-large
      justify-content-center-large
      flex-grow-1
      flex-grow-2-large
      max-width-35
      margin-right-auto
      margin-left-auto
      padding-48
      padding-5-large
    "
  >
    <div
      class="
        margin-right-auto
        margin-left-auto
      "
    >
      ${LargeHeading({
        children: fullname,
      })}
      ${MediumHeading({
        children: occupation,
      })}
      ${LocationLink({
        location,
        href: locationHref,
      })}
      <p
        class="
          margin-bottom-42
          font-size-16
          color-383D3B
        "
      >
        ${bio}
      </p>
      <div
        class="
          display-flex
          flex-wrap-wrap
          align-items-center
          justify-content-space-between
          margin-bottom-16
        "
      >
        ${MailLink({
          email,
        })}
        ${SocialMedia({
          github,
          medium,
          angelList,
          stackoverflow,
          pocket,
          twitter,
          linkedin,
          instagram,
          facebook,
        })}
      </div>
    </div>
  </div>
  ${footer}
</section>
  `
}
