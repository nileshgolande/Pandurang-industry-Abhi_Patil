import { useEffect, useState } from 'react'
import {
  Award,
  ExternalLink,
  Menu,
  Phone,
  Shield,
  Truck,
  X,
  MessageCircle,
  MapPin,
} from 'lucide-react'

const PHONE_PRIMARY = '7264949004'
const PHONE_SECONDARY = '8380035106'
const GST = '27CDYPJ0404Q1ZX'

/** उत्पादन संदर्भ — वेबपृष्ठ (प्रतिमा नाही). */
const URL_ORCHARD_CHAINLINK_ROLLS =
  'https://orchardfencing.co.uk/product/chainlink-rolls/'

/** Pexels — उच्च रिझोल्यूशन JPEG (मोफत वापरासाठी उपलब्ध). */
function pexelsHd(photoId: string, w: number) {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${w}&q=90`
}

/** HD चैनलिंक जाळी — प्रात्यक्षिक छायाचित्रे */
const CHAINLINK_GALLERY = [
  {
    id: '683402',
    alt: 'चैनलिंक जाळी — जवळून, दिवसाच्या प्रकाशात (HD)',
    caption: 'चैनलिंक जाळी — जवळून',
    page: 'https://www.pexels.com/photo/chain-linked-fence-683402/',
    credit: 'Min An / Pexels',
  },
  {
    id: '951408',
    alt: 'सायक्लोन / चैनलिंक जाळी — उच्च दर्जाचे HD छायाचित्र',
    caption: 'सायक्लोन जाळी',
    page: 'https://www.pexels.com/photo/cyclone-fence-in-shallow-photography-951408/',
    credit: 'Travis Saylor / Pexels',
  },
  {
    id: '1550131',
    alt: 'चैनलिंक जाळी — मेश टेक्सचर (HD)',
    caption: 'जाळी व मेश',
    page: 'https://www.pexels.com/photo/orange-leaf-on-chainlink-fence-1550131/',
    credit: 'Brett Sayles / Pexels',
  },
] as const

/** HD काटेरी तार — प्रात्यक्षिक छायाचित्रे */
const BARBED_WIRE_GALLERY = [
  {
    id: '274886',
    alt: 'काटेरी तार — गॅल्वनाइज्ड वायर, HD छायाचित्र',
    caption: 'काटेरी तार — जवळून',
    page: 'https://www.pexels.com/photo/grayscale-photo-of-barbed-wire-274886/',
    credit: 'Pixabay / Pexels',
  },
  {
    id: '3806779',
    alt: 'काटेरी तार — रोल व सुरक्षा वायर (HD)',
    caption: 'काटेरी तार — रोल',
    page: 'https://www.pexels.com/photo/photo-of-barbed-wires-3806779/',
    credit: 'Markus Spiske / Pexels',
  },
] as const

function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

/** Hero: दुकान व मुख्य फलक — स्थानिक फोटो */
const HERO_STOREFRONT = asset('assets/hero-storefront.png')

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const waHref = `https://wa.me/91${PHONE_PRIMARY}?text=${encodeURIComponent(
    'नमस्कार, पांडुरंग स्टिल चैनलिंक (जाळी) इंडस्ट्रीज — चैनलिंक जाळी / काटेरी तार बद्दल चौकशी आहे.',
  )}`

  const nav = [
    { href: '#hero', label: 'मुख्य' },
    { href: '#products', label: 'उत्पादने' },
    { href: '#brands', label: 'भागीदार' },
    { href: '#contact', label: 'संपर्क' },
  ]

  return (
    <div className="min-h-svh bg-white text-ink font-marathi">
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[100] whitespace-nowrap rounded-lg bg-brand px-4 py-2 text-white focus:left-4 focus:top-4"
      >
        मुख्य सामग्रीवर जा
      </a>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="group min-w-0 text-left">
            <p className="text-[0.65rem] font-medium tracking-wide text-amber-700 sm:text-xs">
              !! गजानन महाराज प्रसन्न !!
            </p>
            <p className="truncate text-lg font-semibold leading-tight text-brand transition-colors group-hover:text-brand-dark sm:text-xl">
              पांडुरंग स्टिल चैनलिंक (जाळी) इंडस्ट्रीज
            </p>
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="मुख्य नेव्हिगेशन">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/80 transition hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href={`tel:+91${PHONE_PRIMARY}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:border-brand/30 hover:text-brand"
            >
              <Phone className="size-4 text-brand" aria-hidden />
              {PHONE_PRIMARY}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex rounded-xl border border-black/10 p-2 text-ink md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="मेनू उघडा"
          >
            <Menu className="size-6" />
          </button>
        </div>

        {menuOpen ? (
          <div
            id="mobile-menu"
            className="fixed inset-0 z-[60] bg-white md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="मोबाइल मेनू"
          >
            <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
              <span className="font-semibold text-brand">मेनू</span>
              <button
                type="button"
                className="rounded-xl border border-black/10 p-2"
                onClick={() => setMenuOpen(false)}
                aria-label="मेनू बंद करा"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4" aria-label="मोबाइल नेव्हिगेशन">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-ink hover:bg-black/[0.03]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:+91${PHONE_PRIMARY}`}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-4 py-4 text-lg font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                <Phone className="size-5" aria-hidden />
                आता कॉल करा
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main id="main">
        <section
          id="hero"
          className="relative overflow-hidden border-b border-black/5"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url(${HERO_STOREFRONT})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-3xl space-y-6">
                <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  होलसेल
                </span>
                <h1 className="text-balance text-3xl font-semibold leading-tight text-brand sm:text-4xl lg:text-5xl">
                  पांडुरंग स्टिल चैनलिंक (जाळी) इंडस्ट्रीज
                </h1>
                <p className="text-pretty text-lg leading-relaxed text-muted sm:text-xl">
                  आमचे कडे सर्व प्रकारच्या कम्पाउंड साठी, शेतीसाठी, पोल्ट्री फार्म, कांदा चाळ,
                  शेळीपालन, शेततळे, द्राक्षबाग, प्लॉट साठी लागणारी जाळी काटेरी तार होलसेल दरात
                  मिळेल.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={`tel:+91${PHONE_PRIMARY}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
                  >
                    <Phone className="size-5 shrink-0" aria-hidden />
                    आता कॉल करा — {PHONE_PRIMARY}
                  </a>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-emerald-600/20 bg-emerald-50 px-6 py-4 text-base font-semibold text-emerald-900 transition hover:border-emerald-600/40"
                  >
                    <MessageCircle className="size-5 shrink-0" aria-hidden />
                    WhatsApp वर चौकशी
                  </a>
                </div>
                <dl className="grid gap-4 border-t border-black/10 pt-6 sm:grid-cols-3">
                  <div className="flex gap-3">
                    <Truck className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                        वितरण
                      </dt>
                      <dd className="text-sm font-medium">त्वरित पुरवठा व सेवा</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Shield className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                        दर्जा
                      </dt>
                      <dd className="text-sm font-medium">उच्च दर्जाची स्टील जाळी व तार</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Award className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                        दर
                      </dt>
                      <dd className="text-sm font-medium">होलसेल दर — विश्वासार्ह</dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:mx-0">
                <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-black/10 bg-zinc-100 shadow-2xl shadow-black/20 ring-1 ring-black/10 sm:aspect-[4/5]">
                  <img
                    src={HERO_STOREFRONT}
                    alt="पांडुरंग स्टिल चैनलिंक इंडस्ट्रीज — दुकान व मुख्य फलक, जाळी व संपर्क माहिती"
                    className="h-full w-full object-cover object-center"
                    width={1200}
                    height={1600}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
                <div className="mt-3 flex flex-col items-center gap-2 sm:items-end">
                  <a
                    href={HERO_STOREFRONT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-brand hover:text-brand-dark"
                  >
                    <ExternalLink className="size-3.5 shrink-0" aria-hidden />
                    फलक फोटो नवीन टॅबमध्ये उघडा
                  </a>
                  <a
                    href={URL_ORCHARD_CHAINLINK_ROLLS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-muted hover:text-brand"
                  >
                    <ExternalLink className="size-3.5 shrink-0" aria-hidden />
                    चैनलिंक रोल — संदर्भ माहिती (Orchard Fencing)
                  </a>
                </div>
                <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-black/10 bg-white p-4 text-sm shadow-lg sm:block">
                  <p className="font-semibold text-brand">GST</p>
                  <p className="font-mono text-xs text-muted">{GST}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="strip" className="border-b border-black/5 bg-zinc-50">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <a
                href={`tel:+91${PHONE_PRIMARY}`}
                className="inline-flex items-center gap-2 font-semibold text-ink hover:text-brand"
              >
                <Phone className="size-4 text-brand" aria-hidden />
                {PHONE_PRIMARY}
              </a>
              <a
                href={`tel:+91${PHONE_SECONDARY}`}
                className="inline-flex items-center gap-2 font-semibold text-ink hover:text-brand"
              >
                <Phone className="size-4 text-brand" aria-hidden />
                {PHONE_SECONDARY}
              </a>
            </div>
            <p className="text-sm text-muted">
              <span className="font-semibold text-ink">GST:</span>{' '}
              <span className="font-mono">{GST}</span>
            </p>
          </div>
        </section>

        <section id="products" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-brand sm:text-4xl">उत्पादने</h2>
              <p className="mt-3 text-pretty text-muted sm:text-lg">
                चैनलिंक जाळी व काटेरी तार — तुमच्या गरजेनुसार मोजमाप व जाडी. खालील गॅलरीतील HD
                प्रतिमा Pexels वरून लोड होतात; उत्पादन तपशीलासाठी संदर्भ लिंक पहा.
              </p>
            </div>

            <div className="mt-12 space-y-20">
              <div>
                <h3 className="text-center text-xl font-semibold text-ink sm:text-2xl">
                  चैनलिंक जाळी (साखळी जाळी)
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted">
                  कम्पाउंड, शेती, प्लॉट, फार्म व इतर ठिकाणी बांधकामासाठी तयार स्टॉक. खालील HD
                  प्रात्यक्षिक — चैनलिंक जाळी.
                </p>

                <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-brand/20 bg-brand/[0.04] p-4 text-center text-sm text-muted">
                  <span className="font-semibold text-brand">संदर्भ:</span>{' '}
                  <a
                    href={URL_ORCHARD_CHAINLINK_ROLLS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-ink underline decoration-brand/40 underline-offset-2 hover:text-brand"
                  >
                    Orchard Fencing — Chainlink Rolls
                    <ExternalLink className="size-3.5 shrink-0" aria-hidden />
                  </a>
                  <span className="mt-1 block text-xs text-muted">
                    (उत्पादन वर्णन व पर्याय — केवळ माहितीसाठी; आमचे दर व स्टॉक फोनवर विचारा.)
                  </span>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {CHAINLINK_GALLERY.map((item) => {
                    const src = pexelsHd(item.id, 1920)
                    const srcSet = `${pexelsHd(item.id, 960)} 960w, ${pexelsHd(item.id, 1280)} 1280w, ${pexelsHd(item.id, 1920)} 1920w, ${pexelsHd(item.id, 2560)} 2560w`
                    const hdFull = pexelsHd(item.id, 4096)
                    return (
                      <figure
                        key={item.id}
                        className="group relative overflow-hidden rounded-2xl border border-black/10 bg-zinc-900 shadow-lg ring-1 ring-black/5"
                      >
                        <a
                          href={hdFull}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        >
                          <img
                            src={src}
                            srcSet={srcSet}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            alt={item.alt}
                            className="aspect-[4/5] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                            width={1920}
                            height={2400}
                            loading="lazy"
                            decoding="async"
                          />
                        </a>
                        <figcaption className="border-t border-white/10 bg-zinc-950/90 px-3 py-2.5 text-center text-xs text-zinc-300">
                          <span className="font-medium text-white">{item.caption}</span>
                          <span className="mt-0.5 block text-[0.65rem] text-zinc-500">{item.credit}</span>
                          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                            <a
                              href={hdFull}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[0.65rem] font-semibold text-brand hover:text-white"
                            >
                              <ExternalLink className="size-3" aria-hidden />
                              HD मध्ये उघडा
                            </a>
                            <a
                              href={item.page}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[0.65rem] text-zinc-400 hover:text-white"
                            >
                              Pexels
                              <ExternalLink className="size-2.5 opacity-80" aria-hidden />
                            </a>
                          </div>
                        </figcaption>
                      </figure>
                    )
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-center text-xl font-semibold text-ink sm:text-2xl">
                  काटेरी तार (बार्ब्ड वायर)
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted">
                  सुरक्षा व मजबूतीसाठी — गॅल्वनाइज्ड काटेरी तार होलसेल दरात उपलब्ध. खालील HD
                  प्रात्यक्षिक — काटेरी तार.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {BARBED_WIRE_GALLERY.map((item) => {
                    const src = pexelsHd(item.id, 1920)
                    const srcSet = `${pexelsHd(item.id, 960)} 960w, ${pexelsHd(item.id, 1280)} 1280w, ${pexelsHd(item.id, 1920)} 1920w, ${pexelsHd(item.id, 2560)} 2560w`
                    const hdFull = pexelsHd(item.id, 4096)
                    return (
                      <figure
                        key={item.id}
                        className="group overflow-hidden rounded-2xl border border-black/10 bg-zinc-900 shadow-md ring-1 ring-black/5"
                      >
                        <a
                          href={hdFull}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        >
                          <img
                            src={src}
                            srcSet={srcSet}
                            sizes="(max-width: 640px) 100vw, 50vw"
                            alt={item.alt}
                            className="aspect-[4/3] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            width={1920}
                            height={1440}
                            loading="lazy"
                            decoding="async"
                          />
                        </a>
                        <figcaption className="border-t border-white/10 bg-zinc-950/95 px-4 py-3 text-center text-xs text-zinc-300">
                          <span className="font-medium text-white">{item.caption}</span>
                          <span className="mt-0.5 block text-[0.65rem] text-zinc-500">{item.credit}</span>
                          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                            <a
                              href={hdFull}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[0.65rem] font-semibold text-brand hover:text-white"
                            >
                              <ExternalLink className="size-3" aria-hidden />
                              HD मध्ये उघडा
                            </a>
                            <a
                              href={item.page}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[0.65rem] text-zinc-400 hover:text-white"
                            >
                              Pexels
                              <ExternalLink className="size-2.5 opacity-80" aria-hidden />
                            </a>
                          </div>
                          <p className="mt-2 text-[0.65rem] text-zinc-500">
                            दर व मोजमापासाठी फोन / WhatsApp करा.
                          </p>
                        </figcaption>
                      </figure>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="brands" className="scroll-mt-24 border-y border-black/5 bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-brand sm:text-4xl">आमचे विश्वासू ब्रँड</h2>
              <p className="mt-3 text-pretty text-muted sm:text-lg">
                आम्ही दर्जेदार साहित्यासाठी नामांकित उत्पादकांसोबत काम करतो.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-md">
                <div className="text-3xl font-black tracking-tight text-[#1e4d8b]">TATA</div>
                <p className="mt-2 text-center text-xs text-muted">स्टील व साहित्य — टाटा</p>
              </div>
              <div className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-md">
                <div className="flex items-center gap-1 text-2xl font-black tracking-tight text-zinc-900">
                  <span className="text-brand">+</span>
                  ESSAR
                </div>
                <p className="mt-2 text-center text-xs text-muted">ESSAR स्टील परिवार</p>
              </div>
              <div className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 p-6 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="text-center text-lg font-bold leading-tight">
                  SteelWork
                  <span className="block text-xs font-medium text-zinc-300">Fabrication</span>
                </div>
                <p className="mt-3 text-center text-xs text-zinc-400">फॅब्रिकेशन व स्टील वर्क</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 bg-gradient-to-b from-brand to-brand-dark py-16 text-white sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-semibold sm:text-4xl">तुमच्या प्रकल्पासाठी तातडीने सेवा</h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-white/90 sm:text-lg">
              मोजमाप, दर आणि उपलब्धता जाणून घेण्यासाठी आम्हाला फोन करा किंवा WhatsApp करा.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:+91${PHONE_PRIMARY}`}
                className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition hover:bg-zinc-100 sm:w-auto"
              >
                <Phone className="size-5" aria-hidden />
                आता कॉल करा
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur transition hover:bg-white/15 sm:w-auto"
              >
                <MessageCircle className="size-5" aria-hidden />
                WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80">
              {PHONE_PRIMARY} · {PHONE_SECONDARY}
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-zinc-950 py-12 text-zinc-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">पांडुरंग स्टिल चैनलिंक (जाळी) इंडस्ट्रीज</p>
              <p className="mt-2 text-sm text-zinc-400">
              (प्रो. प्रा.): <span className="text-zinc-200">आभी जाधव पाटील</span>
                <span className="mt-1 block text-xs text-zinc-500"></span>
              </p>
              <p className="mt-4 inline-flex items-start gap-2 text-sm text-zinc-400">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                <span>
                  पत्ता: सागर पेट्रोलपंप समोर, चिखली-जालना रोड, देऊळगाव मही
                </span>
              </p>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-white">संपर्क</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href={`tel:+91${PHONE_PRIMARY}`} className="hover:text-white">
                    {PHONE_PRIMARY}
                  </a>
                </li>
                <li>
                  <a href={`tel:+91${PHONE_SECONDARY}`} className="hover:text-white">
                    {PHONE_SECONDARY}
                  </a>
                </li>
                <li className="font-mono text-xs text-zinc-500">GST: {GST}</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 pt-6 text-center text-[0.7rem] leading-relaxed text-zinc-500">
            HD गॅलरीतील चैनलिंक व काटेरी तार प्रतिमा{' '}
            <a
              href="https://www.pexels.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline decoration-zinc-600 underline-offset-2 hover:text-zinc-300"
            >
              Pexels
            </a>{' '}
            वरून. उत्पादन संदर्भ:{' '}
            <a
              href={URL_ORCHARD_CHAINLINK_ROLLS}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline decoration-zinc-600 underline-offset-2 hover:text-zinc-300"
            >
              Orchard Fencing
            </a>
            . © {new Date().getFullYear()} पांडुरंग स्टिल चैनलिंक (जाळी) इंडस्ट्रीज. सर्व हक्क राखीव.
          </p>
        </div>
      </footer>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[70] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/30 transition hover:scale-105 hover:shadow-xl"
        aria-label="WhatsApp वर संदेश पाठवा"
      >
        <MessageCircle className="size-7" aria-hidden />
      </a>
    </div>
  )
}
