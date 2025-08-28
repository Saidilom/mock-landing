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

export const meta: Metadata = {
  title: 'Saas UI Landingspage',
  description: 'Free SaaS landingspage starter kit',
}

const Home: NextPage = () => {
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
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Build beautiful
                <Br /> software faster
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Saas UI is a <Em>React component library</Em>
                <Br /> that doesn&apos;t get in your way and helps you <Br />{' '}
                build intuitive SaaS products with speed.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  bot da register qilish
                </ButtonLink>
              
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
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
            title: 'Accessible',
            icon: FiSmile,
            description: 'All components strictly follow WAI-ARIA standards.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Themable',
            icon: FiSliders,
            description:
              'Fully customize all components to your brand with theme support and style props.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Composable',
            icon: FiGrid,
            description:
              'Compose components to fit your needs and mix them together to create new ones.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Productive',
            icon: FiThumbsUp,
            description:
              'Designed to reduce boilerplate and fully typed, build your product at speed.',
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
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'authentication',
            'navigation',
            'crud',
            'settings',
            'multi-tenancy',
            'layouts',
            'billing',
            'a11y testing',
            'server-side rendering',
            'documentation',
            'onboarding',
            'storybooks',
            'theming',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
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
          title: '1. 🎓 Oddiy test emas — bu real imtihon muhiti',
          icon: FiSmile,
          description:
            'Ideal Study’da testlar oddiy savol-javob yig‘indisi emas. Har bir mock imtihon — bu haqiqiy IELTS, CEFR yoki fan testlariga maksimal darajada o‘xshash muhitda o‘tkaziladi. Siz haqiqiy imtihonga qanday kiradigan bo‘lsangiz — shunday formatda tayyorlanasiz.',
          variant: 'inline',
        },
        {
          title: '2. 🧪 Barchasi tayyor — siz faqat test topshirasiz',
          icon: FiSliders,
          description: (
            <>
              Platformamizda barcha asosiy yo‘nalishlar bo‘yicha testlar mavjud:<Br />
              🌍 IELTS, CEFR, Duolingo — Listening, Reading, Writing, Speaking<Br />
              📚 Maktab fanlari: Matematika, Biologiya, Fizika, Tarix, Kimyo...<Br />
              💼 Professional testlar: Pedagogika, IT, Tilshunoslik, Ta’lim nazariyasi va boshqalar
            </>
          ),
          variant: 'inline',
        },
        {
          title: '3. ⚡ Natijani kutmang — u darhol tayyor',
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
          title: '4. 📄 Sertifikat — yakuniy natijangizning isboti',
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
          title: '5. 📈 Progress va diagnostika',
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
          title: '6. 🧠 AI baholash — sun’iy intellekt bilan adolatli baho',
          icon: FiTrendingUp,
          description: (
            <>
              Yozgan esse va writing javoblaringiz AI (ChatGPT) orqali baholanadi — 4 ta mezon: Task Response, Grammar, Vocabulary, Coherence. Og‘zaki (speaking) javoblaringiz esa talaffuz, ravonlik va lug‘aviy boylik bo‘yicha tahlil qilinadi.
            </>
          ),
          variant: 'inline',
        },
        {
          title: '7. 📱 Istagan joyda, istalgan vaqtda topshiring',
          icon: FiToggleLeft,
          description: (
            <>
              Ideal Study — doim yoningizda:<Br />
              🌐 Web platforma: mobilga to‘liq moslashtirilgan<Br />
              📲 Telegram bot: testlarni tez va qulay tarzda topshiring<Br />
              🧑‍💻 Pro foydalanuvchilar uchun shaxsiy kabinet (dashboard)
            </>
          ),
          variant: 'inline',
        },
        {
          title: '8. 🔍 Demo test – bepul sinov',
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
