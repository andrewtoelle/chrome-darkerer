((document) => {
  const id = "darkerer";
  let tag = document.getElementById(id);
  if (tag) return tag.parentNode.removeChild(tag);
  tag = document.createElement("style");
  tag.id = id;
  tag.innerHTML =
    "html, img, video, canvas, svg { background: #fff; filter: invert(0.9); }";
  document.body.appendChild(tag);
})(document);
