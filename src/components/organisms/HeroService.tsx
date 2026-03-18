import Image from 'next/image';
import { Container } from '../ui';
import BackButton from '../atoms/BackButton';

const DEFAULT_IMAGE = '/assets/images/d3697dc9a10cecfb5e0c932cb3f424fb5b164826.jpg';

type HeroServiceProps = {
    backgroundImage?: string;
};

const HeroService = ({ backgroundImage = DEFAULT_IMAGE }: HeroServiceProps) => {
    return (
        <section
            id='hero'
            className="relative min-h-[calc(100vh-110px)] lg:h-[calc(115vh-110px)] overflow-hidden"
        >
            <Image
                src={backgroundImage}
                alt="Service Hero Background"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="-z-10"
            />
            <Container variant='xl' className='mt-[130px] relative z-10'>
                <BackButton />
            </Container>
        </section>
    );
};

export default HeroService;