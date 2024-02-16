import { Link } from "react-router-dom";

function ProfileMenu(){
    return(
        <>
        <nav class="nav nav-borders">
            <Link class="nav-link active ms-0" to="/profile" target="__blank">Profile</Link>
            <Link class="nav-link" to="/change-password" target="__blank">Change password</Link>
            <Link class="nav-link" to="/ordermanagement" target="__blank">Orders</Link>
        </nav>
        <hr class="mt-0 mb-4"/>
        </>
    )
}
export default ProfileMenu;