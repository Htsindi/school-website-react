function Contact() {
  return (
    <form className="p-4">
      <h3>Contact Us</h3>
      <input type="text" className="form-control mb-2" placeholder="Your Name" />
      <input type="email" className="form-control mb-2" placeholder="Your Email" />
      <textarea className="form-control mb-2" placeholder="Your Message"></textarea>
      <button className="btn btn-primary">Send</button>
    </form>
  );
}

export default Contact;