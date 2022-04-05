import { LayoutComponent } from "components/layout";
import { api } from "services/api";
import { useEffect, useState } from 'react';
import { homeProps } from 'interfaces/models/home'

export default function HomePage() {

  const [response, setResponse] = useState<homeProps>({});

  useEffect(() => {
      api.get('/home').then(response => setResponse(response.data));
  }, [])

  if(!response){
    return (
      <div>loading</div>
    )
  }

  return (
    <LayoutComponent headerType="home">
       <ul>
          
          {response.banners?.map(banner => {
            return (
              <li key={banner.titulo}>{banner.titulo}</li>
            )
          })}
       </ul>
    </LayoutComponent>
  )
}
