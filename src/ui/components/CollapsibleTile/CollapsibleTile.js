import './CollapsibleTile.scss';

function CollapsibleTile(props) {
  return (
    <details open className='collapsible-tile'>
      <summary>
        <strong>
          {props.title}
        </strong>
      </summary>
      <div className='collapsible-tile-content'>
        {props.children}
      </div>
    </details>
  );
}

export default CollapsibleTile;