import "../../styles/homecontent.css";
export const HomeContent = () => {
  return (
    <div className="home-content">
      <h1 className="heading">Home</h1>
      <div className="content">
        <p>
          {" "}
          Hello there!!👋👋 I'm Krupa Maria. Welcome to my little corner of the
          world.{" "}
        </p>
        <p>
          I'm a Prime Minister's Research Fellow (PMRF) in the Department of
          Mathematics at IIT Madras, advised by Dr. A.J. Shaiju. I specialise in
          evolutionary game theory, which weaves together mathematics,
          economics, and biology. In particular, I’m fascinated by how
          mathematical ideas can illuminate questions of sustainability, green
          transition, and reciprocity, and by how evolution shapes the ways we
          choose, adapt, and cooperate.
        </p>
        <p className="bottom-para">
          Outside mathematics, I’m a lifelong learner with a soft spot for
          history, law, and literature. I love learning new languages and
          exploring cultures — the art and rhythm behind how people think. When
          not chasing proofs, you’ll likely find me traveling, meeting new
          people, and discovering stories in places and conversations.
        </p>
      </div>
    </div>
  );
};
