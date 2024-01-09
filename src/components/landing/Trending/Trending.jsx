import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import productData from 'data/product/product';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../../amplifyconfiguration.json';
import { get } from 'aws-amplify/api';

Amplify.configure(amplifyconfig);

async function getWares() {
  try {
    const restOperation = get({
      apiName: 'WestWaresAPI',
      path: '/wares'
    });
    await restOperation.response;
    console.log('GET call succeeded');
    console.log(response);
  } catch (e) {
    console.log('GET call failed: ', e);
  }
}

export const Trending = () => {
  const trendingProducts = [...productData];
  const [products, setProducts] = useState(trendingProducts);
  const [filterItem, setFilterItem] = useState('makeup');

  getWares();

  useEffect(() => {
    const newItems = trendingProducts.filter((pd) =>
      pd.filterItems.includes(filterItem)
    );
    setProducts(newItems);
  }, [filterItem]);

  const filterList = [
    {
      name: 'Make Up',
      value: 'makeup',
    },
    {
      name: 'SPA',
      value: 'spa',
    },
    {
      name: 'Perfume',
      value: 'perfume',
    },
    {
      name: 'Nails',
      value: 'nail',
    },
    {
      name: 'Skin care',
      value: 'skin',
    },
    {
      name: 'Hair care',
      value: 'hair',
    },
  ];
  return (
    <>
      {/* <!-- BEGIN TRENDING --> */}
      <section className='trending'>
        <div className='trending-content'>
          {/*<SectionTitle
            subTitle='Cosmetics'
            title='Trending products'
            body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
          />*/}
          <div className='tab-wrap trending-tabs'>
            {/*<ul className='nav-tab-list tabs'>
              {filterList.map((item) => (
                <li
                  key={item.value}
                  onClick={() => setFilterItem(item.value)}
                  className={item.value === filterItem ? 'active' : ''}
                >
                  {item.name}
                </li>
              ))}
            </ul>*/}
            <div className='products-items'>
              <ProductsCarousel products={products} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- TRENDING EOF   --> */}
    </>
  );
};
