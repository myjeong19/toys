export const Concept = ({ title, image, description, key }) => {
  return (
    <li key={key} className='concept'>
      <img src={image} alt={description} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};
