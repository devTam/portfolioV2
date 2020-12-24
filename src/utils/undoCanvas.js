export const undoCanvas = () => {
  let canvas = document.querySelectorAll('canvas');
  if (canvas) {
    canvas.forEach((item) => (item.style.display = 'none'));
  } else return;
};
