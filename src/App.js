import 'bootstrap/dist/css/bootstrap.min.css';

const VIDEOS = [
  {
    id: 1,
    title: "How to learn React",
    url: "https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s",
    cover: "https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwErCNAFEJQDSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLDDbCYBJTNV08fxkvSZQ3_TFP0WLA",
  },
  {
    id: 2,
    title: "How to learn CSS",
    url: "https://www.youtube.com/watch?v=wRNinF7YQqQ",
    cover: "https://i.ytimg.com/vi/tfzGsCxutWk/hq720.jpg?sqp=-oaymwEgCNAFEJQDSFXyq4qpAxIIARUAAIhCGAFwAcABBrgC8xg=&rs=AOn4CLBhiSmrCHvK6hPF7QXI6TSDPcVguw",
  }
];

const App = () => {
  return (
      <div>
        {
          VIDEOS.map((video) => (
              <div key={video.id}>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img className="w-50" src={video.cover} alt="thumbnail" />
                  <p>{video.title}</p>
                </a>
              </div>
          ))
        }
      </div>
  );
}

export default App;
