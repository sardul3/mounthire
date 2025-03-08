"use server"

import { Resend } from "resend"

// Check if the API key is available
const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in the environment variables")
}

// Initialize Resend only if the API key is available
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!resend) {
    console.error("Resend client is not initialized")
    return { success: false, error: "Email service is not configured" }
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "poudelsagar530@gmail.com",
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })
    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: "Failed to send email" }
  }
}

