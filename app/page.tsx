import { useState, useEffect } from "react";

export default function Home() {

  const styles = {
    background: "bg-blue-300 h-screen w-screen",
    title: "text-center text-5xl text-white pt-20 pb-12",
    container: "bg-white mx-80 p-12 rounded-lg ",
    questionContainer: "flex flex-col justify-center mb-12 ",
    questionText: "text-2xl text-center mb-2",
    input: "px-4 py-2 rounded-lg border-none bg-gray-200 mx-80",
    radioContainer: "mb-12 flex flex-col justify-center items-center",
    radio: "mx-6 my-2",
  };

  // Before you have any change of adding branching in your code, initialise your effects
  const [childAge, setChildAge] = useState<number>(0);
  const [funding, setFunding] = useState<string>(" ");
  const [hours, setHours] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);

  // By wrapping your changes to setRate in a useEffect, you'll only update the rate if
  // your childAge updates, rather than all the time
  useEffect(() => {
    if (childAge <= 2) {
      setRate(5.5);
    } else if (childAge <= 4) {
      setRate(5);
    } else {
      setRate(1);
    }
  }, [childAge]);

  // You could figure out exactly which cantation you need to get the
  // event typing correct in Typescript, or you can cut to the chase
  // and only type out the areas your code cares about. Object destructuring
  // is your friend here.

  // Another option would be to create this handleAge function in line where
  // you use it on line 64, and then Typescript would be able to infer it's
  // type.
  const handleAge = (e: { target: { value: string } }) => {
    setChildAge(Number(e.target.value));
  };

  const handleFunding = (e: { target: { value: string } }) => {
    setFunding(e.target.value);
  };

  const handleHours = (e: { target: { value: string } }) => {
    setHours(Number(e.target.value));
  };

  return (
    <>
      <div id="calculator" className={styles.background}>
        <h1 className={styles.title}>Childcare Calculator</h1>

        <div className={styles.container}>
          <div className={styles.questionContainer}>
            <h2 className={styles.questionText}> Enter the child's age</h2>
            <input
              id="childAge"
              type="number"
              name="childAge"
              value={childAge}
              onChange={handleAge}
              className={styles.input}
            />{" "}
            {childAge}
          </div>

          <div className={styles.radioContainer}>
            <h2 className={styles.questionText}> Select funding options</h2>

            <div className="mb-4">
              <select onChange={handleFunding}>
                <option value="fundingOne">Funding One</option>
                <option value="fundingTwo">Funding Two</option>
                <option value="fundingThree">Funding Three</option>
              </select>
              {funding}
            </div>

            <div className={styles.questionContainer}>
              <h2 className={styles.questionText}> Enter hours per week</h2>
              <input
                id="hours"
                type="number"
                name="hours"
                value={hours}
                onChange={handleHours}
                className={styles.input}
              />{" "}
              {hours}
            </div>

            <div className={styles.questionContainer}>
              <h2 className={styles.questionText}> Total charge per week</h2>
              <div>
                <h3>£</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
