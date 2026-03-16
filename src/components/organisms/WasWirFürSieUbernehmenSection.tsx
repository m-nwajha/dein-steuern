'use client';

import { FC } from 'react';
import { Grid } from '../ui';
import WasWirFürSieUbernehmenList, { WasWirFürSieUbernehmenListProps } from '../molecules/WasWirFürSieUbernehmenList';


const WasWirFürSieUbernehmenSection: FC<{list: WasWirFürSieUbernehmenListProps[]}> = ({list}) => {
    return (
        <section id="was-wir-für-sie-ubernehmen" className='w-full py-16'>
            <Grid sm={1} md={1} lg={2} className='gap-0'>
                {list.map((data, i) => (
                    <WasWirFürSieUbernehmenList key={i} {...data} />
                ))}
            </Grid>
        </section>
    );
};

export default WasWirFürSieUbernehmenSection;