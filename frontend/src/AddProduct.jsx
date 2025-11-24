import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./AddProduct.module.css";
import { addProduct } from "./services/api"; // import the API function

const schema = z.object({
  name: z.string().min(3, { message: "Product name must be at least 3 characters" }),
  category: z.string().min(2, { message: "Category is required" }),
  price: z
    .string().min(1, {
      message: "Price must be a positive number",
    }),
  metalType: z.string().min(1, { message: "Select metal type" }),
  weight: z
    .string().min(1, {
      message: "Weight must be a positive number",
    }),
  stock: z
    .string().min(1,{
      message: "Stock must be 0 or greater",
    }),
  description: z.string().min(5, { message: "Description must be at least 5 characters" }),
});

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("🧾 Product Data from Form (Frontend):", data);
    await addProduct(data);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className="text-center mb-4">Add Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
      
        <label htmlFor="name">Product Name</label>
        <input type="text" id="name" className="form-control mb-2" {...register("name")} />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}

        <label htmlFor="category">Category</label>
        <input type="text" id="category" className="form-control mb-2" {...register("category")} />
        {errors.category && <p className="text-danger">{errors.category.message}</p>}

        <label htmlFor="price">Price ($)</label>
        <input type="number" id="price" className="form-control mb-2" {...register("price")} />
        {errors.price && <p className="text-danger">{errors.price.message}</p>}

        <label htmlFor="metalType">Metal Type</label>
        <select id="metalType" className="form-control mb-2" {...register("metalType")}>
          <option value="">-- Select --</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Platinum">Platinum</option>
        </select>
        {errors.metalType && <p className="text-danger">{errors.metalType.message}</p>}

        <label htmlFor="weight">Weight (g)</label>
        <input type="number" id="weight" className="form-control mb-2" {...register("weight")} />
        {errors.weight && <p className="text-danger">{errors.weight.message}</p>}

        <label htmlFor="stock">Stock</label>
        <input type="number" id="stock" className="form-control mb-2" {...register("stock")} />
        {errors.stock && <p className="text-danger">{errors.stock.message}</p>}

        <label htmlFor="description">Description</label>
        <textarea id="description" className="form-control mb-3" rows="3" {...register("description")}></textarea>
        {errors.description && <p className="text-danger">{errors.description.message}</p>}

        <button type="submit" className="btn btn-primary form-control">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
