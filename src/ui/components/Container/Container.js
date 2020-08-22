import './Container.scss'
import classNames from 'classnames'

export function getClassNameBySize(size) {
    switch (size) {
        case 'sm':
            return 'container-sm'
        case 'md':
            return 'container-md'
        case 'lg':
            return 'container-lg'
    }

    return 'container-lg'
}

function Container(props) {
    return (
        <div
            className={classNames(
                'container',
                getClassNameBySize(props.size),
                props.className
            )}
        >
            {props.children}
        </div>
    )
}

export default Container
