import './HamburgerMenu.scss'
import classNames from 'classnames'

function HamburgerMenu(props) {
  return (
    <div>
      <button
        className={classNames('hamburger hamburger--squeeze', props.isOpen && 'is-active')}
        type="button"
        onClick={props.onChange}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"/>
        </span>
      </button>
    </div>
  );
}

export default HamburgerMenu;