import { useState } from 'react';

const languages = [
  {
    name: 'Hypertext Markup Language',
    text: `The HyperText Markup Language or HTML is the standard markup language
        for documents designed to be displayed in a web browser. It is often
        assisted by technologies such as Cascading Style Sheets (CSS) and
        scripting languages such as JavaScript.`,
  },
  {
    name: 'Cascading Style Sheets',
    text: `Cascading Style Sheets (CSS) is a style sheet language used for
        describing the presentation of a document written in a markup language
        such as HTML or XML (including XML dialects such as SVG, MathML or
        XHTML).[1] CSS is a cornerstone technology of the World Wide Web,
        alongside HTML and JavaScript.`,
  },
  {
    name: 'JaveScript',
    text: `JavaScript (JavaScript, often abbreviated as JS, is a programming
        language that is one of the core technologies of the World Wide Web,
        alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on
        the client side for webpage behavior, often incorporating third-party
        libraries. All major web browsers have a dedicated JavaScript engine
        to execute the code on users' devices.`,
  },
];
/**
 * function that returns an accordion menu
 * @returns a JSX element
 */
export default function Accordion(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <AccordionComponents
        count={languages.length}
        onSelect={(e) => setActiveIndex(e)}
        activeKey={activeIndex}
      />
    </>
  );

  type PropsDrop = {
    text: string;
    isActive: Boolean;
    onShow: () => void;
    header: string;
  };

  /**
   * Function to create layout if JSX element to be returned
   * @param text is the description of what the element is about
   * @param isActive passing useState from parent to child
   * @param onShow if number matches active useState, then this is what is shown to user
   * @param header is the
   * @returns
   */

  function DropDown({ text, isActive, onShow, header }: PropsDrop) {
    return (
      <div className="container">
        <h3 onClick={onShow} className={'containerHeader'}>
          {header}
        </h3>
        <div className="panel">
          {isActive && <p className={'containerText'}>{text}</p>}
        </div>
      </div>
    );
  }

  type PropsAccordion = {
    count: number;
    activeKey: number;
    onSelect: (arg0: number) => void;
  };

  /**
   * Gets value from array to create the elements
   * @param count is how many objects are in the array
   * @param activeKey is to check if the activeIndex is the same, if so show this
   * @param onSelect passes the index up to parent
   * @returns
   */

  function AccordionComponents({
    count,
    activeKey,
    onSelect,
  }: PropsAccordion): JSX.Element {
    const accordionKeys = [];
    for (let i = 0; i < count; i++) {
      accordionKeys.push(
        <DropDown
          key={i}
          text={languages[i].text}
          header={languages[i].name}
          isActive={activeKey === i}
          onShow={() => onSelect(i)}
        />
      );
    }
    return <div>{accordionKeys}</div>;
  }
}
