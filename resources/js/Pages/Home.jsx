import { Link } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

const Home = ({posts}) => {
    return (
        <>


      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-5xl font-bold mb-6 text-indigo-700">Welcome</h1>

        <p className="text-lg mb-6 text-gray-700">
          Hello! 👋 I'm <strong>Kirrer</strong>, and this is my first full-stack project using
          <span className="font-semibold text-indigo-600"> Laravel</span>, 
          <span className="font-semibold text-indigo-600"> Inertia.js</span>, and 
          <span className="font-semibold text-indigo-600"> React</span>.
          I built this app to explore how these technologies work together to create seamless, modern web experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">🔧 Technologies</h2>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Laravel 10.x</li>
              <li>Inertia.js</li>
              <li>React + Vite</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">📚 Learning Goals</h2>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Understand Laravel’s routing and controllers</li>
              <li>Master Inertia’s SPA bridge without APIs</li>
              <li>Build reusable React components</li>
              <li>Deploy full-stack apps with confidence</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
            Learn More About Me →
          </Link>
        </div>
      </div>

<div className="mt-10">
  <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Latest Posts</h2>
  <Link href= "/posts/create" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mb-6">Create Post</Link>
  <ul className="space-y-4">
    {posts.data.map(post => (
      <li 
        key={post.id} 
        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
      >
        <p className="text-gray-800">{post.content}</p>
        <span className="text-sm text-gray-500 block mt-2">
          Posted at: {new Date(post.created_at).toLocaleString()}
        </span>
        <Link href= {`/posts/${post.id}`} className="text-blue-400 hover:underline">Read more...</Link>
      </li>
    ))}
  </ul>
</div>

<div className="mt-6 flex justify-center space-x-2">
  {posts.links.map((link) =>
    link.url ? (
      <Link
        key={link.label}
        href={link.url}
        dangerouslySetInnerHTML={{ __html: link.label }}
        className={`px-3 py-1 rounded border text-sm transition ${
          link.active
            ? "bg-indigo-600 text-white border-indigo-600"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }`}
      />
    ) : (
      <span
        key={link.label}
        dangerouslySetInnerHTML={{ __html: link.label }}
        className="px-3 py-1 rounded border text-sm text-gray-400 bg-gray-100 cursor-not-allowed"
      />
    )
  )}
</div>


        </>
    )
}

Home.layout = page => <Layout children={page} title="Home"/>

export default Home;