'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionHeading from '../molecules/SectionHeading';
import { Box, Container } from '../ui';
import LeistungCard from '../atoms/LeistungCard';
import 'swiper/css';
import type { Swiper as SwiperType } from 'swiper';
import { FC, useRef } from 'react';

type UnsereLeistungenProps = {
    title: string;
    badge: string;
    description: string;
    items: {
        id: number;
        title: string;
    }[];
};
const UnsereLeistungenSection: FC<UnsereLeistungenProps> = ({ title, description, badge, items }) => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section id='unsere-leistungen' className='py-16'>
            <Container variant='lg'>
                <SectionHeading
                    badge={badge}
                    title={title}
                    description={description}
                />
            </Container>
            <Container variant='xl' className='mt-10'>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Autoplay]}
                    spaceBetween={16}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.5 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <LeistungCard title={item.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation Buttons */}
                <Box display='flex' alignItems='center' justifyContent='center' gap={2} className='mt-6'>
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className='w-[38px] h-[38px] cursor-pointer rounded-full bg-accent flex items-center justify-center transition-all duration-300 hover:opacity-80'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className='w-[38px] h-[38px] cursor-pointer rounded-full bg-[#363638] flex items-center justify-center transition-all duration-300 hover:opacity-80'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </button>
                </Box>
            </Container>
        </section>
    );
};

export default UnsereLeistungenSection;