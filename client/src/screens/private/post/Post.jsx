import React from 'react'
import PostItem from '../../../components/postItem/PostItem'
import CommentItem from '../../../components/postItem/CommentItem'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div className="container">
      <Link to="/posts" className="btn btn-light">
        Retour
      </Link>

      <div className="post-form">
        <CommentItem />
        <div className="bg-primary post-form-header">
          <h3>Laissez un commentaire</h3>
        </div>
        <form action="" className="form my-1">
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Commenter ce poste."
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Envoyer" />
        </form>
      </div>

      <div className="posts">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  )
}

export default Post
