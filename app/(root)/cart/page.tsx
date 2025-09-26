import { getMyCart } from '@/actions/cart.actions';
import { Cart } from '@/prostore';
import CartTable from './cart-table';

export default async function CartPage() {
  const cart = (await getMyCart()) ?? ({} as Cart);

  return (
    <>
      <CartTable cart={cart} />
    </>
  );
}
