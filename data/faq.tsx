import * as React from 'react'

const faq = {
  title: 'Tez-tez beriladigan savollar',
  // description: '',
  items: [
    {
      q: 'Qanday testlar mavjud?',
      a: (
        <>
          IELTS, CEFR, Duolingo — Listening, Reading, Writing, Speaking
          Maktab fanlari: Matematika, Biologiya, Fizika, Tarix, Kimyo...
          Professional testlar: Pedagogika, IT, Tilshunoslik, Ta’lim nazariyasi va boshqalar
        </>
      ),
    },
    {
      q: 'Nega aynan Mock Exam platformasini tanlash kerak?',
      a: "Chunki bu yerda siz faqat test topshirmaysiz — balki natijangizni tushunasiz, tahlil qilasiz va o‘sasiz. Har bir imtihon real formatda, har bir javob esa aniqlik bilan baholanadi. Bu — o‘rganish jarayonining yangi bosqichi.",
    },
    {
      q: 'Sertifikat haqiqiymi? Undan qanday foydalanaman?',
      a: 'Ha, har bir yakunlangan test bo‘yicha sizga avtomatik PDF sertifikat taqdim etiladi. Uni rezyume, portfolyo, o‘quv markazlari yoki kurslarga taqdim etishingiz mumkin. QR-kod orqali tekshirish ham mumkin.',
    },
    {
      q: 'Yozma va og‘zaki javoblar qanday baholanadi?',
      a: 'Yozma (essay) va og‘zaki (speaking) javoblaringiz sun’iy intellekt (AI) yordamida IELTS mezonlariga asoslanib tahlil qilinadi: grammatika, lug‘at boyligi, mazmun va izchillik bo‘yicha to‘liq baho beriladi.',
    },
  ],
}

export default faq
