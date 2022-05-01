import { Zoom } from 'react-reveal';

const CardsGrid = ({ children }) => {
  return (
    <section className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 px-8 sm:px-0">
      <Zoom>{children}</Zoom>
    </section>
  );
};

export default CardsGrid;
