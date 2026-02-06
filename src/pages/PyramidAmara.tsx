import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    MapPin,
    IndianRupee,
    Calendar,
    ShieldCheck,
    Home,
    Maximize,
    Waves,
    Trees,
    Shield,
    Car,
    Droplets,
    Zap,
    Gamepad2,
    Dumbbell,
    Clock,
    CheckCircle2,
    Phone,
    MessageCircle,
    Share2,
    Heart,
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    Info,
    Layers,
    Layout,
    Expand,
    X,
    Footprints,
    CloudRain,
    Building,
    Trophy,
    ArrowUpCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WHATSAPP_NUMBER = "919876543210";

// Series of images from public/Properties/New folder/
const projectImages = [
    "/Properties/New%20folder/1.jpeg",
    "/Properties/New%20folder/2.jpeg",
    "/Properties/New%20folder/3.jpeg",
    "/Properties/New%20folder/4.jpeg",
    "/Properties/New%20folder/5.jpeg",
    "/Properties/New%20folder/6.jpeg",
    "/Properties/New%20folder/7.jpeg",
    "/Properties/New%20folder/8.jpeg",
    "/Properties/New%20folder/9.jpeg",
    "/Properties/New%20folder/10.jpeg",
    "/Properties/New%20folder/11.jpeg",
    "/Properties/New%20folder/12.jpeg",
];

const amenities = [
    { icon: Waves, label: "Swimming Pool", category: "Health & Wellness" },
    { icon: Droplets, label: "Kid's Pool", category: "Health & Wellness" },
    { icon: Dumbbell, label: "Outdoor Gym", category: "Health & Wellness" },
    { icon: Footprints, label: "Reflexology Park", category: "Health & Wellness" },
    { icon: Trees, label: "Miyawaki Forest", category: "Health & Wellness" },
    { icon: Building, label: "Clubhouse", category: "Community" },
    { icon: Trophy, label: "Indoor Sports", category: "Community" },
    { icon: ShieldCheck, label: "24x7 Security", category: "Safety" },
    { icon: ArrowUpCircle, label: "High-Speed Elevators", category: "Convenience" },
    { icon: Car, label: "Closed Parking", category: "Convenience" },
    { icon: CloudRain, label: "Rain Water Harvesting", category: "Eco" },
    { icon: Zap, label: "DG Backup", category: "Convenience" },
];

const specs = [
    { title: "Project Area", value: "6 Acres" },
    { title: "Total Units", value: "224 Apartments" },
    { title: "Configuration", value: "2 & 3 BHK" },
    { title: "Possession", value: "April 2027" },
    { title: "Floors", value: "G + 14" },
    { title: "RERA ID", value: "P50500079130" },
];

const PyramidAmara = () => {
    const [activeImg, setActiveImg] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [floorPlan, setFloorPlan] = useState("2bhk");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const nextImg = () => setActiveImg((prev) => (prev + 1) % projectImages.length);
    const prevImg = () => setActiveImg((prev) => (prev - 1 + projectImages.length) % projectImages.length);

    return (
        <main className="min-h-screen bg-background font-poppins selection:bg-primary/30">
            <Header />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-6 right-6 text-white hover:bg-white/10 rounded-full"
                            onClick={() => setLightboxOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </Button>

                        <div className="relative w-full max-w-6xl aspect-video md:aspect-[21/9] flex items-center justify-center">
                            <motion.img
                                key={activeImg}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                src={projectImages[activeImg]}
                                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                            />

                            <Button size="icon" variant="secondary" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full glass" onClick={prevImg}>
                                <ChevronLeft className="w-6 h-6" />
                            </Button>
                            <Button size="icon" variant="secondary" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full glass" onClick={nextImg}>
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </div>

                        <div className="flex gap-2 mt-8 overflow-x-auto max-w-full pb-4 px-4 scrollbar-hide">
                            {projectImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImg(idx)}
                                    className={`w-20 h-14 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${activeImg === idx ? 'border-primary opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                >
                                    <img src={img} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="pt-24 pb-12 container max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Properties
                </Link>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Badge className="bg-success text-white border-none py-1.5 px-4 font-bold uppercase tracking-wider text-[10px]">
                                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" /> RERA Registered
                            </Badge>
                            <Badge variant="outline" className="text-muted-foreground border-border py-1.5 px-4 font-bold uppercase tracking-wider text-[10px]">ID: P50500079130</Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-foreground mb-2 uppercase tracking-tight">Pyramid Amara</h1>
                        <div className="flex items-center text-muted-foreground font-medium">
                            <MapPin className="w-5 h-5 mr-2 text-primary" />
                            Besa-Pipla Road, Besa, Nagpur
                        </div>
                    </div>

                    <div className="text-left lg:text-right border-l-4 lg:border-l-0 lg:border-r-4 border-primary px-6 py-2 bg-secondary/20">
                        <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.2em] font-black">Investment Value</p>
                        <div className="text-3xl md:text-5xl font-black text-foreground tracking-tighter">₹69.0 L - 91.45 L</div>
                        <p className="text-[10px] text-success font-black mt-1 uppercase tracking-widest">+10.2% YoY Growth</p>
                    </div>
                </div>

                {/* Bento Grid Hero Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3 h-[380px] md:h-[400px] lg:h-[480px]">
                    {/* Main Featured Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="md:col-span-2 lg:col-span-3 h-full relative group cursor-pointer overflow-hidden rounded-[1.5rem] border border-border/40 shadow-xl"
                        onClick={() => { setActiveImg(0); setLightboxOpen(true); }}
                    >
                        <img
                            src={projectImages[0]}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                            alt="Pyramid Amara Hero"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>

                    {/* Right Thumbnails Grid (2x2) */}
                    <div className="hidden md:grid grid-cols-2 grid-rows-2 lg:col-span-2 gap-3 h-full">
                        {[1, 2, 3, 4].map((idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * idx }}
                                className="relative group cursor-pointer overflow-hidden rounded-[1rem] border border-border/40 shadow-md aspect-square"
                                onClick={() => { setActiveImg(idx); setLightboxOpen(true); }}
                            >
                                <img
                                    src={projectImages[idx]}
                                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${idx === 4 ? 'blur-[1px] group-hover:blur-0' : ''}`}
                                    alt={`Gallery ${idx}`}
                                />
                                {idx === 4 && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                        <Button variant="secondary" size="sm" className="rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-black uppercase text-[9px] tracking-widest px-4 h-8 border border-white/20 backdrop-blur-md">
                                            <Maximize className="w-3.5 h-3.5 mr-2" /> Show 12 Photos
                                        </Button>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20 container max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-16">

                    <div className="lg:col-span-8 space-y-24">

                        {/* Overview Section */}
                        <div id="overview" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-2 h-12 bg-primary rounded-full shadow-lg shadow-primary/30" />
                                <h2 className="text-4xl font-black uppercase tracking-tight italic text-foreground/90 leading-none">The Grand Vision</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12">
                                {specs.map((item, idx) => (
                                    <div key={idx} className="p-7 rounded-3xl bg-secondary/30 border border-border group hover:bg-primary/10 hover:border-primary/30 transition-all duration-500 shadow-sm">
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2 font-black group-hover:text-primary transition-colors">{item.title}</p>
                                        <p className="font-black text-xl text-foreground tracking-tighter">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-muted-foreground leading-relaxed text-2xl font-bold italic mb-8 border-l-4 border-primary/40 pl-6 py-2">
                                    "Designed for those who seek more than just four walls. Pyramid Amara is an architectural statement in Besa."
                                </p>
                                <p className="text-muted-foreground leading-relaxed text-lg font-medium opacity-90">
                                    Welcome to Pyramid Amara, a modern residential project that brings together comfortable living and smart design.
                                    Located in the growing neighborhood of Besa, Nagpur, this project offers spacious 2 BHK and 3 BHK apartments
                                    perfect for families looking for their ideal home. The project features a unique <strong>Miyawaki forest</strong>
                                    and reflexology pathways, creating a natural healing environment.
                                </p>
                            </div>
                        </div>

                        {/* Flat Layout & Floor Plan Section */}
                        <div id="floor-plans" className="scroll-mt-32">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-12 bg-primary rounded-full shadow-lg shadow-primary/30" />
                                    <h2 className="text-4xl font-black uppercase tracking-tight italic text-foreground/90 leading-none">Flat Layout & Plans</h2>
                                </div>
                                <div className="flex bg-secondary p-1.5 rounded-full border border-border/80 shadow-inner">
                                    <button
                                        onClick={() => setFloorPlan('2bhk')}
                                        className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${floorPlan === '2bhk' ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/40 scale-105' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        2 BHK
                                    </button>
                                    <button
                                        onClick={() => setFloorPlan('3bhk')}
                                        className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${floorPlan === '3bhk' ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/40 scale-105' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        3 BHK
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={floorPlan}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="bg-card border-2 border-border/50 rounded-[3rem] p-8 md:p-14 overflow-hidden shadow-2xl relative group/card"
                                >
                                    <div className="grid md:grid-cols-2 gap-16 items-center">
                                        <div className="space-y-10">
                                            <div>
                                                <Badge variant="outline" className="border-primary/30 text-primary mb-3 font-black uppercase tracking-[0.2em] text-[10px] px-4 py-1.5 bg-primary/5">Premium Living</Badge>
                                                <h3 className="text-5xl font-black mb-3 tracking-tighter italic">{floorPlan === '2bhk' ? '1299 SQ.FT' : '1686 SQ.FT'}</h3>
                                                <p className="text-muted-foreground font-semibold text-lg opacity-80 leading-relaxed italic">Super built-up area with zero space wastage design.</p>
                                            </div>

                                            <div className="grid grid-cols-1 gap-5">
                                                {[
                                                    { label: 'Master Suite', detail: 'with Ensuite Bath' },
                                                    { label: 'View Balcony', detail: 'Garden Facing' },
                                                    { label: 'Smart Kitchen', detail: 'with Utility Space' },
                                                    { label: 'Living Space', detail: 'Grand Entry Hall' }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-5 p-5 rounded-2xl bg-secondary/40 border border-border/50 hover:border-primary/30 transition-colors">
                                                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-black text-lg shadow-lg shadow-primary/10 italic">{idx + 1}</div>
                                                        <div>
                                                            <p className="font-black text-sm uppercase tracking-[0.1em]">{item.label}</p>
                                                            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{item.detail}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <Button className="w-full rounded-[1.5rem] py-8 text-lg font-black uppercase tracking-[0.2em] bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02]" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}>
                                                Download Detailed PDF
                                            </Button>
                                        </div>
                                        <div className="relative aspect-square rounded-[2rem] overflow-hidden border-8 border-secondary/50 bg-white group/img shadow-2xl">
                                            <img
                                                src={floorPlan === '2bhk' ? '/Properties/New%20folder/Map%20view/2%20bhk.jpeg' : '/Properties/New%20folder/Map%20view/3%20bhk%20type%201.jpeg'}
                                                className="w-full h-full object-contain p-6 group-hover/img:scale-110 transition-transform duration-[1s]"
                                                alt="Floor Plan"
                                            />
                                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                            <div className="absolute inset-x-0 bottom-6 flex justify-center">
                                                <Button
                                                    variant="secondary"
                                                    className="bg-black/80 text-white font-black uppercase tracking-widest text-[10px] px-8 py-3 rounded-full cursor-pointer hover:bg-primary border-none shadow-2xl backdrop-blur-md"
                                                    onClick={() => window.open(floorPlan === '2bhk' ? '/Properties/New%20folder/Map%20view/2%20bhk.jpeg' : '/Properties/New%20folder/Map%20view/3%20bhk%20type%201.jpeg', '_blank')}
                                                >
                                                    <Maximize className="w-4 h-4 mr-2" /> Fullscreen View
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Premium Amenities Section */}
                        <div id="amenities" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-2 h-12 bg-primary rounded-full shadow-lg shadow-primary/30" />
                                <h2 className="text-4xl font-black uppercase tracking-tight italic text-foreground/90 leading-none">Lifestyle & Comfort</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
                                {amenities.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -8 }}
                                        className="p-10 rounded-[2.5rem] bg-card border-2 border-border/50 hover:border-primary/50 transition-all duration-500 text-center group relative overflow-hidden shadow-lg shadow-black/5"
                                    >
                                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-[2] transition-transform duration-[1.5s]" />
                                        <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                                            <item.icon className="text-primary w-10 h-10 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <span className="text-[11px] font-black text-foreground uppercase tracking-[0.1em] leading-tight block">{item.label}</span>
                                        <p className="text-[9px] text-muted-foreground mt-3 uppercase tracking-[0.2em] font-bold opacity-80">{item.category}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Location Section */}
                        <div id="location" className="scroll-mt-32 pb-24 border-b-2 border-border/50">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-2 h-12 bg-primary rounded-full shadow-lg shadow-primary/30" />
                                <h2 className="text-4xl font-black uppercase tracking-tight italic text-foreground/90 leading-none">Map & Proximity</h2>
                            </div>
                            <div className="grid md:grid-cols-12 gap-16 items-start">
                                <div className="md:col-span-5 space-y-5">
                                    {[
                                        { name: "Zee School", time: "3 Mins", dist: "1.2 km", tag: "Academy" },
                                        { name: "Airport Metro", time: "6 Mins", dist: "4.2 km", tag: "Transit" },
                                        { name: "Orange City Hospital", time: "8 Mins", dist: "5.5 km", tag: "Care" },
                                        { name: "International Airport", time: "15 Mins", dist: "8.0 km", tag: "Gateway" },
                                        { name: "Local Markets", time: "Step Away", dist: "200m", tag: "Daily" },
                                    ].map((loc, idx) => (
                                        <div key={idx} className="group flex items-center justify-between p-6 rounded-[1.5rem] border-2 border-border/50 bg-card hover:bg-secondary/50 hover:border-primary/30 transition-all duration-500 shadow-sm">
                                            <div className="flex items-center gap-5">
                                                <div className="w-4 h-14 bg-primary/10 rounded-full flex flex-col items-center justify-center text-[12px] font-black text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 italic">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <p className="font-black text-sm uppercase tracking-tight">{loc.name}</p>
                                                    <p className="text-[10px] uppercase text-muted-foreground font-black tracking-widest mt-1 opacity-70">{loc.tag}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-black text-primary italic leading-none">{loc.time}</p>
                                                <p className="text-[10px] text-muted-foreground font-black uppercase mt-1.5 opacity-60 tracking-tighter">{loc.dist}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="md:col-span-7 rounded-[3.5rem] overflow-hidden grow h-[550px] border-8 border-card shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] relative group">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46292.751986143805!2d79.08596730514792!3d21.084468066801527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b90047fdbe2f%3A0x79d1ac07a164e33b!2sPyramid%20AMARA!5e0!3m2!1sen!2sin!4v1770407160758!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="grayscale hover:grayscale-0 transition-all duration-[1.5s]"
                                    ></iframe>
                                    <div className="absolute top-8 left-8">
                                        <Badge className="bg-primary text-white font-black uppercase text-[10px] px-6 py-3 shadow-2xl border-none tracking-widest rounded-full">Explore Area Map</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Lead Form */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            <div className="p-10 rounded-[3.5rem] bg-black border-[3px] border-primary/20 shadow-[0_32px_80px_-16px_rgba(0,0,0,1)] relative overflow-hidden group/form">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -mr-40 -mt-40 transition-all group-hover/form:bg-primary/20 duration-[1.5s]" />

                                <div className="relative space-y-10">
                                    <div className="text-center">
                                        <Badge className="bg-primary text-primary-foreground mb-4 font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full text-[9px] shadow-lg shadow-primary/20">Hot Inventory</Badge>
                                        <h3 className="text-4xl font-black text-white italic tracking-tighter leading-none">Schedule Tour</h3>
                                        <p className="text-muted-foreground text-[10px] mt-3 uppercase tracking-[0.1em] font-black opacity-60">Personal Walkthrough & Pricing</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2.5">
                                            <Label className="text-white/60 text-[9px] font-black uppercase tracking-[0.2em] ml-2">Name</Label>
                                            <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-16 rounded-2xl focus:ring-primary focus:border-primary border-2" placeholder="Full Name" />
                                        </div>
                                        <div className="space-y-2.5">
                                            <Label className="text-white/60 text-[9px] font-black uppercase tracking-[0.2em] ml-2">Phone</Label>
                                            <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-16 rounded-2xl focus:ring-primary focus:border-primary border-2" placeholder="+91 XXXX XXXX" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2.5 col-span-2">
                                                <Label className="text-white/60 text-[9px] font-black uppercase tracking-[0.2em] ml-2">Configuration</Label>
                                            </div>
                                            <Button variant="outline" className="rounded-2xl border-white/10 text-white hover:bg-white/10 text-[10px] h-14 font-black uppercase tracking-widest border-2">2 BHK</Button>
                                            <Button variant="outline" className="rounded-2xl border-white/10 text-white hover:bg-white/10 text-[10px] h-14 font-black uppercase tracking-widest border-2 border-primary/40 text-primary bg-primary/5">3 BHK</Button>
                                        </div>
                                    </div>

                                    <div className="space-y-5 pt-4">
                                        <Button className="w-full rounded-[2rem] py-10 font-black text-xl uppercase tracking-[0.2em] bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/40 group/btn italic">
                                            Confirm Visit <ChevronRight className="w-6 h-6 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                                        </Button>
                                        <p className="text-[9px] text-muted-foreground text-center font-black uppercase tracking-tighter opacity-50 px-6">Official price list will be shared on WhatsApp post verification.</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-5 pt-10 mt-6 border-t border-white/10">
                                        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="flex flex-col items-center gap-3 group/wa">
                                            <div className="w-16 h-16 rounded-3xl bg-whatsapp/5 border-2 border-whatsapp/10 flex items-center justify-center text-whatsapp group-hover/wa:scale-110 group-hover/wa:bg-whatsapp group-hover/wa:text-white transition-all duration-500 shadow-lg">
                                                <MessageCircle className="w-8 h-8" />
                                            </div>
                                            <span className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.1em] group-hover/wa:text-white transition-colors">WhatsApp Chat</span>
                                        </a>
                                        <a href="tel:+919876543210" className="flex flex-col items-center gap-3 group/call">
                                            <div className="w-16 h-16 rounded-3xl bg-white/5 border-2 border-white/10 flex items-center justify-center text-white group-hover/call:scale-110 group-hover/call:bg-white group-hover/call:text-black transition-all duration-500 shadow-lg">
                                                <Phone className="w-8 h-8" />
                                            </div>
                                            <span className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.1em] group-hover/call:text-white transition-colors">Call Direct</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="p-8 rounded-[3rem] bg-secondary/40 border-2 border-border/50 flex items-center gap-6 group/trust hover:border-primary/30 transition-all duration-500">
                                <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center flex-shrink-0 shadow-2xl p-3 group-hover/trust:scale-110 group-hover/trust:rotate-3 transition-all duration-500">
                                    <img src="/Properties/New%20folder/Thumb/Pyramid.png" onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Pyramid+Group&background=000&color=fff" }} alt="Pyramid Developer" className="w-full h-full object-contain" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-black text-[13px] uppercase tracking-tight leading-none">Swami Builders</p>
                                    <p className="text-[9px] text-muted-foreground font-black uppercase tracking-[0.1em] opacity-70 italic">Pyramid Group Project</p>
                                    <Link to="/" className="text-[9px] text-primary font-black uppercase tracking-[0.2em] pt-2 block hover:translate-x-1 transition-transform italic">View Properties →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison CTA Section */}
            <section className="py-28 bg-black border-y-2 border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grayscale invert" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")` }} />
                <div className="container max-w-[1400px] mx-auto px-10 text-center relative z-10">
                    <Badge className="bg-primary/20 text-primary mb-8 font-black uppercase text-[10px] px-8 py-3 rounded-full border-none tracking-widest italic shadow-lg shadow-primary/10">Besa Market Report 2024</Badge>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter italic text-white leading-[0.9]">Confused between Besa's Top Projects?</h2>
                    <p className="text-muted-foreground mb-16 max-w-3xl mx-auto text-2xl font-black uppercase tracking-tight opacity-80 leading-relaxed italic">Get our hidden comparison report: Pyramid Amara vs 3 other premium projects.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Button size="lg" className="rounded-[2.5rem] px-16 py-10 bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(255,188,4,0.5)] text-xl italic hover:scale-105 transition-transform border-none">
                            Download Report
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-[2.5rem] px-16 py-10 border-4 border-white/10 font-black uppercase tracking-[0.2em] text-xl text-white hover:bg-white hover:text-black transition-all italic">
                            Talk to Expert
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PyramidAmara;
