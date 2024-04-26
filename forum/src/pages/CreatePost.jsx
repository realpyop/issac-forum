import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { supabase } from '../client';
import '../App.css'


const CreatePost = () => {

    const [post, setPost] = useState({ question: "", content: "", imageURl: "" })
    const [questionInvalid, setQuestionInvalid] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();

        if (post.question.trim() === "") {
            setQuestionInvalid(true);
            return;
        }

        await supabase
            .from('forum')
            .insert({ question: post.question, content: post.content, imageURL: post.imageURL })
            .select()

        window.location = "/"
    }

    return (
        <div>
            <form className='question-form'>
                <h2>Post a Question!</h2>
                <div className='form-field'>
                    <textarea
                        type="text"
                        className={`input-question ${questionInvalid ? 'question-invalid' : ''}`}
                        id="question"
                        name="question"
                        placeholder={`${questionInvalid ? 'Question field cannot be empty' : 'Question'}`}
                        onChange={handleChange}>
                    </textarea>
                    <br />
                </div>

                <div className='form-field'>
                    <textarea className="input-content" id="content" name="content" placeholder="Content (optional)" onChange={handleChange}></textarea>
                    <br />
                </div>

                <div className='form-field'>
                    <textarea type="text" className="input-imageURL" id="imageURL" name="imageURL" placeholder="ImageURL (optional)" onChange={handleChange}></textarea>
                    <br />

                </div>

                <div className='form-field'>
                    <input type="submit" className="submit-button" value="Post" onClick={createPost}></input>
                </div>
            </form>
        </div >
    )
}

export default CreatePost;  