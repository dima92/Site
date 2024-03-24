document.addEventListener('DOMContentLoaded', function () {
  const sidenav = document.querySelectorAll('.sidenav');
  const instances_sidenav = M.Sidenav.init(sidenav);

  const modal = document.querySelectorAll('.modal');
  const instances_modal = M.Modal.init(modal);

  const gallery = document.querySelectorAll('.materialboxed');
  const instances_gallery = M.Materialbox.init(gallery);
});
