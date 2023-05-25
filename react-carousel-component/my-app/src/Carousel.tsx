import {
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlinePayCircle,
} from 'react-icons/ai';
import { useEffect, useState } from 'react';

type Prop = {
  images: {
    imgLocation: string;
    id: number;
  }[];
};

export default function Carousel({ images }: Prop) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="container">
      <div className="main row">
        <ArrowButton
          right={false}
          onShow={() =>
            setActiveIndex((activeIndex - 1 + images.length) % images.length)
          }
        />
        <Pokemon images={images} isActive={activeIndex} />
        <ArrowButton
          right={true}
          onShow={() => setActiveIndex((activeIndex + 1) % images.length)}
        />
      </div>
      <Indicators
        images={images}
        onSelect={(e) => setActiveIndex(e)}
        isActive={activeIndex}
      />
    </div>
  );
}

function ArrowButton({
  right,
  onShow,
}: {
  right: Boolean;
  onShow: () => void;
}) {
  return (
    <>
      {right ? (
        <AiOutlineRight onClick={onShow} className="right column-10" />
      ) : (
        <AiOutlineLeft onClick={onShow} className="left column-10" />
      )}
    </>
  );
}

type indicatorProps = {
  images: {
    imgLocation: string;
    id: number;
  }[];
  onSelect: (id: number) => void;
  isActive: number;
};

function Indicators({ images, onSelect, isActive }: indicatorProps) {
  const buttons: JSX.Element[] = [];
  images.map((image) => {
    buttons.push(
      <AiOutlinePayCircle
        key={image.id}
        onClick={() => onSelect(image.id)}
        className={isActive === image.id ? 'indicator is-on' : 'indicator'}
      />
    );
  });

  return <div className="second row">{buttons}</div>;
}

type PokemonProps = {
  images: {
    imgLocation: string;
    id: number;
  }[];
  isActive: number;
};

function Pokemon({ images, isActive }: PokemonProps) {
  const imageDivs: JSX.Element[] = [];
  images.map((image) => {
    imageDivs.push(
      <img
        src={image.imgLocation}
        alt="pokemon"
        key={image.id}
        className={isActive === image.id ? 'poke' : 'poke hidden'}></img>
    );
  });

  return <div className="column-80 image-div">{imageDivs}</div>;
}
