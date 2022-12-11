import React from "react";
import GradientBtn from "./GradientBtn";
const ContactForm = () => {
  return (
    <div className="p-4 text-left">
      <form action="https://getform.io/f/42bf3abf-1b40-463a-85fe-00695fa29b82" method="POST">
        <div className="grid lg:grid-cols-2 gap-2 w-full py-2">
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2">name</label>
            <input
              type="text"
              name=""
              required
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2">phone</label>
            <input
              type="number"
              name="phone"
              required
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-sm py-2">email</label>
            <input
              type="email"
              name="email"
              required
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-sm py-2">message</label>
            <textarea
              name="message"
              rows="10"
              required
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <GradientBtn title="send message" className="mt-4 capitalize" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
