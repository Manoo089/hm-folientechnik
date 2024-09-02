import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import Container from '@/components/Container/Container';
import HeaderBox from '@/components/HeaderBox/HeaderBox';
import HeaderBar from '@/components/HeaderBar/HeaderBar';

export default function Home() {
  return (
    <header>
      <HeaderBar />
      <Container bgColor="dark">
        <HeaderBox />
        <BackgroundImage image="header" />
      </Container>

      <Container bgColor="bright">
        <h1>About</h1>
      </Container>
    </header>
  );
}
