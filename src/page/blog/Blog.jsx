import React from 'react';
import './Blog.css';

const blogs = [
  {
    id: 1,
    title: "The Ultimate Guide to Choosing the Right Smartphone in 2026",
    date: "September 10, 2026",
    author: "Reda Tech Team",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop",
    excerpt: "With so many options on the market, finding the right phone can be confusing. Here are key specs to consider before buying."
  },
  {
    id: 2,
    title: "Top 5 Must-Have Accessories for Work-From-Home Setups",
    date: "August 28, 2026",
    author: "Sarah Ahmed",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=500&auto=format&fit=crop",
    excerpt: "Upgrade your productivity with these affordable tech accessories designed to optimize your workstation."
  },
  {
    id: 3,
    title: "How to Extend Your Laptop's Battery Life Efficiently",
    date: "August 15, 2026",
    author: "Reda Tech Team",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop",
    excerpt: "Simple settings and care tips that will keep your laptop battery performing at its peak for years."
  }
];

function Blog() {
  return (
    <div className="blog_page">
      <div className="container">
        <div className="blog_header">
          <h2>Latest News & Articles</h2>
          <p>Stay updated with the latest tech trends, guides, and store announcements.</p>
        </div>

        <div className="blog_grid">
          {blogs.map((post) => (
            <div className="blog_card" key={post.id}>
              <div className="blog_img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog_info">
                <span className="blog_date">{post.date} | By {post.author}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="read_more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;