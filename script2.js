// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const progressBar2 = event.target.querySelector('.progress-bar2');
  const updatingBar = event.target.querySelector('.update-bar');
  const updatingBar2 = event.target.querySelector('.update-bar2');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  updatingBar2.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    progressBar2.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    progressBar2.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);