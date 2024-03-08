import React from 'react'
import { FaThumbsDown, FaThumbsUp, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PostItem = () => {
  return (
    <div className="post bg-white p-2 my-1">
    <div>
    <Link   to={'/profile'}>
        <img
        className="round-img"
        src="https://www.gravatar.com/avatar/5d2e4c7b8e94773e602abaa83929ba1b?s=200&r=pg&d=mm"
        alt=""
        />
        <h4 className='medium'>Stoyann Velten</h4>
    </Link>
    </div>
    <div>
    <p className="my-1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At similique non iusto esse quibusdam nostrum architecto harum repudiandae dolores expedita voluptatum ratione consequatur inventore id, laudantium voluptas, assumenda iste dolore!
    </p>
    <button type="button" className="btn btn-light">
        <FaThumbsUp/>
        <span>4</span>
    </button>
    <button type="button" className="btn btn-light">
       <FaThumbsDown/>
    </button>
    <Link to={'/post'} className="btn btn-primary">
        Discussion <span className="comment-count">2</span>
    </Link>
    <button type="button" className="btn btn-danger">
      <FaTimes/>
    </button>
    </div>
</div>
  )
}

export default PostItem