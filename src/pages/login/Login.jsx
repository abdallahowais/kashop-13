import { Box, Container, Typography,TextField,Button,CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useState} from 'react';
import {yupResolver } from '@hookform/resolvers/yup' ;
import loginSchema from './../../validations/LoginSchema';
export default function Login(){

     

      const {register,handleSubmit,formState:{errors}}= useForm({
        resolver:yupResolver(loginSchema)
      });

      const [isLoading,setIsLoading]=useState(false);

      const onSubmit =async (data)=>{
        try {
          setIsLoading(true);
          const response= await axios.post('https://kashop1.runasp.net/api/Identity/Account/Login',data,
  {
    headers: {
      "Content-Type": "application/json",
    },
  })
          console.log(response);
        
        }catch(error){
          console.log("catch error",error)
        }finally{
          setIsLoading(false);
        }
      }

  return(

<Box className = "login-form" py={4}>
    <Container maxWidth="lg" >
    <Typography component="h1" variant='h3'> Login Page </Typography>

      <Box  
      
      onSubmit={handleSubmit(onSubmit)}

      component={"form"} sx={{
        display:"flex",
        flexDirection:"column",
        gap:3,
        mt:5

      }}>
       
        <TextField {...register("email")} label="Email" variant='outlined'  fullWidth 
          error={errors.email}
        helperText={errors.email?.message}
        />
        <TextField {...register("password")} label="Password" variant='outlined'  fullWidth
          error={errors.password}
        helperText={errors.password?.message}
        />

        <Button type='Submit' variant="contained" size='large' disabled={isLoading}>
          {isLoading? <CircularProgress/>:"Login"}</Button>


      </Box>
    </Container>
</Box>  )
}