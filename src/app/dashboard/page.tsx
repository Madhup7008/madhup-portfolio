"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Activity, ArrowUpRight, BarChart3, Clock, Code2,
    Cpu, Database, Github, Globe2, LayoutDashboard,
    MessagesSquare, Server, Users, Zap,
    ChevronRight, BellRing
} from "lucide-react";


const stats = [
    { name: "Total Commits (2024)", value: "2,468", change: "+12.5%", icon: Github, color: "text-blue-500" },
    { name: "Average Response", value: "120ms", change: "-8.1%", icon: Zap, color: "text-yellow-500" },
    { name: "System Uptime", value: "99.99%", change: "Stable", icon: Activity, color: "text-emerald-500" },
    { name: "Active Visitors", value: "142", change: "+4.2%", icon: Users, color: "text-purple-500" },
];

const activities = [
    { user: "System", action: "Deployment successful: v1.4.2", time: "2m ago", type: "success" },
    { user: "GitHub", action: "Pushed 4 commits to main", time: "1h ago", type: "info" },
    { user: "Database", action: "Automated backup completed", time: "4h ago", type: "success" },
    { user: "Watcher", action: "CPU spike detected on Worker 2", time: "12h ago", type: "warning" },
    { user: "API", action: "Rate limit threshold reached (User 4)", time: "1d ago", type: "error" },
];

