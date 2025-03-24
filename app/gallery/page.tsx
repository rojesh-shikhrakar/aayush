import Timeline from '../components/Timeline';

const Gallery = () => {
  const images = [
    { src: 'Photos/Day0.jpg', alt: 'Right after Birth' },
    { src: 'Photos/EarlyExplorer.gif', alt: 'Started Exploring' },
    { src: 'Photos/BigFoot.jpg', alt: 'Small Body but big foot' },
    { src: 'Photos/HappyMother.jpg', alt: 'Like Momy Like Baby' },
    { src: 'Photos/Sunbathing.jpg', alt: 'Daily Sun Bathing & Massage' },
    { src: 'Photos/DarkComplexion.jpg', alt: "Little Big Eyes and No sleep"},
    { src: 'Photos/Hospitalization.jpg', alt: 'Hospitalization & Diagnosis of BA' },
    { src: 'Photos/FakeCries.jpg', alt: 'Cries to Make you Smile' },
    { src: 'Photos/Cuty.jpg', alt: 'Puffed Face to delight you' },
    { src: 'Photos/Rockstar.jpg', alt: "a Rockstar Baby" },

  ];

  return (
    <div className="min-h-screen flex  place-items-center bg-gray-100">
      <Timeline images={images} />
    </div>
  );
};

export default Gallery;
