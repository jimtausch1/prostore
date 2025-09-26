import { getMyCart } from '@/actions/cart.actions';
import { getUserById } from '@/actions/user.actions';
import { auth } from '@/auth';
import CheckoutSteps from '@/components/shared/checkout-steps';
import { ShippingAddress } from '@/prostore';
import { redirect } from 'next/navigation';
import ShippingAddressForm from './shipping-address-form';

export default async function ShippingAddressPage() {
  const cart = await getMyCart();

  if (!cart || cart.items.length === 0) redirect('/cart');

  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error('No user ID');

  const user = await getUserById(userId);

  return (
    <>
      <CheckoutSteps current={1} />
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </>
  );
}
