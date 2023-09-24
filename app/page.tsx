'use client'

import { useState, useEffect } from "react";

export default function Home() {

  const styles = {
    background: "bg-blue-300 h-screen w-screen",
    title: "text-center text-3xl text-white py-8 mx-4 font-bold",

    container: "bg-white mx-6 p-6 rounded-lg ",
    questionContainer: "flex flex-col justify-center mb-6 shadow-md",
    questionText: "text-lg text-center mb-3 font-bold tracking-wider",
    input: "m-auto px-4 py-2 rounded-lg border-none bg-gray-200 text-center w-5/12 mb-4",
    answer: 'text-right text-teal-700 font-bold text-md my-4 mx-6',
    dropdownMenu: 'px-4 py-2 rounded-lg mb-4 w-9/12 m-auto',
    totalText: 'text-xl font-bold text-center',
    totalAnswer: 'text-center font-bold text-xl mt-2 mb-6',
  };

  const [childAge, setChildAge] = useState<number>(0);
  const [funding, setFunding] = useState<string>(" ");
  const [hours, setHours] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);

  // !! DONE - By wrapping your changes to setRate in a useEffect, you'll only update the rate if
  // !! DONE - your childAge updates, rather than all the time 
  useEffect(() => {
    if (childAge <= 2) {
      setRate(5.5);
    } else if (childAge <= 4) {
      setRate(5);
    } else {
      setRate(4.5);
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

          <div className={styles.questionContainer}>
            <h2 className={styles.questionText}> Select funding options</h2>
            <select onChange={handleFunding} className={styles.dropdownMenu}>
              <option value="2 year old, 15 hours funding">2yrs 15hrs</option>
              <option value="3 year old, 15 hours funding">3yrs 15hrs</option>
              <option value="3 year old, 30 hours funding">3yrs 30hrs</option>
              <option value="No funding">NONE</option>
            </select>
            <div className={styles.answer}>{funding}</div>
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

    </>
  )
}
