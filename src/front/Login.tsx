import Input from 'components/Input';

const Login = function () {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Input type="text" placeholder="login" value="" />
      <Input type="text" placeholder="password" value="" />
    </div>
  );
};

export default Login;
