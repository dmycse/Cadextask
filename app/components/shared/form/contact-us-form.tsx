'use client';

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, FormControl, FormLabel, TextField } from "@mui/material";
import { CustomButton } from "../button/custom-button";
import { formSchema, type FormSchema, formDefaultValues} from "./formSchema";

import { formStyles } from "./form.styles";
export let ContactUsForm = () => {

  let { 
      register, 
      handleSubmit, 
      formState: { errors, isDirty, isValid  } 
    } = useForm<FormSchema>({
    mode: 'onTouched',
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues
  });

  let handleFormSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      sx={formStyles.form}
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormControl fullWidth sx={{gap: 1}}>
        <Box>
          <FormLabel component='label' sx={formStyles.label}>
            Name
          </FormLabel>
          <TextField 
            type="text"
            id="name" 
            size="small"
            required 
            placeholder="Value"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message} 
            sx={formStyles.input} 
          />
        </Box>
        
        <Box>
          <FormLabel component='label' sx={formStyles.label}>
            Email
          </FormLabel>
          <TextField 
            type="email" 
            id="email"
            size="small"
            required 
            placeholder="Value"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message} 
            sx={formStyles.input}  
          />
        </Box>
        
        <Box>
          <FormLabel component='label' sx={formStyles.label}>
            Message
          </FormLabel>
          <TextField 
            type="text" 
            id="message"
            multiline={true} 
            minRows={3}
            required 
            placeholder="Value"
            {...register('message')}
            error={!!errors.message}
            helperText={errors.message?.message} 
            sx={formStyles.input} 
          />

        </Box>
        <CustomButton type='submit' disabled={!isDirty || !isValid}>Submit</CustomButton>
    </FormControl>
    </Box>
  );
};
