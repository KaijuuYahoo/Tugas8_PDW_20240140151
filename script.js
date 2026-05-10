function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const box = document.getElementById('modalBox');
    const frame = document.getElementById('videoFrame');

    frame.src = frame.dataset.src;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
    box.classList.remove('scale-95');
    box.classList.add('scale-100');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const box = document.getElementById('modalBox');
    const frame = document.getElementById('videoFrame');

    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
    box.classList.remove('scale-100');
    box.classList.add('scale-95');
    document.body.style.overflow = '';

    setTimeout(() => { frame.src = ''; }, 300);
}

document.getElementById('videoModal').addEventListener('click', function (e) {
    if (e.target === this) closeVideoModal();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeVideoModal();
});