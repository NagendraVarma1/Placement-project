import { useRef, useState } from "react";
import classes from "./App.module.css";
import { Button, Form } from "react-bootstrap";

function App() {
  const [payForTution, setPayForTution] = useState(null);
  const [doGic, setDoGic] = useState(null);
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const educationInputRef = useRef();
  const instituteInputRef = useRef();
  const studyInputRef = useRef();
  const expInputRef = useRef();
  const canadaInstituteInputRef = useRef();
  const programInputRef = useRef();
  const countryInputRef = useRef();
  const goalsInputRef = useRef();
  const listeningInputRef = useRef();
  const readingInputRef = useRef();
  const speakingInputRef = useRef();
  const writingInputRef = useRef();
  const tutionFeeInputRef = useRef();
  const gicFeeInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    const education = educationInputRef.current.value;
    const institute = instituteInputRef.current.value;
    const study = studyInputRef.current.value;
    const experience = expInputRef.current.value;
    const canadaInstitute = canadaInstituteInputRef.current.value;
    const program = programInputRef.current.value;
    const country = countryInputRef.current.value;
    const goals = goalsInputRef.current.value;
    const listening = listeningInputRef.current.value;
    const reading = readingInputRef.current.value;
    const speaking = speakingInputRef.current.value;
    const writing = writingInputRef.current.value;
    const tution = payForTution;
    const tutionFee = tutionFeeInputRef.current.value;
    const gic = doGic;
    const gicFee = gicFeeInputRef.current.value;

    const updatedMail = email.replace('@', '').replace('.','');

    const allDetails = {
      email,
      name,
      age,
      education,
      institute,
      study,
      experience,
      canadaInstitute,
      program,
      country,
      goals,
      listening,
      reading,
      speaking,
      writing,
      tution,
      tutionFee,
      gic,
      gicFee,
    };
    console.log(allDetails)

    fetch(`https://placement-project-e853c-default-rtdb.firebaseio.com/${updatedMail}.json`, {
      method: 'POST',
      body: JSON.stringify(allDetails),
      headers: {
        "Content-Type": 'application.json'
      }
    }).then((res) => {
      if(res.ok) {
        return res.json()
      }
      else {
        return res.json().then((err) => {
          throw new Error('Failed to Store data');
        })
      }
    }).then((data) => {
      console.log(data)
    }).catch((err) => alert(err.message))

    formClearHandler()
  };
  const formClearHandler = () => {
    nameInputRef.current.value = null;
    emailInputRef.current.value = null;
    ageInputRef.current.value = null;
    educationInputRef.current.value = null;
    instituteInputRef.current.value = null;
    studyInputRef.current.value = null;
    expInputRef.current.value = null;
    canadaInstituteInputRef.current.value = null;
    programInputRef.current.value = null;
    countryInputRef.current.value = null;
    goalsInputRef.current.value = null;
    listeningInputRef.current.value = null;
    readingInputRef.current.value = null;
    speakingInputRef.current.value = null;
    writingInputRef.current.value = null;
    setPayForTution(null);
    tutionFeeInputRef.current.value = null;
    setDoGic(null);
    gicFeeInputRef.current.value = null;
  };
  return (
    <div style={{ backgroundColor: "#DAF1FE", width: "100%", height: "100%", paddingTop: '20px' }}>
      <div className={classes.header}><h1>EFFIZIENT</h1></div>
      <div className={classes.container}>
        <div style={{ padding: "20px" }}>
          <h1>Customized SOP Generator</h1>
          <p>
            Fill this questionnaire for the student. After submitting, you will
            receive an email at the email address that you have provided with a
            Statement of Purpose customized for you. You can use and modify that
            as per your needs.{" "}
          </p>
          <br />
          <p>
            If you would like to get it edited, reviewed, or drafted by our
            experts, you can get in touch with us:{" "}
            <a
              href="https://effizient-immigration-inc.square.site/s/shop"
              target="_blank"
              rel="noreferrer"
            >
              https://effizient-immigration-inc.square.site/s/shop
            </a>
          </p>
        </div>
        <div style={{ borderTop: "1px solid gray", padding: "10px" }}>
          <p style={{ color: "red" }}>* indicates required question</p>
        </div>
      </div>

      <Form onSubmit={formSubmitHandler}>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            Email<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="email"
            placeholder="your answer"
            ref={emailInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            Full Name<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={nameInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            Age<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={ageInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            Highest Level of Education<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select ref={educationInputRef} className="w-50 m-2">
            <option value={"Choose"} disabled>
              Choose
            </option>
            <option value={"Grade 12"}>Grade 12</option>
            <option value={"Diploma"}>Diploma</option>
            <option value={"Bachelors Degree"}>Bachelors Degree</option>
            <option value={"Masters Degree"}>Masters Degree</option>
            <option value={"phD"}>phD</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            Institute where you completed your highest level of education
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={instituteInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            What did you study<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={studyInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            Do you have any relevant work experience?
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <p>
            Write None if no work experience. Provide the following details if
            yes:
          </p>
          <ol>
            <li>Job Title</li>
            <li>Company Name</li>
            <li>Job duties</li>
          </ol>
          <p>
            Sample Answer: I worked as a Sales Manager at Effizient Immigration
            Inc from Jan 2022 till Feb 2023. In this role, I managed sales
            operations, reaching out to leads, lead the outreach program,
            ensured meeting monthly targets.
          </p>
          <Form.Control
            className="m-2"
            type="text"
            placeholder="your answer"
            ref={expInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            What institute did you get admitted to in Canada?
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={canadaInstituteInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            What is your program of study in Canada?
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={programInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            Which country are you applying from?
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={countryInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            What are your future goals?
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
          className="m-2"
            type="text"
            placeholder="your answer"
            ref={goalsInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            English Scores - Listening
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={listeningInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            English Scores - Reading
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={readingInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            English Scores - Speaking
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={speakingInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            English Scores - Writing
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={writingInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            Did your pay your first year tution?
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Check
            type="radio"
            value={"Yes"}
            label="Yes"
            name="tutionFee"
            onChange={(e) => setPayForTution(e.target.value)}
          />
          <Form.Check
            type="radio"
            value={"No"}
            label="No"
            name="tutionFee"
            onChange={(e) => setPayForTution(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            How much tution fee did you pay?
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            ref={tutionFeeInputRef}
            required
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label>
            Did you do a GIC?
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Check
            type="radio"
            value={"Yes"}
            label="Yes"
            name="GIC"
            onChange={(e) => setDoGic(e.target.value)}
          />
          <Form.Check
            type="radio"
            value={"No"}
            label="No"
            name="GIC"
            onChange={(e) => setDoGic(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={classes.form}>
          <Form.Label className="m-2">
            How much did you pay towards GIC?
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            className="w-50 m-2"
            type="text"
            placeholder="your answer"
            required
            ref={gicFeeInputRef}
          />
        </Form.Group>
        <div className={classes.btn}>
          <Button type="submit">Submit</Button>
          <Button variant="outline-primary" onClick={formClearHandler}>
            Clear form
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
