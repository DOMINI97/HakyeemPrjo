import "./Styles.css";

function VideoStrem() {
  return (
    <div className='VideoStrem'>
      <div className='VideoTop'>
        <h2>VideoStrem</h2>
        <h5>See all</h5>
      </div>
      <div className='Videos'>
        <video width='270' height='150' controls>
          <source
            src='https://www.youtube.com/watch?v=OSwrrx-IJK4'
            type='video/mp4'
          />
        </video>
        <video width='270' height='150' controls>
          <source
            src='https://www.youtube.com/watch?v=OSwrrx-IJK4'
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  );
}

export default VideoStrem;
