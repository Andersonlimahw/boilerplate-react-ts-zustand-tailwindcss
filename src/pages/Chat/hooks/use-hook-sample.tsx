
import { useEffect } from "react";
import { EActionType } from "../../../store/flux";
import { useStoreHook } from "../../../store/hooks/use-store";
import { SWApiPeopleService } from '../../../services/swapi/people/index';
import { PeopleModel } from "../../../models";


export const useHookSample = () => {
  const useStore = useStoreHook((state: any) => state);

  const swApiPeopleService =  new SWApiPeopleService();

  const {
    dispatch, 
    loading, 
    people, 
    theme
  } = useStore;

  

  async function getPeople(callback: any) {
    return await swApiPeopleService.getPeople()
    .then((data : PeopleModel[]) => {
      return callback(data);
    }).catch((error) => console.error('subscribeSample : ', error));    
  };

  useEffect(() => {
    // Imediate funcion
    (async () => {
      const unsubscribe = await getPeople((data: any) => {
        dispatch({
          type: EActionType.SET_LOADING,
          payload: {
            loading: false
          }
        });

        dispatch({
          type: EActionType.SET_PEOPLE,
          payload: {
            people: data
          }
        });

        return data;
        
      });

      return () => unsubscribe();
    })();

  }, []);

 

  return {
    loading, 
    people, 
    theme
  }
}