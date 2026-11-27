document.addEventListener("DOMContentLoaded", function () {
    // 1. Dark Mode Toggle
    const toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const currentTheme = document.body.getAttribute('data-bs-theme');
            if (currentTheme === 'dark') {
                document.body.setAttribute('data-bs-theme', 'light');
                toggleButton.textContent = 'Mode Gelap';
                toggleButton.className = 'btn btn-outline-dark btn-sm';
            } else {
                document.body.setAttribute('data-bs-theme', 'dark');
                toggleButton.textContent = 'Mode Terang';
                toggleButton.className = 'btn btn-outline-light btn-sm';
            }
        });
    }

    // 2. Validasi Form Kontak Front-End
    const formKontak = document.getElementById('contactForm');
    if (formKontak) {
        formKontak.addEventListener('submit', function (event) {
            event.preventDefault();
            const emailInput = document.getElementById('inputEmail').value;
            const pesanInput = document.getElementById('inputPesan').value;
            const alertPlaceholder = document.getElementById('alertNotification');

            if (emailInput.trim() === "" || pesanInput.trim() === "") {
                alertPlaceholder.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Gagal!</strong> Semua field formulir wajib diisi dengan benar.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            } else {
                alertPlaceholder.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sukses!</strong> Halo ${emailInput}, pesan Anda berhasil diproses di front-end.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
                formKontak.reset();
            }
        });
    }

    // 3. Filter Kategori Karya (Interactive Filter)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});