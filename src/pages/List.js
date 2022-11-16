import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/AuthProvider";

function ListRoute() {
  // 4 etap Context-ni ishlatish
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  // 1. state yaratvolish, keladigan data uchun
  const [data, setData] = useState([]);
  // 2. useEffect ichida axios orqali get qilish
  useEffect(() => {
    axios
      .get("http://localhost:3000/games")
      .then(function (response) {
        // 3. muvaffaqqiyatli boganda kelgan malumotni state-ga biriktirish
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="m-10 space-y-8">
      <h1> List route {currentUser.name}</h1>
      <Link to="/games/create">Create</Link>
      <div className="grid grid-cols-3 gap-10">
        {/* 4. State ichidagi elementlarning har biri uchun map orqali component render qilish */}
        {data.map((game) => {
          return <Card title={game.title} body={game.description} />;
        })}
      </div>
    </div>
  );
}

export default ListRoute;
