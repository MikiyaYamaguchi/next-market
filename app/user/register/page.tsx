const Register = () => {
  return (
    <div>
      <h1>ユーザー登録</h1>
      <form>
        <input type="text" name="name" placeholder="名前" required />
        <input type="text" name="email" placeholder="メールアドレス" required />
        <input type="text" name="password" placeholder="パスワード" required />
        <button>登録</button>
      </form>
    </div>
  );
};

export default Register;
