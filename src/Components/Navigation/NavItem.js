export default function NavItem(props) {
    return (
        <a href={props.href} className="btn btn-ghost btn-sm rounded-btn">
            {props.children}
        </a>
    )
}