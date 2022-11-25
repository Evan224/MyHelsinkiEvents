import SearchBar from './SearchBar'
import TagBar from '../../components/TagBar'
import Title from './Title'
import DatePicker from './DatePicker'
import TabList from './TabList'
import { useEffect, useReducer, useState } from 'react'

const initialState = {
    tags:[],
    date: null,
    search: '',
  }
  
  type ActionType= "TAGS" | "DATE" | "SEARCH"
  interface StateProps{
    tags: string[],
    date: Date | null,
    search: string,
  }
  export interface ActionProps{
    type: ActionType,
    payload: string | Date | string[],
  }
  
  export interface DispatchProps{
    dispatch: (action: ActionProps) => void,
    callBackSearch?: () => void,
  }
  
  
  const reducer = (state:StateProps, action:ActionProps) => {
    switch (action.type) {
      case 'TAGS':
        return { ...state, tags: action.payload as string[] }
      case 'DATE':
        return { ...state, date: action.payload as Date }
      case 'SEARCH':
        return { ...state, search: action.payload as string }
      default:
        return state
    }
  }

  export default function ManageHeader (props): JSX.Element {
    const { callBackSearch } = props
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (     
         <div className='w-[80vw]'>
            {/* <Title title='Search your events!' /> */}
            <div className='flex flex-col items-start w-full mx-auto'>
            <div className="flex w-full">
                 <div className="pt-4 w-2/3">
                    <SearchBar dispatch={dispatch} callBackSearch={()=>callBackSearch(state)} />
                 </div>
                <TagBar callback={(value)=>{
                dispatch({type: 'TAGS', payload: value.map((item)=>item.name)})
            }}/>
            </div>
            
            </div>
         </div>
    )
  }