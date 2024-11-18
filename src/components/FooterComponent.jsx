import React from "react";

export default function FooterComponent() {
  return (
    <footer id="syl-footer" className="syl-footer">
      <div className="container d-flex flex-wrap flex-lg-nowrap gap-row-3 gap-5 justify-content-between align-items-center py-5">
        <img src="/images/footer.png" alt="" className="" />
        <div className="d-flex flex-wrap gap-5">
          <div className="">
            <h6>Scholarships</h6>
            <a href="">Indonesian</a>
            <a href="">Abroad</a>
            <a href="">Exchange Programs</a>
          </div>
          <div className="">
            <h6>About us</h6>
            <a href="">Vision and Mission</a>
            <a href="">Our Team</a>
            <a href="">Our Impact</a>
          </div>
          <div className="">
            <h6>Quick Links</h6>
            <a href="">What We Do</a>
            <a href="">News & Blog</a>
            <a href="">Language Proficiency</a>
          </div>
        </div>
      </div>
      <div className="syl-footer__copyright">
        <div className="container">
          &copy; 2024 by Shape Your Life <br />
          Powered by Ritsumeikan Asia Pacific University under
          <a href="#">Project B*</a>
        </div>
      </div>
    </footer>
  );
}
