'use client';

import HeroImageItem from '../atoms/HeroImageItem';
import { Box } from '../ui';

const HeroImagesBox = () => {
    return (
        <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            gap={3} 
            className="relative mt-10 lg:mt-0 md:gap-5 after:content-[''] after:absolute after:w-[60px] lg:after:w-[90px] after:h-[40px] lg:after:h-[60px] after:top-[40%] after:left-[50%] lg:after:left-[53%] after:bg-[#FFF4CD] after:border-[8px] lg:after:border-[12px] after:border-[#FFFEFB] after:rounded-[8px] after:opacity-100 after:z-30 before:content-[''] before:absolute before:w-[40px] lg:before:w-[70px] before:h-[40px] lg:before:h-[70px] before:top-[0px] lg:before:top-[10px] before:right-[10px] lg:before:right-[30px] before:bg-[#FFFEFB] before:border-[5px] lg:before:border-[7px] before:border-[#7EBF274D] before:rounded-full before:opacity-100 before:z-10 pb-[4rem]"
        >
            <Box display='flex' direction='col' alignItems='end' gap={3}>
                <HeroImageItem
                    borderColor='yellow'
                    width={205}
                    height={205}
                    src='/assets/images/hero-img-1.jpg'
                    alt='hero image'
                    afterStyle="after:content-[''] after:absolute after:w-[40px] lg:after:w-[56.7px] after:h-[40px] lg:after:h-[56.7px] after:top-[-10px] lg:after:top-[-20px] after:right-[-10px] lg:after:right-[-20px] after:bg-[#FFF4CEFC] after:border-[4px] lg:after:border-[7px] after:border-white after:rounded-[8px] after:opacity-100 after:z-20"
                    beforeStyle="before:content-[''] before:absolute before:w-[25px] lg:before:w-[35px] before:h-[25px] lg:before:h-[35px] before:bottom-[60px] lg:before:bottom-[80px] before:-right-[15px] lg:before:-right-[25px] before:bg-[#FFFEFB] before:border-[4px] lg:before:border-[7px] before:border-[#7EBF2778] before:rounded-full before:opacity-100 before:-z-10"
                    className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[205px] lg:h-[205px]"
                    priority
                />
                <HeroImageItem
                    borderColor='green'
                    shadow
                    width={321.31}
                    height={212.64}
                    src='/assets/images/hero-img-gif.gif'
                    alt='hero image'
                    className="w-[200px] h-[130px] md:w-[280px] md:h-[185px] lg:w-[321.31px] lg:h-[212.64px]"
                    priority
                />
            </Box>
            <Box>
                <HeroImageItem 
                    borderColor='dark-green' 
                    width={200} 
                    height={200} 
                    src='/assets/images/hero-img-3.jpg' 
                    alt='hero image' 
                    afterStyle="after:content-[''] after:absolute after:w-[50px] lg:after:w-[75.6px] after:h-[50px] lg:after:h-[75.6px] after:bottom-[-20px] lg:after:bottom-[-30px] after:right-[-20px] lg:after:right-[-30px] after:bg-transparent after:border-[5px] lg:after:border-[7px] after:border-[#7EBF274D] after:rounded-full after:opacity-100 after:z-20"
                    className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]"
                    priority
                />
            </Box>
        </Box>
    );
};

export default HeroImagesBox;