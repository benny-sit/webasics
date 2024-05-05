"use client";
import React, { useCallback, useState, useTransition } from "react";
import "./askai.css";
import { sendQuestion } from "./actions";

const placeHolders = {
  teacher: "מה תפקידו של המורה?",
  engineer: "מה תפקידו של המהנדס?",
  webasics: "איפה הסדנה מתקיימת?",
};

export default function AskAi() {
  const [isPending, startTransition] = useTransition();
  const [responseAnswer, setResponseAnswer] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedRole, setSelectedRole] = useState("webasics");
  const [isError, setIsError] = useState(false);

  const submitForm = (e) => {
    setIsError(false);
    startTransition(async () => {
      const { answer, score, error } = await sendQuestion(e);

      if (error) {
        setIsError(true);
        return;
      }

      setCurrentScore(score);
      setResponseAnswer(answer);
      console.log(answer);
    });
  };

  function roleChange(e) {
    setSelectedRole(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div
      dir="rtl"
      className=" flex flex-col items-center w-full px-4 py-64 max-w-2xl"
    >
      <h2 className="text-5xl">רוצה לדעת איך מכינים כזה?</h2>
      <p className="text-w-gray self-start mt-6">רוצה לדעת יותר על:</p>
      <form action={submitForm} className="w-full flex flex-col items-center">
        <div className="w-full flex items-center rounded-md border-4 border-w-blue/20 px-3 py-2 gap-3 mt-2">
          <input
            type="radio"
            name="role"
            value={"webasics"}
            id="char-webasics"
            className="appearance-none peer/w hidden"
            defaultChecked="checked"
            onChange={roleChange}
          />
          <label
            htmlFor="char-webasics"
            className="w-full basis-1/3 mx-auto rounded py-2 text-2xl  peer-checked/w:bg-w-cream-light/40 text-center"
            tabIndex={0}
          >
            webasics
          </label>
          <input
            type="radio"
            name="role"
            value={"engineer"}
            id="char-engineer"
            className="appearance-none peer/e hidden"
            onChange={roleChange}
            required
          />
          <label
            htmlFor="char-engineer"
            className="w-full basis-1/3 mx-auto rounded py-2 text-2xl  peer-checked/e:bg-w-cream-light/40 text-center"
            tabIndex={0}
          >
            מהנדס
          </label>
          <input
            type="radio"
            name="role"
            value={"teacher"}
            id="char-teacher"
            className="appearance-none peer/t hidden"
            onChange={roleChange}
          />
          <label
            htmlFor="char-teacher"
            className="w-full basis-1/3 mx-auto rounded py-2 text-2xl  peer-checked/t:bg-w-cream-light/40 text-center"
            tabIndex={0}
          >
            מורה
          </label>
        </div>
        <input
          type="text"
          className=" w-full  rounded-md border-[6px] border-w-cream bg-white text-3xl py-3 px-2 mt-4 focus:outline-offset-4 focus:outline-w-cream-light"
          placeholder={placeHolders[selectedRole]}
          name="question"
        />
        <button
          type="submit"
          className="relative disabled:bg-slate-100  mt-16 rounded-[11px] max-w-[290px] w-full bg-w-cream-light py-4 text-xl mx-auto active:bg-w-cream glow-border"
          disabled={isPending}
        >
          אשמח לדעת
        </button>
      </form>

      {isPending && <div className="lds-dual-ring mt-5 mb-2"></div>}
      {(isPending || responseAnswer) && (
        <>
          <div className="mt-12 pb-3 w-full text-xl leading-normal border-b border-b-w-cream">
            {responseAnswer}
            {currentScore < 0.5 && !isPending && (
              <div className="mt-3 text-center text-sm text-gray-500">
                התשובה אינה מדויקת
              </div>
            )}
          </div>
        </>
      )}
      {isError && (
        <p className="w-full text-center text-red-500">
          קרתה תקלה, אנא נסה שנית
        </p>
      )}
    </div>
  );
}
