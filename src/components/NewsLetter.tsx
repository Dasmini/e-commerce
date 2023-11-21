import "../App.css";

export default function NewsLetter() {
  return (
    <>
      <div className="news-letter">
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our news letter and stay updated!</p>
        <div>
            <input type="email" placeholder="Your e-mail id"/>
            <button>Subscribe</button>
        </div>
      </div>
    </>
  );
}
