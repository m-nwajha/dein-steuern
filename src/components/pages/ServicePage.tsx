'use client';

import { FC, ReactNode } from 'react';
import { ServicePageData } from '@/@types/ServicePage';
import HeroService from '../organisms/HeroService';
import ServicePageHeading from '../organisms/ServicePageHeading';
import SoArbeitenCards from '../organisms/SoArbeitenCards';
import StartenSieSection from '../organisms/StartenSieSection';
import UnsereLeistungenSection from '../organisms/UnsereLeistungenSection';
import WasWirFürSieUbernehmenSection from '../organisms/WasWirFürSieUbernehmenSection';
import AnimatedSection from '../atoms/AnimatedSection';

import { ALL_SERVICES } from '@/constants/services';

type ServicePageProps = {
  data: ServicePageData;
  currentServiceId?: string;
};

type SectionConfig = {
  id: string;
  component: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  amount?: number;
};

const ServicePage: FC<ServicePageProps> = ({ data, currentServiceId }) => {
  const filteredLeistungen = ALL_SERVICES.filter(service => {
    const serviceSlug = service.href.split('/').pop();
    return serviceSlug !== currentServiceId;
  });

  const sections: SectionConfig[] = [
    { id: 'hero', component: <HeroService />, direction: 'down', amount: 0.1 },
    { id: 'heading', component: <ServicePageHeading title={data.heading.title} description={data.heading.description} />, direction: 'up' },
    ...(data.soArbeiten ? [{ id: 'soArbeiten', component: <SoArbeitenCards title={data.soArbeiten.title} items={data.soArbeiten.items} />, direction: 'up' as const }] : []),
    ...(data.wasWir ? [{ id: 'wasWir', component: <WasWirFürSieUbernehmenSection list={data.wasWir.list} />, direction: 'up' as const }] : []),
    { id: 'starten', component: <StartenSieSection title={data.starten.title} description={data.starten.description} button={data.starten.button} />, direction: 'up' },
    { id: 'leistungen', component: <UnsereLeistungenSection title={data.leistungen.title} badge={data.leistungen.badge} description={data.leistungen.description} items={filteredLeistungen} />, direction: 'up' },
  ];

  return (
    <>
      {sections.map(({ id, component, direction, amount }) => (
        <AnimatedSection key={id} direction={direction} amount={amount}>
          {component}
        </AnimatedSection>
      ))}
    </>
  );
};

export default ServicePage;