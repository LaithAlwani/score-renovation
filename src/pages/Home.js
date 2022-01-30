import Hero from '../components/Hero';
import { useDocumentTitle } from '../utils/setDocumentTitle';

export default function Home() {
  const [documentTitle] = useDocumentTitle("Home");
  return <Hero />;
}
