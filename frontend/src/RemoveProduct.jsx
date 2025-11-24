import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./RemoveProduct.module.css";
import { removeProduct } from "./services/api";

const schema = z.object({
  productId: z
    .string()
    .min(1, {
      message: "Product ID must be alphanumeric (letters, numbers, - or _)",
    }),
  confirm: z
    .string().min(1, {
      message: 'Type "REMOVE" to confirm deletion',
    }),
});

function RemoveProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("🗑 Frontend: Product to remove:", data.productId); 
    await removeProduct(data);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className="text-center mb-4">Remove Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="productId">Product ID</label>
        <input
          type="text"
          id="productId"
          className="form-control mb-2"
          {...register("productId")}
        />
        {errors.productId && <p className="text-danger">{errors.productId.message}</p>}

        <label htmlFor="confirm">Type "REMOVE" to Confirm</label>
        <input
          type="text"
          id="confirm"
          className="form-control mb-2"
          {...register("confirm")}
        />
        {errors.confirm && <p className="text-danger">{errors.confirm.message}</p>}

        <button type="submit" className="btn btn-danger form-control">
          Remove Product
        </button>
      </form>
    </div>
  );
}

export default RemoveProduct;

