"use client";

import React from "react";
import dataTeams from "../../utils/teams.json";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TheTeamsSection() {
  // if ($("#the-teams-home").length) {
  //   fetch(theTeamSlides  )
  //     .then((response) => response.json())
  //     .then((teams) => {
  //       // console.log(teams)

  //       teams.forEach((team, index) => {
  //         $("#the-teams-home").append(`
  //           <div className="col-6 me-2">
  //             <img
  //               src="${team.photo}"
  //               alt="${team.name}"
  //               className="rounded-4 img-fluid w-100"
  //             />
  //             <div>
  //               <h3
  //                 className="card-title fw-semibold text-dark-blue mt-3 text-truncate"
  //               >
  //                 ${team.name}
  //               </h3>
  //               <p className="syl-team__role">${team.position}</p>
  //             </div>
  //           </div>
  //         `);
  //       });

  //       $("#the-teams-home").slick({
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //         centerPadding: "24px",
  //         autoplay: true,
  //         infinite: true,
  //         dots: false,
  //         touchMove: true,
  //         touchThreshold: 100,
  //         autoplaySpeed: 5000,
  //         pauseOnHover: true,
  //         speed: 1000,
  //       });

  //       $("#team-action-slider").empty().append($(".slick-prev, .slick-next"));

  //       $(".slick-prev")
  //         .html('<i className="bi bi-arrow-left"></i>')
  //         .addClass("btn btn-blue-dark px-2 py-1 text-white fw-bold me-1");
  //       $(".slick-next")
  //         .html('<i className="bi bi-arrow-right"></i>')
  //         .addClass("btn btn-blue-dark px-2 py-1 text-white fw-bold");
  //     })
  //     .catch((error) => console.error("Error fetching teams:", error));
  // }

  return (
    <section id="syl-team" className="syl-team pt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-6 py-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 className="text-dark-blue fw-semibold mb-3">The Team</h1>
              <div className="d-flex">
                <div id="team-action-slider" className="me-1">
                  <button className="btn btn-blue-dark px-2 py-1 text-white fw-bold">
                    <i className="bi bi-arrow-left"></i>
                  </button>
                  <button className="btn btn-blue-dark px-2 py-1 text-white fw-bold">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
                <a
                  href="./about.html#our-teams"
                  className="btn btn-blue-dark px-3 py-1 text-white fw-bold"
                >
                  More
                </a>
              </div>
            </div>
            <div className="row g-2 g-md-3 g-lg-4">
              <div className="col">
                <div id="the-teams-home">
                  {dataTeams.map((team) => (
                    <div className="col-6 me-2" key={team.name}>
                      <img
                        src={team.photo}
                        alt={team.name}
                        className="rounded-4 img-fluid w-100"
                      />
                      <div>
                        <h3 className="card-title fw-semibold text-dark-blue mt-3 text-truncate">
                          {team.name}
                        </h3>
                        <p className="syl-team__role">{team.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="text-center">
              <img
                src="./images/team/fathia.png"
                className="img-fluid w-75"
                alt="Fathia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
