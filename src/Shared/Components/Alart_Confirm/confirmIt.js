import Swal from "sweetalert2";
function confirmIt(do_it, { text, confirmButtonText }) {
    Swal.fire({
        title: 'Are you sure?',
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF003D',
        cancelButtonColor: '#6C63FF',
        confirmButtonText
    }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
            Swal.fire(
                'Logged Out!',
                'You will be loged out',
                'success'
            );
            do_it();
        }
    })
};

export default confirmIt;