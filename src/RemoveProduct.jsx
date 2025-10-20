import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./RemoveProduct.module.css";

const schema = z.object({
  productId: z
    .string()
    .min(1, { message: "Product ID is required" })
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message: "Product ID must be alphanumeric (letters, numbers, - or _)",
    }),
  confirm: z
    .string()
    .refine((val) => val === "REMOVE", {
      message: 'Type "REMOVE" to confirm deletion',
    }),
});

function RemoveProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("🗑 Product Removed:", data.productId);
    alert(`Product with ID "${data.productId}" has been removed.`);
    reset();
  };

  return (
    <div className={styles.formContainer}>
      <h2 className="text-center mb-4">Remove Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product ID */}
        <label htmlFor="productId">Product ID</label>
        <input
          type="text"
          id="productId"
          className="form-control mb-2"
          {...register("productId")}
        />
        {errors.productId && (
          <p className="text-danger">{errors.productId.message}</p>
        )}

        {/* Confirmation Field */}
        <label htmlFor="confirm">Type "REMOVE" to Confirm</label>
        <input
          type="text"
          id="confirm"
          className="form-control mb-2"
          {...register("confirm")}
        />
        {errors.confirm && (
          <p className="text-danger">{errors.confirm.message}</p>
        )}

        <button type="submit" className="btn btn-danger form-control">
          Remove Product
        </button>
      </form>
    </div>
  );
}

export default RemoveProduct;
