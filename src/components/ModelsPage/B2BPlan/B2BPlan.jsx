import Link from "next/link";
import "./B2BPlan.scss";
import { TbPhone } from "react-icons/tb";

const B2BPlan = () => {
  return (
    <div className="plan">
      <div className="plan_container">
        <h1 className="title">B2B or custom plan?</h1>
        <p className="paragraphs">
          Primum Theophrasti, Strato, physicum se voluit; Sed quid ages tandem,
          si utilitas ab amicitia, ut fit saepe, defecerit? Tollitur beneficium,
          tollitur gratia, quae sunt vincla concordiae. Omnis enim est natura
          diligens sui.
        </p>
        <div className="plan_container_buttons">
          <Link href={"/contact"} className="btn-bg" type="button">
            Contact Us
            <TbPhone size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default B2BPlan;
