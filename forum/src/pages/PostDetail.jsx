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
                .select("id, created_at, question, content, imageURL")
                .eq("id", id)
                .single()

            setPost(data);
        }

        fetchPost();
    }, [id])


    function timeAgo(dateString) {
        const now = new Date();
        const past = new Date(dateString);
        const secondsPast = (now.getTime() - past.getTime()) / 1000;

        if (secondsPast < 3600) {
            return parseInt(secondsPast / 60) + ' minutes';
        }
        if (secondsPast <= 86400) {
            return parseInt(secondsPast / 3600) + ' hours';
        }
        if (secondsPast <= 604800) {
            return parseInt(secondsPast / 86400) + ' days';
        }
        if (secondsPast <= 2629800) {
            return parseInt(secondsPast / 604800) + ' weeks';
        }
        if (secondsPast > 2629800) {
            return parseInt(secondsPast / 2629800) + ' months';
        }
    }

    return (
        <div className='post-detail'>
            <div className='post-detail-card'>
                <h1 className='post-detail-time'>Posted {timeAgo(post.created_at)} ago</h1>
                <h1 className='post-detail-question'>{post.question}</h1>
                <h1 className='post-detail-content'>{post.content}</h1>
                <h1 className='post-detail-imageURL'>{post.imageURL}</h1>
            </div>
        </div>
    )
}

export default PostDetail; 