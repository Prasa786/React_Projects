import React from 'react'

const Contact = () => {
  return (
    <section className="px-4 py-4 bg-white" id="contact">

      <h2 className="text-2xl sm:text-4xl font-bold text-center">
        Contact Us
      </h2>

      <p className="text-sm sm:text-2xl text-center m-3">
        Please fill your details and we’ll get back to you.
      </p>

      <form className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">

        <fieldset className="flex flex-col gap-2">

          <legend className="text-xl sm:text-2xl text-center font-semibold">
            Registration Form
          </legend>


          <div>
            <label htmlFor="name" className="block mb-3">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full  px-3 py-1 border rounded-md focus:ring-2  focus:outline-none focus:ring-blue-200"
              required
            />
          </div>


          <div>
            <label htmlFor="email" className="block mb-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full  px-3 py-1 border rounded-md focus:ring-2  focus:outline-none focus:ring-blue-200"
              required
            />
          </div>


          <div>
            <label htmlFor="message" className="block mb-3">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full  px-3 py-4 border rounded-md focus:ring-2  focus:outline-none focus:ring-blue-200"
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="block mx-auto">
            <button
              type="submit"
              className="mx-5 text-xl px-4 py-2 bg-blue-800 text-white rounded-xl shadow-md  transition hover:scale-105 hover:bg-blue-400 active:bg-blue-300 "
            >
              Submit
            </button>

            <button
              type="reset"
              className=" px-4 py-2 text-xl bg-blue-800 text-white rounded-xl shadow-md  transition hover:scale-105 hover:bg-blue-400 active:bg-blue-300 "
            >
              Reset
            </button>
          </div>

        </fieldset>

      </form>
    </section>
  )
}

export default Contact