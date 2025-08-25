import { Head, useForm } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

const Edit = ({post}) => {

    const { data, setData, put , processing , errors } = useForm ({
        content: post.content || ""
    })

    function submit(e) {
        e.preventDefault()
        put(`/posts/${post.id}`)
    }

    return (
        <>
        <Head title="Edit" />
        <form onSubmit={submit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Update Post</h2>
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
                {processing ? "Updating..." : "Update Post"}
              </button>
        </form>
        </>
    )
}

Edit.layout = page => <Layout children={page} title="Edit Post" />

export default Edit;