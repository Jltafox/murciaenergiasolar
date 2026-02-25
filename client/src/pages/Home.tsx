/**
 * HOME — Landing Page Principal
 * Design: "Claridad Solar Mediterránea"
 * CRO: Hero con formulario, Grilla de servicios, Prueba social, Beneficios, CTA final.
 */

import { useState } from "react";
import { Link } from "wouter";
import {
    Sun,
    Zap,
    Shield,
    Clock,
    Euro,
    CheckCircle,
    Phone,
    MessageCircle,
    ArrowRight,
    Star,
    ZapOff,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    const phoneUrl = "tel:+34968000000";
    const phoneDisplay = "968 000 000";
    const whatsappUrl = "https://wa.me/34968000000";

    return (
        <div className="min-h-screen bg-white font-sans" lang="es">
            <Navbar />

            {/* ── HERO SECTION ── */}
            <section className="relative pt-[120px] pb-16 md:pt-[160px] md:pb-24 overflow-hidden bg-[#F8F6F2]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1B3A5C]/5 pointer-events-none skew-x-12 transform translate-x-20" />
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Left: Content */}
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#E8650A] px-3 py-1.5 rounded-full text-xs font-bold mb-6">
                                <Sun className="w-4 h-4" />
                                #1 Instalador de Placas Solares en Murcia
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-[#1B3A5C] leading-tight mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                                Reduce tu factura de la luz hasta un <span className="text-[#E8650A]">80%</span> con el sol de Murcia
                            </h1>
                            <p className="text-lg text-[#1B3A5C]/70 mb-8 max-w-xl leading-relaxed">
                                Instalación certificada, tramitación de subvenciones NextGen incluida y garantía de 25 años. Únete a los más de 850 murcianos que ya ahorran cada mes.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <a href="#presupuesto" className="btn-solar text-lg px-8 py-4 justify-center shadow-lg shadow-orange-500/20">
                                    Calcula tu presupuesto gratis
                                </a>
                                <a href={phoneUrl} className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1B3A5C]/10 rounded-xl font-bold text-[#1B3A5C] hover:bg-white transition-all text-lg">
                                    <Phone className="w-5 h-5" />
                                    {phoneDisplay}
                                </a>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Usuario" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <div className="flex items-center gap-1 text-orange-400 mb-0.5">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                    </div>
                                    <p className="text-[#1B3A5C]/60 font-medium">4.9/5 valoración media en Murcia</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Lead Form Card */}
                        <div className="lg:col-span-5" id="presupuesto">
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-[#1B3A5C] mb-2" style={{ fontFamily: "Sora, sans-serif" }}>¿Cuánto quieres ahorrar?</h3>
                                <p className="text-sm text-gray-500 mb-6">Recibe tu estudio personalizado en menos de 24h.</p>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Nombre y Apellidos</label>
                                        <input type="text" placeholder="Tu nombre completo" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8650A] transition-colors" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Teléfono</label>
                                            <input type="tel" placeholder="600 000 000" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8650A] transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Código Postal</label>
                                            <input type="text" placeholder="30XXX" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8650A] transition-colors" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Tipo de Instalación</label>
                                        <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8650A] transition-colors appearance-none text-gray-600">
                                            <option>Vivienda Residencial</option>
                                            <option>Empresa / Industrial</option>
                                            <option>Comunidad de Vecinos</option>
                                        </select>
                                    </div>
                                    <button className="w-full btn-solar py-4 text-lg justify-center mt-2 group">
                                        Obtener Estudio Gratis
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <p className="text-[10px] text-center text-gray-400 px-4">
                                        Al solicitarlo aceptas nuestra política de privacidad. No enviamos spam.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY BENEFITS ── */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "Sora, sans-serif" }}>¿Por qué todo el mundo se está pasando al autoconsumo en Murcia?</h2>
                        <p className="text-[#1B3A5C]/60">Murcia es la región con más horas de sol de Europa. No aprovecharlo es, literalmente, tirar el dinero cada mes.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Euro,
                                title: "Ahorro Inmediato",
                                desc: "Reduce tu factura desde el primer día que encendemos los paneles. Olvídate de las subidas de la luz.",
                                color: "bg-green-50 text-green-600"
                            },
                            {
                                icon: Zap,
                                title: "Energía Limpia 24/7",
                                desc: "Con nuestras baterías Huawei y Tesla, puedes usar tu propia energía incluso cuando no hay sol.",
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                icon: Shield,
                                title: "Subvenciones del 50%",
                                desc: "Tramitamos por ti las ayudas Next Generation y bonificaciones de IBI en tu municipio de Murcia.",
                                color: "bg-orange-50 text-[#E8650A]"
                            }
                        ].map((benefit, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow bg-white group">
                                <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <benefit.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">{benefit.title}</h3>
                                <p className="text-[#1B3A5C]/60 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES GRID ── */}
            <section className="py-20 bg-[#F8F6F2]">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                        <div className="max-w-xl text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Soluciones solares para cada necesidad</h2>
                            <p className="text-[#1B3A5C]/60">Desde pequeños chalets hasta grandes industrias murcianas. Tenemos la solución técnica perfecta para ti.</p>
                        </div>
                        <a href="#contacto" className="text-[#E8650A] font-bold flex items-center gap-2 group">
                            Ver todos los servicios <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Residencial", href: "/servicios/instalacion-solar-residencial", desc: "Chalets y viviendas unifamiliares", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80" },
                            { title: "Industrial", href: "/servicios/instalacion-solar-industrial", desc: "Naves, fábricas y PYMES en Murcia", img: "https://images.unsplash.com/photo-1620614838426-38374d4df041?w=800&q=80" },
                            { title: "Baterías", href: "/servicios/baterias-almacenamiento-solar", desc: "Acumula energía para la noche", img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80" },
                        ].map((s, i) => (
                            <Link key={i} href={s.href} className="group relative h-[300px] overflow-hidden rounded-3xl shadow-lg">
                                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C] to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h4 className="text-2xl font-bold text-white mb-2">{s.title}</h4>
                                    <p className="text-white/70 text-sm mb-4">{s.desc}</p>
                                    <span className="inline-flex items-center gap-2 text-sm text-orange-400 font-bold">
                                        Más información <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS / SOCIAL PROOF ── */}
            <section className="py-16 bg-[#1B3A5C] text-white">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { val: "850+", label: "Familias ahorrando" },
                            { val: "12MW+", label: "Potencia instalada" },
                            { val: "25 años", label: "Garantía de potencia" },
                            { val: "24h", label: "Presupuesto listo" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{stat.val}</div>
                                <div className="text-white/60 text-sm uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10 text-center max-w-4xl mx-auto">
                    <Sun className="w-16 h-16 text-orange-500 mx-auto mb-8 animate-pulse" />
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A5C] mb-6" style={{ fontFamily: "Sora, sans-serif" }}>¿Estás listo para dejar de pagar de más a tu eléctrica?</h2>
                    <p className="text-xl text-[#1B3A5C]/70 mb-10">Llámanos hoy y recibe un estudio técnico completo de tu tejado sin compromiso. El sol de Murcia es tuyo.</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl w-full sm:w-auto shadow-xl transition-all">
                            <MessageCircle className="w-6 h-6" />
                            Contactar por WhatsApp
                        </a>
                        <a href="#presupuesto" className="flex items-center justify-center gap-3 bg-[#E8650A] hover:bg-[#D4580A] text-white font-bold px-8 py-4 rounded-2xl w-full sm:w-auto shadow-xl transition-all">
                            <ArrowRight className="w-6 h-6" />
                            Solicitar Presupuesto
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
