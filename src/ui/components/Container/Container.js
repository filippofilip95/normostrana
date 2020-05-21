import './Container.scss'
import classNames from 'classnames'

function Container(props) {
  return (
    <div className={classNames('container', props.className)}>
      {props.children}
    </div>
  );
}

export default Container;