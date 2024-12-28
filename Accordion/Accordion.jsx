import { useState } from "react";

export default function Accordion({ qna }) {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">
      <h3>
        {qna.question}{" "}
        <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
        {show ? <p>{qna.answer}</p> : ""}
      </h3>
    </div>
  );
}