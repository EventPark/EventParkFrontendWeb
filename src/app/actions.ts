"use server";

import axios from "axios";
interface WaitlistFormData {
  first_name: string;
  last_name: string;
  email: string;
}

export async function addToWaitlist(formData: WaitlistFormData) {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/v1/waitlist`,
      formData,
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error: any) {
    return {
      success: false,
      error: error.response?.data?.message,
    };
  }
}
