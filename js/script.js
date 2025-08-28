// Disabled button submit validation
const form = document.querySelector('.message-form');
const submitBtn = document.getElementById('submitBtn');
const inputs = form.querySelectorAll('input, textarea');

function checkInputs() {
  let hasValue = false;
  inputs.forEach(input => {
    if (
      (input.type === 'radio' && form.querySelector('input[name="gender"]:checked')) ||
      (input.type !== 'radio' && input.value.trim() !== '')
    ) {
      hasValue = true;
    }
  });
  submitBtn.disabled = !hasValue;
}

inputs.forEach(input => {
  input.addEventListener('input', checkInputs);
  if (input.type === 'radio') {
    input.addEventListener('change', checkInputs);
  }
});


document.querySelector('.message-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Get form values
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value === 'male' ? 'Laki-laki' : 'Perempuan';
  const message = document.getElementById('message').value;
  const currentTime = new Date().toString();

  // Update preview section
  const previewBody = document.querySelector('.preview-body');
  previewBody.innerHTML = `
    <p style="margin-bottom: 40px;">
      <span style="font-weight: bold">Current time : </span>
      <span>${currentTime}</span>
    </p>
    <p>
      <span style="font-weight: bold">Nama : </span>
      <span>${name}</span>
    </p>
    <p>
      <span style="font-weight: bold">Tanggal Lahir : </span>
      <span>${date}</span>
    </p>
    <p>
      <span style="font-weight: bold">Jenis Kelamin : </span>
      <span>${gender}</span>
    </p>
    <p>
      <span style="font-weight: bold">Pesan : </span>
      <span>${message}</span>
    </p>
  `;

  // Update text welcome
  const welcomeText = document.getElementById('welcomeTitle');
  welcomeText.innerHTML = `
    Hi <span style="text-transform: capitalize;">${name}<span>, Welcome to Website
  `;

  alert('Input data berhasil !');
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

// handle button menu
const burgerBtn = document.getElementById('burgerBtn');
const navList = document.getElementById('mobileNav');
const closeBtn = document.getElementById('closeBtn');

burgerBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  navList.classList.remove('show');
});

function handleMenu() {
  navList.classList.remove('show');
};
