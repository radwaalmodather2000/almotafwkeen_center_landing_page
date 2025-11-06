// كل الأكواد من وسوم <script> تأتي هنا
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

const modalLogic = () => {
    const modalOverlay = document.getElementById('booking-modal');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const bookingForm = document.getElementById('booking-form');

    const openModal = (e) => {
        e.preventDefault();
        modalOverlay.classList.add('active');
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
    };

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeModalBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const checkedSubjects = bookingForm.querySelectorAll('input[name="subject"]:checked');
        
        if (checkedSubjects.length === 0) {
            alert('الرجاء اختيار مادة واحدة على الأقل.');
            return; 
        }
        
        alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتأكيد الحصة.');
        closeModal();
        bookingForm.reset();
    });
}

const scrollAnimate = () => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenElements.forEach((el) => observer.observe(el));
}

navSlide();
modalLogic();
scrollAnimate();
