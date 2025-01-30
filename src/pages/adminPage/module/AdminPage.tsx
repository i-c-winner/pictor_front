import {useForm, SubmitHandler} from "react-hook-form";
import {Box, Input} from "@mui/material";3

type Inputs = {
  file: 'file',
  description: 'description',
}

function AdminPage() {
  const {register,  handleSubmit} = useForm<Inputs>();
  const submit: SubmitHandler<Inputs> = (data) => {
    console.log(data.file[0]);
    const formData: FormData = new FormData();
    formData.append('image', data.file[0]);
    formData.append('description', data.description);
    formData.append('ranger', '5');
    formData.append('name', 'my name');
    fetch(`${import.meta.env.VITE_PATH_TO_BACKAND}backand/files/addfile.php`, {
      method: 'POST',
      body: formData
    }).then(res => console.info(res, 'this is answer'))
  }
  return (
    <Box sx={{
      backgroundColor: '#fff',
    }}>
      <form onSubmit={handleSubmit(submit)}>
        <Input type={"file"} placeholder="выберите файл" {...register('file')}/>
        <Input defaultValue="description" {...register('description')}/>
        <input type="submit"/>
      </form>

    </Box>
  )
}

export {AdminPage};