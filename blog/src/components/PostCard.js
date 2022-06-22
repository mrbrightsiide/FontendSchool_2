import React from "react";
import "../css/post.css";
import "../css/author.css";

const PostCard = ({
  title,
  description,
  thumbnail,
  authorImg,
  authorName,
  created,
}) => {
  return (
    <li>
      <a className='post' href='#'>
        <article>
          <img src={thumbnail} alt='' />
          <div className='contents-wrap'>
            <dl className='author-wrap'>
              <dt className='a11y-hidden'>Author</dt>
              <dd className='author'>
                <img src={authorImg} alt='' />
                {authorName}
              </dd>
              <dt className='a11y-hidden'>Created</dt>
              <dd className='created'>{created}</dd>
            </dl>
            <h3>{title}</h3>
            <p className='post-description'>{description}</p>
          </div>
        </article>
      </a>
    </li>
  );
};

export default PostCard;
