// Menambahkan Fitur Share (Bagikan) saat tombol kanan atas diklik
document.addEventListener('DOMContentLoaded', () => {
  const shareBtn = document.getElementById('shareBtn');

  shareBtn.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Profil Abdullah Umar',
          text: 'Kunjungi microsite dan portofolio saya!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback jika browser tidak mendukung Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link profil berhasil disalin ke clipboard!');
    }
  });

  // Menambahkan efek aktif saat tautan diklik
  const linkCards = document.querySelectorAll('.link-card, .social-btn');
  linkCards.forEach(card => {
    card.addEventListener('click', () => {
      console.log(`Membuka link: ${card.getAttribute('href')}`);
    });
  });
});