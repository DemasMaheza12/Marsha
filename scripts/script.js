// Membuat animasi hati terbang di latar belakang

        function createFloatingHearts() {
            const bg = document.getElementById('bg-animation');
            const hearts = ['❤️', '✨', '🌸', '💖'];
            
            for (let i = 0; i < 30; i++) {
                let heart = document.createElement('div');
                heart.classList.add('floating-heart');
                heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
                
                // Posisi dan ukuran acak
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
                heart.style.animationDelay = Math.random() * 5 + 's';
                
                bg.appendChild(heart);
            }
        }

        // Fungsi untuk membuka pesan dan memicu ledakan konfeti/hati
        // function bukaPesan() {
        //     const messageDiv = document.getElementById('secret-message');
        //     const btn = document.getElementById('btn-buka');

        //     // Tampilkan pesan dengan animasi transisi
        //     messageDiv.style.display = 'block';
        //     setTimeout(() => {
        //         messageDiv.classList.add('show');
        //     }, 50);

        //     // Ubah tombol
        //     btn.style.display = 'none';

        //     // Tambahkan ekstra animasi saat tombol ditekan
        //     burstHearts();
        // }

        function bukaPesan() {
            const messageDiv = document.getElementById('secret-message');
            const btn = document.getElementById('btn-buka');
            
            // MEMUTAR MUSIK SAAT TOMBOL DITEKAN
            const music = document.getElementById('song');
            music.play();
            
            messageDiv.style.display = 'block';
            setTimeout(() => { messageDiv.classList.add('show'); }, 50);
            btn.style.display = 'none';
            burstHearts();
        }

        function burstHearts() {
            for (let i = 0; i < 50; i++) {
                let heart = document.createElement('div');
                heart.classList.add('floating-heart');
                heart.innerText = '💖';
                heart.style.left = '50%';
                heart.style.bottom = '20%';
                
                let angle = Math.random() * Math.PI * 2;
                let velocity = 50 + Math.random() * 50;
                let tx = Math.cos(angle) * velocity + 'vw';
                let ty = Math.sin(angle) * velocity + 'vh';

                heart.style.setProperty('--tx', tx);
                heart.style.setProperty('--ty', ty);
                
                // Animasi khusus ledakan
                heart.style.animation = `burst 1.5s ease-out forwards`;
                
                document.body.appendChild(heart);

                // Hapus elemen setelah animasi selesai agar tidak memberatkan browser
                setTimeout(() => {
                    heart.remove();
                }, 1500);
            }
        }

        // Jalankan background animasi saat halaman dimuat
        window.onload = createFloatingHearts;

        // CSS tambahan untuk ledakan hati
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes burst {
                0% { transform: translate(0, 0) scale(1); opacity: 1; }
                100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
            }
        `;
        document.head.appendChild(style);