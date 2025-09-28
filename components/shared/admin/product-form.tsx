'use client';

// import { createProduct, updateProduct } from '@/actions/product.actions';
// import { productDefaultValues } from '@/app/constants';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Checkbox } from '@/components/ui/checkbox';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { insertProductSchema, updateProductSchema } from '@/prisma/validators';
import { Product } from '@/prostore';
// import { zodResolver } from '@hookform/resolvers/zod';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form';
// import slugify from 'slugify';
// import { toast } from 'sonner';
// import z from 'zod';

type ProductFormProps = {
  type: 'Create' | 'Update';
  product?: Product;
  productId?: string;
};

export default function ProductForm({ type, product, productId }: ProductFormProps) {
  return null;
  // const router = useRouter();

  // const form = useForm<z.infer<typeof insertProductSchema>>({
  //   resolver:
  //     type === 'Update' ? zodResolver(updateProductSchema) : zodResolver(insertProductSchema),
  //   defaultValues: product && type === 'Update' ? product : productDefaultValues,
  // });

  // const onSubmit: SubmitHandler<z.infer<typeof insertProductSchema>> = async (values) => {
  //   // On Create
  //   if (type === 'Create') {
  //     const res = await createProduct(values);

  //     if (res.success) {
  //       toast.success(res.message);
  //       router.push('/admin/products');
  //     } else {
  //       toast.error(res.message);
  //     }
  //   }

  //   // On Update
  //   if (type === 'Update') {
  //     if (!productId) {
  //       router.push('/admin/products');
  //       return;
  //     }

  //     const res = await updateProduct({ ...values, id: productId });

  //     if (res.success) {
  //       toast.success(res.message);
  //       router.push('/admin/products');
  //     } else {
  //       toast.error(res.message);
  //     }
  //   }
  // };

  // // const images = form.watch('images');
  // const isFeatured = form.watch('isFeatured');
  // const banner = form.watch('banner');

  // const nameFormControl = ({
  //   field,
  // }: {
  //   field: ControllerRenderProps<z.infer<typeof insertProductSchema>, 'name'>;
  // }) => (
  //   <FormItem className="w-full">
  //     <FormLabel>Name</FormLabel>
  //     <FormControl>
  //       <Input placeholder="Enter product name" {...field} />
  //     </FormControl>
  //     <FormMessage />
  //   </FormItem>
  // );

  // const slugFormControl = ({
  //   field,
  // }: {
  //   field: ControllerRenderProps<z.infer<typeof insertProductSchema>, 'slug'>;
  // }) => (
  //   <FormItem className="w-full">
  //     <FormLabel>Name</FormLabel>
  //     <FormControl>
  //       <div className="relative">
  //         <Input placeholder="Enter slug" {...field} />
  //         <Button
  //           type="button"
  //           className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 mt-2"
  //           onClick={() => {
  //             form.setValue('slug', slugify(form.getValues('name'), { lower: true }));
  //           }}
  //         >
  //           Generate
  //         </Button>
  //       </div>
  //     </FormControl>
  //     <FormMessage />
  //   </FormItem>
  // );

  // const categoryFormControl = ({
  //   field,
  // }: {
  //   field: ControllerRenderProps<z.infer<typeof insertProductSchema>, 'category'>;
  // }) => (
  //   <FormItem className="w-full">
  //     <FormLabel>Category</FormLabel>
  //     <FormControl>
  //       <Input placeholder="Enter category" {...field} />
  //     </FormControl>
  //     <FormMessage />
  //   </FormItem>
  // );

  // const brandFormControl = ({
  //   field,
  // }: {
  //   field: ControllerRenderProps<z.infer<typeof insertProductSchema>, 'brand'>;
  // }) => (
  //   <FormItem className="w-full">
  //     <FormLabel>Brand</FormLabel>
  //     <FormControl>
  //       <Input placeholder="Enter brand" {...field} />
  //     </FormControl>
  //     <FormMessage />
  //   </FormItem>
  // );

  // const priceFormControl = ({
  //   field,
  // }: {
  //   field: ControllerRenderProps<z.infer<typeof insertProductSchema>, 'price'>;
  // }) => (
  //   <FormItem className="w-full">
  //     <FormLabel>Price</FormLabel>
  //     <FormControl>
  //       <Input placeholder="Enter product price" {...field} />
  //     </FormControl>
  //     <FormMessage />
  //   </FormItem>
  // );

  // const stockFormControl = ({
  //   field,
  // }: {
  //   field: ControllerRenderProps<z.infer<typeof insertProductSchema>, 'stock'>;
  // }) => (
  //   <FormItem className="w-full">
  //     <FormLabel>Stock</FormLabel>
  //     <FormControl>
  //       <Input placeholder="Enter stock" {...field} />
  //     </FormControl>
  //     <FormMessage />
  //   </FormItem>
  // );

  // const descriptionFormControl = ({
  //   field,
  // }: {
  //   field: ControllerRenderProps<z.infer<typeof insertProductSchema>, 'description'>;
  // }) => (
  //   <FormItem className="w-full">
  //     <FormLabel>Description</FormLabel>
  //     <FormControl>
  //       <Textarea placeholder="Enter product description" className="resize-none" {...field} />
  //     </FormControl>
  //     <FormMessage />
  //   </FormItem>
  // );

  // return (
  //   <Form {...form}>
  //     <form method="POST" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
  //       <div className="flex flex-col md:flex-row gap-5">
  //         {/* Name */}
  //         <FormField control={form.control} name="name" render={nameFormControl} />
  //         {/* Slug */}
  //         <FormField control={form.control} name="slug" render={slugFormControl} />
  //       </div>
  //       <div className="flex flex-col md:flex-row gap-5">
  //         {/* Category */}
  //         <FormField control={form.control} name="category" render={categoryFormControl} />
  //         {/* Brand */}
  //         <FormField control={form.control} name="brand" render={brandFormControl} />
  //       </div>
  //       <div className="flex flex-col md:flex-row gap-5">
  //         {/* Price */}
  //         <FormField control={form.control} name="price" render={priceFormControl} />
  //         {/* Stock */}
  //         <FormField control={form.control} name="stock" render={stockFormControl} />
  //       </div>
  //       {/* <div className="upload-field flex flex-col md:flex-row gap-5">
  //         <FormField
  //           control={form.control}
  //           name="images"
  //           render={() => (
  //             <FormItem className="w-full">
  //               <FormLabel>Images</FormLabel>
  //               <Card>
  //                 <CardContent className="space-y-2 mt-2 min-h-48">
  //                   <div className="flex-start space-x-2">
  //                     {images.map((image: string) => (
  //                       <Image
  //                         key={image}
  //                         src={image}
  //                         alt="product image"
  //                         className="w-20 h-20 object-cover object-center rounded-sm"
  //                         width={100}
  //                         height={100}
  //                       />
  //                     ))}
  //                     <FormControl>
  //                       <UploadButton
  //                         endpoint="imageUploader"
  //                         onClientUploadComplete={(res: { url: string }[]) => {
  //                           form.setValue('images', [...images, res[0].url]);
  //                         }}
  //                         onUploadError={(error: Error) => {
  //                           toast({
  //                             variant: 'destructive',
  //                             description: `ERROR! ${error.message}`,
  //                           });
  //                         }}
  //                       />
  //                     </FormControl>
  //                   </div>
  //                 </CardContent>
  //               </Card>
  //               <FormMessage />
  //             </FormItem>
  //           )}
  //         />
  //       </div> */}
  //       <div className="upload-field">
  //         {/* isFeatured */}
  //         Featured Product
  //         <Card>
  //           <CardContent className="space-y-2 mt-2">
  //             <FormField
  //               control={form.control}
  //               name="isFeatured"
  //               render={({ field }) => (
  //                 <FormItem className="space-x-2 items-center">
  //                   <FormControl>
  //                     <Checkbox checked={field.value} onCheckedChange={field.onChange} />
  //                   </FormControl>
  //                   <FormLabel>Is Featured?</FormLabel>
  //                 </FormItem>
  //               )}
  //             />
  //             {isFeatured && banner && (
  //               <Image
  //                 src={banner}
  //                 alt="banner image"
  //                 className="w-full object-cover object-center rounded-sm"
  //                 width={1920}
  //                 height={680}
  //               />
  //             )}

  //             {/* {isFeatured && !banner && (
  //               <UploadButton
  //                 endpoint="imageUploader"
  //                 onClientUploadComplete={(res: { url: string }[]) => {
  //                   form.setValue('banner', res[0].url);
  //                 }}
  //                 onUploadError={(error: Error) => {
  //                   toast({
  //                     variant: 'destructive',
  //                     description: `ERROR! ${error.message}`,
  //                   });
  //                 }}
  //               />
  //             )} */}
  //           </CardContent>
  //         </Card>
  //       </div>
  //       <div>
  //         {/* Description */}
  //         <FormField control={form.control} name="description" render={descriptionFormControl} />
  //       </div>
  //       <div>
  //         <Button
  //           type="submit"
  //           size="lg"
  //           disabled={form.formState.isSubmitting}
  //           className="button col-span-2 w-full"
  //         >
  //           {form.formState.isSubmitting ? 'Submitting' : `${type} Product`}
  //         </Button>
  //       </div>
  //     </form>
  //   </Form>
  // );
}
