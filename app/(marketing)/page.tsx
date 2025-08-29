'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import { useScrollPosition } from 'hooks/use-scroll-position'


const Home: NextPage = () => {
  const { currentSection } = useScrollPosition()
  
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 36, lg: 30 }} pb={{ base: 0, lg: 40 }}>
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Real imtihonlarga tayyorgarlik — 
                <Br /> endi osonroq!
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Ideal Study — bu oddiy test emas balki <Em>haqiqiy IELTS, CEFR, Duolingo va fan imtihonlariga</Em>
                <Br />maksimal yaqin mock exam platformasi. <Br />{' '}
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
           <br />
           

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://t.me/examregbot">
                  bot da registratsiya otish
                </ButtonLink>
              
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height={{ base: '400px', lg: '100px' }}
            position={{ base: 'relative', lg: 'absolute' }}
            display="block"
            left={{ lg: '35%', xl: '40%' }}
            top={{ lg: '30px' }}
            width={{ base: '100vw', lg: '80vw' }}
            maxW="1100px"
            margin={{ base: '0', lg: '0 auto' }}
            mt={{ base: 0, lg: 0 }}
            ml={{ base: '-4', lg: 0 }}
            mr={{ base: '-4', lg: 0 }}
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/основ.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                  style={{
                    width: '100%',
                    height: 'auto',
                    transform: 'scale(1.0)',
                  }}
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'To‘liq moslashuvchan',
            icon: FiSmile,
            description: 'Har bir test turini sizning ehtiyojlaringizga moslab sozlang — test turi, muddat, savollar soni va baholash mezonlari.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Shaxsiylashtirilgan dizayn',
            icon: FiSliders,
            description:
              'Brendingizga mos test interfeysi — qorong‘i rejim, shaxsiy ranglar va o‘quv markazingiz logotipi bilan ishlaydi.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Modul tarzda tuzilgan',
            icon: FiGrid,
            description:
              'Testlar bo‘limlar bo‘yicha ajratilgan: Listening, Reading, Writing, Speaking. Har birini alohida ishlatish yoki birlashtirish mumkin.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Tez va samarali',
            icon: FiThumbsUp,
            description:
              'Har bir test avtomatik baholanadi. AI yordamida yozma va og‘zaki javoblar tahlil qilinadi. Barcha jarayonlar maksimal tezlikda amalga oshiriladi.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Asosiy ">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            <Em>30 dan ortiq bepul</Em>.
            va ochiq kodli test modullaridan foydalanishni boshlang.
