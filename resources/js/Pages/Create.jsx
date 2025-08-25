import { useForm } from "@inertiajs/react";
import Layout from "../Layouts/Layout";



const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        content: ''
    })
    
    function submit(e) {
        e.preventDefault()
        post('/posts')
    }
    return (
        <>
        <form onSubmit={submit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Create a Post</h2>
            <textarea className="w-full h-32 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" type="text" value={data.content} onChange={e => setData('content', e.target.value)} placeholder="What's on your mind?"></textarea>
            {errors.content && (
                <div className="text-red-500 text-sm">{errors.content}</div>
            )}
            <button
             type="submit"
              disabled={processing}
              className={`w-full py-2 px-4 rounded-xl text-white font-medium transistion 
                ${processing ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
               >
                {processing ? "Posting..." : "Create Post"}
              </button>
        </form>
        </>
    )
}

Create.layout = page => <Layout children={page} title="Create Post" />

export default Create;