import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AboutModel.scss";

const AboutModel = ({ firstchoice, secondchoice, thirdchoice }) => {
  const choices = [
    { title: firstchoice },
    { title: secondchoice },
    { title: thirdchoice },
  ];

  const [selectedChoice, setSelectedChoice] = useState(choices[0].title);

  return (
    <div className="about">
      <div className="about_container">
        <h2 className="h2Regular">
          Transfer idem ad modestiam vel temperantiam, quae est moderatio
          cupiditatum rationi oboediens
        </h2>
        <ul className="about_container_menu">
          {choices.map((link, index) => (
            <li key={index}>
              <NavLink
                onClick={() => setSelectedChoice(link.title)}
                className={selectedChoice === link.title ? "selected" : ""}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {selectedChoice === firstchoice && (
          <p className="subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            aequius Triarium aliquid de dissensione nostra iudicare. Dolor ergo,
            id est summum malum, metuetur semper, etiamsi non aderit;
            Praeteritis, inquit, gaudeo. Traditur, inquit, ab Epicuro ratio
            neglegendi doloris. Itaque nostrum est-quod nostrum dico, artis
            est-ad ea principia, quae accepimus. Duo Reges: constructio
            interrete.
          </p>
        )}

        {selectedChoice === secondchoice && (
          <p className="subheading">
            Transfer idem ad modestiam vel temperantiam, quae est moderatio
            cupiditatum rationi oboediens. Quod, inquit, quamquam voluptatibus
            quibusdam est saepe iucundius, tamen expetitur propter voluptatem.
            De illis, cum volemus. Sed nimis multa. Mihi enim satis est, ipsis
            non satis. Pauca mutat vel plura sane; Bork Tibi hoc incredibile,
            quod beatissimum. Comprehensum, quod cognitum non habet?
          </p>
        )}

        {selectedChoice === thirdchoice && (
          <p className="subheading">
            Primum Theophrasti, Strato, physicum se voluit; Sed quid ages
            tandem, si utilitas ab amicitia, ut fit saepe, defecerit? Tollitur
            beneficium, tollitur gratia, quae sunt vincla concordiae. Omnis enim
            est natura diligens sui. Maximas vero virtutes iacere omnis necesse
            est voluptate dominante. Invidiosum nomen est, infame, suspectum.
            Iam contemni non poteris. Sed ille, ut dixi, vitiose.
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutModel;