CEFR, IELTS, SAT, va boshqa imtihonlar uchun to‘liq ishlovchi bloklar: ro‘yxatdan o‘tish, test topshirish, natijalarni ko‘rish va tahlil qilish.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Real sharoitda mashq qilish">
        <Text color="muted" fontSize="lg">
        Rasmiy formatdagi testlar. Har bir savol – haqiqiy imtihondan olingan.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Samandar Sariboyev"
        description="Founder"
        avatar="/photo_2025-08-29_00-14-18.jpg"
        gradient={['white.800', 'black.900']}
      >
        “Mock exam platformasini yaratishdagi maqsadim — o‘quvchilarga haqiqiy imtihon sharoitini taqdim etish edi. Biz yuzlab soatlar davomida tizimni sinab ko‘rdik, mukammallashtirdik va nihoyat shunday yechimni taqdim etdikki, u nafaqat test, balki o‘sish, tahlil va tayyorgarlik uchun ham kuchli vositaga aylandi.
        Bugun minglab foydalanuvchilar Ideal Study orqali o‘z maqsadlariga yaqinlashmoqda — bu men uchun eng katta faxr.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Yangi natijalarga ikki qadam yaqinlashing"
      >
        <Text color="muted" fontSize="lg">
        Biz barcha asosiy funksiyalarni siz uchun tayyorladik — endi siz faqat bilimga e’tibor qarating va haqiqiy imtihon tajribasidan rohatlaning.
        </Text>
        <Wrap mt="8">
          {[
            'IELTS',
            'CEFR',
            'Duolingo',
            'AI baholash',
            'Sertifikat',
            'Progress tracking',
            'Dashboard',
            'Telegram bot',
            'Web platforma',
            'Demo test',
            'Bepul kirish',
            'Real ball',
            'Real savollar',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Real testga yaqinroq
          <Br /> natija esa tezroq.
        </Heading>
      }
      description={
        <>
         IELTS, CEFR, fanlar
          <Br />
          AI baholash, progress, va sertifikat bilan.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: '1.  Oddiy test emas — bu real imtihon muhiti',
          icon: FiSmile,
          description:
            'Ideal Study’da testlar oddiy savol-javob yig‘indisi emas. Har bir mock imtihon — bu haqiqiy IELTS, CEFR yoki fan testlariga maksimal darajada o‘xshash muhitda o‘tkaziladi. Siz haqiqiy imtihonga qanday kiradigan bo‘lsangiz — shunday formatda tayyorlanasiz.',
          variant: 'inline',
        },
        {
          title: '2.  Barchasi tayyor — siz faqat test topshirasiz',
          icon: FiSliders,
          description: (
            <>
              Platformamizda barcha asosiy yo‘nalishlar bo‘yicha testlar mavjud:<Br />
               IELTS, CEFR, Duolingo — Listening, Reading, Writing, Speaking<Br />
               Maktab fanlari: Matematika, Biologiya, Fizika, Tarix, Kimyo...<Br />
               Professional testlar: Pedagogika, IT, Tilshunoslik, Ta’lim nazariyasi va boshqalar
            </>
          ),
          variant: 'inline',
        },
        {
          title: '3.  Natijani kutmang — u darhol tayyor',
          icon: FiGrid,
          description: (
            <>
              Har bir testdan so‘ng platforma avtomatik tarzda:<Br />
              • Test ballarini hisoblaydi<Br />
              • To‘g‘ri va noto‘g‘ri javoblarni ko‘rsatadi<Br />
              • Zaif tomonlaringizni aniqlaydi
            </>
          ),
          variant: 'inline',
        },
        {
          title: '4.  Sertifikat — yakuniy natijangizning isboti',
          icon: FiUserPlus,
          description: (
            <>
              Test yakunida sizga taqdim etiladi:<Br />
              • Sertifikat (PDF formatda)<Br />
              • Unikal QR-kod<Br />
              • Yuklab olish va email orqali yuborish imkoniyati
            </>
          ),
          variant: 'inline',
        },
        {
          title: '5.  Progress va diagnostika',
          icon: FiFlag,
          description: (
            <>
              Ideal Study faqat natijalarni saqlamaydi, balki:<Br />
              • Har bir fan/bo‘lim bo‘yicha progressni ko‘rsatadi<Br />
              • Zaif joylarni aniqlab beradi<Br />
              • Takrorlash va tayyorlanish uchun foydali tavsiyalar beradi
            </>
          ),
          variant: 'inline',
        },
        {
          title: '6.  AI baholash — sun’iy intellekt bilan adolatli baho',
          icon: FiTrendingUp,
          description: (
            <>
              Yozgan esse va writing javoblaringiz AI (ChatGPT) orqali baholanadi — 4 ta mezon: Task Response, Grammar, Vocabulary, Coherence. Og‘zaki (speaking) javoblaringiz esa talaffuz, ravonlik va lug‘aviy boylik bo‘yicha tahlil qilinadi.
            </>
          ),
          variant: 'inline',
        },
        {
          title: '7.  Istagan joyda, istalgan vaqtda topshiring',
          icon: FiToggleLeft,
          description: (
            <>
              Ideal Study — doim yoningizda:<Br />
               Web platforma: mobilga to‘liq moslashtirilgan<Br />
               Telegram bot: testlarni tez va qulay tarzda topshiring<Br />
               Pro foydalanuvchilar uchun shaxsiy kabinet (dashboard)
            </>
          ),
          variant: 'inline',
        },
        {
          title: '8.  Demo test – bepul sinov',
          icon: FiTerminal,
          description: (
            <>
              Siz hali sinab ko‘rmagansizmi? 1 ta demo test — butun platforma imkoniyatlarini ko‘rsatadi. Bepul kirish, real savollar, real ball. Barcha foydalanuvchilar uchun ochiq.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
