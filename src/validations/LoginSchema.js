import  * as yup from 'yup';
 
 
 const loginSchema= yup.object({
        password:yup.string().required("Password Is Request").min(3,"min length is 3").max(20,"max length is 20"),
        email: yup.string().required("Email Is Request").min(3,"min length is 3")

      })

      export default loginSchema