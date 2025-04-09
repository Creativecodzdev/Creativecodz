// // components/EnquiryModal.tsx
// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Modal,
//   TextField,
//   Typography,
//   Stepper,
//   Step,
//   StepLabel,
// } from "@mui/material";
// import { useForm, Controller, SubmitHandler } from "react-hook-form";

// type FormData = {
//   name: string;
//   email: string;
//   phone: string;
//   quote: string[];
//   service: string[];
// };

// type Props = {
//   open: boolean;
//   onClose: () => void;
// };

// const steps = ["Services", "Name & Email", "Phone", "Quote"];

// const style = {
//   position: "absolute" as const,
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   borderRadius: 2,
//   boxShadow: 24,
//   p: 4,
// };

// const EnquiryModal: React.FC<Props> = ({ open, onClose }) => {
//   const [activeStep, setActiveStep] = useState(0);

//   const {
//     control,
//     handleSubmit,
//     trigger,
//     formState: { errors },
//   } = useForm<FormData>({
//     mode: "onTouched",
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       quote: [],
//       service: [],
//     },
//   });

//   const serviceOptions = [
//     "General Discussion or Consultation",
//     "Website Design & Development",
//     "Mobile App Development",
//     "Digital Marketing",
//     "ERP (Enterprise Resource Planning)",
//   ];

//   const quoteOptions = [
//     "Company Profile",
//     "Pricing Details",
//     "Case Studies",
//     "Other Resources",
//   ];

//   const nextStep = async () => {
//     const fields: (keyof FormData)[] = ["service", "name", "phone", "quote"];
//     const currentField = fields[activeStep];
//     const isValid = await trigger(currentField);
//     if (isValid) setActiveStep((prev) => prev + 1);
//   };

//   const prevStep = () => setActiveStep((prev) => prev - 1);

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     alert(JSON.stringify(data, null, 2));
//     onClose();
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box sx={style}>
//         <Typography variant="h6" gutterBottom>
//           Enquiry Form
//         </Typography>

//         <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>

//         <form onSubmit={handleSubmit(onSubmit)}>

//         {activeStep === 0 && (
//             <Controller
//               name="quote"
//               control={control}
//               rules={{ required: "Please select at least one quote option" }}
//               render={({ field }) => (
//                 <>
//                   <Typography variant="subtitle1" fontWeight="bold" mb={2}>
//                     Get Quote Instantly
//                   </Typography>
//                   {quoteOptions.map((option, idx) => (
//                     <Box key={idx} sx={{ mb: 1 }}>
//                       <label style={{ fontSize: "14px" }}>
//                         <input
//                           type="checkbox"
//                           value={option}
//                           checked={field.value.includes(option)}
//                           onChange={(e) => {
//                             const newValue = field.value.includes(option)
//                               ? field.value.filter((val) => val !== option)
//                               : [...field.value, option];
//                             field.onChange(newValue);
//                           }}
//                           style={{ marginRight: "8px" }}
//                         />
//                         {option}
//                       </label>
//                     </Box>
//                   ))}
//                   {errors.quote && (
//                     <Typography color="error" variant="body2">
//                       {errors.quote.message}
//                     </Typography>
//                   )}
//                 </>
//               )}
//             />
//           )}

//           {activeStep === 1 && (
//             <Controller
//               name="service"
//               control={control}
//               rules={{ required: "Please select at least one service" }}
//               render={({ field }) => (
//                 <>
//                   <Typography variant="subtitle1" fontWeight="bold" mb={2}>
//                     I am Looking For
//                   </Typography>
//                   {serviceOptions.map((option, idx) => (
//                     <Box key={idx} sx={{ mb: 1 }}>
//                       <label style={{ fontSize: "14px" }}>
//                         <input
//                           type="checkbox"
//                           value={option}
//                           checked={field.value.includes(option)}
//                           onChange={(e) => {
//                             const newValue = field.value.includes(option)
//                               ? field.value.filter((val) => val !== option)
//                               : [...field.value, option];
//                             field.onChange(newValue);
//                           }}
//                           style={{ marginRight: "8px" }}
//                         />
//                         {option}
//                       </label>
//                     </Box>
//                   ))}
//                   {errors.service && (
//                     <Typography color="error" variant="body2">
//                       {errors.service.message}
//                     </Typography>
//                   )}
//                 </>
//               )}
//             />
//           )}

