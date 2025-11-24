import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./UpdateProduct.module.css";
import { updateProduct } from "./services/api";

const schema = z.object({
  productId: z.string().min(1, { message: "Product ID is required" }),
  name: z.string().min(2, { message: "Product name is required" }),
  price: z.number().positive({ message: "Price must be greater than 0" }),
  category: z.string().min(1, { message: "Category is required" }),
  description: z.string().min(5, { message: "Description must be at least 5 characters" }),
});

function UpdateProduct() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("💎 Frontend: Product Update Data:", data); 
    await updateProduct(data);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className="text-center mb-4">Update Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Product ID</label>
        <input type="text" {...register("productId")} className="form-control mb-2" />
        {errors.productId && <p className="text-danger">{errors.productId.message}</p>}

        <label>Name</label>
        <input type="text" {...register("name")} className="form-control mb-2" />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}

        <label>Price</label>
        <input type="number" {...register("price", { valueAsNumber: true })} className="form-control mb-2" />
        {errors.price && <p className="text-danger">{errors.price.message}</p>}

        <label>Category</label>
        <input type="text" {...register("category")} className="form-control mb-2" />
        {errors.category && <p className="text-danger">{errors.category.message}</p>}

        <label>Description</label>
        <textarea {...register("description")} className="form-control mb-2" />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}

        <button type="submit" className="btn btn-warning form-control mt-3">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
