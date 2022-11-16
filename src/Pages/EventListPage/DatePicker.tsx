import * as React from 'react'
import { Dayjs } from 'dayjs'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DispatchProps } from '.'
import { useEffect } from 'react'

export default function BasicDatePicker ({dispatch}:DispatchProps): JSX.Element {
  const [value, setValue] = React.useState<Dayjs | null>(null)
  useEffect(() => {
    // dispatch({type: 'DATE', payload: value})
    dispatch({type: 'DATE', payload: value?.format('YYYY-MM-DD')||''})
  }, [value])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Search by date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
