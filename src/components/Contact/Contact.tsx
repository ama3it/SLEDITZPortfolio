import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactForm = {
  name: string;
  email: string;
  mobile: number;
  subject: string;
  comment: string;
}

const Contact = () => {
  const [status,setStatus]=useState<boolean|undefined>(undefined)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>()

  const sendEmail = async (data: ContactForm) => {
    const result=await emailjs.send("service_fc9953k", "template_uz9eg76", data, {
      publicKey: "XYG7O_snYBP2HKAPb",
    });

    if (result.status != 200){
      setStatus(false)
    }
    else{
      setStatus(true)
      reset() 
    }
  }

  return (
    <div id="contact" className="container relative md:mt-24 mt-16">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
        <div className="w-full h-full ">
          <div id="embedded-map-display" className="h-full w-full">
            <iframe
              className="rounded-xl h-full w-full border-solid border-2 "
              src="https://www.google.com/maps/embed/v1/place?q=Jasora+High+School+Road,+Jiakhali,+West+Bengal,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>

        <div className="lg:ms-5">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 p-6">
            <h3 className="mb-6 text-2xl leading-normal font-medium">
              Get in touch !
            </h3>

            {
              status===undefined?"":
              status===false? <h6 style={{color:'red'}}>Sorry something is wrong. Please contact via other social handels</h6>: <h6 style={{color:'green'}}>I got your message. Will contact you as soon as possible.</h6>
            }

            <form
              method="post"
              name="myForm"
              id="myForm"
              onSubmit={handleSubmit(sendEmail)}
            >
              <p className="mb-0" id="error-msg"></p>
              <div id="simple-msg"></div>
              <div className="grid lg:grid-cols-12 lg:gap-6">
                <div className="lg:col-span-6 mb-5">
                  <label htmlFor="name" className="form-label font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-blue-500/50 dark:focus:border-blue-500/50 focus:ring-0 mt-2"
                    placeholder="Name "
                    {...register("name", { required: true ,min: 2})}
                    />
                    {errors.name?.type==="required" && <p style={{color:'red'}}> Name is reqired</p>}
                    {errors.name?.type === "min" && <p style={{color:'red'}}> Name is too short</p>}
                </div>

                <div className="lg:col-span-6 mb-5">
                  <label htmlFor="email" className="form-label font-medium">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-blue-500/50 dark:focus:border-blue-500/50 focus:ring-0 mt-2"
                    placeholder="Email "
                    {...register("email", { required: "true" })}
                    />
                    {errors.email?.message && (
                      <p style={{ color: "red" }}>Email is require</p>
                    )}
                </div>
              </div>

              <div className="grid grid-cols-1">
                <div className="mb-5">
                  <label htmlFor="subject" className="form-label font-medium">
                    Mobile no.
                  </label>
                  <input
                    id="mobile"
                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-blue-500/50 dark:focus:border-blue-500/50 focus:ring-0 mt-2"
                    placeholder="Mobile no..."
                    {...register("mobile", { required: "true", min: 8 })}
                  />
                  {
                    errors.mobile?.type==='required' && (
                      <p style={{ color: "red" }}>Mobile no. is require</p>
                    )
                  }

                  {
                    errors.mobile?.type === "min" && (
                      <p style={{ color: "red" }}>Mobile no minimum lenght is 8</p>
                    )
                  }
                </div>

                <div className="mb-5">
                  <label htmlFor="subject" className="form-label font-medium">
                    Your Question
                  </label>
                  <input
                    id="subject"
                    className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-blue-500/50 dark:focus:border-blue-500/50 focus:ring-0 mt-2"
                    placeholder="Subject "
                    {...register("subject", { required: "true" })}
                  />
                  {
                    errors.subject?.type === "required" && (
                      <p style={{ color: "red" }}>Subject is require</p>
                    )
                  }
                </div>

                <div className="mb-5">
                  <label htmlFor="comments" className="form-label font-medium">
                    Your Comment
                  </label>
                  <textarea
                    id="comments"
                    className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-blue-500/50 dark:focus:border-blue-500/50 focus:ring-0 mt-2 textarea h-28"
                    placeholder="Message "
                    {...register("comment", { required: "true" })}
                  />
                  {
                    errors.comment?.type === "required" && (
                      <p style={{ color: "red" }}>Comment is require</p>
                    )
                  }
                </div>
              </div>
              <button
                type="submit"
                id="submit"
                name="send"
                className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white rounded-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
