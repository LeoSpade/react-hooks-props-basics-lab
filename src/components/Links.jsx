import user from "../data/user.js"


function Links() {
    return (
        <div>
                <h3>Links</h3>
                <a href={user.links.github}>GitHub</a>
                <a href={user.links.linkedin}>LinkedIn</a>


        </div>

    )
}

export default Links