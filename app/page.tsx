'use client'

import { useState, useEffect } from "react";

export default function Home() {

  const styles = {
    background: "bg-blue-300 h-screen w-screen",
    title: "text-center text-3xl text-white py-8 mx-8",

    container: "bg-white mx-12 p-6 rounded-lg ",
    questionContainer: "flex flex-col justify-center mb-6 ",
    questionText: "text-lg text-center mb-3 ",
    input: "m-auto px-4 py-2 rounded-lg border-none bg-gray-200 text-center w-9/12",
    answer: 'text-right mr-8 my-4 text-lg font-bold',
    dropdownContainer: "flex flex-col justify-center items-center",
    dropdownMenu: 'px-4 py-2 rounded-lg mb-8',
    totalText: 'text-xl font-bold',
    totalAnswer: 'text-center font-bold text-xl mt-2',
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
            <h2 className={styles.questionText}>Enter the child's age</h2>
            <input
              id="childAge"
              type="number"
              name="childAge"
              value={childAge}
              onChange={handleAge}
              className={styles.input}
            />
            <div className={styles.answer}>{childAge}</div>
          </div>

          <div className={styles.dropdownContainer}>
            <h2 className={styles.questionText}> Select funding options</h2>
            <div className={styles.questionContainer}>
              <select onChange={handleFunding} className={styles.dropdownMenu}>
                <option value="fundingOne">2yrs 15hrs</option>
                <option value="fundingTwo">3yrs 15hrs</option>
                <option value="fundingThree">3yrs 30hrs</option>
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
              />
              <div className={styles.answer}>{hours}</div>
            </div>

            <div className={styles.questionContainer}>
              <h2 className={styles.totalText}> Total charge per week</h2>
              <div>
                <h3 className={styles.totalAnswer}>{`£`}</h3>
              </div>
            </div>

          </div>
        </div >
      </div >

    </>
  )
}
