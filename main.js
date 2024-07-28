let isList = "";
sosial.map((s) => {
  // console.log("🚀 ~ sosial.map ~ s:", s)
  isList += `<li id='${s.id}' onClick='sosialClick(id)' class='shadow in-active'><span><img src='/icons/brand-${s.sosial}.svg' alt='${s.sosial}' /></span></li>`;
});

document.getElementById("loader").innerHTML = isList;
const Name = document.querySelectorAll(".name");
const modal = document.getElementById("modal-box");
Name.forEach((name) => {
  name.innerHTML = yourName;
});

/**
 * Handles the click event on a social media icon and displays the corresponding modal box.
 *
 * @param {number} id - The ID of the social media icon clicked.
 */
const sosialClick = (id) => {
  modal.classList.remove("to-top");
  // console.log("🚀 ~ sosialClick ~ id:", id);
  const inner = `<img src="/avatar.jpg" alt="avatar" /><h1>${sosial[id].name}</h1><div class="box-url-out"><div class="box-url"><input type="url" name="url" id="url" disabled placeholder="${sosial[id].href}"/><button onclick="copyUrl('${sosial[id].href}')"><img src="/icons/copy.svg" alt="copy" /></button></div></div><p>${sosial[id].desc}</p><span><a href="${sosial[id].href}"> Go Touch </a></span>`;
  modal.innerHTML = inner;
  setTimeout(() => {
    modal.classList.add("to-top");
  }, 400);
};

/**
 * Handles the click event on the document and checks if the click target is outside of the modal box.
 * If it is, the "to-top" class is removed from the modal element.
 *
 * @param {MouseEvent} event - The click event object.
 */
document.onclick = function (event) {
  if (!event.target.closest(".modal-box")) {
    modal.classList.remove("to-top");
  }
};

/**
 * Copies the given URL to the clipboard and displays an alert indicating the success or failure of the copy operation.
 *
 * @param {string} href - The URL to be copied to the clipboard.
 */
function copyUrl(href) {
  navigator.clipboard.writeText(href);
  // console.log("🚀 ~ copyUrl ~ href:", href)
  if (href) alert(`copy link success! \n${href} 🚀`);
  else alert("copy link failed");
}