//           {activeStep ===2 && (
//             <>
//               <Controller
//                 name="name"
//                 control={control}
//                 rules={{ required: "Name is required" }}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     label="Name"
//                     fullWidth
//                     sx={{ mb: 2 }}
//                     error={!!errors.name}
//                     helperText={errors.name?.message}
//                   />
//                 )}
//               />

//               <Controller
//                 name="email"
//                 control={control}
//                 rules={{
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                     message: "Invalid email address",
//                   },
//                 }}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     label="Email"
//                     fullWidth
//                     error={!!errors.email}
//                     helperText={errors.email?.message}
//                   />
//                 )}
//               />
//             </>
//           )}

//           {activeStep === 3 && (
//             <Controller
//               name="phone"
//               control={control}
//               rules={{
//                 required: "Phone number is required",
//                 minLength: {
//                   value: 10,
//                   message: "Phone must be at least 10 digits",
//                 },
//               }}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Phone"
//                   fullWidth
//                   error={!!errors.phone}
//                   helperText={errors.phone?.message}
//                 />
//               )}
//             />
//           )}

          

//           <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
//             <Button
//               onClick={prevStep}
//               disabled={activeStep === 0}
//               variant="outlined"
//             >
//               Prev
//             </Button>

//             {activeStep < steps.length - 1 ? (
//               <Button onClick={nextStep} variant="contained">
//                 Next
//               </Button>
//             ) : (
//               <Button type="submit" variant="contained">
//                 Submit
//               </Button>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </Modal>
//   );
// };

// export default EnquiryModal;













// components/EnquiryModal.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  quote: string[];
  service: string[];
};

type Props = {
  open: boolean;
  onClose: () => void;
};

const steps = ["Name", "Email", "Phone", "Quote", "Services"];

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const EnquiryModal: React.FC<Props> = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({ mode: "onTouched" });

  
  const serviceOptions = [
    "General Discussion or Consulatation",
    "Website Design & Development",
    "Mobile App Development",
    "Digital Marketing",
    "ERP (Enterprise Resource Planning)",
  ];

  const nextStep = async () => {
    const fields = ["name", "email", "phone", "quote", "services"];
    const currentField = fields[activeStep] as keyof FormData;
    const valid = await trigger(currentField);
    if (valid) setActiveStep((prev) => prev + 1);
  };

  const prevStep = () => setActiveStep((prev) => prev - 1);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert(JSON.stringify(data, null, 2));
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>
          Enquiry Form
        </Typography>

        <Box>
                <Box
                sx={{
                    backgroundColor: "#00a9cc",
                    color: "white",
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center",
                    mb: 2,
                }}
                >
                <Typography variant="h6" fontWeight="bold">
                    Get Quote Instantly
                </Typography>
                <Typography fontSize={14}>
                    Fill the form and download the company profile and pricing details instantly
                </Typography>
                </Box>

                <Box sx={{ backgroundColor: "#f5f5f5", borderRadius: 2, mb: 3 }}>
                <Box
                    sx={{
                    width: "100%",
                    backgroundColor: "#ccc",
                    borderRadius: 10,
                    overflow: "hidden",
                    }}
                >
                    <Box
                    sx={{
                        width: "20%",
                        backgroundColor: "#00d1d1",
                        color: "white",
                        textAlign: "center",
                        py: 0.5,
                        fontWeight: "bold",
                        fontSize: 12,
                    }}
                    >
                    20%
                    </Box>
                </Box>
                </Box>
                </Box>


        <form onSubmit={handleSubmit(onSubmit)}>

            {activeStep === 0 && (
            <Box>
                <Box>
                <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                    I am Looking For
                </Typography>
                {[
                    "General Discussion or Consultation",
                    "Website Design & Development",
                    "Mobile App Development",
                    "Digital Marketing",
                    "ERP (Enterprise Resource Planning)",
                ].map((option, idx) => (
                    <Box key={idx} sx={{ mb: 1 }}>
                    <label style={{ fontSize: "14px" }}>
                        <input
                        type="checkbox"
                        style={{ marginRight: "8px" }}
                        // You can manage state with useState if needed
                        />
                        {option}
                    </label>
                    </Box>
                ))}
                </Box>
            </Box>
            )}

        {activeStep === 1 && (
            <Controller
              name="service"
              control={control}
              rules={{ required: "Please select at least one service" }}
              render={({ field }) => (
                <>
                  <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                    I am Looking For
                  </Typography>
                  {serviceOptions.map((option, idx) => (
                    <Box key={idx} sx={{ mb: 1 }}>
                      <label style={{ fontSize: "14px" }}>
                        <input
                          type="radio"
                          value={option}
                          checked={field.value.includes(option)}
                          onChange={(e) => {
                            const newValue = field.value.includes(option)
                              ? field.value.filter((val) => val !== option)
                              : [...field.value, option];
                            field.onChange(newValue);
                          }}
                          style={{ marginRight: "8px" }}
                        />
                        {option}
                      </label>
                    </Box>
                  ))}
                  {errors.service && (
                    <Typography color="error" variant="body2">
                      {errors.service.message}
                    </Typography>
                  )}
                </>
              )}
            />
          )}


          {activeStep === 2 && (
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
          )}

          {activeStep === 2 && (
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          )}

          {activeStep === 3 && (
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone must be at least 10 digits",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone"
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />
          )}

          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={prevStep}
              disabled={activeStep === 0}
              variant="outlined"
            >
              Prev
            </Button>

            {activeStep < steps.length - 1 ? (
              <Button onClick={nextStep} variant="contained">
                Next
              </Button>
            ) : (
              <Button type="submit" variant="contained">
                Submit
              </Button>
            )}
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default EnquiryModal;









