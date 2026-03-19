import { FC } from 'react';
import Image from 'next/image';
import { CN } from '@/utils/className';

type BorderColor = 'green' | 'yellow' | 'dark-green';

type HeroImageItemProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    borderColor?: BorderColor;
    shadow?: boolean;
    className?: string;
    afterStyle?: string;
    beforeStyle?: string;
    priority?: boolean;
};

const BORDER_STYLES: Record<BorderColor, string> = {
    'green': 'border-[3px] border-secondary',
    'yellow': 'border-[4px] border-primary',
    'dark-green': 'border-[4px] border-[#138082]',
};

const HeroImageItem: FC<HeroImageItemProps> = ({
    src,
    alt,
    width,
    height,
    borderColor = 'green',
    shadow = false,
    className,
    afterStyle,
    beforeStyle,
    priority = false,
}) => {
    return (
        <div
            className={CN(
                'relative',
                BORDER_STYLES[borderColor],
                'rounded-tl-[50px] rounded-tr-[8px]',
                'rounded-br-[50px] rounded-bl-[8px]',
                shadow && 'shadow-[4px_4px_12px_4px_#206D6EB5]',
                className,
                afterStyle,
                beforeStyle
            )}
        >
            <div className="w-full h-full overflow-hidden rounded-tl-[46px] rounded-tr-[4px] rounded-br-[46px] rounded-bl-[4px]">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    priority={priority}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default HeroImageItem;