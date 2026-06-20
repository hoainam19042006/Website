// Sort buttons toggle
document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

      // Related tabs toggle
document.querySelectorAll('.related-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.related-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
