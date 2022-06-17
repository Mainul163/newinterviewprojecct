import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const defaultValues = {
    firstName: "bill",
    lastName: "luo",
    email: "bluebill1049@hotmail.com",
  };
  let [num, setNum] = useState(0);
  let incNum = () => {
    setNum(Number(num) + 1);
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.firstName == "" || data.gender == "") {
      data.firstName = defaultValues.firstName;
      data.num = num;
      console.log(data);
    } else {
      console.log(data);
    }
  };
  return (
    <div className="">
      <p>mainul islam</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} name="name" />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <button class="btn btn-outline-primary" type="button" onClick={decNum}>
          -
        </button>

        <input
          type="text"
          class="form-control"
          value={num}
          onChange={handleChange}
        />

        <button class="btn btn-outline-primary" type="button" onClick={incNum}>
          +
        </button>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
