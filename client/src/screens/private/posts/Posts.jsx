import './posts.css'

import PostItem from '../../../components/postItem/PostItem'

const Posts = () => {
  return (
    <div className="container">
      <h1 className="large text-primary">Publications</h1>
      <p className="lead">
        Bienvennue dans la communauté des artisans et producteur locaux
      </p>

      <div className="post-form">
        <div className="bg-primary post-form-header">
          <h3>Dîtes quelquechose...</h3>
        </div>
        <form action="" className="form my-1">
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Créer un nouveaux poste..."
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Envoyer" />
        </form>
      </div>


        <div className="posts">
           

             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
             <PostItem/>
           
            </div>
    </div>
  )
}

export default Posts
