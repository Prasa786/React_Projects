import { useState } from "react";

function Form() {
  const [data ,setData]= useState({
    name:"",
    email:""
  })

  const [error , setError] = useState("");

  const handleChange = (event) => {
    return (
        setData({
        ...data,
        [event.target.name] : event.target.value
      })
      
    );
  }

  const handleSubmit= (event) => {

    event.preventDefault();
    const nameRegex =/^[A-Za-z]+$/;
    if(data.name ==="" || data.email===""){
        setError("Both the fields are required");
        return;
    }
    
    if(data.name.length <= 3 && !nameRegex.test(data.name) ){
        setError("Name must be more than three characters and use only characters not symbols");
        return;
    }
    if(data.name.length <= 3 ){
        setError("Name must be more than three characters");
        return;
    }

    if(!nameRegex.test(data.name)){
        setError("Invalid Name");
        return;
    }

    if(!data.email.includes("@")){
        setError("Invalid Email entered");
        return;
    }

    setError("");
    setData({name:"",email:""});
  }


  return (
    <>
    <div className="hero">
        <h1>Registration Form</h1>

        <form  className= "form-handle" onSubmit={handleSubmit}>
            <div className="form-container">
                {error && <p className="error">{error}</p>}
                <label>Name: </label>
                <input 
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    placeholder="Enter name"
                />

                <br />

                <label>Email: </label>
                <input 
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    placeholder="Enter email"
                />

                <button type="submit" className="btn">Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Form;