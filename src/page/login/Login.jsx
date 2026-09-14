import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../Auth.css";
function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    // هنا يتم ربط الـ API الخاص بتسجيل الدخول لاحقاً
    toast.success("تم تسجيل الدخول بنجاح!");
    navigate("/");
  };

  return (
    <div className="auth_page">
      <div className="auth_container">
        <h2>Sign In</h2>
        <p>Welcome back! Please enter your details.</p>

        <form onSubmit={handleSubmit} className="auth_form">
          <div className="form_group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn_auth">Sign In</button>
        </form>

        <p className="auth_switch">
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;