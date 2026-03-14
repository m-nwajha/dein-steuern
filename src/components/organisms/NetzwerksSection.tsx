import { NETZWERKS } from '@/constants/netzwerks';
import SectionHeading from '../molecules/SectionHeading';
import { Box, Container, Grid } from '../ui';
import Image from 'next/image';

const NetzwerksSection = () => {
  return (
    <section id='netzwerks' className='py-16'>
        <Container variant='lg'>
            <Box display='flex' gap={5} justifyContent='center' alignItems='center' direction='col'>
                <SectionHeading 
                    badge={NETZWERKS.badge}
                    description={NETZWERKS.description}
                />
                <Grid sm={1} md={3} lg={3} alignItem='center' gap={10} className='w-full'>
                    {NETZWERKS.items.map((item) => (
                        <Box display='flex' justifyContent='center' alignItems='center' key={item.id}>
                            <Image src={item.image} alt={NETZWERKS.badge} height={item.height} width={item.width}/>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Container>
    </section>
  )
}

export default NetzwerksSection