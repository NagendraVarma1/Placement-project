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
  const tutionFeeInputRef = useRef(0);
  const gicFeeInputRef = useRef(0);

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
    const tutionFee = tutionFeeInputRef.current.value;
    const gicFee = gicFeeInputRef.current.value;

    const config = {
      SecureToken: "a9f4f8e0-6c5a-4dbf-aaf5-38b3c19c16eb",
      To: `${email}`,
      From: "nagendravarmal512@gmail.com",
      Subject: `Statement of Purpose for ${name}`,
      Body: `I would like to take this opportunity to introduce myself as ${name} and age ${age} from ${country}, a passionate individual with a strong desire to persue a career in the field of Testing. I have recently completed my ${education} in ${institute}, where I gained a solid foundation in the principles and practices of software testing. After careful considerationof my alternatives for the further studies, I have chosen to pursue the ${program} program at ${canadaInstitute}. This program stood out to me for several reasons. Firstly, the curriculum is highly interdisciplinary, which will provide me with a comprehensive and practical understanding of all major concepts in software testing. In terms of my academic background, my ${education} in ${institute} has equipped me with a strong foundation in ${study}. This background align perfectly with the ${program} program. Additionally, I have achieved an overall IELTS score of ${listening} in listening, ${reading} in reading, ${writing} in writing, and ${speaking} in speaking, demonstrating my proficiency in the English language.And my experince is ${experience}. Upon Completion of the ${program}, my goal is ${goals}. In terms of finances, I have paid the first year's tution fee of ${tutionFee} CAD and have a Guaranteed Investment Certificate (GIC) of ${gicFee} CAD to cover my living expenses. Additionally, my family is providing financial support for my education in Canada.  I kindely request you to process my Visa application as soon as possible. I am greatful for your time and cosideration. Thank you `,

      // Email: ${email},
      // Name: ${name},
      // Age: ${age},
      // Education: ${education},
      // Institute: ${institute},
      // Study: ${study},
      // Experience: ${experience},
      // Institute Name in Canada: ${canadaInstitute},
      // Program Name: ${program},
      // Your Country: ${country},
      // Future goals: ${goals},
      // English Listening - score: ${listening},
      // English Reading - score: ${reading},
      // English Speaking - score: ${speaking},
      // English Writing - score: ${writing},
      // Did you pay your first year tution: ${tution},
      // Paid tution fee: ${tutionFee},
      // Did you do a GIC: ${gic},
      // Paid GIC fee: ${gicFee},
    };
    console.log(config);
    if (window.Email) {
      window.Email.send(config).then(() =>
        alert(
          "Form Submitted Sucsessfully and please check your mail or spam box for the response"
        )
      );
    }

    formClearHandler();
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
    <div
      style={{
        backgroundColor: "#DAF1FE",
        width: "100%",
        height: "100%",
        paddingTop: "20px",
        paddingBotton: "20px",
      }}
    >
      <div className={classes.header}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          class="bi bi-airplane"
          viewBox="0 0 16 16"
        >
          <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" />
        </svg>
        <h1>EFFIZIENT</h1>
      </div>
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
          {payForTution === "Yes" ? (
            <Form.Control
              className="w-50 m-2"
              type="text"
              placeholder="your answer"
              ref={tutionFeeInputRef}
              required
            />
          ) : (
            <Form.Control
              disabled
              className="w-50 m-2"
              type="text"
              placeholder="your answer"
              ref={tutionFeeInputRef}
              value={"0"}
            />
          )}
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
          {doGic === "Yes" ? (
            <Form.Control
              className="w-50 m-2"
              type="text"
              placeholder="your answer"
              required
              ref={gicFeeInputRef}
            />
          ) : (
            <Form.Control
              disabled
              className="w-50 m-2"
              type="text"
              placeholder="your answer"
              value={0}
              ref={gicFeeInputRef}
            />
          )}
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
