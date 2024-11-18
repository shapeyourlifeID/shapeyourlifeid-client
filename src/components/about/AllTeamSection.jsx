import dataTeams from "../../utils/teams.json";

export default function AllTeamSection() {
  return (
    // <section id="our-teams" className="syl-team-section">
    //   <div className="container">
    //     <div className="row mb-4">
    //       <div className="col d-flex align-items-center justify-content-between">
    //         <h1 className="text-dark-blue fw-semibold">The Team</h1>
    //         <div id="team-action-slider">
    //           <button className="btn btn-blue-dark px-2 py-1 text-white fw-bold">
    //             <i className="bi bi-arrow-left"></i>
    //           </button>
    //           <button className="btn btn-blue-dark px-2 py-1 text-white fw-bold">
    //             <i className="bi bi-arrow-right"></i>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col">
    //         <div id="the-teams">
    //           <div>
    //             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    //               <div className="col mb-4">
    //                 <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
    //                   <img
    //                     src="${team.photo}"
    //                     className="card-img-top team__photo"
    //                   />
    //                   <div className="card-body">
    //                     <h3
    //                       className="card-title fw-bold text-dark-blue team__name"
    //                       style={{ fontSize: "30px" }}
    //                     >
    //                       name
    //                     </h3>
    //                     <p className="card-text mb-4 team__desc">univ</p>
    //                   </div>
    //                   <div className="card-footer d-flex justify-content-between text-body-secondary py-3">
    //                     <div className="team__position">position</div>
    //                     <div className="team__level">level</div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="our-teams" className="syl-team-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col d-flex align-items-center justify-content-between">
            <h1 className="text-dark-blue fw-semibold">The Team</h1>
            <div id="team-action-slider">
              <button className="btn btn-blue-dark px-2 py-1 text-white fw-bold">
                <i className="bi bi-arrow-left"></i>
              </button>
              <button className="btn btn-blue-dark px-2 py-1 text-white fw-bold">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id="the-teams">
              <div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                  {dataTeams.map((team) => (
                    <div className="col mb-4" key={team.name}>
                      <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                        <img
                          src={team.photo}
                          className="card-img-top team__photo"
                        />
                        <div className="card-body">
                          <h3
                            className="card-title fw-bold text-dark-blue team__name"
                            style={{ fontSize: "30px" }}
                          >
                            {team.name}
                          </h3>
                          <p className="card-text mb-4 team__desc">
                            {team.univ}
                          </p>
                        </div>
                        <div className="card-footer d-flex justify-content-between text-body-secondary py-3">
                          <div className="team__position">{team.position}</div>
                          <div className="team__level">{team.level}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
