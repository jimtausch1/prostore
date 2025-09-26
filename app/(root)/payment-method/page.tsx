import { getUserById } from '@/actions/user.actions';
import { auth } from '@/auth';
import CheckoutSteps from '@/components/shared/checkout-steps';
import PaymentMethodForm from './payment-method-form';

export default async function PaymentMethodPage() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error('User not found');

  const user = await getUserById(userId);

  return (
    <>
      <CheckoutSteps current={2} />
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </>
  );
}
