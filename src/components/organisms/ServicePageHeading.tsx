import SectionHeading from '../molecules/SectionHeading';
import { Container } from '../ui';
import { ReactNode } from 'react';

const ServicePageHeading = ({ title, description, isJustify }: {title: string, description: ReactNode, isJustify?: boolean}) => {
  return (
    <section className='pt-17'>
        <Container variant='xl'>
            <SectionHeading title={title} description={description} isJustify={isJustify} />
        </Container>
    </section>
  )
}

export default ServicePageHeading