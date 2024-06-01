export const Profile = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg"
          alt="Аватар"
        />
      </div>
      <p>
        <span>Id:</span>
        <span>2</span>
      </p>
      <p>
        <span>E-mail:</span>
        <span>vania@mail.ru</span>
      </p>
      <p>
        <span>Фамилия и имя:</span>
        <span>Иван Иванов</span>
      </p>
      <p>Рассказ о себе</p>
      <div className="col-md-8"></div>
    </div>
  );
};
