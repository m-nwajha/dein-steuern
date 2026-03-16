'use client';

import { FC } from 'react';
import { ServicePageData } from '@/@types/ServicePage';
import HeroService from '../organisms/HeroService';
import ServicePageHeading from '../organisms/ServicePageHeading';
import SoArbeitenCards from '../organisms/SoArbeitenCards';
import StartenSieSection from '../organisms/StartenSieSection';
import UnsereLeistungenSection from '../organisms/UnsereLeistungenSection';
import WasWirFürSieUbernehmenSection from '../organisms/WasWirFürSieUbernehmenSection';

type ServicePageProps = {
  data: ServicePageData;
};

const ServicePage: FC<ServicePageProps> = ({ data }) => {
  return (
    <>
      <HeroService />
      <ServicePageHeading
        title={data.heading.title}
        description={data.heading.description}
      />
      {data.soArbeiten && (
        <SoArbeitenCards
          title={data.soArbeiten.title}
          items={data.soArbeiten.items}
        />
      )}  
      {data.wasWir && <WasWirFürSieUbernehmenSection list={data.wasWir.list} />}
      <StartenSieSection
        title={data.starten.title}
        description={data.starten.description}
        button={data.starten.button}
      />
      <UnsereLeistungenSection
        title={data.leistungen.title}
        badge={data.leistungen.badge}
        description={data.leistungen.description}
        items={data.leistungen.items}
      />
    </>
  );
};

export default ServicePage;