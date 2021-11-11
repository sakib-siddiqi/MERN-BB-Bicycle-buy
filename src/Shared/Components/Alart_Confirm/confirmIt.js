import Swal from "sweetalert2";
function confirmIt(do_it) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to logged out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF003D',
        cancelButtonColor: '#6C63FF',
        confirmButtonText: 'Log Out'
    }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
            Swal.fire(
                'Loged Out!',
                'You will be loged out',
                'success'
            );
            do_it();
        }
    })
};

export default confirmIt;