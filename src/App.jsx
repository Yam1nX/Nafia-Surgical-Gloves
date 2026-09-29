import { useEffect, useRef, useState } from 'react'
import './styles.css'

const PHONE = '+8801612747578'
const SHOW_PHONE = '+880 1612-747578'
const EMAIL = 'nafiaagroplusbd@gmail.com'
const ADDRESS = 'B-2, H #160, Rd #02, Sugandha R/A, Panchlaish, Chattogram-4203'
const MAP_QUERY = encodeURIComponent('Sugandha R/A, Panchlaish, Chattogram 4203')
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`
const MAP_EMBED = 'https://www.openstreetmap.org/export/embed.html?bbox=91.8224%2C22.356%2C91.8404%2C22.372&layer=mapnik&marker=22.364%2C91.8314'
const whatsapp = (message = 'Hello NAFIA Surgical Gloves, I would like to request a quotation.') =>
  `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`

const iconPaths = {
  whatsapp: <path d="M12.04 2a9.84 9.84 0 0 0-8.44 14.91L2.3 22l5.25-1.37a9.9 9.9 0 1 0 4.49-18.63Zm0 18.08a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.81.83-3.03-.2-.31a8.1 8.1 0 1 1 6.91 3.84Zm4.44-6.07c-.24-.12-1.46-.72-1.68-.8-.23-.08-.4-.12-.56.12-.16.24-.64.8-.78.97-.15.16-.3.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.24-.02-.37.1-.49.1-.11.24-.29.36-.43.12-.15.16-.25.24-.41.08-.16.04-.3-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.43-.56-.44h-.48c-.17 0-.43.06-.66.3-.23.24-.87.85-.87 2.08s.9 2.41 1.02 2.58c.13.16 1.76 2.69 4.27 3.77.6.26 1.06.42 1.42.54.6.19 1.14.17 1.57.1.48-.08 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28Z" />,
  phone: <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.31.57 3.57.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />,
  pin: <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />,
  mail: <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8L4 7.5V8l8 5.5L20 8v-.5L12 13Z" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  check: <path d="m5 12 4 4L19 6" />,
  box: <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 5v9l9 5 9-5V8m-9 5v9" />,
  shield: <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-3-11 2 2 4-4" />,
  clock: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-16v6l4 2" />,
  plus: <path d="M12 5v14m-7-7h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  sparkle: <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Zm7 12 .95 2.05L22 18l-2.05.95L19 21l-.95-2.05L16 18l2.05-.95L19 15Z" />,
}

function Icon({ name, size = 20, className = '' }) {
  return <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill={name === 'whatsapp' || name === 'phone' || name === 'pin' || name === 'mail' || name === 'box' ? 'currentColor' : 'none'} stroke={name === 'whatsapp' || name === 'phone' || name === 'pin' || name === 'mail' || name === 'box' ? 'none' : 'currentColor'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>
}

const navigation = [
  ['#why-nafia', 'Why Nafia Surgical Gloves'],
  ['#product', 'Product'],
  ['#order-help', 'Order help'],
  ['#planner', 'Planner'],
  ['#quality', 'Quality'],
  ['#contact', 'Contact'],
]


const productGallery = [
  { src: '/assets/reference/optimized/1.webp', label: 'Product overview', alt: 'NAFIA powdered latex surgical gloves packaging with glove illustration' },
  { src: '/assets/reference/optimized/2.webp', label: 'Product information', alt: 'NAFIA glove packaging reference showing product details and a hand-specific glove illustration' },
  { src: '/assets/reference/optimized/3.webp', label: 'Package side panel', alt: 'Side panel of the supplied NAFIA gloves packaging reference with latex caution information' },
  { src: '/assets/reference/optimized/4.webp', label: 'Sizes & carton', alt: 'NAFIA glove carton packaging reference showing the listed glove sizes and product information' },
  { src: '/assets/reference/optimized/5.webp', label: 'Pack details', alt: 'NAFIA powdered latex gloves packaging reference with product and handling information' },
]

const faqs = [
  ['Do you supply hospitals, clinics and distributors?', 'Yes. NAFIA Surgical Gloves serves care providers and resellers. Share the item, requested quantity and delivery area to ask about current availability and a quotation.'],
  ['How can a customer outside Chattogram ask about an order?', 'Send your district and upazila together with the item and quantity on WhatsApp, or call us first. Please confirm current stock, the quotation and whether your specific area can be served before travelling or placing an order.'],
  ['Which glove sizes are listed on the packaging?', 'The supplied product information lists sizes 6.0, 6.5, 7.0 and 7.5. Ask us to confirm current availability for the size you need.'],
  ['How are the gloves packaged?', 'The supplied packaging information lists 50 pairs per box and 200 pairs per carton. Please confirm current packing and availability when requesting a quotation.'],
  ['Are these gloves suitable for someone with a latex allergy?', 'They contain natural rubber latex, which may cause allergic reactions. If you or a patient may have a latex allergy, do not rely on this product without checking the complete packaging and consulting an appropriately qualified healthcare professional.'],
  ['What should I check before placing an order?', 'Confirm the item, size, quantity, quoted price, current availability and whether delivery or collection is possible for your specific location. Check that the sterile pouch is intact before use. The product is single use only.'],
  ['Are the quality marks independently verified here?', 'No. Any ISO or ASTM references described on this page are identified only as marks or information shown on the supplied packaging. This page does not independently verify a certification. Ask NAFIA for the applicable product documents if you need to review them.'],
  ['How do I get a price?', 'Prices are not listed on this page. Call us or send an itemised WhatsApp request, and ask us to confirm the current quotation and availability.'],
]

function Brand({ light = false }) {
  return <a className={`brand${light ? ' brand--light' : ''}`} href="#top" aria-label="NAFIA Surgical Mart home">
    <span className="brand__mark"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 28V13.5a4.5 4.5 0 0 1 9 0v12V10a4.5 4.5 0 0 1 9 0v15V12.5a4.5 4.5 0 0 1 9 0v15l1.1-7.3a4.4 4.4 0 0 1 8.7 1.3l-2.2 16.2c-.7 5.1-3.4 9-7.6 11.3l-1.3.7v9.8H23v-8.1l-6.2-8.3a9.8 9.8 0 0 1-1.9-5.8V28Z" fill="currentColor"/><path d="M52 5v5h5v4h-5v5h-4v-5h-5v-4h5V5z" fill="#c6a45c"/></svg></span>
    <span className="brand__text"><b>NAFIA</b><small>SURGICAL GLOVES</small></span>
  </a>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    const onKeyDown = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="topline"><div className="shell topline__inner"><span>Medical &amp; surgical goods · Chattogram, Bangladesh</span><a href={`tel:${PHONE}`}><Icon name="phone" size={14}/><span>{SHOW_PHONE}</span></a></div></div>
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="shell header__inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
        <div className="header__actions">
          <a className="button button--gold button--small header__quote" href={whatsapp()} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={16}/> Get a quotation</a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} size={22}/></button>
        </div>
      </div>
    </header>
    <div id="mobile-navigation" className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`} aria-hidden={!menuOpen}>
      <nav aria-label="Mobile navigation">{navigation.map(([href, label]) => <a key={href} href={href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>{label}<Icon name="arrow" size={16}/></a>)}</nav>
      <a className="button button--gold" href={whatsapp()} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}><Icon name="whatsapp"/> Start a WhatsApp enquiry</a>
      <a className="mobile-nav__call" href={`tel:${PHONE}`} tabIndex={menuOpen ? 0 : -1}><Icon name="phone"/>{SHOW_PHONE}</a>
    </div>
  </>
}

