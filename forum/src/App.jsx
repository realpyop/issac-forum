import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './client';
import Card from './components/Card';

const App = () => {

  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("forum")
        .select()
        .order("created_at", { ascending: false })

      setPost(data);
    }

    fetchPost();

  }, [posts])


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
    <div className='forum'>
      {
        posts && posts.length > 0 ?
          posts.map((post, index) =>
            <div className='post-container'>
              <Card id={post.id} question={post.question} created_at={timeAgo(post.created_at)} />
            </div>
          ) : <h2>No post yet</h2>
      }
    </div>
  )
}

export default App
