"use server";

import { returnResponse } from "@/lib/helperFunctions";
import getCurrentUserRole from "../User-related-query";

const CreateProblem = async () => {
  const { status, success, data, message, error } = await getCurrentUserRole();
  if (!success) return returnResponse(status, success, message, error, null);
  // accepting data
  // validating data
  // running loop foreach language
  //  get judge0 language id
  // pepare judge0 submission for all testcases
  // submit all the testcases in one batch
  // extract tokken from response
};
export default CreateProblem;
