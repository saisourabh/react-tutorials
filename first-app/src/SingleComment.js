import React from "react";
import profilepic1 from './images/profilepic1.jpg'
const SingleComment = () =>
{

    return (


        <div className="comment">
                 <a href="/" className="avatar">
                    <img src={profilepic1} alt='' />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sourabh
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className="text">
                        it's amazing
                    </div>
                </div>
            </div>

    )
            
}

export default SingleComment;