import AuthLayout from 'layouts/auth';
import SignInContainer from 'containers/auth/sign_in';

export default function Signin() {
  return (
    <AuthLayout>
      <SignInContainer />
    </AuthLayout>
  );
}
