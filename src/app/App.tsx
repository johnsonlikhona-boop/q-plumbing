import { useState } from "react";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  Wrench,
  Droplets,
  ShowerHead,
  Pipette,
  Hammer,
  Home,
  ChefHat,
  AlertTriangle,
  Settings,
  Shield,
  Clock,
  Users,
  DollarSign,
  MapPin,
  Mail,
  Menu,
  X,
  ChevronRight,
  Quote,
  Zap,
  Award,
  ThumbsUp,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import img26 from "@/imports/imgi_26_APNQkAGsNK9Hd2f1G1xnueilE3ipAyedAILlIVtd127XpfNBDfgrPs65fv5k38xdO3kggkKgJ7EtZ8j94kIjo21iMkJMiFGgOj2WPt-HNlDAbLx9t331GcoXlet4p0_VIInsIEI-bh-1KLuVwuz9_w203-h270-k-no.jpg";
import img28 from "@/imports/imgi_28_APNQkAHDMgavNgSLW7RY4egYV116QxW9VyAlCK9oWdjzlg66xzFeJ07hua-7DP4feIrsC-8pXCuqsxV586pgZxwFhIyL6JaD6N_EFjyDMWuoPf_x8v2Yqk6JoFmH7M7G95XjbEGKzOWNXKCKvp2F_s1280-k-no.jpg";
import img24 from "@/imports/imgi_24_APNQkAFOLcopZwkQAbDqRIgeXn5nkwtx_7S1PkcfZ6AHRqmL7hs5pmT1ELRCubATnJ4Gj0hl8ZbIx55hk9-ApenNN3cMaQRPYLKIFjBsXT9ImdIwU0X8KPyva67V6RXX-2RzKHZ4JZcLtc1lTkvN_w203-h278-k-no.jpg";
import img23 from "@/imports/imgi_23_APNQkAE9Cz2UV9dyou-rc0LDoyBowl9PvQjmBrmDqI0rPB-kzcgnfHmQHow_q4O3ILQ_Q4c2iXevmwK1cuAMpZGJHIYsxSxxz5QxHeWAUlNWvVHAEB7OMIEZeuMHu979H4q1xMNIi1FiF6vIZnA_s812-k-no.jpg";
import img21 from "@/imports/imgi_21_APNQkAFUwvtPZ-Kzy7NSjzToBucAGRfoxMPafSaGfK9GSFVKT5ikftj-6w4-B8PuS3DNOPSnfjGtd0CjPzH85wa1ueSNC6ksAabuU4vt8KGd06Act_unwM4vxy5gQeumFiCzVQbVNQd8DgEhCOcd_s773-k-no.jpg";

const PHONE = "068 423 4899";
const PHONE_HREF = "tel:0684234899";
const WHATSAPP_HREF = `https://wa.me/27684234899?text=Hi%20Q.%20Plumbing%2C%20I%20need%20plumbing%20assistance.`;

const services = [
  { icon: Droplets, title: "Leak Detection & Repairs", desc: "Fast, accurate leak detection and repair services to prevent water damage and reduce costs." },
  { icon: Pipette, title: "Blocked Drains", desc: "Professional drain unblocking using industry-grade tools to restore full flow quickly." },
  { icon: ShowerHead, title: "Toilet Repairs", desc: "From running toilets to complete replacements — we handle all toilet repairs efficiently." },
  { icon: Wrench, title: "Tap Installations", desc: "New tap installations and replacements with quality fittings for a clean, lasting finish." },
  { icon: Zap, title: "Pipe Repairs", desc: "Burst, cracked, or corroded pipes repaired with precision to restore full water pressure." },
  { icon: Home, title: "Bathroom Plumbing", desc: "Full bathroom plumbing services from new installations to complete renovations." },
  { icon: ChefHat, title: "Kitchen Plumbing", desc: "Sink installations, dishwasher connections, and kitchen pipe repairs done right." },
  { icon: AlertTriangle, title: "Emergency Plumbing", desc: "24/7 emergency response for urgent plumbing issues — we arrive fast when it matters most." },
  { icon: Settings, title: "Maintenance Services", desc: "Routine plumbing maintenance to keep your systems running smoothly year-round." },
];

