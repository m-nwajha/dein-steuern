'use client';

import { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { Box, Typography, Container, Button } from '../ui';
import { CN } from '@/utils/className';
import Footer from '../organisms/Footer';

type Message = {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    service?: string;
    message: string;
    isRead: boolean;
    createdAt: string;
};

type Stats = {
    total: number;
    unread: number;
};

const AdminDashboardPage = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [stats, setStats] = useState<Stats>({ total: 0, unread: 0 });
    const [selected, setSelected] = useState<Message | null>(null);
    const [loading, setLoading] = useState(true);
    const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopiedLabel(label);
        setTimeout(() => setCopiedLabel(null), 2000);
    };

    const fetchMessages = async () => {
        setLoading(true);
        const res = await fetch('/api/messages');
        const data = await res.json();
        setMessages(data.messages);
        setStats(data.stats);
        setLoading(false);
    };

    useEffect(() => { fetchMessages(); }, []);

    const handleDelete = async (id: string) => {
        await fetch(`/api/messages/${id}`, { method: 'DELETE' });
        if (selected?._id === id) setSelected(null);
        fetchMessages();
    };

    const handleRead = async (id: string, isRead: boolean) => {
        const res = await fetch(`/api/messages/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isRead }),
        });

        if (!res.ok) return;

        setMessages(prev => prev.map(msg => msg._id === id ? { ...msg, isRead } : msg));
        setSelected(prev => prev?._id === id ? { ...prev, isRead } : prev);
        setStats(prev => ({
            ...prev,
            unread: isRead ? prev.unread - 1 : prev.unread + 1,
        }));
    };

    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            {/* Header */}
            <div className="bg-accent px-8 py-4 flex items-center justify-between">
                <Typography variant='h5' className="font-inter font-bold text-background text-[20px]">
                    Deine Steuern — Admin
                </Typography>
                <Button variant='outline' as='button' onClick={() => signOut({ callbackUrl: '/admin/login' })}>
                    Abmelden <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="ml-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                    </svg>
                </Button>
            </div>

            <Container variant='xl' className="py-8">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Gesamt', value: stats.total, color: 'bg-accent' },
                        { label: 'Ungelesen', value: stats.unread, color: 'bg-primary' },
                        { label: 'Gelesen', value: stats.total - stats.unread, color: 'bg-secondary' },
                    ].map((stat) => (
                        <Box
                            key={stat.label}
                            display='flex'
                            direction='col'
                            alignItems='center'
                            gap={1}
                            className="bg-white rounded-xl p-6 shadow-[0px_4px_10px_1px_#00000014]"
                        >
                            <Typography variant='h3' className={`font-inter font-bold text-[32px] ${stat.color === 'bg-accent' ? 'text-accent' : stat.color === 'bg-primary' ? 'text-primary' : 'text-secondary'}`}>
                                {stat.value}
                            </Typography>
                            <Typography variant='p' className="font-poppins text-[14px] text-foreground">
                                {stat.label}
                            </Typography>
                        </Box>
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Messages Table */}
                    <div className="bg-white rounded-xl shadow-[0px_4px_10px_1px_#00000014] overflow-hidden">
                        <div className="px-6 py-4 border-b border-[#DBDBDC]">
                            <Typography variant='h6' className="font-inter font-bold text-[16px] text-[#3A3A3A]">
                                Nachrichten
                            </Typography>
                        </div>
                        {loading ? (
                            <div className="flex items-center justify-center py-12">
                                <div className="w-8 h-8 rounded-full border-4 border-accent border-t-transparent animate-spin" />
                            </div>
                        ) : messages.length === 0 ? (
                            <div className="flex items-center justify-center py-12">
                                <Typography variant='p' className="text-foreground font-poppins text-[14px]">
                                    Keine Nachrichten vorhanden
                                </Typography>
                            </div>
                        ) : (
                                    <div className="divide-y divide-[#DBDBDC] h-[400px] overflow-y-scroll custom-scrollbar">
                                {messages.map((msg) => (
                                    <div
                                        key={msg._id}
                                        onClick={() => {
                                            setSelected(msg);
                                            if (!msg.isRead) handleRead(msg._id, true);
                                        }}                                        className={CN(
                                            'px-6 py-4 cursor-pointer hover:bg-[#F5F5F5] transition-colors duration-200',
                                            selected?._id === msg._id && 'bg-[#1380821A]',
                                            !msg.isRead && 'border-l-4 border-l-accent'
                                        )}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <Typography variant='span' className="font-poppins font-bold text-[14px] text-[#3A3A3A]">
                                                {msg.name}
                                            </Typography>
                                            <Typography variant='span' className="font-poppins text-[11px] text-foreground">
                                                {new Date(msg.createdAt).toLocaleDateString('de-DE')}
                                            </Typography>
                                        </div>
                                        <Typography variant='p' className="font-poppins text-[12px] text-foreground truncate">
                                            {msg.message}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Message Detail */}
                    <div className="bg-white rounded-xl shadow-[0px_4px_10px_1px_#00000014] overflow-hidden">
                        <div className="px-6 py-4 border-b border-[#DBDBDC]">
                            <Typography variant='h6' className="font-inter font-bold text-[16px] text-[#3A3A3A]">
                                Details
                            </Typography>
                        </div>
                        {!selected ? (
                            <div className="flex items-center justify-center py-12">
                                <Typography variant='p' className="text-foreground font-poppins text-[14px]">
                                    Nachricht auswählen
                                </Typography>
                            </div>
                        ) : (
                            <div className="p-6 flex flex-col gap-4">
                                {[
                                    { label: 'Name', value: selected.name },
                                    { label: 'E-Mail', value: selected.email, canCopy: true },
                                    { label: 'Telefon', value: selected.phone ?? '—', canCopy: !!selected.phone },
                                    { label: 'Leistung', value: selected.service ?? '—' },
                                ].map(({ label, value, canCopy }) => (
                                    <div key={label} className="relative">
                                        <div className="flex items-center gap-2">
                                            <Typography variant='span' className="font-poppins font-bold text-[12px] text-foreground uppercase tracking-wider">
                                                {label}
                                            </Typography>
                                            {canCopy && (
                                                <button
                                                    onClick={() => handleCopy(value, label)}
                                                    className="p-1 hover:bg-[#F5F5F5] rounded transition-all duration-200 cursor-pointer text-foreground hover:text-accent"
                                                    title={`Copy ${label}`}
                                                >
                                                    {copiedLabel === label ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                        <Typography variant='p' className="font-poppins text-[14px] text-[#3A3A3A] mt-1">
                                            {value}
                                        </Typography>
                                    </div>
                                ))}
                                <div>
                                    <Typography variant='span' className="font-poppins font-bold text-[12px] text-foreground uppercase tracking-wider">
                                        Nachricht
                                    </Typography>
                                    <Typography variant='p' className="font-poppins text-[14px] text-[#3A3A3A] mt-1 leading-[1.8]">
                                        {selected.message}
                                    </Typography>
                                </div>
                                <div className="flex gap-3 mt-2">
                                    <button
                                        onClick={() => handleRead(selected._id, !selected.isRead)}
                                        className="flex-1 h-[40px] rounded-lg border border-accent text-accent font-nunito text-[14px] hover:bg-[#1380821A] transition-colors duration-200 cursor-pointer"
                                    >
                                        {selected.isRead ? 'Als ungelesen markieren' : 'Als gelesen markieren'}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(selected._id)}
                                            className="flex-1 h-[40px] rounded-lg bg-red-500 text-white font-nunito text-[14px] hover:bg-red-600 transition-colors duration-200 cursor-pointer"
                                    >
                                        Löschen
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default AdminDashboardPage;