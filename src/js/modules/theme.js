export function theme() {
  const form = document.querySelector('.preferences__form');
  // const radio = form.querySelector('[name="theme"]:checked');

  const container = document.querySelector('.preferences__container');
  const body = document.body;
  const text = document.querySelectorAll('.text-js');
  const input = document.querySelectorAll('.input-js');
  const btnSave = document.querySelector('.preferences__form-btn-save');
  const btnCancel = document.querySelector('.preferences__form-btn-cancel');
  const span = document.querySelectorAll('.span-js');
  const label = document.querySelectorAll('.preferences__form-label-radio');

  const darkMode = () => {
    body.classList.add('dark-body');
    container.classList.add('dark-container');
    btnSave.classList.add('dark-btn-save');
    btnCancel.classList.add('dark-btn-cancel');

    text.forEach((item) => {
      item.classList.add('dark-text');
    });
    input.forEach((item) => {
      item.classList.add('dark-input');
    });
    span.forEach((item) => {
      item.classList.add('dark-span');
    });

    label.forEach((item) => {
      item.classList.add('label');
    });
  };

  const lightMode = () => {
    body.classList.remove('dark-body');
    container.classList.remove('dark-container');
    btnSave.classList.remove('dark-btn-save');
    btnCancel.classList.remove('dark-btn-cancel');

    text.forEach((item) => {
      item.classList.remove('dark-text');
    });
    input.forEach((item) => {
      item.classList.remove('dark-input');
    });
    span.forEach((item) => {
      item.classList.remove('dark-span');
    });
    label.forEach((item) => {
      item.classList.remove('label');
    });
  };

  //нажатие на форму
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const themeDark = form.querySelector('[id="themeDark"]:checked');

    if (themeDark) {
      darkMode();
      localStorage.setItem('light', false);
      localStorage.setItem('dark', true);
    } else {
      lightMode();
      localStorage.setItem('dark', false);
      localStorage.setItem('light', true);
    }
  });

  //сохранение после перезагрузки
  const localSave = () => {
    const dark = localStorage.getItem('dark') === 'true';
    const themeDark = document.getElementById('themeDark');
    const themeLight = document.getElementById('themeLight');

    if (dark) {
      darkMode();
      themeDark.checked = true;
    } else {
      lightMode();
      themeLight.checked = true;
    }
  };

  document.addEventListener('DOMContentLoaded', localSave);
}
