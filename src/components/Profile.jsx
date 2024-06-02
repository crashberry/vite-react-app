import styles from "./Profile.module.css";

export const Profile = (props) => {
  const familyStyle = {
    color: "blue",
    fontSize: "1.2rem",
  };

  let userId = window.location.pathname.split("/")[2];
  let user = props.function(userId);

  return (
    <div className="row">
      <div className="col-md-4">
        <img src={user.avatar} alt="Аватар" width="100%" />
      </div>
      <div className="col-md-8">
        <p className={styles.id}>
          <span>Id: </span>
          <span>{user.id}</span>
        </p>
        <p className={styles.email}>
          <span>E-mail: </span>
          <span>{user.email}</span>
        </p>
        <p>
          <span style={familyStyle}>Фамилия и имя: </span>
          <span>
            {user.lastname} {user.name}
          </span>
        </p>
        <p style={{ color: "red", fontSize: "1.5rem" }}>Рассказ о себе</p>
      </div>
    </div>
  );
};
