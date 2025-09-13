import { Box, Container, Typography,TextField,Button,CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useState} from 'react';
import {yupResolver } from '@hookform/resolvers/yup' ;
import registerSchema from './../../validations/registerschema';
import {useNavigate} from 'react-router-dom';

export default function Register(){

     

      const {register,handleSubmit,formState:{errors}}= useForm({
        resolver:yupResolver(registerSchema)
      });
    
      const navigate = useNavigate();

      const [isLoading,setIsLoading]=useState(false);
      const [serverEerror,setServerError] = useState("");
      const onSubmit =async (data)=>{
        try {
          setIsLoading(true);
          const response= await axios.post('https://kashop1.runasp.net/api/Identity/Account/Register',data)
          console.log(response);
           if (response.status==200){
            navigate('/login');
          }
        }catch(error){
          if(error.response){
            setServerError(error.response.data.message)
          }else{
            setServerError("An unexpected error...")
          }
          console.log("catch error",error)
        }finally{
          setIsLoading(false);
        }
      }

  return(

<Box className = "register-form" py={4}>
    <Container maxWidth="lg" >
    <Typography component="h1" variant='h3'> Register Page </Typography>

      <Box  
      
      onSubmit={handleSubmit(onSubmit)}

      component={"form"} sx={{
        display:"flex",
        flexDirection:"column",
        gap:3,
        mt:5

      }}>
        {serverEerror && (<Typography color='error'>{serverEerror}</Typography>)}

        <TextField {...register("fullName")} 
        label="Full Name" variant='outlined' fullWidth 
        error={errors.fullName}
        helperText={errors.fullName?.message}
        />

        <TextField {...register("userName")} label="User Name" variant='outlined'  fullWidth
         error={errors.userName}
        helperText={errors.userName?.message}
        />
        <TextField {...register("email")} label="Email" variant='outlined'  fullWidth 
          error={errors.email}
        helperText={errors.email?.message}
        />
        <TextField {...register("password")} label="Password" variant='outlined'  fullWidth
          error={errors.password}
        helperText={errors.password?.message}
        />
        <TextField {...register("phoneNumber")} label="Phone Number" variant='outlined'  fullWidth
          error={errors.phoneNumber}
        helperText={errors.phoneNumber?.message}
        />
        <Button type='Submit' variant="contained" size='large' disabled={isLoading}>
          {isLoading? <CircularProgress/>:"register"}</Button>


      </Box>
    </Container>
</Box>  )
}