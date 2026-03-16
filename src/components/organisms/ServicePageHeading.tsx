import SectionHeading from '../molecules/SectionHeading';
import { Container } from '../ui';
import { ReactNode } from 'react';

const ServicePageHeading = ({title, description}: {title: string, description: ReactNode}) => {
  return (
    <section className='pt-17'>
        <Container variant='xl'>
            <SectionHeading title={title} description={description} />
        </Container>
    </section>
  )
}

export default ServicePageHeading