function HeroArtwork() {
  return <div className="hero-art" aria-label="Illustration of a surgical glove">
    <div className="hero-art__halo"/>
    <div className="hero-art__orbit hero-art__orbit--one"/>
    <div className="hero-art__orbit hero-art__orbit--two"/>
    <div className="hero-art__spark hero-art__spark--one"><Icon name="plus" size={17}/></div>
    <div className="hero-art__spark hero-art__spark--two"><Icon name="sparkle" size={20}/></div>
    <div className="hero-art__label hero-art__label--top"><span className="status-dot"/> STERILE · HAND-SPECIFIC</div>
    <svg className="hero-art__glove" viewBox="42 -11 480 520" role="img" aria-labelledby="glove-title glove-description">
      <title id="glove-title">Surgical glove illustration</title>
      <desc id="glove-description">A warm ivory, hand-shaped surgical glove with softly shaded fingers and a gold cuff detail.</desc>
      <defs>
        <linearGradient id="glove-fill" x1=".12" y1=".05" x2=".88" y2=".92"><stop offset="0" stopColor="#fffefb"/><stop offset=".45" stopColor="#f3eddf"/><stop offset="1" stopColor="#d9cfb9"/></linearGradient>
        <linearGradient id="glove-cuff" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f7f2e8"/><stop offset="1" stopColor="#d8ceb8"/></linearGradient>
        <filter id="glove-shadow" x="-.35" y="-.2" width="1.7" height="1.6"><feDropShadow dx="2" dy="18" stdDeviation="15" floodColor="#0e2622" floodOpacity=".18"/></filter>
        <linearGradient id="glove-highlight" x1="0" x2="1"><stop stopColor="#fff" stopOpacity=".72"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient>
      </defs>
      <g filter="url(#glove-shadow)" className="glove-body">
        <path d="M171 249 154 153c-4-20 4-35 20-39 15-4 28 6 32 27l23 91-11-142c-2-22 7-38 24-40 17-1 28 12 30 34l10 145 2-153c0-22 9-37 26-37s27 13 27 36l3 153 11-111c2-22 13-34 29-31 16 3 23 17 20 38l-21 150c-9 62-25 93-65 114l-5 3 2 56H213l-2-63-28-38c-11-15-14-28-12-47Z" fill="url(#glove-fill)" stroke="#b9ac91" strokeWidth="2.3" strokeLinejoin="round"/>
        <path d="m191 160 20 96m68-118 8 111m55-99-1 105m50-79-15 89M214 330c37 15 79 15 118-1" fill="none" stroke="#fff" strokeOpacity=".68" strokeWidth="4" strokeLinecap="round"/>
        <path d="M211 402h151l2 59H213z" fill="url(#glove-cuff)" stroke="#b9ac91" strokeWidth="2"/>
        <path d="M211 407h151M212 414h150" fill="none" stroke="#c6a45c" strokeWidth="2.3" opacity=".9"/>
        <path d="M212 420h150" stroke="url(#glove-highlight)" strokeWidth="2"/>
        <path d="M238 280c23 8 42 8 62 5" fill="none" stroke="#d2c7b0" strokeWidth="2" strokeLinecap="round"/>
      </g>
    </svg>
    <div className="hero-art__label hero-art__label--bottom"><span>01</span> CARE-READY SUPPLIES</div>
    <div className="chip chip--a" style={{ '--d': 26 }}><Icon name="box" size={16}/><span><b>50 pairs</b><small>per box</small></span></div>
    <div className="chip chip--b" style={{ '--d': 40 }}><Icon name="shield" size={16}/><span><b>Sterile</b><small>single use</small></span></div>
    <div className="chip chip--c" style={{ '--d': 18 }}><Icon name="check" size={16}/><span><b>Sizes 6.0–7.5</b><small>ask for stock</small></span></div>
    <div className="hero-art__stamp"><span>NAFIA</span><small>SUPPLY WITH CARE</small></div>
  </div>
}

