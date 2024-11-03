'use client';

import { SyntheticEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, FormControl, FormLabel, Snackbar, SnackbarCloseReason, Stack, TextField } from "@mui/material";
import { CustomTitle, CustomButton } from "@/app/components";
import { formSchema, type FormSchema, formDefaultValues} from "./formSchema";

import { SECTION_TITLES } from "@/app/components/constants";
import { sentContactDetails } from "@/app/lib/sendContactDetais";
import { formStyles } from "./form.styles";


let successMessage = <span>Message generated <br/> on the server</span>;

export let ContactUsForm = () => {

  let [fetchSuccess, setFetchSuccess] = useState<boolean>(false);
  let [fetchError, setFetchError] = useState<boolean>(false);
  let [open, setOpen] = useState<boolean>(false);
  
  let { 
      register, 
      handleSubmit, 
      formState: { errors, isDirty, isValid } 
    } = useForm<FormSchema>(
      {
        mode: 'onTouched',
        resolver: zodResolver(formSchema),
        defaultValues: formDefaultValues
    });

  let handleFormSubmit: SubmitHandler<FormSchema> = async (data) => {
    try {
      let response = await sentContactDetails(data);

      if (!response.ok) {
        throw new Error("Unable to send data.");
      }

      let responseData = await response.json();

      console.log(responseData);
      setFetchSuccess(true);
      setFetchError(false);

    } catch (error) {
      console.log(error);
      setFetchSuccess(false);
      setOpen(true);
      setFetchError(true);
    }
  };

  let handleClose = (
    event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
    ) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

  return (
    <>
      <CustomTitle component='h1'>
        {fetchSuccess ? successMessage : SECTION_TITLES.CONTACT_FORM}
      </CustomTitle>
      {!fetchSuccess && (
        <Stack
          component="form"
          sx={formStyles.form}
          autoComplete="off"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <FormControl fullWidth sx={{gap: 1}}>
            <Stack>
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
            </Stack>
            
            <Stack>
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
            </Stack>
            
            <Stack>
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

            </Stack>
            {
              fetchError && (
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
                    Error! Unable send data. Try again.
                  </Alert>
                </Snackbar>
              )
            }
            <CustomButton type='submit' disabled={!isDirty || !isValid}>
              Submit
            </CustomButton>
        </FormControl>
        </Stack>
      )}
    </>
  );
};
