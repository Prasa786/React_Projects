function contact(){
    return (
    <>
    <section class="contact" id="contact">
      <h2>Contact Us</h2>
      <p>Please fill your details.</p>
      <form method="post">
        <fieldset class="registration">
          <legend>Registration Form</legend>
          <label for="name">Name: </label>
          <input type="text" id="name" name="name" required />
           <small class="error" id="nameError"></small>
          <label for="email">Email: </label>
          <input type="email" id="email" name="email" required />
           <small class="error" id="emailError"></small>
          <label for="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            required
          ></textarea>
           <small class="error" id="messageError"></small>
           <div class="btn-group">
             <input type="submit" value="Submit" />
             <input type="reset" value="Reset" />
            </div>
          <p id="successMsg"></p>
        </fieldset>
      </form>
    </section>
    </>
    )
}
export default contact;