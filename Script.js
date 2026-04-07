const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');
const strengthMeter = document.getElementById('strength-meter');
const errorMsg = document.getElementById('error-msg');

// 1. Toggle Password Visibility
toggleBtn.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    toggleBtn.textContent = type === 'password' ? '👁️' : '🔒';
});

// 2. Strong Password Validation Logic
passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let strength = 0;

    if (val.length > 5) strength++; // Basic length
    if (/[A-Z]/.test(val) && /[0-9]/.test(val)) strength++; // Complexity
    if (/[^A-Za-z0-9]/.test(val)) strength++; // Special char

    // Update UI based on strength
    strengthMeter.className = 'strength-meter'; // Reset
    if (val.length === 0) {
        errorMsg.innerText = "";
    } else if (strength === 1) {
        strengthMeter.classList.add('weak');
        errorMsg.innerText = "Weak: Use numbers and capital letters.";
    } else if (strength === 2) {
        strengthMeter.classList.add('medium');
        errorMsg.innerText = "Medium: Add a special character (!@#).";
    } else if (strength === 3) {
        strengthMeter.classList.add('strong');
        errorMsg.innerText = "Strong Password!";
    }
});
