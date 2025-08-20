import Layout from "../../Layouts/Layout"

const About = () => {
  return (
<>
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-semibold mb-4">About This Project</h1>

        <p className="mb-6">
          This is my inaugural project integrating Laravel, Inertia.js, and React.
          It demonstrates how to build seamless server-driven SPAs without a separate API layer.
        </p>

        <h2 className="text-2xl font-medium mb-3">Key Takeaways</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Routing entirely in Laravel while rendering React components.</li>
          <li>Passing data from controllers to views without JSON endpoints.</li>
          <li>Hot module replacement via Vite for instant feedback during development.</li>
        </ul>

        <h2 className="text-2xl font-medium mb-3">Future Enhancements</h2>
        <ul className="list-disc ml-6">
          <li>Integrate global state management with React Context or Zustand.</li>
          <li>Add authentication guards using Laravel Fortify and Inertia middleware.</li>
          <li>Implement localization and SEO meta tags dynamically.</li>
        </ul>
      </div>

    </>
  )

}

About.layout = page => <Layout children={page} title="About"/>

export default About;