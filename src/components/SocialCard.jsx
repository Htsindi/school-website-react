function SocialCard({ platform, data, link, icon }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          <i className={`me-2 ${icon}`}></i> {platform}
        </h5>
        <div className="card-text">
          {typeof data === 'string' ? <p>{data}</p> : data}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
          View More
        </a>
      </div>
    </div>
  );
}

export default SocialCard;