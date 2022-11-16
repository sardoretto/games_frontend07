import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function UpdateRoute() {
  const [titleInp, setTitleInp] = useState("");
  const [descInp, setDescInp] = useState("");
  let navigate = useNavigate();
  let { gameId } = useParams();

  const onTitleChange = (e) => {
    setTitleInp(e.target.value);
  };

  const onDescChange = (e) => {
    setDescInp(e.target.value);
  };

  const onPost = (e) => {
    e.preventDefault();
    console.log(gameId);
    // axios
    //   .post("http://localhost:3000/games", {
    //     title: titleInp.trim(),
    //     description: descInp.trim(),
    //   })
    //   .then(() => {
    //     return navigate("/"); //3etap
    //   })
    //   .catch(() => {
    //     toast("Keyinroqa qayta urinib ko'ring!");
    //   });
  };

  return (
    <form
      onSubmit={onPost}
      className="max-w-2xl mx-auto m-10 p-10 border shadow-lg"
    >
      <label>
        Title
        {/* Controlled component */}
        <input
          onChange={onTitleChange}
          value={titleInp}
          type={"text"}
          className="border-2 rounded w-full bg-green-100"
        />
      </label>
      <label>
        Description
        <input
          onChange={onDescChange}
          value={descInp}
          type={"text"}
          className="border-2 rounded w-full bg-green-100"
        />
      </label>
      <input
        type="submit"
        value="Submit"
        className="px-4 py-2 bg-green-400 my-8"
      />
      <ToastContainer />
    </form>
  );
}

export default UpdateRoute;
