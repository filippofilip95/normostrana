import './ContentCard.scss'

function ContentCard({as: Tag = 'section', title, subTitle, children}) {
    return (
        <Tag className="content-card">
            {!!title && <h1 className="title">{title}</h1>}
            {!!subTitle && <h2>{subTitle}</h2>}
            {children}
        </Tag>
    )
}

export default ContentCard
