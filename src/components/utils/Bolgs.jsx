import React from 'react';

const BlogPosts = () => {
  const posts = [
    {
      title: 'Networking with The Global Actuary: Career Growth Strategies',
      image: '/path/to/image1.png',
    },
    {
      title: 'Mastering Actuarial Science: The Global Actuary Guide',
      image: '/path/to/image2.png',
    },
    {
      title: 'Unleashing Actuarial Potential: The Global Actuary Impact',
      image: '/path/to/image3.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">BLOG POSTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="relative bg-black text-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-lg font-semibold">{post.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
