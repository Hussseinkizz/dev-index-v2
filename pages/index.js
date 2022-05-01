// import ToolCard from '../components/ToolCard';
import Card from '../components/Card';
import CardsGrid from '../components/CardsGrid';
import CategoriesFilter from '../components/CategoriesFilter';

import data from '../store/data';

export default function Home() {
  return (
    <section className="flex-col gap-8">
      <CategoriesFilter data={data} />
      <CardsGrid>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsGrid>
    </section>
  );
}
