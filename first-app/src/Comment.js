import React from "react";
import { Simulate } from "react-dom/test-utils";
import profilepic1 from "./images/profilepic1.jpg"
import profilepic2 from "./images/profilepic2.jpg"
import profilepic3 from "./images/profilepic3.jpg"
import SingleComment from "./SingleComment";
//import Sourabh from "./Sourabh";
const Comment = () =>
{
    return(
        <div className="ui comments">

            {/* <div className="comment">
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

            <div className="comment">
                <a href="/" className="avatar">
                    <img src={profilepic2} alt='' />
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

            <div className="comment">
                <a href="/" className="avatar">
                    <img src={profilepic3} alt='' />
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
            </div> */}hi 
            <SingleComment />
        </div>

    )
}

export default Comment;
