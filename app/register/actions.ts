"use server";

import { prisma } from "@/lib/prisma";

interface RegisterFormInput {
  fullname: string;
  dob: string;
  sex: string;
  tel: string;
  email: string;
  address: string;
  state: string;
  course: string;
  courseType: string;
  branch: string;
}

export type RegisterResult =
  | { status: "success"; name: string; reference: string }
  | { status: "error"; errors: Partial<Record<keyof RegisterFormInput, string>> };

function validate(data: RegisterFormInput) {
  const errors: Partial<Record<keyof RegisterFormInput, string>> = {};
  if (!data.fullname.trim()) errors.fullname = "Please enter your full name.";
  if (!data.dob) errors.dob = "Please enter your date of birth.";
  if (data.sex !== "Male" && data.sex !== "Female") errors.sex = "Please select.";
  if (!data.tel.trim() || data.tel.replace(/\D/g, "").length < 7)
    errors.tel = "Please enter a valid phone number.";
  if (data.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email))
    errors.email = "Please enter a valid email.";
  if (!data.address.trim()) errors.address = "Please enter your address.";
  if (!data.state) errors.state = "Please select your state.";
  if (!data.course) errors.course = "Please choose a course.";
  if (data.courseType !== "Beginner" && data.courseType !== "Refresher")
    errors.courseType = "Please select a course type.";
  if (!data.branch) errors.branch = "Please select a branch.";
  return errors;
}

function generateReference() {
  return "EQL-" + Math.floor(100000 + Math.random() * 900000);
}

export async function registerTrainee(
  data: RegisterFormInput,
): Promise<RegisterResult> {
  const errors = validate(data);
  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  const registration = await prisma.registration.create({
    data: {
      reference: generateReference(),
      fullName: data.fullname.trim(),
      dob: new Date(data.dob),
      sex: data.sex,
      phone: data.tel.trim(),
      email: data.email.trim() || null,
      address: data.address.trim(),
      state: data.state,
      course: data.course,
      courseType: data.courseType,
      branch: data.branch,
    },
  });

  return {
    status: "success",
    name: data.fullname.trim().split(" ")[0] || "trainee",
    reference: registration.reference,
  };
}
