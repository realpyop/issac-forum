import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const PostDetail = () => {

    const { id } = useParams();
    const [post, setPost] = useState({ id: null, question: "", content: "", imageURL: "" });

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from("forum")
                .select("id, question, content, imageURL")
                .eq("id", id)
                .single()

            setPost(data);
        }

        fetchPost();
    }, [id])


    const getPost = () => {

    }

    return (
        <div className='post-detail'>
            <div className='post-detail-card'>
                <h1>{post.question}</h1>
                <h1>{post.content}</h1>
                <h1>{post.imageURL}</h1>
            </div>

        </div>
    )
}

export default PostDetail; 