export default function Dashboard() {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">

            {/* Ambient Background Lights */}
            <div className="fixed top-0 left-1/4 w-[50vh] h-[50vh] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="fixed bottom-0 right-1/4 w-[60vh] h-[60vh] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

            <div className="flex h-screen overflow-hidden">
                {/* Minimal Sidebar Area */}
                <aside className="hidden lg:flex flex-col w-20 md:w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl z-40 relative">
                    <div className="p-6 md:p-8 flex items-center justify-center md:justify-start gap-3 border-b border-white/5 h-24">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-black font-black text-xs">MK</span>
                        </div>
                        <span className="hidden md:block font-black tracking-tight text-xl">DEV_OS<span className="text-white/20">.</span></span>
                    </div>

                    <div className="flex-1 py-10 px-4 md:px-6 flex flex-col gap-4">
                        <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 px-2 mb-2">Menu</span>

                        <div className="flex items-center gap-4 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white group cursor-pointer">
                            <LayoutDashboard className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                            <span className="hidden md:block font-bold text-sm">Overview</span>
                        </div>

                        <div className="flex items-center gap-4 px-4 py-3 hover:bg-white/[0.02] border border-transparent rounded-2xl text-white/50 hover:text-white group cursor-pointer transition-all">
                            <BarChart3 className="w-5 h-5 group-hover:text-white transition-colors" />
                            <span className="hidden md:block font-bold text-sm">Analytics</span>
                        </div>

                        <div className="flex items-center gap-4 px-4 py-3 hover:bg-white/[0.02] border border-transparent rounded-2xl text-white/50 hover:text-white group cursor-pointer transition-all">
                            <Code2 className="w-5 h-5 group-hover:text-white transition-colors" />
                            <span className="hidden md:block font-bold text-sm">Development</span>
                        </div>

                        <div className="flex items-center gap-4 px-4 py-3 hover:bg-white/[0.02] border border-transparent rounded-2xl text-white/50 hover:text-white group cursor-pointer transition-all">
                            <Database className="w-5 h-5 group-hover:text-white transition-colors" />
                            <span className="hidden md:block font-bold text-sm">Database</span>
                        </div>

                        <div className="flex items-center gap-4 px-4 py-3 hover:bg-white/[0.02] border border-transparent rounded-2xl text-white/50 hover:text-white group cursor-pointer transition-all">
                            <Server className="w-5 h-5 group-hover:text-white transition-colors" />
                            <span className="hidden md:block font-bold text-sm">Infrastructure</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 mt-auto border-t border-white/5">
                        <Link href="/" className="flex items-center justify-center md:justify-start gap-4 px-4 py-3 bg-white text-black border border-white/10 rounded-2xl hover:scale-105 group transition-transform">
                            <Globe2 className="w-5 h-5" />
                            <span className="hidden md:block font-black text-xs uppercase tracking-widest">Live Site</span>
                        </Link>
                    </div>
                </aside>

                {/* Main Dashboard Content */}
                <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden relative scroll-smooth">
                    {/* Top Navigation Bar */}
                    <header className="sticky top-0 z-30 h-24 border-b border-white/5 bg-black/40 backdrop-blur-md px-8 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="md:hidden w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4">
                                <span className="text-black font-black text-xs">MK</span>
                            </div>
                            <h1 className="text-2xl font-black tracking-tighter">Workspace</h1>
                            <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/50 ml-2 hidden sm:flex">Environment: Production</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-white/40 hidden md:flex">
                                <Clock className="w-4 h-4" />
                                <span className="text-xs font-black tracking-widest w-24 text-right tabular-nums">{currentTime}</span>
                            </div>
                            <div className="w-[1px] h-6 bg-white/10 hidden md:flex"></div>
                            <button className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white text-white hover:text-black transition-all group">
                                <BellRing className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black animate-pulse"></span>
                            </button>
                        </div>
                    </header>

                    {/* Dashboard Layout */}
                    <div className="p-8 md:p-12 pb-32">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="max-w-7xl mx-auto"
                        >
                            {/* Welcome Banner */}
                            <motion.div variants={itemVariants} className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">Good evening, Madhup.</h2>
                                    <p className="text-white/40 text-lg font-medium">Here's a detailed overview of your digital infrastructure and projects.</p>
                                </div>
                                <div className="flex gap-4">
                                    <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                        Generate Report
                                    </button>
                                </div>
                            </motion.div>

                            {/* Stats Grid */}
                            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {stats.map((stat, i) => (
                                    <div key={i} className="p-6 bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors rounded-3xl relative overflow-hidden group">
                                        <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 transition-transform duration-700 ${stat.color}`}>
                                            <stat.icon className="w-24 h-24" />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`p-2.5 bg-white/5 rounded-xl ${stat.color}`}>
                                                    <stat.icon className="w-5 h-5" />
                                                </div>
                                                <span className={`text-xs font-black px-2.5 py-1 bg-white/5 rounded-md ${stat.change.startsWith('+') || stat.change === 'Stable' ? 'text-emerald-400' : 'text-red-400'}`}>
                                                    {stat.change}
                                                </span>
                                            </div>
                                            <h3 className="text-white/40 font-bold text-sm mb-1">{stat.name}</h3>
                                            <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Main Grid Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                                {/* Analytics Chart Area (Pro Mockup) */}
                                <motion.div variants={itemVariants} className="lg:col-span-2 p-8 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-[40px] flex flex-col justify-between">
                                    <div className="flex justify-between items-start mb-10">
                                        <div>
                                            <h3 className="text-xl font-black tracking-tight mb-1">Compute Workload</h3>
                                            <p className="text-sm font-medium text-white/40">Aggregated CPU & Memory usage over the last 14 days.</p>
                                        </div>
                                        <span className="flex items-center gap-2 text-xs font-black tracking-widest uppercase px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                            Live
                                        </span>
                                    </div>

                                    {/* Abstract Data Visualization */}
                                    <div className="h-64 flex items-end gap-2 text-white/50 w-full overflow-hidden">
                                        {Array.from({ length: 48 }).map((_, i) => {
                                            const height = Math.max(10, Math.random() * 100);
                                            const isHighlight = i === 24 || i === 40;
                                            return (
                                                <div key={i} className="flex-1 flex justify-center group relative cursor-crosshair">
                                                    <div className="absolute inset-x-0 h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg -bottom-2 z-0"></div>
                                                    <div
                                                        className={`w-full rounded-t-sm z-10 transition-all duration-500 ${isHighlight ? 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]' : 'bg-white/20 group-hover:bg-white/40'}`}
                                                        style={{ height: `${height}%` }}
                                                    ></div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/30 mt-6 pt-6 border-t border-white/5">
                                        <span>Feb 06</span>
                                        <span>Feb 13</span>
                                        <span>Feb 20 (Today)</span>
                                    </div>
                                </motion.div>

                                {/* Activity Feed */}
                                <motion.div variants={itemVariants} className="p-8 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-[40px] flex flex-col">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="text-xl font-black tracking-tight">System Logs</h3>
                                        <button className="text-xs font-black tracking-widest uppercase text-white/40 hover:text-white transition-colors">View All</button>
                                    </div>

                                    <div className="flex-1 flex flex-col gap-6 relative">
                                        {/* Connector Line */}
                                        <div className="absolute left-[15px] top-6 bottom-6 w-[2px] bg-white/5 z-0"></div>

                                        {activities.map((act, i) => (
                                            <div key={i} className="relative z-10 flex gap-6 group cursor-default">
                                                <div className="relative">
                                                    <div className={`w-8 h-8 rounded-full border-4 border-black flex items-center justify-center 
                                                        ${act.type === 'success' ? 'bg-emerald-500' :
                                                            act.type === 'warning' ? 'bg-yellow-500' :
                                                                act.type === 'error' ? 'bg-red-500' : 'bg-blue-500'}
                                                    `}></div>
                                                    <div className="absolute inset-0 rounded-full border border-white/20 scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
                                                </div>
                                                <div className="flex-1 pb-6 group-last:pb-0">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-bold text-sm">{act.user}</h4>
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{act.time}</span>
                                                    </div>
                                                    <p className="text-xs text-white/50 leading-relaxed font-medium">{act.action}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Architecture Map / System Status */}
                                <motion.div variants={itemVariants} className="lg:col-span-3 p-8 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-[40px]">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="text-xl font-black tracking-tight">Microservices Architecture</h3>
                                        <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-lg">All Systems Nominal</span>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                        {[
                                            { name: "Auth Service", status: "Operational", lat: "9ms", icon: Users },
                                            { name: "Main Database", status: "Operational", lat: "14ms", icon: Database },
                                            { name: "Frontend Cluster", status: "Operational", lat: "2ms", icon: LayoutDashboard },
                                            { name: "Background Workers", status: "Heavy Load", lat: "45ms", icon: Cpu, warning: true },
                                            { name: "Email Queue", status: "Operational", lat: "12ms", icon: MessagesSquare }
                                        ].map((service, i) => (
                                            <div key={i} className={`p-5 rounded-2xl border ${service.warning ? 'border-yellow-500/30 bg-yellow-500/5' : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'} transition-colors flex flex-col items-start gap-4 cursor-pointer group`}>
                                                <div className={`p-2 rounded-lg ${service.warning ? 'bg-yellow-500/10 text-yellow-500' : 'bg-white/5 text-white/60 group-hover:text-white'} transition-colors`}>
                                                    <service.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm mb-1">{service.name}</h4>
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${service.warning ? 'bg-yellow-500' : 'bg-emerald-500'}`}></div>
                                                        <span className="text-xs text-white/40 font-medium">{service.status}</span>
                                                    </div>
                                                </div>
                                                <div className="mt-auto w-full flex justify-between items-center border-t border-white/5 pt-3">
                                                    <span className="text-[10px] uppercase font-black tracking-widest text-white/30">Latency</span>
                                                    <span className="text-xs font-black text-white/60">{service.lat}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </main>
    );
}
