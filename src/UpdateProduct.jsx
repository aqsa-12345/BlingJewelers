import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./UpdateProduct.module.css";

// ✅ Validation schema
const schema = z.object({
  productId: z
    .string()
    .min(1, { message: "Product ID is required" })
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message: "Product ID must be alphanumeric (letters, numbers, - or _)",
    }),
  name: z.string().min(2, { message: "Product name is required" }),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .positive({ message: "Price must be greater than 0" }),
  category: z.string().min(1, { message: "Category is required" }),
  description: z.string().min(5, { message: "Description must be at least 5 characters" }),
  image: z
    .any()
    .optional()
    .refine(
      (file) =>
        !file || (file instanceof FileList && file.length > 0),
      "Image must be selected"
    ),
});

function UpdateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("💎 Product Updated:", data);
    alert(`Product "${data.name}" updated successfully!`);
    reset();
  };

  return (
    <div className={styles.formContainer}>
      <h2 className="text-center mb-4">Update Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product ID */}
        <label htmlFor="productId">Product ID</label>
        <input
          id="productId"
          type="text"
          {...register("productId")}
          className="form-control mb-2"
          placeholder="Enter existing product ID"
        />
        {errors.productId && (
          <p className="text-danger">{errors.productId.message}</p>
        )}

        {/* Product Name */}
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="form-control mb-2"
          placeholder="New name (optional)"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}

        {/* Price */}
        <label htmlFor="price">Price (in PKR)</label>
        <input
          id="price"
          type="number"
          step="0.01"
          {...register("price", { valueAsNumber: true })}
          className="form-control mb-2"
          placeholder="New price"
        />
        {errors.price && <p className="text-danger">{errors.price.message}</p>}

        {/* Category */}
        <label htmlFor="category">Category</label>
        <select
          id="category"
          {...register("category")}
          className="form-control mb-2"
        >
          <option value="">Select Category</option>
          <option value="necklace">Necklace</option>
          <option value="bracelet">Bracelet</option>
          <option value="earrings">Earrings</option>
          <option value="rings">Rings</option>
          <option value="anklet">Anklet</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}

        {/* Description */}
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          {...register("description")}
          className="form-control mb-2"
          rows="3"
          placeholder="Update product details..."
        ></textarea>
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}

        {/* Image */}
        <label htmlFor="image">New Product Image (optional)</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          {...register("image")}
          className="form-control mb-2"
        />
        {errors.image && <p className="text-danger">{errors.image.message}</p>}

        {/* Submit */}
        <button type="submit" className="btn btn-warning form-control mt-3">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
