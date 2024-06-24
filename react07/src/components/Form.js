import React, { useRef } from "react";

function Form() {
  let telInputRef = useRef();
  let sanInputRef = useRef();
  let hinInputRef = useRef();
  let engInputRef = useRef();
  let matInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let totInputRef = useRef();

  return (
    <div>
      <form>
        <h2>Tenth Marks Memo</h2>
        <div>
          <label>Roll No:</label>
          <input placeholder="Enter Roll Number"></input>
        </div>
        <div>
          <label>First Name</label>
          <input placeholder="Character Only"></input>
        </div>
        <div>
          <label>Last Name</label>
          <input placeholder="Characters Only"></input>
        </div>
        <div>
          <label>Telugu</label>
          <input ref={telInputRef}></input>
        </div>
        <div>
          <label>Sanskrit</label>
          <input ref={sanInputRef}></input>
        </div>
        <div>
          <label>Hindi</label>
          <input ref={hinInputRef}></input>
        </div>
        <div>
          <label>English</label>
          <input ref={engInputRef}></input>
        </div>
        <div>
          <label>Maths</label>
          <input ref={matInputRef}></input>
        </div>
        <div>
          <label>Science</label>
          <input ref={sciInputRef}></input>
        </div>
        <div>
          <label>Social</label>
          <input ref={socInputRef}></input>
        </div>
        <button
          type="button"
          onClick={() => {
            let telMarks = Number(telInputRef.current.value);
            let sanMarks = Number(sanInputRef.current.value);
            let hinMarks = Number(hinInputRef.current.value);
            let engMarks = Number(engInputRef.current.value);
            let matMarks = Number(matInputRef.current.value);
            let sciMarks = Number(sciInputRef.current.value);
            let socMarks = Number(socInputRef.current.value);
            let totMarks = Number(
              Number(telInputRef.current.value) +
                Number(sanInputRef.current.value) +
                Number(hinInputRef.current.value) +
                Number(engInputRef.current.value) +
                Number(matInputRef.current.value) +
                Number(sciInputRef.current.value) +
                Number(socInputRef.current.value)
            );
            // telMarks +
            // sanMarks +
            // hinMarks +
            // engMarks +
            // matMarks +
            // sciMarks +
            // socMarks;
            let perc = (totMarks / 600) * 100;

            alert(totMarks);
            alert(perc);
            console.log("Hi to developer");
          }}
        >
          Calculate
        </button>
      </form>
    </div>
  );
}

export default Form;
