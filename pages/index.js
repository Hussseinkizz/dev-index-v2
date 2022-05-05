import { createClient } from '@supabase/supabase-js';
import { useStore } from '../store/store';
import Card from '../components/Card';
import CardsGrid from '../components/CardsGrid';
import CategoriesFilter from '../components/CategoriesFilter';

import localData from '../store/data';

export default function Home({ fetchedData }) {
  let useData = fetchedData; // localData;

  // Todo: modify the incoming data
  // 1. get categories from each item  and form an array
  // 2. remove duplicate values
  // 3. inject the "everything" category as the first item
  // 4. return the array!
  const sortedCategories = () => {
    const categories = useData?.map((item) => item.category);
    const uniqueCategories = [...new Set(categories)];
    // const modifiedUniqueCategories = uniqueCategories.splice(
    //   0,
    //   0,
    //   'everything'
    // );
    const modifiedUniqueCategories = [
      ...uniqueCategories,
      'everything',
    ].reverse();
    // console.log(modifiedUniqueCategories);
    return modifiedUniqueCategories;
  };
  // console.log(sortedCategories());

  // read active category from store
  const {
    state: { currentCategory },
    dispatch,
  } = useStore();

  // filteredData is the data filtered by the current category
  let filteredData = useData?.filter((item) => {
    return item.category === currentCategory;
  });
  // console.log(filteredData);

  // show this when user selects a category
  const filteredContent = (
    <CardsGrid>
      {filteredData?.map((tool) => (
        <Card tool={tool} key={tool.id} />
      ))}
    </CardsGrid>
  );

  // show this initally
  const unFilteredContent = (
    <CardsGrid>
      {useData?.map((tool) => (
        <Card tool={tool} key={tool.id} />
      ))}
    </CardsGrid>
  );

  return (
    <section className="flex-col gap-8">
      <div className="w-full mb-8 bg-gray-100 p-2 border-gray-200 border-b">
        <p className="md:text-xl px-8 sm:px-0 text-center">
          Discover the best resources, tools and websites for web developers,
          very handy and very useful!
        </p>
      </div>
      <div>
        <CategoriesFilter categories={sortedCategories()} />
      </div>
      {/* What to render? */}
      <div>
        {currentCategory === 'everything' ? unFilteredContent : filteredContent}
      </div>
    </section>
  );
}

// fetch data from backend server...
export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.SUPABASE_API_ENDPOINT,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data } = await supabaseAdmin.from('tools').select('*').order('id');

  return {
    props: {
      fetchedData: data,
    },
  };
}
