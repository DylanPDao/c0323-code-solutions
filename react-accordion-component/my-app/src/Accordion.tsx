import { useState } from 'react';

/**
 * An accordion that displays a list of items when it is clicked, only one can be shown at a time
 * @returns a JSX element
 */

type PropsAccordion = {
  items: { name: string; text: string }[];
};

export default function Accordion({ items }: PropsAccordion): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <AccordionComponents
        count={items}
        onSelect={(e) => setActiveIndex(e)}
        activeKey={activeIndex}
      />
    </>
  );
}
type PropsDrop = {
  text: string;
  isActive: Boolean;
  onShow: () => void;
  header: string;
};

/**
 * Renders an item card
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

type PropsAccordionComp = {
  count: { name: string; text: string }[];
  activeKey: number;
  onSelect: (arg0: number) => void;
};

/**
 * Decides if item description is shown or not
 * @param count is how many objects are in the array
 * @param activeKey is to check if the activeIndex is the same, if so show this
 * @param onSelect passes the index up to parent
 * @returns
 */

function AccordionComponents({
  count,
  activeKey,
  onSelect,
}: PropsAccordionComp): JSX.Element {
  const accordionKeys = [];
  for (let i = 0; i < count.length; i++) {
    accordionKeys.push(
      <DropDown
        key={i}
        text={count[i].text}
        header={count[i].name}
        isActive={activeKey === i}
        onShow={() => onSelect(i)}
      />
    );
  }
  return <div>{accordionKeys}</div>;
}
