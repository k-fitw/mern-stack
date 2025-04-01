import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        //Need to change it from an object to Array
        // setWorkouts(json.workouts);
        //changed the context, instead of local state we are using global context
        dispatch({ type: "SET_WORKOUTS", payload: json.workouts });
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <p key={workout._id}>
              <WorkoutDetails key={workout._id} workout={workout} />
            </p>
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
