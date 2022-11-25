import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import MoreInfoCard from './MoreInfoCard';

interface AccordionItemProps {
    title: string
    founder: string
    founderDescription: string
    duration: string
    location: string
    image: string
    Date: any
    description: string
    picture: string
    tags: {
      id:string,
      Name:string
    }[]
    expanded: boolean
    handleChange: () => (event: React.SyntheticEvent, isExpanded: boolean) => void
}


export default function AccordionItem(props) {
    if(!props?.event) return null;
    const {event, expanded, handleChange} = props;
    const {id,startTime,endTime,description,name,thumbnailUrl,Tags} = event;

    return (
        <Accordion expanded={expanded} onChange={()=>{
            handleChange()
        }} className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='flex justify-around'
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {name}
          </Typography>
          <div>
                   {Tags.map((tag:any) => {
                          return <Chip label={tag.name} key={tag.name} className="p-4 m-4" />
                   })}
                 </div>
        </AccordionSummary>
        <AccordionDetails className='flex items-between justify-between'>
                <CardMedia
                component="img"
                sx={{
                    width: '30%',
                    padding: '1rem',
                }}
                image={thumbnailUrl}
                alt="Not Found"
                 />
                 <div className="flex flex-col justify-between h-40">
                 <Typography sx={{ color: 'text.secondary',padding:"1rem",textOverflow:"ellipsis"}}>{description}</Typography>
                 <div>
                   {Tags.map((tag:any) => {
                          return <Chip label={tag.name} key={tag.name} className="p-4 m-4" />
                   })}
                 </div>
                  
                 </div>
                <MoreInfoCard {...props}/>
        </AccordionDetails>
      </Accordion>
    );
}