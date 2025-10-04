import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-signup-screen">
      <h1>Profile</h1>
      <FormControl
        id="wd-username"
        defaultValue="alice"
        placeholder="username"
        className="mb-2"
      />
      <FormControl
        id="wd-password"
        defaultValue="123"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <FormControl
        id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-2"
      />
      <FormControl
        id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-2"
      />
      <FormControl
        id="wd-dob"
        defaultValue="2000-01-01"
        type="date"
        className="mb-2"
      />
      <FormControl
        id="wd-email"
        defaultValue="alice@wonderland"
        type="email"
        className="mb-2"
      />
      <div id="wd-role">
      <FormSelect>
        <option value="User" defaultChecked>
          User
        </option>
        <option value="admin">Admin</option>
        <option value="faculty">Faculty</option>
        <option value="student">Student</option>
      </FormSelect>
    </div>
      <br />
      <Link
        id="wd-signout-btn"
        href="/Account/Signin"
        className="btn btn-danger w-100 mb-2"
      >
        Signout{" "}
      </Link>
    </div>
  );
}
/*import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
      <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/>
      <Link href="Signin" > Sign out </Link>
    </div>
);}*/
