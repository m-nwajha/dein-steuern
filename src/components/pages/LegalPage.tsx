'use client';

import { ReactNode } from 'react';
import BackButton from '../atoms/BackButton';
import ServicePageHeading from '../organisms/ServicePageHeading';
import { Container } from '../ui';

type LegalPageProps = {
    title: string;
    content: ReactNode;
};

const LegalPage = ({ title, content }: LegalPageProps) => {
    return (
        <>
            <Container variant='xl' className='mt-[130px]'>
                <BackButton />
            </Container>
            <ServicePageHeading
                isJustify
                title={title}
                description={content}
            />
        </>
    );
};

export default LegalPage;