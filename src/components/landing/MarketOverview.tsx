import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";
import { TrendingUp, BarChart3, PieChart as PieChartIcon } from "lucide-react";

const data = [
    { year: "2018", value: 100, nagpur: 100, mumbai: 100 },
    { year: "2019", value: 108, nagpur: 110, mumbai: 105 },
    { year: "2020", value: 115, nagpur: 118, mumbai: 102 },
    { year: "2021", value: 128, nagpur: 135, mumbai: 110 },
    { year: "2022", value: 145, nagpur: 155, mumbai: 118 },
    { year: "2023", value: 165, nagpur: 180, mumbai: 125 },
    { year: "2024", value: 190, nagpur: 210, mumbai: 132 },
];

const pillars = [
    {
        title: "Market Maturity",
        value: "High",
        description: "Stable legal framework with RERA compliance across 95% of new projects.",
        icon: BarChart3,
    },
    {
        title: "Price Gap",
        value: "45%",
        description: "Entry cost is 45% lower compared to similar quality projects in Tier-1 cities.",
        icon: TrendingUp,
    },
    {
        title: "Inventory",
        value: "Premium",
        description: "Focus shifting towards high-spec townships and gated communities.",
        icon: PieChartIcon,
    },
];

export const MarketOverview = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 md:py-32 bg-hero text-hero-foreground" id="market-data" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side: Data & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium">
                                <span className="w-8 h-px bg-accent" />
                                MARKET INSIGHTS
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Data-Driven <br />
                                <span className="gradient-text">Investment Decisions</span>
                            </h2>
                            <p className="text-hero-muted text-lg leading-relaxed max-w-xl">
                                We don't just sell plots; we study market trends. Nagpur's property index has
                                outperformed national averages by 18% in the last 5 years.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {pillars.map((pillar, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-xl bg-hero-foreground/5 border border-hero-foreground/10 hover:bg-hero-foreground/10 transition-colors">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                                        <pillar.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-semibold text-hero-foreground">{pillar.title}</h4>
                                            <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-bold">
                                                {pillar.value}
                                            </span>
                                        </div>
                                        <p className="text-hero-muted text-sm mt-1">{pillar.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-2xl relative overflow-hidden"
                    >
                        {/* Chart Header */}
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Appreciation Index</h3>
                                <p className="text-muted-foreground text-sm">Growth Comparison (Base 100)</p>
                            </div>
                            <div className="flex gap-4 text-xs font-medium">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-1 bg-primary rounded-full" />
                                    <span className="text-foreground">Nagpur</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-1 bg-muted-foreground/30 rounded-full" />
                                    <span className="text-muted-foreground">National Avg</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorNagpur" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(40 100% 48%)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="hsl(40 100% 48%)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis
                                        dataKey="year"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        hide
                                        domain={["auto", "auto"]}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "hsl(var(--card))",
                                            borderColor: "hsl(var(--border))",
                                            borderRadius: "12px",
                                            color: "hsl(var(--foreground))",
                                        }}
                                        cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 1 }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="nagpur"
                                        stroke="hsl(40 100% 48%)"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorNagpur)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="mumbai"
                                        stroke="rgba(156, 163, 175, 0.3)"
                                        strokeWidth={2}
                                        fill="transparent"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <p className="text-center text-xs text-muted-foreground mt-6 italic">
                            *Index based on historical sales data from registered secondary transactions.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
