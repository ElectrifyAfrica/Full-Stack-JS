// 1. Select the anchor tag
const a = document.querySelector("a");

// 2. Use getAttribute(attrName) to check the attribute.
console.log(a.getAttribute("href"));

// 3. Select a-two & set "href" attribute
const secondAnchor = document.querySelector(".a-two");

// setAttribute(attrName, value)

secondAnchor.setAttribute("href", "https://www.youtube.com/@electrifyafrica")

console.log("second Anchor:", secondAnchor.getAttribute("href"));