import React from 'react';

const Post = (props) => {
    return (
        <>
            <div className='main'>

                <div className='about-post'>
                    <div className='pro-img'>
                        <img src={props.profile} alt="profile" />
                    </div>

                    <div className='info'>
                        <p className='name'>{props.myname}</p>
                        <p  className='time'>{props.time} 🌐</p>
                    </div>

                </div>

                <div className='para'>
                    <p><b>{props.caption}</b></p>
                </div>


                <div className='postimg'>
                    <img src={props.mypost} alt="" />
                </div>

                <div className='reaction'>
                    <h3>{props.emojis}<strong>45</strong> </h3>
                    <div className='comment'>
                        <h5>{props.comments} Comment .</h5>
                        <h5>{props.share} Share</h5>
                    </div>
                </div>
                <hr />
                <div className='my-btn'>
                    <button> 👍Like</button>
                    <button> 💬Comment</button>
                    <button> ↪ Share</button>
                </div>

            </div>
        </>
    )

}


export default Post;