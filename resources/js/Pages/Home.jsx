import Layout from "../Layouts/Layout";

const Home = () => {
    return (
        <>
        <h1>Welcome</h1>
        <p>Hello welcome to my first laravel inertia react app!</p>
        </>
    )
}

Home.layout = page => <Layout children={page} title="Home"/>

export default Home;