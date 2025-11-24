import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./AdminLogin.module.css";
import { adminLogin } from "./services/api";

const schema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(" Admin Login Data:", data);
    await adminLogin(data);
  };

  return (
    <div className={styles.bgContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.title}>Admin Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
         
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your admin email"
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
        </form>
      </div>
    </div>   
  );
  
}

export default AdminLogin;
