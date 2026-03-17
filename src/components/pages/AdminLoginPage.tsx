'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Button } from '../ui';
import { TextField } from '../ui/TextField';

const AdminLoginPage = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ username: '', password: '' });

    const handleSubmit = async () => {
        setLoading(true);
        setError('');
        
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            
            if (!res.ok) {
                setError(data.error || 'Ungültige Anmeldedaten');
                return;
            }

            router.push('/admin');
            router.refresh();
        } catch (err) {
            setError('Ein Fehler ist aufgetreten');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-background flex items-center justify-center">
            <Box
                display='flex'
                direction='col'
                gap={6}
                className="w-full max-w-[400px] bg-white rounded-xl p-8 shadow-[0px_4px_24px_0px_#00000014]"
            >
                <Box display='flex' direction='col' gap={2} alignItems='center'>
                    <Typography variant='h4' className="font-inter font-bold text-[24px] text-[#3A3A3A]">
                        Admin Login
                    </Typography>
                    <Typography variant='p' className="font-poppins text-[14px] text-foreground">
                        Deine Steuern Dashboard
                    </Typography>
                </Box>

                <Box display='flex' direction='col' gap={4}>
                    <TextField
                        name="username"
                        label="Benutzername"
                        placeholder="Ihr Benutzername"
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                    />
                    <TextField
                        name="password"
                        label="Passwort"
                        placeholder="Ihr Passwort"
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    {error && (
                        <Typography variant='p' className="text-red-500 text-[14px] font-poppins">
                            {error}
                        </Typography>
                    )}
                </Box>

                <Button
                    variant='solid'
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full"
                >
                    {loading ? 'Wird geladen...' : 'Anmelden'}
                </Button>
            </Box>
        </section>
    );
};

export default AdminLoginPage;