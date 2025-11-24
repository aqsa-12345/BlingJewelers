import React, { useState } from "react";
import styles from "./ReviewPage.module.css";

function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", message: "", rating: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message || !form.rating) {
      alert("Please fill out all fields!");
      return;
    }

    setReviews([...reviews, form]);
    setForm({ name: "", message: "", rating: "" });
  };

  return (
    <div className={styles.reviewContainer}>
      <h2 className={styles.heading}>Customer Reviews</h2>

      <form onSubmit={handleSubmit} className={styles.reviewForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">Review</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your review..."
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            name="rating"
            value={form.rating}
            onChange={handleChange}
          >
            <option value="">Select rating</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Submit Review
        </button>
      </form>

      <div className={styles.reviewsList}>
        {reviews.length === 0 ? (
          <p>No reviews yet — be the first to write one!</p>
        ) : (
          reviews.map((rev, index) => (
            <div key={index} className={styles.reviewCard}>
              <h4>{rev.name}</h4>
              <p>{rev.message}</p>
              <p className={styles.rating}>Rating: {rev.rating}⭐</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReviewPage;
