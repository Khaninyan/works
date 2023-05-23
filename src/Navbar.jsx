export default function Navbar(){
    return <nav className="nav">
            <ul>
           <CustomLink href="/about">About</CustomLink>
           <CustomLink href="/blog">Blog</CustomLink>
           <CustomLink href="/projects">Projects</CustomLink>
           <CustomLink href="/illustration">Illustration</CustomLink>
             <a href="https://github.com/Khaninyan">GitHub</a>
            </ul>
    </nav>
}

function CustomLink({href, children,...props}){
    const path = window.location.pathname
    return(
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}