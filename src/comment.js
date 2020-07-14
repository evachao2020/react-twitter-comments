import React from "react";
import facker from "faker"

const Comments = props => {   {/*父親傳給兒子index.js===>comments.js*/}
    return (
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <div className="comment">
                <a className="avatar">
                    <img src={facker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a className="author">{props.name.name1}</a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        How artistic!
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                </div>
            </div>
            <div className="comment">
                <a className="avatar">
                    <img src={facker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a className="author">{props.name.name2}</a>
                    <div className="metadata">
                        <span className="date">Yesterday at 12:30AM</span>
                    </div>
                    <div className="text">
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                </div>
                <div className="comments">
                    <div className="comment">
                        <a className="avatar">
                            <img src={facker.image.avatar()}></img>
                        </a>
                        <div className="content">
                            <a className="author">Jenny Hess</a>
                            <div className="metadata">
                                <span className="date">Just now</span>
                            </div>
                            <div className="text">
                                Elliot you are always so right :)
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment">
                <a className="avatar">
                    <img src={facker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a className="author">Joe Henderson</a>
                    <div className="metadata">
                        <span className="date">5 days ago</span>
                    </div>
                    <div className="text">
                        Dude, this is awesome. Thanks so much
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                </div>
            </div>
            <form className="ui reply form">
                <div className="field">
                    <textarea></textarea>
                </div>
                <div className="ui blue labeled submit icon button">
                    <i className="icon edit"></i> Add Reply
                </div>
            </form>
        </div>
    )
}
export default Comments   //index.js想引用comments.js, 必須先聲明你可被引用