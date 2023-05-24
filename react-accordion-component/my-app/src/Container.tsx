import { useState } from 'react';

export default function Accordian(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <DropDown
        header="Hypertext Markup Language"
        text="The HyperText Markup Language or HTML is the standard markup language
        for documents designed to be displayed in a web browser. It is often
        assisted by technologies such as Cascading Style Sheets (CSS) and
        scripting languages such as JavaScript."
        onShow={() => setActiveIndex(0)}
        isActive={activeIndex === 0}></DropDown>
      <DropDown
        header="Cascading Style Sheets"
        text="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
        onShow={() => setActiveIndex(1)}
        isActive={activeIndex === 1}></DropDown>
      <DropDown
        header="JaveScript"
        text="JavaScript (JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices."
        onShow={() => setActiveIndex(2)}
        isActive={activeIndex === 2}></DropDown>
    </>
  );

  type Props = {
    text: string;
    isActive: Boolean;
    onShow: () => void;
    header: string;
  };

  function DropDown({ text, isActive, onShow, header }: Props) {
    return (
      <div className={'container'}>
        <h3 onClick={onShow} className={'containerHeader'}>
          {header}
        </h3>
        <div className="panel">
          {isActive ? <p className={'containerText'}>{text}</p> : ''}
        </div>
      </div>
    );
  }
}
