import Layout  from "../../Layouts/Layout";

const Contact = () => {
    return (
        <>
              <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <p className="text-lg mb-4">
          Hi, I'm <strong>Kirrer</strong> — a self-driven software enthusiast currently exploring the intersection of Laravel, Inertia.js, and React. This project marks my first hands-on experience combining these technologies into a unified full-stack workflow.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Summary</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Focused on building secure, reliable systems through deep troubleshooting and manual configuration.</li>
          <li>Experienced with PHP, Composer, Laravel setup, and front-end workflows using Tailwind and React.</li>
          <li>Skilled in managing OS-level compatibility, registry tweaks, and CLI environments across PowerShell and Bash.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
        <ul className="ml-6 space-y-2">
          <li><strong>Email:</strong> isaackmuchoki55@gmail.com</li>
          <li><strong>Phone:</strong> +254 792590501</li>
          <li><strong>GitHub:</strong> <a href="https://github.com/kirrer-izo" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/kirrer</a></li>
          <li><strong>Location:</strong> Nakuru, Kenya</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc ml-6">
            <li>Laravel</li>
            <li>Inertia.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
          </ul>
          <ul className="list-disc ml-6">
            <li>PHP & Composer</li>
            <li>Node.js & npm</li>
            <li>Git & GitHub</li>
            <li>Docker (learning)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Learning Goals</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Master Laravel’s service container and middleware system.</li>
          <li>Build dynamic SPAs using Inertia without a separate API layer.</li>
          <li>Design responsive UIs with React and Tailwind.</li>
          <li>Deploy full-stack apps with Docker and CI/CD pipelines.</li>
        </ul>

        <p className="mt-10 text-gray-600">
          This page is part of my journey to become a confident full-stack engineer. Thanks for stopping by!
        </p>
      </div>
        </>
    )
}

Contact.layout = page => <Layout children={page} title="Contact"/>

export default Contact;