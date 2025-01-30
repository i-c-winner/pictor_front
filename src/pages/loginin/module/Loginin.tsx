import {useForm, SubmitHandler} from "react-hook-form"
import {Box, Button} from "@mui/material";
import '../../about/styles/about.scss'

type Inputs = {
  test: 'test',
  name: 'name',
  exampleRequired: string,
  to: 'to'
}

function Loginin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("test")) // watch input value by passing the name of it
  console.log(watch("name")) // watch input value by passing the name of it

  return (
    <Box className="wrapper">
      <Button> Register</Button>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input defaultValue="test" {...register("test")} />
        <input defaultValue="name" {...register("name")}/>

        <input {...register("to", {required: true})} />

        {errors.to && <span>This field is required</span>}

        <input {...register("exampleRequired", {required: true})} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit"/>
      </form>
    </Box>

  )
}

export {Loginin};