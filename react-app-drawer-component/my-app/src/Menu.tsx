import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export default function Menu({ content }: { content: string[] }): JSX.Element {
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <div>
      <GiHamburgerMenu
        className="hamburger-menu-icon"
        onClick={() => setMenuOpen(!isMenuOpen)}
      />
      <MenuShade isClose={() => setMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
      <MenuContent
        isOpen={isMenuOpen}
        content={content}
        isClose={() => setMenuOpen(!isMenuOpen)}
      />
    </div>
  );
}

type MenuContentTypes = {
  content: string[];
  isOpen: boolean;
  isClose: () => void;
};

function MenuContent({ content, isOpen, isClose }: MenuContentTypes) {
  const con = [];
  for (let i = 0; i < content.length; i++) {
    con.push(
      <p onClick={() => isClose()} className={`menu-item num${i}`} key={i}>
        {content[i]}
      </p>
    );
  }

  return (
    <div className={isOpen ? 'menu-drawer' : 'menu-drawer is-open'}>{con}</div>
  );
}

function MenuShade({
  isClose,
  isOpen,
}: {
  isClose: () => void;
  isOpen: boolean;
}): JSX.Element {
  return (
    <div
      className={isOpen ? 'menu-shade' : 'menu-shade is-drawn'}
      onClick={() => isClose()}></div>
  );
}
