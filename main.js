document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.getElementById('portfolio-gallery');

  portfolioData.forEach((item) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    galleryItem.innerHTML = `
      <a class="gallery-item-link" href="${item.link}" target="_blank">
        <div class="img-wrap">
          <img class="img-item" src="${item.image}" alt="${item.title}">
        </div>
        <h3 class="title">${item.title}</h3>
        <span class="tagCategory">${item.category}</span>
        <p class="subtitle">${item.description}</p>
      </a>
    `;

    gallery.appendChild(galleryItem);
  });
});

// Обработка формы
document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    // Получаем элементы формы
    const form = e.target;
    const nameInput = form.elements.name;
    const emailInput = form.elements.email;
    const messageInput = form.elements.message;
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    // Сбрасываем предыдущие состояния
    formStatus.className = 'form-status';
    submitBtn.classList.add('loading');

    // Валидация
    let isValid = true;

    // Валидация имени
    if (nameInput.value.length < 2) {
      document.getElementById('name-error').textContent =
        'Имя должно содержать минимум 2 символа';
      document.getElementById('name-error').classList.add('show');
      nameInput.classList.add('error');
      isValid = false;
    } else {
      document.getElementById('name-error').classList.remove('show');
      nameInput.classList.remove('error');
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      document.getElementById('email-error').textContent =
        'Пожалуйста, введите корректный email';
      document.getElementById('email-error').classList.add('show');
      emailInput.classList.add('error');
      isValid = false;
    } else {
      document.getElementById('email-error').classList.remove('show');
      emailInput.classList.remove('error');
    }

    // Валидация сообщения
    if (messageInput.value.length < 10) {
      document.getElementById('message-error').textContent =
        'Сообщение должно содержать минимум 10 символов';
      document.getElementById('message-error').classList.add('show');
      messageInput.classList.add('error');
      isValid = false;
    } else {
      document.getElementById('message-error').classList.remove('show');
      messageInput.classList.remove('error');
    }

    if (!isValid) {
      submitBtn.classList.remove('loading');
      return;
    }

    setTimeout(() => {
      submitBtn.classList.remove('loading');

      const isSuccess = Math.random() > 0.3;

      if (isSuccess) {
        formStatus.textContent =
          'Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.';
        formStatus.classList.add('success');

        form.reset();

        setTimeout(() => {
          formStatus.classList.remove('success');
        }, 5000);
      } else {
        formStatus.textContent =
          'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.';
        formStatus.classList.add('error');
      }
    }, 1500);
  });

document
  .querySelectorAll('#contact-form input, #contact-form textarea')
  .forEach((input) => {
    input.addEventListener('input', function () {
      this.classList.remove('error');
      const errorElement = document.getElementById(`${this.name}-error`);
      if (errorElement) errorElement.classList.remove('show');
    });
  });
