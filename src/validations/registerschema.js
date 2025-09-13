import  * as yup from 'yup';
 
 
 const registerSchema= yup.object({
        fullName:yup.string().required("Full Name Is Request").min(3,"min length is 3").max(20,"max length is 20"),
        userName:yup.string().required("User Name Is Request").min(3,"min length is 3").max(20,"max length is 20"),
        password:yup.string().required("Password Is Request").min(3,"min length is 3").max(20,"max length is 20"),
        phoneNumber: yup.string().required("Phone Number Is Request").min(3,"min length is 3"),
        email: yup.string().required("Email Is Request").min(3,"min length is 3")

      })

      export default registerSchema