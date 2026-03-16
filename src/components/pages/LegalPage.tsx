'use client';

import { ReactNode } from 'react';
import BackButton from '../atoms/BackButton';
import ServicePageHeading from '../organisms/ServicePageHeading';
import { Container } from '../ui';
import AnimatedSection from '../atoms/AnimatedSection';

type LegalPageProps = {
    title: string;
    content: ReactNode;
};

const LegalPage = ({ title, content }: LegalPageProps) => {
    return (
        <>
            <AnimatedSection direction='down' amount={0.1}>
                <Container variant='xl' className='mt-[130px]'>
                    <BackButton />
                </Container>
            </AnimatedSection>

            <AnimatedSection direction='up'>
                <ServicePageHeading
                    isJustify
                    title={title}
                    description={content}
                />
            </AnimatedSection>
        </>
    );
};

export default LegalPage;