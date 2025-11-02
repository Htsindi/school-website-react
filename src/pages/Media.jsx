import { useEffect, useState } from 'react';
import SocialCard from '../components/SocialCard';
import '../index.css'; // Global styles including scoped .media-page styles

function Media() {
  const [facebookPost, setFacebookPost] = useState('');
  const [youtubeVideo, setYoutubeVideo] = useState({ title: '', embed: '' });
  const [tiktokEmbed, setTiktokEmbed] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    const modal = new bootstrap.Modal(document.getElementById('mediaModal'));
    modal.show();
  };

  useEffect(() => {
    // Facebook
    fetch('http://localhost:3000/api/social/facebook')
      .then(res => res.json())
      .then(data => {
        const post = data.data?.[0]?.message || 'No recent post';
        setFacebookPost(post);
      });

    // YouTube
    fetch('http://localhost:3000/api/social/youtube')
      .then(res => res.json())
      .then(data => {
        const videoId = data.items?.[0]?.id?.videoId;
        const embed = videoId
          ? `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>`
          : '<p>No video available</p>';
        setYoutubeVideo({ title: data.items?.[0]?.snippet?.title || '', embed });
      });

    // TikTok
    fetch('http://localhost:3000/api/social/tiktok')
      .then(res => res.json())
      .then(data => {
        setTiktokEmbed(data.html || '<p>No TikTok video available</p>');
      });

    // WhatsApp
    fetch('http://localhost:3000/api/social/whatsapp')
      .then(res => res.json())
      .then(data => {
        setWhatsappMessage(data.message || 'No recent message');
      });
  }, []);

  return (
    <div className="container media-page">
      <h1>School Social Media Feed</h1>
      <div className="row g-2">
        <div className="col-md-6 col-lg-3">
          <SocialCard
            platform="Facebook"
            data={facebookPost}
            link="https://facebook.com/YOUR_PAGE_ID"
            icon="fab fa-facebook"
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <SocialCard
            platform="YouTube"
            data={
              <button className="btn btn-outline-secondary" onClick={() => openModal(youtubeVideo.embed)}>
                Preview Video
              </button>
            }
            link="https://youtube.com/channel/YOUR_CHANNEL_ID"
            icon="fab fa-youtube"
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <SocialCard
            platform="TikTok"
            data={
              <button className="btn btn-outline-secondary" onClick={() => openModal(tiktokEmbed)}>
                Preview Video
              </button>
            }
            link="https://tiktok.com/@YOUR_USERNAME"
            icon="fab fa-tiktok"
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <SocialCard
            platform="WhatsApp"
            data={whatsappMessage}
            link="https://wa.me/YOUR_NUMBER"
            icon="fab fa-whatsapp"
          />
        </div>
      </div>

      {/* Modal for media preview */}
      <div className="modal fade" id="mediaModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Media Preview</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {modalContent ? (
                <div dangerouslySetInnerHTML={{ __html: modalContent }} />
              ) : (
                <p>No media to preview</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;