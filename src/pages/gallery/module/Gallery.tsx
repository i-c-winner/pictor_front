import useSwr from 'swr'
function Gallery() {
  const fetching=(url: string)=>fetch(url, {
    method:'GET',
    headers:{
      'Accept': 'application/json',
    }
  }).then(res=>res)
  const {data, isLoading, error} = useSwr(`${import.meta.env.VITE_PATH_TO_BACKAND}backand/files/addfiles.php`, fetching);
  if(isLoading) {
    return <div style={{color: "white"}}> Loading...</div>;
  }
  if (data) {
    console.info(data, 'DATA')
    return <div style={{color: "white"}}>Загрузили</div>;
  }

  if (error) {
    console.log(data, error);
    return <div style={{color: "red"}}> Error 404</div>;
  }
  return (
    <p style={{color: "white"}}>poop</p>
  )

}
export {Gallery};