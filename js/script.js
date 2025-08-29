greet();

function greet() {
  let username = prompt("Please insert your name !");
  // Update text welcome
  const welcomeText = document.getElementById('welcomeTitle');
  welcomeText.innerText = `Hi ${username || ''},`;
}

// Form validation
document.getElementById('submitBtn').addEventListener('click', () => {
  // Get form values
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById('message').value;

  if (name === '') {
    alert('Silakan masukkan nama anda!');
  } 
  else if (date === '') {
    alert('Silakan masukkan tanggal lahir anda!');
  } 
  else if (gender === '' || gender === undefined) {
    alert('Silakan pilih jenis kelamin anda!');
  }
  else if (message === '') {
    alert('Silakan masukkan pesan anda!');
  }else {
    return;
  }
});

// Handle submit
document.querySelector('.message-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  let dateValue = document.getElementById('date').value;
  // Format date to dd/mm/yyyy
  let date = '';
  if (dateValue) {
    const [year, month, day] = dateValue.split('-');
    date = `${day}/${month}/${year}`;
  }

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

  alert('Input data berhasil !');
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });

  // Reset form
  document.querySelector('.message-form').reset();
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
