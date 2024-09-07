'use client';

import Image from 'next/image';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import Container from '@/components/Container/Container';
import HeaderBox from '@/components/HeaderBox/HeaderBox';
import HeaderBar from '@/components/HeaderBar/HeaderBar';
import HeaderAlignCaption from '@/components/HeaderAlignCaption/HeaderAlignCaption';
import Grid from '@/components/Grid/Grid';
import Section from '@/components/Section/Section';
import Content from '@/components/Content/Content';
import ArrowUp from '@/components/ArrowUp/ArrowUp';
import ScrollPoint from '@/components/ScrollPoint/ScrollPoint';
import Sections from '@/components/Sections/Sections';

export default function Home() {
  return (
    <>
      <header>
        <ArrowUp />
        <HeaderBar />
        <Container bgColor="dark" marginTop>
          <HeaderAlignCaption>
            <HeaderBox />
          </HeaderAlignCaption>
          <BackgroundImage image="header" />
        </Container>
      </header>

      <main>
        <Container bgColor="dark" verticalAlignCenter paddingTopBottom>
          <Sections text='about' />
          <ScrollPoint id="about" />
          <Section>
            <Grid>
              <Content
                heading="Unsere Passion für Wrapping"
                subHeading="Verändern Sie das Aussehen Ihres Fahrzeuges"
                text="Folientechnik Hohenadl ist spezialisiert auf Fahrzeugvollverklebungen, Scheibentönungen und eine Reihe anderer innovativer Lösungen, um das Erscheinungsbild Ihres Fahrzeugs zu verbessern. Unser Expertenteam in Altdorf bei Landshut bietet Ihnen erstklassigen Service und handwerkliche Qualität. Egal, ob Sie den Lack Ihres Fahrzeugs schützen, seinen Stil verbessern oder mehr Privatsphäre genießen möchten, wir haben die richtige Lösung für Sie. Erleben Sie den Unterschied mit unseren maßgeschneiderten Dienstleistungen, die Ihren einzigartigen Geschmack und Ihre Persönlichkeit widerspiegeln."
                link="Nimm Kontakt auf!"
              />

              <Image
                src="/AboutImage.png"
                alt="Bild"
                width={400}
                height={600}
                style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)', borderRadius: '5px' }}
                priority
              />
            </Grid>
          </Section>
        </Container>

        <Container bgColor="bright" paddingTopBottom>
          <ScrollPoint id="services" />
          <Section>
            <Content centered heading="Unsere Services" subHeading="Fachgerechte Lösungen für Ihr Fahrzeug" />
          </Section>
        </Container>

        <Container bgColor="dark" paddingTopBottom>
          <ScrollPoint id="contact" />
          <Section>
            <Content centered heading="Unsere Services" subHeading="Fachgerechte Lösungen für Ihr Fahrzeug" />
          </Section>
        </Container>
      </main>
    </>
  );
}
