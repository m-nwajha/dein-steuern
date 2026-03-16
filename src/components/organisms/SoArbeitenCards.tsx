import { FC } from 'react';
import { Box, Container, Grid, Typography } from '../ui';
import SoArbeitenCardsItem from '../molecules/SoArbeitenCardsItem';

type SoArbeitenCardsProps = {
    title: string;
    items: {
        id: number;
        title: string;
        subtitle: string;
        description: string;
    }[];
}
const SoArbeitenCards:FC<SoArbeitenCardsProps> = ({title, items}) => {
  return (
    <section className='pt-17'>
        <Container variant='xl'>
            <Box display='flex' justifyContent='center' alignItems='center' direction='col' gap={12}>
                <Typography variant='h2' size='h2' className='text-[#3A3A3A] font-bold font-inter-sans'>{title}</Typography>
                <Grid sm={1} md={3} lg={3} gap={12} className='gap-y-16'>
                    {
                        items.map((item) => (
                            <SoArbeitenCardsItem key={item.id} {...item} />
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    </section>
  )
}

export default SoArbeitenCards;