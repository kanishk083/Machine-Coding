import Accordion from "./Accordion";
import data from "../data.json";

export default function Faq() {
  return (
    <div>
      {data.faqs.map((obj, index) => {
        return <Accordion key={index} qna={obj} />;
      })}
    </div>
  );
}