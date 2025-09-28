import { requireAdmin } from '@/app/auth-guard';
import ProductForm from '@/components/shared/admin/product-form';

export default async function CreateProductPage() {
  await requireAdmin();
  return (
    <>
      <h2 className="h2-bold">Create Product</h2>
      <div className="my-8">
        <ProductForm type="Create" />
      </div>
    </>
  );
}
