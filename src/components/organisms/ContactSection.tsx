'use client';

import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';
import SectionHeading from '../molecules/SectionHeading';
import { Container, Grid, TextField, Button, Box, Typography } from '../ui';
import { contactSectionData } from '@/constants/contactSection';
import { CONTACT_INFO } from '@/constants/contactInfo';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../atoms/AnimatedSection';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const validate = (form: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!form.name.trim())
    errors.name = 'Name ist erforderlich';

  if (!form.email.trim())
    errors.email = 'E-Mail ist erforderlich';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Ungültige E-Mail-Adresse';

  if (!form.phone.trim())
    errors.phone = 'Telefonnummer ist erforderlich';
  else if (!/^\+?[0-9\s\-()]{7,20}$/.test(form.phone))
    errors.phone = 'Ungültige Telefonnummer (z.B. +49 123 456789)';

  if (!form.service.trim())
    errors.service = 'Bitte wählen Sie eine Leistung';

  return errors;
};

const ContactSection = () => {
  const pathname = usePathname();
  const isKontaktPage = pathname === '/kontakt';

  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setServerError('');

    try {
      if (!captchaValue) {
        setServerError('Bitte lösen Sie das ReCAPTCHA.');
        setLoading(false);
        return;
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captcha: captchaValue }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Serverfehler');
      }

      setSuccess(true);
      setForm(initialForm);
      setCaptchaValue(null);
      recaptchaRef.current?.reset();
    } catch {
      setServerError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact' className="py-16">
      <Container variant='lg'>
        <AnimatedSection direction='up' amount={0.1}>
          <SectionHeading
            badge={contactSectionData.heading.badge}
            title={contactSectionData.heading.title}
            description={contactSectionData.heading.description}
          />
        </AnimatedSection>
      </Container>
      <Container variant='xl' className="mt-12">
        <Grid sm={1} md={2} lg={2} alignItem='stretch'>
          {/* Google Map */}
          <Box className="w-full h-full border-[0.5px] border-[#DBDBDC] bg-background rounded-tl-lg rounded-bl-lg border-r-0 relative overflow-hidden">
            <AnimatedSection direction='left' amount={0.1} className="h-full">
              <iframe
                src={CONTACT_INFO.locationURL}
                width="100%"
                height="100%"
                style={{ border: 0, height: '100%' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </AnimatedSection>
            {isKontaktPage && (
              <Box
                display='flex'
                alignItems='center'
                gap={2}
                className="absolute bottom-0 left-0 right-0 bg-[#3A3A3AD4] backdrop-blur-sm px-8 py-6"
              >
                <Image src='/assets/images/email-icon.svg' alt='email' width={20} height={20} />
                <Link href={`mailto:${CONTACT_INFO.email}`} className="text-white font-nunito text-[16px]">
                  E-Mail Adresse: {CONTACT_INFO.email}
                </Link>
              </Box>
            )}
          </Box>

          {/* Contact Form */}
          <Box display="flex" direction="col" justifyContent='center' gap={6} className="items-stretch border-[0.5px] border-[#DBDBDC] bg-background rounded-tr-lg rounded-br-lg p-8 border-l-0">

            {success ? (
              <AnimatedSection direction='up' amount={0.1}>
                <Box display='flex' direction='col' alignItems='center' gap={4} className="py-8">
                  <div className="w-16 h-16 rounded-full bg-[#1380821A] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#206D6E" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <Typography variant='h5' className="font-inter font-bold text-[20px] text-[#3A3A3A] text-center">
                    Nachricht gesendet!
                  </Typography>
                  <Typography variant='p' className="font-poppins text-[14px] text-foreground text-center">
                    Wir werden uns so schnell wie möglich bei Ihnen melden.
                  </Typography>
                  <Button variant='outline' onClick={() => setSuccess(false)}>
                    Neue Nachricht
                  </Button>
                </Box>
              </AnimatedSection>
            ) : (
              <>
                {contactSectionData.form.rows.map((row, i) => (
                  <Grid key={i} sm={1} md={1} lg={row.length > 1 ? 2 : 1} gap={3}>
                    {row.map(({ key, label, placeholder, type, multiline, rows }, j) => (
                      <AnimatedSection key={key} direction='up' delay={i * 0.1 + j * 0.1} amount={0.1}>
                        <TextField
                          name={key}
                          label={label}
                          required
                          placeholder={placeholder}
                          type={type as any}
                          multiline={multiline}
                          rows={rows}
                          value={form[key as keyof FormData]}
                          onChange={handleChange}
                          error={errors[key as keyof FormData]}
                        />
                      </AnimatedSection>
                    ))}
                  </Grid>
                ))}

                {serverError && (
                  <Typography variant='p' className="text-red-500 font-poppins text-[14px]">
                    {serverError}
                  </Typography>
                )}

                <AnimatedSection direction='up' delay={0.4} amount={0.1}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    onChange={(value) => setCaptchaValue(value)}
                  />
                </AnimatedSection>

                <AnimatedSection direction='up' delay={0.5} amount={0.1}>
                  <Button
                    variant="outline"
                    icon={<Image src='/assets/images/arrow-blue.svg' alt='arrow' width={13.66} height={13.66} />}
                    isArrow
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-2 self-end"
                  >
                    {loading ? 'Wird gesendet...' : contactSectionData.form.submitButton.text}
                  </Button>
                </AnimatedSection>
              </>
            )}
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactSection;