import React from 'react'
import Post from './components/Post';
import Data from './Data';

const App = () => {
  function ncard(val) {
    return (
      <Post
        key={val.id}
        profile={val.profile}
        myname={val.myname}
        caption={val.caption}
        mypost={val.mypost}
        emojis={val.emojis}
        time={val.time}
        comments={val.comments}
        share={val.share}
        
      />
    );
  }
  return (
    <>
      {Data.map(ncard)}

    </>
  )
}

export default App;





