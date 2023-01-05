const inputs = document.querySelectorAll('.controls input');

function handeUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handeUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handeUpdate));