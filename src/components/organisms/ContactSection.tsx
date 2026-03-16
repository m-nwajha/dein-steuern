'use client';

import { usePathname } from 'next/navigation';
import SectionHeading from '../molecules/SectionHeading';
import { Container, Grid, TextField, Button, Box } from '../ui';
import { contactSectionData } from '@/constants/contactSection';
import { CONTACT_INFO } from '@/constants/contactInfo';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../atoms/AnimatedSection';

const ContactSection = () => {
  const pathname = usePathname();
  const isKontaktPage = pathname === '/kontakt';

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
        <Grid sm={1} md={2} lg={2} className='gap-0'>
          {/* Google Map */}
            <Box className="w-full h-full min-h-[400px] border-[0.5px] border-[#DBDBDC] bg-background rounded-tl-lg rounded-bl-lg border-r-0 relative overflow-hidden">
          <AnimatedSection direction='up' amount={0.1}>
              <iframe
                src={CONTACT_INFO.locationURL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </AnimatedSection>
              {/* Email Bar - only on kontakt page */}
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
            {contactSectionData.form.rows.map((row, i) => (
              <Grid key={i} sm={1} md={1} lg={row.length > 1 ? 2 : 1} gap={3}>
                {row.map(({ key, label, placeholder, type, multiline, rows }, j) => (
                  <AnimatedSection key={key} direction='up' delay={i * 0.1 + j * 0.1} amount={0.1}>
                    <TextField
                      name={key}
                      label={label}
                      placeholder={placeholder}
                      type={type as any}
                      multiline={multiline}
                      rows={rows}
                    />
                  </AnimatedSection>
                ))}
              </Grid>
            ))}
            <AnimatedSection direction='up' delay={0.5} amount={0.1}>
              <Button
                variant="outline"
                icon={<Image src='/assets/images/arrow-blue.svg' alt='arrow' width={13.66} height={13.66} />}
                isArrow
                className="mt-2 self-end"
              >
                {contactSectionData.form.submitButton.text}
              </Button>
            </AnimatedSection>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactSection;