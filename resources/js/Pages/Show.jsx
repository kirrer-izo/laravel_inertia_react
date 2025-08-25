import { useForm } from "@inertiajs/react";
import Layout from "../Layouts/Layout";


const Show = ({post}) => {

    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault()
        destroy(`/posts/${post.id}`)
    }
    return (
        <>
        
        <div className="bg-white shadow-md rounded-lg p-4 ">
            
        <p className="text-gray-800">{post.content}</p>
        <span className="text-sm text-gray-500 block mt-2">
          Posted at: {new Date(post.created_at).toLocaleString()}
        </span>

        <div className="flex items-center justify-end">
            <form onSubmit={submit}>
                <button type="submit" className="bg-red-500 rounded-md text-sm px-4 py-2 text-white">Delete</button>
            </form>
        </div>
        </div>
        
      
        </>
    )
}

Show.layout = page => <Layout children={page} title="Post Details" />

export default Show;