function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    let raf = 0
    const update = () => { raf = 0; const h = document.documentElement.scrollHeight - innerHeight; if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? Math.min(scrollY / h, 1) : 0})` }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update(); addEventListener('scroll', onScroll, { passive: true })
    return () => { removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return <div className="progress" ref={bar} aria-hidden="true"/>
}

const inspectViews = {
  studio: { src: '/assets/reference/optimized/glove-studio.webp', label: 'Close-up', alt: 'A pair of ivory latex surgical gloves laid flat on a white background, showing the rolled cuffs and rounded fingertips' },
  pair: { src: '/assets/reference/optimized/glove-pair.webp', label: 'Left & right', alt: 'Left and right ivory latex gloves laid on a sterile wrap, marked L and R' },
}
const inspectNotes = [
  { x: 36, y: 55, title: 'Rolled cuff', text: 'Both gloves show a rolled edge at the cuff. This is a common design that helps the glove hold at the wrist and resist tearing when put on.' },
  { x: 32, y: 20, title: 'Fingertips & film', text: 'A smooth, thin film with rounded fingertips. Natural latex has a warm ivory tone rather than bright white.' },
  { x: 29, y: 46, title: 'Hand-specific shape', text: 'The thumb sits to one side and the fingers curve slightly, matching the hand-specific fit described on the packaging.' },
]

function GloveInspector() {
  const [view, setView] = useState('studio')
  const [zoom, setZoom] = useState(false)
  const [pt, setPt] = useState({ x: 50, y: 50 })
  const [active, setActive] = useState(-1)
  const frame = useRef(0)
  const studio = view === 'studio'
  const img = inspectViews[view]
  const reset = () => { setZoom(false); setActive(-1) }
  const pick = (i) => { setActive(i); setPt({ x: inspectNotes[i].x, y: inspectNotes[i].y }); setZoom(true) }
  const move = (e) => {
    if (!zoom || e.pointerType === 'touch' || frame.current) return
    const r = e.currentTarget.getBoundingClientRect(), x = ((e.clientX - r.left) / r.width) * 100, y = ((e.clientY - r.top) / r.height) * 100
    frame.current = requestAnimationFrame(() => { frame.current = 0; setPt({ x, y }) })
  }
  return <section className="section section--inspect" id="inspect"><div className="shell inspect-grid">
    <div className="inspect-stage" data-zoom={zoom} onClick={() => { setZoom(!zoom); setActive(-1) }} onPointerMove={move}>
      <div className="inspect-zoom" style={{ '--z': zoom ? 2.4 : 1, transformOrigin: `${pt.x}% ${pt.y}%` }}>
        <img src={img.src} alt={img.alt} width="1254" height="1254" loading="lazy" decoding="async"/>
        {studio && inspectNotes.map((n, i) => <button key={n.title} type="button" className={`hot${active === i ? ' hot--on' : ''}`} style={{ left: `${n.x}%`, top: `${n.y}%` }} aria-label={`Zoom to ${n.title}`} onClick={(e) => { e.stopPropagation(); pick(i) }}>{i + 1}</button>)}
      </div>
      <span className="inspect-hint">{zoom ? 'Tap to zoom out' : 'Tap to zoom in'}</span>
    </div>
    <div className="inspect-info">
      <h2>Look closely at<br/><em>the material.</em></h2>
      <p className="inspect-lead">See the film, cuff and fingertips up close before you ask about an order.</p>
      <div className="inspect-tabs" role="group" aria-label="Choose a photo">{Object.entries(inspectViews).map(([key, v]) => <button key={key} type="button" aria-pressed={view === key} className={view === key ? 'on' : ''} onClick={() => { reset(); setView(key) }}>{v.label}</button>)}</div>
      {studio ? <ul className="inspect-notes">{inspectNotes.map((n, i) => <li key={n.title}><button type="button" className={active === i ? 'on' : ''} onClick={() => pick(i)}><span>{i + 1}</span><div><b>{n.title}</b><p>{n.text}</p></div></button></li>)}</ul>
        : <p className="inspect-single">In this photo the pair is marked L and R. Hand-specific gloves are shaped for each hand, so check the marking before use.</p>}
      <p className="inspect-fine">Photos show a sample pair; your batch may differ slightly. Ask us for current photos of the stock you want.</p>
      <a className="button button--gold" href={whatsapp('Hello NAFIA Surgical Mart, could you send current photos of the gloves in stock?')} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Ask for current photos</a>
    </div>
  </div></section>
}

function Planner() {
  const [palm, setPalm] = useState(86)
  const [perDay, setPerDay] = useState(20)
  const [days, setDays] = useState(30)
  const size = palm < 80 ? '6.0' : palm < 86 ? '6.5' : palm < 92 ? '7.0' : '7.5'
  const pairs = Math.max(0, perDay) * Math.max(0, days)
  const boxes = Math.ceil(pairs / 50), cartons = Math.ceil(pairs / 200)
  return <section className="section section--planner" id="planner"><div className="shell">
    <div className="planner-head"><h2>Work it out<br/><em>before you ask.</em></h2><p>Two quick tools to help you send a clearer request. Results are a starting guide, so confirm sizes and quantities with our team.</p></div>
    <div className="planner-grid">
      <div className="planner-card">
        <h3>Find your glove size</h3><p>Measure across your palm at its widest point, below the knuckles and without the thumb.</p>
        <label className="range"><span>Palm width <b>{palm} mm</b></span><input type="range" min="70" max="100" value={palm} onChange={(e) => setPalm(+e.target.value)}/><i><em>70</em><em>85</em><em>100</em></i></label>
        <div className="planner-result"><span>Suggested size</span><strong key={size}>{size}</strong></div>
        <a className="button button--green" href={whatsapp(`Hello NAFIA Surgical Mart, I would like a quotation for NAFIA Powdered Latex Surgical Gloves, size ${size}. Please confirm current availability.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Ask about size {size}</a>
      </div>
      <div className="planner-card">
        <h3>Estimate how much you need</h3><p>Based on the packaging: 50 pairs per box, 200 pairs per carton.</p>
        <div className="form-row"><label className="form-field"><span>Pairs used per day</span><input type="number" min="0" value={perDay} onChange={(e) => setPerDay(+e.target.value)}/></label><label className="form-field"><span>Number of days</span><input type="number" min="0" value={days} onChange={(e) => setDays(+e.target.value)}/></label></div>
        <div className="planner-result"><span>{pairs.toLocaleString('en-US')} pairs needed</span><strong key={boxes}>{boxes.toLocaleString('en-US')} <small>boxes</small></strong><em>about {cartons.toLocaleString('en-US')} cartons</em></div>
        <a className="button button--green" href={whatsapp(`Hello NAFIA Surgical Mart, I need about ${pairs} pairs (${boxes} boxes) of NAFIA Powdered Latex Surgical Gloves. Please confirm availability and quotation.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Request this quantity</a>
      </div>
    </div>
  </div></section>
}

function Hero() {
  const ref = useRef(null)
  const frame = useRef(0)
  const set = (x, y) => { ref.current?.style.setProperty('--mx', x); ref.current?.style.setProperty('--my', y) }
  const onMove = (e) => {
    if (e.pointerType === 'touch' || frame.current) return
    const { clientX, clientY } = e
    frame.current = requestAnimationFrame(() => {
      frame.current = 0
      const r = ref.current?.getBoundingClientRect(); if (!r) return
      set(((clientX - r.left) / r.width - 0.5).toFixed(3), ((clientY - r.top) / r.height - 0.5).toFixed(3))
    })
  }
  return <section className="hero" id="top" ref={ref} onPointerMove={onMove} onPointerLeave={() => set(0, 0)}>
    <div className="hero__bg" aria-hidden="true"><i/><i/><i/></div>
    <div className="hero__texture" aria-hidden="true"/>
    <div className="shell hero__grid">
      <div className="hero__copy">
        <div className="eyebrow"><span className="eyebrow__line"/> A PRACTICAL PARTNER IN CARE</div>
<h1><span className="line"><span style={{ '--i': 0 }}>Quality surgical supplies from</span></span><span className="line"><span style={{ '--i': 1 }}><em>Malaysia</em>, delivered with care.</span></span></h1>        <p className="hero__lead">Medical and surgical goods for hospitals, clinics and distributors—sourced with care and quoted directly by our Chattogram team.</p>
        <div className="hero__actions">
          <a className="button button--gold" href={whatsapp()} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Ask for a quotation <Icon name="arrow" size={17}/></a>
          <a className="button button--outline" href={`tel:${PHONE}`}><Icon name="phone"/>{SHOW_PHONE}</a>
        </div>
        <div className="hero__trust"><span><Icon name="check" size={16}/> Clear product details</span><span><Icon name="check" size={16}/> Direct conversation</span></div>
        <a className="hero__scroll" href="#why-nafia"><span className="hero__scroll-line"/> Discover NAFIA</a>
      </div>
      <div className="hero__visual"><HeroArtwork /></div>
      <div className="hero__index"><span>CHATTAGRAM</span><i/> MEDICAL SUPPLY, MADE SIMPLE</div>
    </div>
  </section>
}

function TrustStrip() {
  const items = ['Sterile packaging details', 'Hand-specific fit', 'Made in Malaysia', 'Direct quotation']
  return <div className="trust-strip" aria-label="Product details at a glance"><div className="shell trust-strip__inner">{items.map((item) => <div className="trust-strip__item" key={item}><span className="trust-strip__dot"/>{item}</div>)}</div></div>
}

function About() {
  return <section className="section section--intro" id="why-nafia">
    <div className="shell intro-grid">
      <div className="section-heading"><p className="eyebrow eyebrow--dark"><span className="eyebrow__line"/> A LOCAL SUPPLY PARTNER</p><h2>Good care starts<br/>with <em>clear decisions.</em></h2></div>
      <div className="intro-copy"><p>NAFIA Surgical Gloves is the medical supply arm of Nafia Agro Products, led by proprietor Abu Taleb. From our base in Chattogram, we make it easier for care teams and distributors to ask about the products they need.</p><p>We keep the details practical: share an item and quantity, ask about the current quotation, and confirm your delivery area before you commit or travel.</p>
        <div className="intro-note"><span className="intro-note__icon"><Icon name="sparkle" size={19}/></span><span><b>A straightforward conversation.</b><small>Talk directly with our team by phone or WhatsApp.</small></span><a href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp conversation"><Icon name="arrow"/></a></div>
      </div>
    </div>
  </section>
}


function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(3)
  const photo = productGallery[activeIndex]
  return <div className="product-card__visual" aria-label="Supplied NAFIA product and packaging references">
    <div className="product-card__visual-top"><span>NAFIA · SURGICAL</span><span>PRODUCT PHOTOS</span></div>
    <div className="product-gallery__stage">
      <img key={photo.src} src={photo.src} alt={photo.alt} width="1200" height="848" loading="lazy" decoding="async" fetchPriority="low" />
      <span className="product-gallery__count" aria-hidden="true">{String(activeIndex + 1).padStart(2, '0')} <i>/</i> {String(productGallery.length).padStart(2, '0')}</span>
    </div>
    <div className="product-gallery__controls">
      <div className="product-gallery__thumbs" role="group" aria-label="Choose a supplied product photo">
        {productGallery.map((item, index) => <button key={item.src} type="button" className={`product-gallery__thumb${activeIndex === index ? ' product-gallery__thumb--active' : ''}`} aria-label={`View photo ${index + 1}: ${item.label}`} aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)}><img src={item.src} alt="" width="1200" height="848" loading="lazy" decoding="async"/><span>0{index + 1}</span></button>)}
      </div>
      <p className="product-gallery__caption" aria-live="polite">{photo.label}<span>Click a photo to explore the supplied packaging references.</span></p>
    </div>
    <p className="product-gallery__note">Reference images supplied with the product information. Confirm the current pack and details with NAFIA before ordering.</p>
  </div>
}

function ProductCard() {
  const [size, setSize] = useState('6.5')
  const sizes = ['6.0', '6.5', '7.0', '7.5']
  return <section className="section section--product" id="product">
    <div className="shell">
      <div className="section-topline"><p className="eyebrow eyebrow--dark"><span className="eyebrow__line"/> FEATURED PRODUCT</p><span className="section-topline__note">Clear details. Direct quotation.</span></div>
      <div className="product-card">
        <ProductGallery />
        <div className="product-card__info">
          <div className="product-card__eyebrow"><span className="status-dot"/> FEATURED · NAFIA</div>
          <h3>Powdered Latex<br/>Surgical Gloves</h3>
          <p className="product-card__desc">The supplied package information describes powdered, sterile, hand-specific gloves with textured palms and curved fingers. Made from natural rubber latex. Check that the individual sterile pouch is sealed and undamaged before use.</p>
          <div className="product-sizes"><div className="field-label"><span>Choose a size to ask about</span><span>Size on packaging</span></div><div className="size-picker" role="radiogroup" aria-label="Select a glove size">{sizes.map((value) => <button key={value} type="button" role="radio" aria-checked={size === value} className={size === value ? 'size-picker__option size-picker__option--selected' : 'size-picker__option'} onClick={() => setSize(value)}>{value}</button>)}</div></div>
          <dl className="product-specs"><div><dt>Pack format</dt><dd>50 pairs / box · 200 pairs / carton</dd></div><div><dt>Origin listed</dt><dd>Made in Malaysia</dd></div><div><dt>Standard reference</dt><dd>ASTM D3577 — printed on supplied packaging</dd></div><div><dt>Product type</dt><dd>Powdered · sterile · hand-specific</dd></div></dl>
          <p className="product-caution"><Icon name="shield" size={17}/><span><b>Please note:</b> Contains natural rubber latex; allergic reactions may occur. Single use only. Check the complete package before use.</span></p>
          <a className="button button--green product-card__cta" href={whatsapp(`Hello NAFIA Surgical Mart, I would like a quotation for NAFIA Powdered Latex Surgical Gloves, size ${size}. Please confirm current availability and packaging.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Ask about size {size}<Icon name="arrow" size={17}/></a>
          <p className="product-card__fine">Packaging claims shown in these reference photos are not independently verified on this page; confirm current details and availability with NAFIA.</p>
        </div>
      </div>
      <div className="product-footnote"><span className="product-footnote__mark">i</span><p>Need a different medical or surgical item? Tell us the item name and required quantity. We will confirm what is currently available and provide a quotation where possible.</p><a href={whatsapp('Hello NAFIA Surgical Mart, I need a quotation for a medical or surgical item. Item: ')} target="_blank" rel="noreferrer">Describe what you need <Icon name="arrow" size={16}/></a></div>
    </div>
  </section>
}

function OrderHelp() {
  const template = 'আসসালামু আলাইকুম, আমি NAFIA Surgical Gloves থেকে পণ্যের দাম জানতে চাই।\nপণ্যের নাম: \nসাইজ: \nপরিমাণ: \nজেলা: \nউপজেলা/এলাকা: \nআমার এলাকায় পণ্য পৌঁছে দেওয়া সম্ভব কি না এবং বর্তমান মজুত আছে কি না জানাবেন। ধন্যবাদ।'
  return <section className="section section--help" id="order-help">
    <div className="shell">
      <div className="help-intro"><div><p className="eyebrow"><span className="eyebrow__line"/> ORDER WITH CONFIDENCE</p><h2>Not nearby?<br/><em>Start with a message.</em></h2></div><p className="help-intro__copy">Before travelling or placing an order, ask what is in stock and whether your specific district or upazila can be served. A few details help us answer clearly.</p></div>
      <div className="help-grid">
        <div className="help-card help-card--steps"><div className="help-card__top"><span className="help-number">01</span><span className="help-card__label">A QUICK ORDER CHECKLIST</span></div><h3>Include these details</h3><p>Send one message with the information your supplier needs to respond usefully.</p><ul className="checklist"><li><span><Icon name="check" size={14}/></span> Product or item name</li><li><span><Icon name="check" size={14}/></span> Size or specification, if relevant</li><li><span><Icon name="check" size={14}/></span> Quantity required</li><li><span><Icon name="check" size={14}/></span> District and upazila / delivery area</li></ul><div className="help-card__tip"><Icon name="clock" size={18}/><span>Confirm price, current stock and delivery or collection arrangements <b>before</b> travelling.</span></div></div>
        <div className="help-card help-card--bangla"><div className="help-card__top"><span className="help-number">02</span><span className="help-card__label">সহজ অর্ডার · BANGLA GUIDE</span></div><h3 lang="bn">দূরে থাকলেও জানতে পারেন</h3><p lang="bn">পণ্যের নাম, সাইজ ও পরিমাণ লিখে আপনার জেলা ও উপজেলার নামসহ WhatsApp করুন। অর্ডার বা যাত্রার আগে আপনার এলাকায় সরবরাহ সম্ভব কি না, পণ্য মজুত আছে কি না এবং দাম কত—নিশ্চিত হয়ে নিন।</p><a className="button button--gold" href={whatsapp(template)} target="_blank" rel="noreferrer" lang="bn"><Icon name="whatsapp"/> বাংলায় জিজ্ঞেস করুন <Icon name="arrow" size={17}/></a><small className="help-card__disclaimer" lang="bn">আপনার এলাকার সরবরাহ নিশ্চিত না হওয়া পর্যন্ত আমরা প্রতিশ্রুতি দিচ্ছি না—সরাসরি জেনে নিন।</small></div>
      </div>
      <div className="service-note"><span className="service-note__icon"><Icon name="pin" size={20}/></span><p><b>Checking service for a specific area?</b><br/>Share your district, upazila or town. Our team can tell you what arrangements may be possible for your location.</p><a href={whatsapp('Hello NAFIA Surgical Mart, please let me know whether service may be possible for my area. District: ___; Upazila / town: ___.')} target="_blank" rel="noreferrer">Ask about your area <Icon name="arrow" size={16}/></a></div>
    </div>
  </section>
}

function Quality() {
  const details = [
    ['ISO 9001', 'Mark shown on supplied packaging'],
    ['ISO 13485', 'Mark shown on supplied packaging'],
    ['ISO 14001', 'Mark shown on supplied packaging'],
    ['ISO 45001', 'Mark shown on supplied packaging'],
    ['ASTM D3577', 'Standard reference shown on packaging'],
  ]
  return <section className="section section--quality" id="quality">
    <div className="shell">
      <div className="quality-heading"><div><p className="eyebrow eyebrow--dark"><span className="eyebrow__line"/> QUALITY &amp; PACKAGING</p><h2>Details you can<br/><em>check for yourself.</em></h2></div><p>Clear information is part of a responsible purchase. These marks are referenced here only because they appear on the supplied packaging.</p></div>
      <div className="quality-grid">{details.map(([name, desc], index) => <article className="quality-item" key={name}><span className="quality-item__index">0{index + 1}</span><Icon name="shield" size={20}/><h3>{name}</h3><p>{desc}</p></article>)}</div>
      <div className="quality-note"><span className="quality-note__icon"><Icon name="shield" size={19}/></span><p><b>About packaging marks</b><br/>This website does not independently verify or certify these marks. Please request and review relevant product documents if you need independent evidence. Always read the complete label and instructions supplied with the product.</p></div>
    </div>
  </section>
}

function OrderSteps() {
  const steps = [
    ['Tell us what you need', 'Message or call with the item, size and quantity. For delivery questions, include your district and upazila.'],
    ['Confirm the details', 'Ask us to confirm current stock, the quotation and whether collection or delivery may be possible for your area.'],
    ['Decide with clarity', 'Review the quotation and arrangements. Confirm the details with our team before proceeding.'],
  ]
  return <section className="section section--order" id="how-to-order">
    <div className="shell"><div className="order-heading"><div><p className="eyebrow eyebrow--dark"><span className="eyebrow__line"/> A CLEARER WAY TO ORDER</p><h2>Three steps.<br/><em>No guesswork.</em></h2></div><a href={whatsapp()} target="_blank" rel="noreferrer" className="text-link">Start a conversation <Icon name="arrow" size={17}/></a></div>
      <ol className="order-steps">{steps.map(([title, body], index) => <li key={title}><div className="order-steps__num"><span>0{index + 1}</span><i/></div><h3>{title}</h3><p>{body}</p></li>)}</ol>
    </div>
  </section>
}

function FAQ() {
  return <section className="section section--faq" id="faq"><div className="shell faq-layout">
    <div className="faq-intro"><p className="eyebrow eyebrow--dark"><span className="eyebrow__line"/> GOOD TO KNOW</p><h2>Answers before<br/>you <em>order.</em></h2><p>Need a specific answer? Speak with our team directly.</p><a href={whatsapp()} target="_blank" rel="noreferrer" className="text-link">Ask us on WhatsApp <Icon name="arrow" size={17}/></a></div>
    <div className="faq-list">{faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary><span>{question}</span><span className="faq-item__toggle"><Icon name="plus" size={18}/></span></summary><div className="faq-item__answer"><p>{answer}</p></div></details>)}</div>
  </div></section>
}

