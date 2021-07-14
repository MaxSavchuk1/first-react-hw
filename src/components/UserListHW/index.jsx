import React, { Component } from "react";
import UserListItem from "../UserListItemHW";

// Создать список пользователей (компоненты UsersListHW, UserListItemHW). (Взаимодействие parent -> child: props).
// У пользователей есть такая инфа: id, firstName, lastName, age, imgSrc.
// Застилить карточки пользователей (пример в приложении или по-своему).

// Реализовать (одно или оба):
// - * выбор пользователя (по клику на него). Выбранных пользователей стилить, например, бордером и фоном;
// - * удаление пользователя (по клику на кнопке возле пользователя).
//  (Взаимодействие child -> parent: callback).

const usersDb = [
  {
    id: 1,
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 19,
    imgSrc: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    id: 2,
    firstName: "Petr",
    lastName: "Petrov",
    age: 24,
    imgSrc: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    id: 3,
    firstName: "Alexey",
    lastName: "Alexeenko",
    age: 36,
    imgSrc: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 4,
    firstName: "Vera",
    lastName: "Ivanova",
    age: 21,
    imgSrc: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 5,
    firstName: "Dasha",
    lastName: "Petrova",
    age: 25,
    imgSrc: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersDb,
    };
  }

  usersMap = (u, i) => {
    const { users } = this.state;
    const deleteUser = () => {
      const newUsers = [...users];
      newUsers.splice(i, 1);
      this.setState({ users: newUsers });
    };
    return <UserListItem key={u.id} user={u} del={deleteUser} />;
  };

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.usersMap)}</ul>;
  }
}
export default UserList;
