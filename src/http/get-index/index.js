const Main = require("@architect/views/main.js");
const staticAssetsHelper = require("./static-assets-helper");

// Customize your site by changing the data below
exports.handler = async function Index() {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: "Pieter Venter",
    title: "My Bio",
    occupation: "Software Engineer & Architect",
    location: "Working remotely",
    locationHref: "https://www.glassdoor.com/blog/digital-nomad-invision/",
    bio: `I am a software engineer, partner, and entrepreneur at Invisible Technologies, currently living in Chengdu China, but will be hopping to my next destination soon as a digital nomad. My interests range from eSports to business. I am also interested in cutting edge, technology, and innovation.

You can click the button above to hire me. If you’d like to get in touch, feel free to say hello through any of the social links below.`,

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: "pieter@venter.pro",
    twitter: "VentusCyrus",
    linkedin: "pventer1",
    instagram: "pventer1",
    stackoverflow: "pieter-venter",
    angelList: "pieter-venter-8",
    medium: "pieter_venter",
    github: "cyrus-za",
    facebook: "pventer1",

    /**
     * Layout
     */
    image: staticAssetsHelper("background.jpg")
  });

  return {
    headers: {
      "content-type": "text/html; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0"
    },
    body
  };
};
