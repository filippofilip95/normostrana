import './ContentCard.scss'

function ContentCard(props) {
  return (
    <section className="content-card">
      {!props.hasNotH1 ? (
        <h1 className='title'>{props.title}</h1>
      ) : (
        <h2 className='title'>{props.title}</h2>
      )}
      {!props.hasNotH1 ? (
        <h2>{props.subTitle}</h2>
      ) : (
        <h3>{props.subTitle}</h3>
      )}
      {props.children}
    </section>
  );
}

export default ContentCard;