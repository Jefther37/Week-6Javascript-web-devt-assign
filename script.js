// Button click event
document.getElementById('subscribeBtn')?.addEventListener('click', () => {
  alert("Thanks for subscribing to Sports Weekly!");
});

// Hover effect (on news cards)
const newsCards = document.querySelectorAll('.news-card');
newsCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = '0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Keypress detection
document.addEventListener('keydown', (e) => {
  if (e.key === 's') {
    alert("You pressed 's' for Sports!");
  }
});

// Bonus: Double-click for a secret message
document.body.addEventListener('dblclick', () => {
  alert("🏆 Secret: Stay tuned for Champions League highlights tonight!");
});

// Real-time form validation (example for email and password fields)
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

emailInput?.addEventListener('input', () => {
  const emailFeedback = document.getElementById('emailFeedback');
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value.match(pattern)) {
    emailFeedback.textContent = "✅ Valid Email";
    emailFeedback.style.color = "lightgreen";
  } else {
    emailFeedback.textContent = "❌ Invalid Email";
    emailFeedback.style.color = "red";
  }
});

passwordInput?.addEventListener('input', () => {
  const passwordFeedback = document.getElementById('passwordFeedback');
  if (passwordInput.value.length >= 8) {
    passwordFeedback.textContent = "✅ Password OK";
    passwordFeedback.style.color = "lightgreen";
  } else {
    passwordFeedback.textContent = "❌ At least 8 characters";
    passwordFeedback.style.color = "red";
  }
});

// Optional: Tab switcher or accordion (for future expansion)
// You can build tabs with JS like this:
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    tabContents.forEach(c => c.style.display = 'none');
    tabContents[idx].style.display = 'block';
  });
});
document.getElementById('logo')?.addEventListener('dblclick', () => {
  alert("🎉 You've discovered a hidden feature! Stay sporty! 🏆");
});
