import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export default function Menu({ content }: { content: string[] }): JSX.Element {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isActiveIndex, setActiveIndex] = useState(content.length + 1);

  return (
    <div>
      <div className="header">
        <GiHamburgerMenu
          className="hamburger-menu-icon"
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
        <HeaderComp activeIndex={isActiveIndex} content={content} />
      </div>
      <MenuShade onClose={() => setMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
      <MenuContent
        isOpen={isMenuOpen}
        content={content}
        onClose={() => setMenuOpen(!isMenuOpen)}
        activeIndex={(i: number) => setActiveIndex(i)}
      />
    </div>
  );
}

type MenuContentTypes = {
  content: string[];
  isOpen: boolean;
  onClose: () => void;
  activeIndex: (i: number) => void;
};

function MenuContent({
  content,
  isOpen,
  onClose,
  activeIndex,
}: MenuContentTypes) {
  const con = [];
  for (let i = 0; i < content.length; i++) {
    con.push(
      <p
        onClick={() => {
          onClose();
          activeIndex(i);
        }}
        className={`menu-item num${i}`}
        key={i}>
        {content[i]}
      </p>
    );
  }

  return (
    <div className={isOpen ? 'menu-drawer' : 'menu-drawer is-open'}>{con}</div>
  );
}

function MenuShade({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}): JSX.Element {
  return (
    <div
      className={isOpen ? 'menu-shade' : 'menu-shade is-drawn'}
      onClick={onClose}></div>
  );
}

function HeaderComp({
  activeIndex,
  content,
}: {
  activeIndex: number | undefined;
  content: string[];
}): JSX.Element {
  return activeIndex ? <h1>{content[activeIndex]}</h1> : <h1>HOME</h1>;
}
