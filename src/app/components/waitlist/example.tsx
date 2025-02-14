import React, { useState } from "react";
import axios from "axios";
import { useModal } from "@/app/context/ModalContext";
import Modal from "@/app/components/ui/modal";
import WaitlistModal from "../../../../public/images/home/waitlist-modal";

const ExampleComponent = () => {
  const { openModal, isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    joining_as: "",
    last_name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://xxx.com/v1/waitlist",
        formData,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={openModal}
      >
        Open Modal
      </button>
      <Modal>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mb-2 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              className="mb-2 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="joining_as"
              value={formData.joining_as}
              onChange={handleChange}
              placeholder="Joining As"
              className="mb-2 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              className="mb-2 p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ExampleComponent;