function Contact() {
  const [form, setForm] = useState({ name: '', item: 'NAFIA Powdered Latex Surgical Gloves', size: '6.5', quantity: '', area: '', message: '' })
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }))
  const submit = (event) => {
    event.preventDefault()
    const draft = `Hello NAFIA Surgical Mart, I would like a quotation.\nName: ${form.name}\nItem: ${form.item}\nSize / specification: ${form.size || 'Not applicable'}\nQuantity: ${form.quantity}\nDistrict / upazila / area: ${form.area || 'Please advise'}\nAdditional details: ${form.message || 'None'}\nPlease confirm current availability and whether arrangements can be made for my area.`
    window.open(whatsapp(draft), '_blank', 'noopener,noreferrer')
  }
  return <section className="section section--contact" id="contact"><div className="shell">
    <div className="contact-heading"><p className="eyebrow"><span className="eyebrow__line"/> LET'S TALK</p><h2>Tell us what<br/><em>you need.</em></h2><p>Share a few details and WhatsApp opens with a ready-to-send inquiry. Nothing is submitted until you choose to send the message.</p></div>
    <div className="contact-grid">
      <form className="quote-form" onSubmit={submit}>
        <div className="quote-form__heading"><span>REQUEST A QUOTATION</span><span className="quote-form__required">* Required</span></div>
        <label className="form-field"><span>Your name <b>*</b></span><input autoComplete="name" required value={form.name} onChange={update('name')} placeholder="e.g. Rahim Uddin"/></label>
        <label className="form-field"><span>Item or product <b>*</b></span><input required value={form.item} onChange={update('item')} placeholder="What are you looking for?"/></label>
        <div className="form-row"><label className="form-field"><span>Size / specification</span><select value={form.size} onChange={update('size')}><option value="6.0">Glove size 6.0</option><option value="6.5">Glove size 6.5</option><option value="7.0">Glove size 7.0</option><option value="7.5">Glove size 7.5</option><option value="">Not applicable / other</option></select></label><label className="form-field"><span>Quantity</span><input value={form.quantity} onChange={update('quantity')} placeholder="e.g. 10 boxes"/></label></div>
        <label className="form-field"><span>District / upazila / area <small>(for delivery enquiries)</small></span><input autoComplete="address-level2" value={form.area} onChange={update('area')} placeholder="Your district and upazila"/></label>
        <label className="form-field"><span>Anything else?</span><textarea rows="3" value={form.message} onChange={update('message')} placeholder="Share any important details"/></label>
        <button className="button button--gold quote-form__submit" type="submit"><Icon name="whatsapp"/> Continue in WhatsApp <Icon name="arrow" size={17}/></button>
        <p className="quote-form__privacy">Your details stay in this form until you open WhatsApp. Review the message there before sending.</p>
      </form>
      <aside className="contact-details" aria-label="Company contact details">
        <div className="contact-details__intro"><span className="contact-details__eyebrow">HERE TO HELP</span><h3>Talk to our<br/>Chattogram team.</h3><p>Call for a quick question or share your requirements by email or WhatsApp.</p></div>
        <a className="contact-row" href={`tel:${PHONE}`}><span className="contact-row__icon"><Icon name="phone"/></span><span><small>CALL OUR TEAM</small><b>{SHOW_PHONE}</b></span><Icon name="arrow" size={17}/></a>
        <a className="contact-row" href={`mailto:${EMAIL}`}><span className="contact-row__icon"><Icon name="mail"/></span><span><small>EMAIL US</small><b className="contact-row__email">{EMAIL}</b></span><Icon name="arrow" size={17}/></a>
        <a className="contact-row contact-row--address" href={MAP_LINK} target="_blank" rel="noreferrer"><span className="contact-row__icon"><Icon name="pin"/></span><span><small>VISIT OUR OFFICE</small><b>{ADDRESS}</b></span><Icon name="arrow" size={17}/></a>
        <div className="map-card"><iframe className="map-card__embed" src={MAP_EMBED} title="OpenStreetMap showing the approximate Sugandha R/A area, Panchlaish, Chattogram" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/></div>
        <p className="map-card__note">Approximate area map. Please confirm the exact office location with our team before travelling.</p>
        <a className="map-card__directions" href={MAP_LINK} target="_blank" rel="noreferrer">Open area in Google Maps <Icon name="arrow" size={15}/></a>
      </aside>
    </div>
  </div></section>
}

