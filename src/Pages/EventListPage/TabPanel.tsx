import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export default function TabPanel (props: TabPanelProps): JSX.Element {
  const { children, value, index, ...other } = props

  return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <div>{children}</div>
          </Box>
        )}
      </div>
  )
}
