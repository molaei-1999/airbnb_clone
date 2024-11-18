import toast from "react-hot-toast";

export async function showAuthToast(
  status: string,
  authenticated: boolean,
  msg: string
) {
  if (status === "true" && authenticated) {
    toast.success(`You ${msg} successfully`);
  }
  if (status === "true" && msg === "logout" && !authenticated) {
    toast.success(`You ${msg} successfully`);
  }
}
