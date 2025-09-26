import { getLatestProducts } from '@/actions/product.actions';
import ProductList from '@/components/shared/product/product-list';

export default async function HomePage() {
  const latestProducts = await getLatestProducts();

  return <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />;
}
