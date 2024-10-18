import { ComponentType, Dispatch, FC, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";

export const withErrorApi = <P extends object>(View: ComponentType<P>): FC<P & {setErrorApi?: Dispatch<boolean>}>  => {

  
  return (props:P) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <>
        {errorApi
          ? <ErrorMessage/>
          : <View setErrorApi={setErrorApi} {...props}/>
        }
      </>
    )
  }
}
