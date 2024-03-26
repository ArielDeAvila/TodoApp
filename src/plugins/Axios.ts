import axios from "axios";
import { useErrorsStore } from "@/stores/errors";
import router from "@/router/Index";
import { useToast } from "vue-toastification";

const toast = useToast()

const auth = localStorage.getItem("auth");
if (auth) {
  const user = JSON.parse(auth);
  axios.defaults.headers.common.Authorization = "Bearer " + user.token;
}


// interceptor for http
axios.interceptors.response.use(
  (response) => {
    const errorsStore = useErrorsStore();
    errorsStore.cleanErrors();
    return response;
  },
  (error) => {
    const errorsStore = useErrorsStore();

    if (error.request.status == 401) {
      router.push({ name: "login" });
    }

    const errorsArray = [];
    if (error.request.status != 401 && error.request.status != 404) {
      console.log(error);
      if (error.response.data) {
        toast.error(
          error.response.data.message
            ? error.response.data.message
            : 'Ha ocurrido un error'
        )
      }
      

      // if (error.response.errors) {
      //   errorsArray.push(error.response.errors);
      // } else {
      //   error.response.data.errors.forEach((element: any) => {
      //     errorsArray.push(element.message);
      //   });
      // }
    }

    // errorsStore.setErrors(errorsArray);
    return Promise.reject(
      (error.response && error.response.data) || "Wrong Services"
    );
  }
);

export default axios;
