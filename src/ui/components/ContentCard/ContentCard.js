import './ContentCard.scss'

function ContentCard(props) {
  return (
    <section className="content-card">
      {!!props.title && <h1>{props.title}</h1>}
      {!!props.subTitle && <h2>{props.subTitle}</h2>}
      {props.children}
    </section>
  );
}

export default ContentCard;