import Image from 'next/image';
import { Container } from '../ui';

const VideoSection = () => {
  return (
    <Container variant='xl'>
      <Image src='/assets/images/b92ee98117066e4d645d28b54cbb5ec22dce0869.gif' alt='video-section' width={1920} height={500} className='w-full h-full rounded-[8px] object-cover' />
    </Container>
  );
};

export default VideoSection;