function Footer() {
  return <footer className="footer">
    <div className="footer-cta"><div className="shell footer-cta__inner"><div><p className="eyebrow"><span className="eyebrow__line"/> YOUR NEXT STEP</p><h2>Need a quote? <em>We're here.</em></h2></div><a className="button button--gold" href={whatsapp()} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Message the team <Icon name="arrow" size={17}/></a></div></div>
    <div className="shell footer-main"><div className="footer-brand"><Brand light/><p>Medical and surgical goods suppliers. A sister concern of M/s. Nafia Agro Products and Ameena Corporation.</p><span className="footer-brand__caption">SUPPLY WITH CARE · CHATTOGRAM</span></div>
      <div className="footer-column"><h3>Explore</h3>{navigation.map(([href, label]) => <a key={href} href={href}>{label}</a>)}<a href="#how-to-order">How to order</a></div>
      <div className="footer-column"><h3>Ask us about</h3><a href="#product">Powdered latex surgical gloves</a><a href="#product">Sizes &amp; packaging details</a><a href={whatsapp('Hello NAFIA Surgical Mart, I would like to ask about other medical and surgical goods.')} target="_blank" rel="noreferrer">Other medical goods</a><a href={whatsapp('Hello NAFIA Surgical Gloves, I would like to ask about Medtronic products.')} target="_blank" rel="noreferrer">Medtronic product enquiries</a></div>
      <div className="footer-column footer-column--contact"><h3>Contact</h3><a href={`tel:${PHONE}`}>{SHOW_PHONE}</a><a href={whatsapp()} target="_blank" rel="noreferrer">WhatsApp our team</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>{ADDRESS}</span></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} NAFIA Surgical Gloves. All rights reserved.</span><span>Clear information. Direct conversation.</span><a href="#top">Back to top ↑</a></div>
  </footer>
}


export default function App() {
  useEffect(() => {
    document.title = 'NAFIA Surgical Mart | Medical & Surgical Supplies in Chattogram'
    const descriptionText = 'Ask NAFIA Surgical Gloves in Chattogram about surgical gloves and medical supplies. Confirm current availability, quotation and area arrangements directly.'
    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.appendChild(description)
    }
    description.setAttribute('content', descriptionText)
  }, [])

  return <>
    <ScrollProgress />
    <Header />
    <main id="main">
      <Hero />
      <TrustStrip />
      <About />
      <ProductCard />
      <GloveInspector />
      <Planner />
      <OrderHelp />
      <Quality />
      <OrderSteps />
      <FAQ />
      <Contact />
    </main>
    <Footer />
    <div className="mobile-contact-bar" aria-label="Quick contact actions"><a href={`tel:${PHONE}`}><Icon name="phone" size={18}/>Call</a><a href={whatsapp()} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18}/>WhatsApp</a><a href={MAP_LINK} target="_blank" rel="noreferrer"><Icon name="pin" size={17}/>Map</a></div>
  </>
}