// // components/EnquiryModal.tsx
// import React, { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import "./EnquiryModal.css";

// type FormData = {
//   name: string;
//   email: string;
//   phone: string;
// };

// type ModalProps = {
//   onClose: () => void;
// };

// const EnquiryModal: React.FC<ModalProps> = ({ onClose }) => {
//   const [step, setStep] = useState(1);
//   const { register, handleSubmit, trigger, formState: { errors }, getValues } = useForm<FormData>();

//   const nextStep = async () => {
//     let valid = false;

//     if (step === 1) valid = await trigger("name");
//     else if (step === 2) valid = await trigger("email");
//     else if (step === 3) valid = await trigger("phone");

//     if (valid && step < 3) setStep((prev) => prev + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep((prev) => prev - 1);
//   };

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     alert(`Submitted Data: ${JSON.stringify(data, null, 2)}`);
//     onClose();
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>Enquiry Form</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {step === 1 && (
//             <div className="form-step">
//               <label>Name:</label>
//               <input
//                 {...register("name", { required: "Name is required" })}
//                 type="text"
//                 placeholder="Enter your name"
//               />
//               {errors.name && <span className="error">{errors.name.message}</span>}
//             </div>
//           )}

//           {step === 2 && (
//             <div className="form-step">
//               <label>Email:</label>
//               <input
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                     message: "Enter a valid email"
//                   }
//                 })}
//                 type="email"
//                 placeholder="Enter your email"
//               />
//               {errors.email && <span className="error">{errors.email.message}</span>}
//             </div>
//           )}

//           {step === 3 && (
//             <div className="form-step">
//               <label>Phone:</label>
//               <input
//                 {...register("phone", {
//                   required: "Phone is required",
//                   minLength: { value: 10, message: "Minimum 10 digits" }
//                 })}
//                 type="text"
//                 placeholder="Enter your phone number"
//               />
//               {errors.phone && <span className="error">{errors.phone.message}</span>}
//             </div>
//           )}

//           <div className="navigation-buttons">
//             <button type="button" onClick={prevStep} disabled={step === 1}>Prev</button>
//             {step < 3 ? (
//               <button type="button" onClick={nextStep}>Next</button>
//             ) : (
//               <button type="submit">Submit</button>
//             )}
//           </div>
//         </form>

//         <button className="close-btn" onClick={onClose}>×</button>
//       </div>
//     </div>
//   );
// };

// export default EnquiryModal;
