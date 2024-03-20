import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState();

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Pasword</p>
      </header>
      <main>
        <form action="" onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            onChange={onChange}
          />
          <Link className="forgotPasswordLink" to={"/sign-in"}>
            Sign In
          </Link>

          <div className="signInBar">
            <p className="signInText">Send Reset Link</p>
            <button className="signInButton">&#10093;</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
