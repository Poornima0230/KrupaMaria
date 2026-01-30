import "../styles/research.css";

export const Research = () => {
  return (
    <div className="research">
      <div className="heading">
        <h2>Research</h2>
        <hr className="underline" />
      </div>
      <div className="research-content">
        <h3>"What you seek is seeking you."</h3>
        <p>
          I’ve always been fascinated by tangible mathematics — the kind that
          feels human, that explains why we cooperate, care, and create
          together. Evolutionary game theory became my home in mathematics
          because it gives structure to what once felt unquantifiable: empathy,
          altruism, moral behavior, and culture. It reminds me that mathematics
          is not detached from life — it is one of the deepest ways we can
          understand it.
        </p>
        <p>
          I study how individuals and populations adapt, cooperate, and compete
          in dynamic environments — and what mathematical structures underlie
          such interactions. My research work focuses
          <b>on asymmetric games with continuous strategy sets</b>, developing
          analytical tools to understand evolutionary stability and equilibrium
          selection. Beyond theoretical foundations, I am deeply interested in
          applying game-theoretic ideas to questions of{" "}
          <b>sustainability, green transitions, and social cooperation</b>,
          seeking insights that connect mathematics with real-world
          decision-making. In 2025, I spent three months as a{" "}
          <b>Visiting Researcher at Copenhagen Business School</b>, developing
          an evolutionary game-theoretic model to address and mitigate{" "}
          <b>industrial greenwashing</b>. Looking ahead, I aim to expand my work
          toward <b>human behavior, reciprocity, and collective action</b>,
          bridging mathematical theory with the social and natural sciences.
        </p>
        <p className="sub-heading">Publications</p>
        <ol>
          <li>
            <i>
              Superior profiles in asymmetric evolutionary games with infinite
              strategy sets
            </i>
            , Communicated.
          </li>
          <li>
            <i>
              Can Evolutionary Dynamics Beat Greenwashing? A Two-Player
              Asymmetric Game with Continuous Strategy Sets,{" "}
            </i>
            Communicated
          </li>
        </ol>
      </div>
    </div>
  );
};
