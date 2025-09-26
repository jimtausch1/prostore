import { getOrderById } from '@/actions/order.actions';
import notFound from '@/app/not-found';
import { auth } from '@/auth';
import { Order, ShippingAddress } from '@/prostore';
import { redirect } from 'next/navigation';
import OrderDetailsTable from './order-details-table';

interface OrderDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const { id } = await params;

  const order = (await getOrderById(id)) ?? ({} as Order);
  if (!order) notFound();

  const session = await auth();

  // Redirect the user if they don't own the order
  if (order.userId !== session?.user.id && session?.user.role !== 'admin') {
    return redirect('/unauthorized');
  }

  const client_secret = null;

  // Check if is not paid and using stripe
  if (order.paymentMethod === 'Stripe' && !order.isPaid) {
    // Init stripe instance
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
    // // Create payment intent
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: Math.round(Number(order.totalPrice) * 100),
    //   currency: 'USD',
    //   metadata: { orderId: order.id },
    // });
    // client_secret = paymentIntent.client_secret;
  }

  return (
    <OrderDetailsTable
      order={{
        ...order,
        shippingAddress: order.shippingAddress as ShippingAddress,
      }}
      stripeClientSecret={client_secret}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || 'sb'}
      isAdmin={session?.user?.role === 'admin' || false}
    />
  );
}