const reasons = [
  { icon: Award, title: "Professional Service", desc: "Trained, experienced plumbers who take pride in delivering high-quality workmanship on every job." },
  { icon: Shield, title: "Attention To Detail", desc: "We don't cut corners. Every installation and repair is completed with care and precision." },
  { icon: Users, title: "Friendly Team", desc: "Our team is approachable, communicative, and always respectful of your home and time." },
  { icon: DollarSign, title: "Affordable Solutions", desc: "Transparent, competitive pricing with no hidden fees — quality plumbing that fits your budget." },
];

const areas = [
  "Delft", "Mfuleni", "Khayelitsha", "Blue Downs",
  "Bellville", "Mitchells Plain", "Strand", "Cape Town CBD",
];

const galleryImages = [
  { src: img24, alt: "Completed bathroom installation with wall-hung toilet and herringbone tiles" },
  { src: img21, alt: "Plumber completing solar water heater installation on rooftop in Cape Town" },
  { src: img26, alt: "Bathroom rough-in plumbing with pipes and toilet installation" },
  { src: img23, alt: "Pipe installation and rough plumbing work in progress" },
  { src: img28, alt: "Bathroom plumbing installation showing pipe routing" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#0A66C2" }}>
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>
              Q. <span style={{ color: "#0A66C2" }}>Plumbing</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {["Services", "About", "Gallery", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#0A66C2] transition-colors">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all hover:brightness-110 active:scale-95"
              style={{ background: "#0A66C2" }}
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all hover:brightness-110 active:scale-95"
              style={{ background: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <button
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-3">
            {["Services", "About", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 font-medium py-2 border-b border-slate-100 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white mt-2" style={{ background: "#0A66C2" }}>
              <Phone className="w-4 h-4" /> Call {PHONE}
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white" style={{ background: "#25D366" }}>
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=1920&h=1080&fit=crop&auto=format')`,
            backgroundColor: "#0F172A",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.75) 55%, rgba(10,102,194,0.45) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "rgba(10,102,194,0.25)", color: "#93C5FD", border: "1px solid rgba(10,102,194,0.4)" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available Now · Cape Town
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Reliable Plumbing<br />
              <span style={{ color: "#60A5FA" }}>Services In</span><br />
              Cape Town
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              Fast, professional plumbing solutions for homes and businesses. From leaks and blocked drains to installations and maintenance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-white text-lg shadow-xl transition-all hover:brightness-110 active:scale-95"
                style={{ background: "#0A66C2", boxShadow: "0 0 30px rgba(10,102,194,0.4)" }}
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-white text-lg shadow-xl transition-all hover:brightness-110 active:scale-95"
                style={{ background: "#25D366", boxShadow: "0 0 30px rgba(37,211,102,0.3)" }}
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-white ml-1">5.0 Rating</span>
              </div>
              {["Reliable Service", "Fast Response", "Professional Workmanship"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs animate-bounce">
          <div className="w-0.5 h-8 rounded-full bg-slate-500" />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-5 border-y border-border" style={{ background: "#0A66C2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Award, label: "Experienced Team" },
              { icon: Shield, label: "Quality Workmanship" },
              { icon: ThumbsUp, label: "Customer Satisfaction" },
              { icon: Clock, label: "Fast Response Times" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2.5 py-2">
                <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                <span className="text-white font-semibold text-sm sm:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <ImageWithFallback
                  src={img21}
                  alt="Q. Plumbing team member completing a solar water heater installation in Cape Town"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 hidden md:flex flex-col items-center justify-center w-28 h-28 rounded-2xl text-white shadow-xl" style={{ background: "#0A66C2" }}>
                <span className="text-3xl font-extrabold" style={{ fontFamily: "'Montserrat', sans-serif" }}>5★</span>
                <span className="text-xs font-medium text-blue-200 text-center leading-tight">Rated<br />Service</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A66C2" }}>About Us</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>
                Your Trusted Local<br />Plumbing Experts
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Q. Plumbing provides reliable and professional plumbing services throughout Cape Town. We take pride in delivering quality workmanship, excellent customer service, and long-lasting plumbing solutions. Whether it&apos;s a small repair or a major installation, our team is committed to getting the job done right.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, label: "Fast Response" },
                  { icon: Shield, label: "Quality Work" },
                  { icon: Users, label: "Friendly Team" },
                  { icon: Award, label: "Experienced" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-border">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
                      <Icon className="w-5 h-5" style={{ color: "#0A66C2" }} />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm">{label}</span>
                  </div>
                ))}
              </div>

              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-all hover:brightness-110"
                style={{ background: "#0A66C2" }}
              >
                <Phone className="w-4 h-4" /> Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A66C2" }}>What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>
              Our Plumbing Services
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
              Professional solutions for every plumbing need — from emergency repairs to full installations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-border bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-[#0A66C2]" style={{ background: "#EFF6FF" }}>
                  <Icon className="w-6 h-6 transition-colors group-hover:text-white" style={{ color: "#0A66C2" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                <a href={PHONE_HREF} className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:gap-2" style={{ color: "#0A66C2" }}>
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 md:py-28" style={{ background: "#0F172A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#60A5FA" }}>Why Q. Plumbing</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Why Choose Us
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
              We go above and beyond to deliver plumbing solutions that last — and service that impresses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(10,102,194,0.3)" }}>
                  <Icon className="w-6 h-6" style={{ color: "#60A5FA" }} />
                </div>
                <h3 className="font-bold text-lg text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A66C2" }}>Customer Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-border">
            <Quote className="w-14 h-14 absolute top-8 left-8 opacity-10" style={{ color: "#0A66C2" }} />
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <blockquote className="text-slate-700 text-lg sm:text-xl leading-relaxed text-center mb-8 italic">
              &ldquo;Excellent service, professional workmanship, and great attention to detail. The team is reliable, friendly, and always willing to go the extra mile to make sure customers are satisfied. Communication was clear throughout, and the overall experience was smooth and stress-free. Highly recommended for anyone looking for quality service and trustworthy people.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-0.5 rounded-full mb-3" style={{ background: "#0A66C2" }} />
              <p className="font-bold" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>Verified Customer</p>
              <p className="text-slate-400 text-sm">Cape Town, South Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A66C2" }}>Our Work</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>
              Project Gallery
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
              Real projects completed by Q. Plumbing — from rough-in work to finished installations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-slate-100 shadow-md ${i === 0 ? "md:col-span-1 md:row-span-2" : ""}`}
                style={{ aspectRatio: i === 0 ? "3/4" : "4/3" }}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium leading-snug">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A66C2" }}>Where We Work</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>
                Serving Cape Town<br />And Surrounding Areas
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Based in Delft, we provide fast, reliable plumbing services across Cape Town and surrounding communities. No area is too far when you need a trusted plumber.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-border shadow-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: "#0A66C2" }} />
                    <span className="font-semibold text-slate-800 text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-all hover:brightness-110" style={{ background: "#0A66C2" }}>
                <Phone className="w-4 h-4" /> Call For Your Area
              </a>
            </div>

            {/* Map illustration */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square bg-slate-200 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576769562804-455efaa28b2a?w=800&h=800&fit=crop&auto=format')`, backgroundColor: "#CBD5E1" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,102,194,0.7) 0%, rgba(15,23,42,0.5) 100%)" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <MapPin className="w-12 h-12 mb-4 text-blue-300" />
                  <h3 className="text-2xl font-extrabold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Cape Town</h3>
                  <p className="text-blue-200 text-sm">& Surrounding Areas</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {areas.map((area) => (
                      <span key={area} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: "rgba(255,255,255,0.2)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0A66C2" }}>Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>
              Contact Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white rounded-3xl border border-border p-8 shadow-lg">
              {formSent ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#EFF6FF" }}>
                    <CheckCircle className="w-8 h-8" style={{ color: "#0A66C2" }} />
                  </div>
                  <h3 className="font-bold text-xl" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>Message Sent!</h3>
                  <p className="text-slate-500">We&apos;ll get back to you shortly. For urgent assistance, please call us directly.</p>
                  <a href={PHONE_HREF} className="mt-2 px-6 py-3 rounded-xl font-bold text-white" style={{ background: "#0A66C2" }}>
                    Call Now
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-xl mb-6" style={{ fontFamily: "'Montserrat', sans-serif", color: "#0F172A" }}>Send Us A Message</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {[
                      { name: "name", label: "Your Name", type: "text", placeholder: "John Smith" },
                      { name: "phone", label: "Phone Number", type: "tel", placeholder: "0XX XXX XXXX" },
                      { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                    ].map(({ name, label, type, placeholder }) => (
                      <div key={name}>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          required
                          value={(formData as Record<string, string>)[name]}
                          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all"
                          style={{ background: "#F8FAFC", "--tw-ring-color": "#0A66C2" } as React.CSSProperties}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                      <textarea
                        placeholder="Describe your plumbing issue..."
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none"
                        style={{ background: "#F8FAFC" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all hover:brightness-110 active:scale-95 mt-2"
                      style={{ background: "#0A66C2" }}
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Phone,
                  title: "Phone Number",
                  content: PHONE,
                  sub: "Call us for immediate assistance",
                  href: PHONE_HREF,
                  btnLabel: "Call Now",
                  btnStyle: { background: "#0A66C2" },
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  content: PHONE,
                  sub: "Message us on WhatsApp anytime",
                  href: WHATSAPP_HREF,
                  btnLabel: "WhatsApp Us",
                  btnStyle: { background: "#25D366" },
                },
              ].map(({ icon: Icon, title, content, sub, href, btnLabel, btnStyle }) => (
                <div key={title} className="flex gap-4 p-6 rounded-2xl border border-border bg-white shadow-sm">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
                    <Icon className="w-6 h-6" style={{ color: "#0A66C2" }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">{title}</p>
                    <p className="font-bold text-lg text-slate-900">{content}</p>
                    <p className="text-slate-500 text-sm mb-3">{sub}</p>
                    <a href={href} target={href.startsWith("https") ? "_blank" : undefined} rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all hover:brightness-110" style={btnStyle}>
                      <Icon className="w-4 h-4" /> {btnLabel}
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 p-6 rounded-2xl border border-border bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
                  <Clock className="w-6 h-6" style={{ color: "#0A66C2" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Business Hours</p>
                  <div className="space-y-0.5">
                    {[
                      { day: "Monday – Friday", time: "07:00 – 18:00" },
                      { day: "Saturday", time: "08:00 – 15:00" },
                      { day: "Emergency", time: "24/7 Available" },
                    ].map(({ day, time }) => (
                      <div key={day} className="flex justify-between gap-6 text-sm">
                        <span className="text-slate-600">{day}</span>
                        <span className="font-semibold text-slate-800">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl border border-border bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
                  <MapPin className="w-6 h-6" style={{ color: "#0A66C2" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Location</p>
                  <p className="font-bold text-slate-900">Delft, Cape Town</p>
                  <p className="text-slate-500 text-sm">Western Cape, South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#0F172A" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #0A66C2 0%, transparent 60%), radial-gradient(circle at 70% 50%, #0A66C2 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ background: "rgba(10,102,194,0.25)" }}>
            <Wrench className="w-8 h-8" style={{ color: "#60A5FA" }} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Need A Reliable<br />Plumber?
          </h2>
          <p className="text-slate-400 text-xl mb-10">
            Get fast, professional plumbing assistance from Q. Plumbing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:brightness-110 active:scale-95"
              style={{ background: "#0A66C2", boxShadow: "0 0 40px rgba(10,102,194,0.35)" }}
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg border-2 border-white/20 transition-all hover:bg-white/10 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" /> Request A Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 border-t border-white/10" style={{ background: "#070E1B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#0A66C2" }}>
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>Q. Plumbing</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Professional plumbing services for homes and businesses throughout Cape Town and surrounding areas.
              </p>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                Delft, Cape Town, South Africa
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Quick Links</h4>
              <ul className="space-y-2">
                {["Services", "About", "Gallery", "Service Areas", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Contact</h4>
              <div className="space-y-3">
                <a href={PHONE_HREF} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  <Phone className="w-4 h-4 text-blue-400" /> {PHONE}
                </a>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors text-sm">
                  <MessageCircle className="w-4 h-4 text-green-400" /> WhatsApp Us
                </a>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Clock className="w-4 h-4 text-blue-400" /> Mon–Fri 7am–6pm
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Q. Plumbing. All rights reserved.</p>
            <p>Serving Cape Town &amp; Surrounding Areas</p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING BUTTONS ── */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full font-bold text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
          style={{ background: "#25D366", boxShadow: "0 4px 24px rgba(37,211,102,0.45)" }}
          aria-label="WhatsApp Q. Plumbing"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm pr-1">WhatsApp</span>
        </a>
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2 px-4 py-3 rounded-full font-bold text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
          style={{ background: "#0A66C2", boxShadow: "0 4px 24px rgba(10,102,194,0.45)" }}
          aria-label={`Call Q. Plumbing at ${PHONE}`}
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm pr-1">Call Now</span>
        </a>
      </div>

    </div>
  );
}
