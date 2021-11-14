import Swal from "sweetalert2";
function confirmIt(do_it, { text, confirmButtonText, result }) {
  /**alart */
  try {
    Swal.fire({
      title: "Are you sure?",
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF003D",
      cancelButtonColor: "#6C63FF",
      confirmButtonText,
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        Swal.fire(result, "You will be loged out", "success");
        do_it();
      }
    });
  } catch (err) {
    console.log(err.code);
  }
}

export default confirmIt;
