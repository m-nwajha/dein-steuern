import SectionHeading from '../molecules/SectionHeading';
import { Container, Grid, TextField, Button, Box, Typography } from '../ui';
import { contactSectionData } from '@/constants/contactSection';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section id='contact' className="py-16">
      <Container variant='lg'>
        <SectionHeading badge='in enger Partnerschaft mit' title='In Kooperation mit erfahrenen Steuerberatern' description='Gemeinsam kümmern wir uns um Ihre steuerlichen Aufgaben und vertreten Ihre Anliegen gegenüber dem Finanzamt – kompetent, zuverlässig und praxisnah.' />
      </Container>
      <Container variant='xl' className="mt-12">
        <Grid sm={1} md={2} lg={2} className='gap-0'>
          {/* Google Map */}
          <Box className="w-full h-full min-h-[400px] border-[0.5px] border-[#DBDBDC] bg-background rounded-tl-lg rounded-bl-lg border-r-0 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.609121855673!2d13.3888599!3d52.5170565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c6c5fd34f5%3A0xe5567fce510e11e0!2sBerlin!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          {/* Contact Form */}
          <Box display="flex" direction="col" justifyContent='center' gap={6} className="items-stretch border-[0.5px] border-[#DBDBDC] bg-background rounded-tr-lg rounded-br-lg p-8 border-l-0">
            {contactSectionData.form.rows.map((row, i) => (
              <Grid key={i} sm={1} md={1} lg={row.length > 1 ? 2 : 1} gap={3}>
                {row.map(({ key, label, placeholder, type, multiline, rows }) => (
                  <TextField
                    key={key}
                    name={key}
                    label={label}
                    placeholder={placeholder}
                    type={type as any}
                    multiline={multiline}
                    rows={rows}
                  />
                ))}
              </Grid>
            ))}
            <Button
              variant="outline"
              icon={<Image src='/assets/images/arrow-blue.svg' alt='arrow' width={13.66} height={13.66} />}
              isArrow
              className="mt-2 self-end"
            >
              {contactSectionData.form.submitButton.text}
            </Button>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactSection;