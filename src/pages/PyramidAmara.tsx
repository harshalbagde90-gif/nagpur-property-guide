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
    "/Properties/New%20folder/1.jpg",
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

            <section className="pt-24 pb-12 container mx-auto px-4">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6 group text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Properties
                </Link>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 uppercase tracking-tight">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Badge className="bg-success text-white border-none py-1 px-3">
                                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" /> RERA Registered
                            </Badge>
                            <Badge variant="outline" className="text-muted-foreground border-border py-1 px-3">ID: P50500079130</Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-foreground mb-2">Pyramid Amara</h1>
                        <div className="flex items-center text-muted-foreground font-medium">
                            <MapPin className="w-5 h-5 mr-2 text-primary" />
                            Besa-Pipla Road, Besa, Nagpur
                        </div>
                    </div>

                    <div className="text-left lg:text-right border-l-4 lg:border-l-0 lg:border-r-4 border-primary px-6 py-2 bg-secondary/20">
                        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-[0.2em]">Investment Value</p>
                        <div className="text-3xl md:text-5xl font-black text-foreground tracking-tighter">₹69.0 L - 91.45 L</div>
                        <p className="text-xs text-success font-bold mt-1">+10.2% YoY Growth</p>
                    </div>
                </div>

                {/* Hero Gallery Slider */}
                <div className="relative rounded-[2rem] overflow-hidden group border-4 border-card bg-card shadow-2xl h-[400px] md:h-[600px]">
                    <motion.img
                        key={activeImg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        src={projectImages[activeImg]}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-[2s]"
                        onClick={() => setLightboxOpen(true)}
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between p-8">
                        <div className="flex items-center gap-3">
                            <Button size="icon" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/20" onClick={(e) => { e.stopPropagation(); prevImg(); }}>
                                <ChevronLeft className="w-6 h-6" />
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/20" onClick={(e) => { e.stopPropagation(); nextImg(); }}>
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </div>
                        <Button
                            variant="secondary"
                            className="rounded-full glass font-bold text-xs uppercase tracking-widest px-6"
                            onClick={() => setLightboxOpen(true)}
                        >
                            <Expand className="w-4 h-4 mr-2" /> Gallery (12 Images)
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-8 space-y-20">

                        {/* Overview Section */}
                        <div id="overview" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-1.5 h-10 bg-primary rounded-full" />
                                <h2 className="text-3xl font-black uppercase tracking-tight italic">The Grand Vision</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                                {specs.map((item, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-secondary/40 border border-border group hover:bg-primary/5 transition-all">
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 font-bold">{item.title}</p>
                                        <p className="font-extrabold text-lg text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-muted-foreground leading-relaxed text-xl font-medium italic mb-6">
                                    "Designed for those who seek more than just four walls. Pyramid Amara is an architectural statement in Besa."
                                </p>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Welcome to Pyramid Amara, a modern residential project that brings together comfortable living and smart design.
                                    Located in the growing neighborhood of Besa, Nagpur, this project offers spacious 2 BHK and 3 BHK apartments
                                    perfect for families looking for their ideal home. The project features a unique <strong>Miyawaki forest</strong>
                                    and reflexology pathways, creating a natural healing environment.
                                </p>
                            </div>
                        </div>

                        {/* Flat Layout & Floor Plan Section */}
                        <div id="floor-plans" className="scroll-mt-32">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-10 bg-primary rounded-full" />
                                    <h2 className="text-3xl font-black uppercase tracking-tight italic">Flat Layout & Floor Plan</h2>
                                </div>
                                <div className="flex bg-secondary/50 p-1.5 rounded-full border border-border self-start md:self-center">
                                    <button
                                        onClick={() => setFloorPlan('2bhk')}
                                        className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${floorPlan === '2bhk' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-white'}`}
                                    >
                                        2 BHK Plan
                                    </button>
                                    <button
                                        onClick={() => setFloorPlan('3bhk')}
                                        className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${floorPlan === '3bhk' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-white'}`}
                                    >
                                        3 BHK Plan
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={floorPlan}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl relative"
                                >
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
                                        <div className="space-y-8">
                                            <div>
                                                <Badge variant="secondary" className="bg-primary/10 text-primary mb-2 font-bold uppercase tracking-widest">Premium Configuration</Badge>
                                                <h3 className="text-4xl font-black mb-2">{floorPlan === '2bhk' ? '1274 - 1299 SQ.FT' : '1593 - 1686 SQ.FT'}</h3>
                                                <p className="text-muted-foreground font-medium">Spacious living areas with optimized ventilation and modern utility flow.</p>
                                            </div>

                                            <div className="grid grid-cols-1 gap-4">
                                                {[
                                                    { label: 'Master Bedroom', detail: 'with Ensuite Bath' },
                                                    { label: 'Private Balcony', detail: 'Garden/City View' },
                                                    { label: 'Modular Kitchen', detail: 'with Utility Area' },
                                                    { label: 'Living & Dining', detail: 'Open Flow Design' }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50">
                                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">{idx + 1}</div>
                                                        <div>
                                                            <p className="font-bold text-sm uppercase tracking-tight">{item.label}</p>
                                                            <p className="text-[10px] text-muted-foreground uppercase">{item.detail}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <Button className="w-full rounded-full py-8 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}>
                                                Get Price Quotes
                                            </Button>
                                        </div>
                                        <div className="relative aspect-square rounded-3xl overflow-hidden border-8 border-secondary bg-white group">
                                            <img
                                                src={floorPlan === '2bhk' ? '/Properties/New%20folder/Map%20view/2%20bhk.jpeg' : '/Properties/New%20folder/Map%20view/3%20bhk%20type%201.jpeg'}
                                                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-x-0 bottom-4 flex justify-center">
                                                <Badge className="bg-black/80 text-white font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-primary transition-colors" onClick={() => window.open(floorPlan === '2bhk' ? '/Properties/New%20folder/Map%20view/2%20bhk.jpeg' : '/Properties/New%20folder/Map%20view/3%20bhk%20type%201.jpeg', '_blank')}>
                                                    <maximize className="w-4 h-4 mr-2" /> View Super Large
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Premium Amenities Section */}
                        <div id="amenities" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-1.5 h-10 bg-primary rounded-full" />
                                <h2 className="text-3xl font-black uppercase tracking-tight italic">Lifestyle Amenities</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {amenities.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="p-8 rounded-[2rem] bg-card border border-border hover:border-primary/50 transition-all text-center group relative overflow-hidden"
                                    >
                                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                        <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                                            <item.icon className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <span className="text-xs font-black text-foreground uppercase tracking-widest leading-tight block">{item.label}</span>
                                        <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-tighter">{item.category}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Location Section */}
                        <div id="location" className="scroll-mt-32 pb-20 border-b border-border">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-1.5 h-10 bg-primary rounded-full" />
                                <h2 className="text-3xl font-black uppercase tracking-tight italic">Neighborhood & Reach</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                <div className="space-y-4">
                                    {[
                                        { name: "Mount Litera Zee School", time: "3 Mins", dist: "1.2 km", tag: "Education" },
                                        { name: "Airport Metro Station", time: "6 Mins", dist: "4.2 km", tag: "Connectivity" },
                                        { name: "Orange City Hospital", time: "8 Mins", dist: "5.5 km", tag: "Health" },
                                        { name: "Nagpur International Airport", time: "15 Mins", dist: "8.0 km", tag: "Travel" },
                                        { name: "Specialized Local Markets", time: "Walking Dist", dist: "300m+", tag: "Lifestyle" },
                                    ].map((loc, idx) => (
                                        <div key={idx} className="group flex items-center justify-between p-6 rounded-2xl border border-border bg-card/50 hover:bg-secondary/40 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-3 h-12 bg-primary/10 rounded-full flex flex-col items-center justify-center text-[10px] font-black text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <p className="font-black text-sm uppercase tracking-tight">{loc.name}</p>
                                                    <Badge variant="ghost" className="p-0 text-[10px] uppercase text-muted-foreground">{loc.tag}</Badge>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-black text-primary">{loc.time}</p>
                                                <p className="text-[10px] text-muted-foreground font-bold">{loc.dist}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="rounded-[3rem] overflow-hidden grow h-[500px] border-4 border-card shadow-2xl relative group">
                                    {/* Google Maps iFrame */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46292.751986143805!2d79.08596730514792!3d21.084468066801527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b90047fdbe2f%3A0x79d1ac07a164e33b!2sPyramid%20AMARA!5e0!3m2!1sen!2sin!4v1770407160758!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="grayscale-0 hover:grayscale-0 transition-all duration-700"
                                    ></iframe>
                                    <div className="absolute top-6 left-6 flex items-center gap-3">
                                        <Badge className="bg-white text-black font-black uppercase text-[10px] px-4 py-2 shadow-xl border-none">Live Project Map</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sticky Sidebar / Lead Form */}
                    <div className="lg:col-span-4 lg:ml-4">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-10 rounded-[3rem] bg-black border-4 border-primary/20 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />

                                <div className="relative space-y-8">
                                    <div className="text-center">
                                        <Badge className="bg-primary text-primary-foreground mb-4 font-black uppercase tracking-widest px-4">Limited Availability</Badge>
                                        <h3 className="text-3xl font-black text-white italic tracking-tighter">Instant Site Visit</h3>
                                        <p className="text-muted-foreground text-xs mt-2 uppercase tracking-widest font-bold">Exclusive walkthrough & pricing</p>
                                    </div>

                                    <div className="space-y-5">
                                        <div className="space-y-2">
                                            <Label className="text-white text-[10px] font-black uppercase tracking-widest ml-1">Full Name</Label>
                                            <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-14 rounded-2xl focus:ring-primary focus:border-primary" placeholder="Enter Full Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-white text-[10px] font-black uppercase tracking-widest ml-1">Connect Number</Label>
                                            <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-14 rounded-2xl focus:ring-primary focus:border-primary" placeholder="+91 XXXX XXXX" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-2 col-span-2">
                                                <Label className="text-white text-[10px] font-black uppercase tracking-widest ml-1">I'm Interested In</Label>
                                            </div>
                                            <Button variant="outline" className="rounded-xl border-white/10 text-white hover:bg-white/10 text-xs py-1 h-12 font-black uppercase tracking-widest border-2">2 BHK</Button>
                                            <Button variant="outline" className="rounded-xl border-white/10 text-white hover:bg-white/10 text-xs py-1 h-12 font-black uppercase tracking-widest border-2 border-primary/50 text-primary bg-primary/5">3 BHK</Button>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        <Button className="w-full rounded-[1.5rem] py-8 font-black text-lg uppercase tracking-widest bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/40 group">
                                            Book Callback <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                        <p className="text-[10px] text-muted-foreground text-center font-bold px-4">By booking, you agree to receive price lists and RERA documents on WhatsApp.</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-6 mt-4 border-t border-white/10">
                                        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="flex flex-col items-center gap-2 group">
                                            <div className="w-14 h-14 rounded-2xl bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-center text-whatsapp group-hover:scale-110 group-hover:bg-whatsapp group-hover:text-white transition-all duration-300">
                                                <MessageCircle className="w-7 h-7" />
                                            </div>
                                            <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest group-hover:text-white transition-colors text-center">Chat with Expert</span>
                                        </a>
                                        <a href="tel:+919876543210" className="flex flex-col items-center gap-2 group">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                                <Phone className="w-7 h-7" />
                                            </div>
                                            <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest group-hover:text-white transition-colors text-center">Direct Hotlink</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Developer Trust Card */}
                            <div className="p-8 rounded-[2.5rem] bg-secondary/30 border border-border flex items-start gap-5 group">
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg p-2 group-hover:rotate-6 transition-transform">
                                    <img src="/Properties/New%20folder/Thumb/Pyramid.png" onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Pyramid+Group&background=000&color=fff" }} alt="Pyramid Developer" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <p className="font-black text-sm uppercase tracking-tight">Swami Builders (Pyramid Group)</p>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Delivering Trust Since 2009</p>
                                    <Link to="/" className="text-[10px] text-primary font-black uppercase tracking-widest mt-3 block hover:underline">View Developer Portfolio</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison CTA Section */}
            <section className="py-24 bg-card border-y border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")` }} />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <Badge className="bg-primary/20 text-primary mb-6 font-black uppercase text-[10px] px-6 py-2">Property Comparison</Badge>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight tracking-tighter italic">Confused between Besa's Top Projects?</h2>
                    <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-xl font-medium">Get a comparative report of Pyramid Amara vs 3 other premium projects in the same locality.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="rounded-full px-12 h-16 bg-primary text-primary-foreground font-black uppercase tracking-widest shadow-2xl shadow-primary/30 text-lg">
                            Download Besa Comparison 2024
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-12 h-16 border-2 font-black uppercase tracking-widest text-lg">
                            Talk to Local Expert
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PyramidAmara;
