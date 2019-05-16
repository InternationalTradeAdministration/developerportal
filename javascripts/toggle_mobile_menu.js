function toggle_visibility(id) {
  let e = document.getElementById(id);

  if (e.classList.contains('hidden')) {
    e.classList.remove('hidden')
  } else {
    e.classList.add('hidden')
  };
};