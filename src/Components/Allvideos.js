import VIDEOS from "../videos.json"

const Allvideos = () =>
{
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

export default Allvideos;