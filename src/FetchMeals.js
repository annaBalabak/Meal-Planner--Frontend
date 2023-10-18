import axios from "axios";

const getAllMeals = (setMeal) => {
  axios.get("https://meal-planner-jsht.onrender.com").then(({ data }) => {
    setMeal(data);
  });
};
const addMeal = (title, setTitle, setMeal) => {
  axios
    .post(`https://meal-planner-jsht.onrender.com/saveMeals`, { title })
    .then((data) => {
      setTitle("");
      getAllMeals(setMeal);
    });
};

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
     axios
       .post(`https://meal-planner-jsht.onrender.com/editMeal`, {
         _id: mealId,
         title,
       })
       .then((data) => {
         setTitle("");
         setEditing(false);
         getAllMeals(setMeal);
       });
}

const deleteMeal = (_id, setMeal) => {
  axios
    .post(`https://meal-planner-jsht.onrender.com/deleteMeal`, { _id })
    .then((data) => {
      getAllMeals(setMeal);
    });
};

export { getAllMeals, addMeal, editMeal, deleteMeal };
