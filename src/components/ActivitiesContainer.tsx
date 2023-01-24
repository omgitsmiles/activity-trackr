import React, { FormEvent, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

const ActivitiesContainer: React.FC = () => {
    interface Form {
        track: string,
        tempo: string
    }

    const [expanded, setExpanded] = useState<string | false>(false)
    const [formData, setFormData] = useState<Form>({
        track: "",
        tempo: ""
    })

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    }

    const handleForm = (e: FormEvent) => {
        let input = e.target as HTMLFormElement
        setFormData({
            ...formData,
            [input.id]: input.value
        })
    }

  return (
    <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Week 1
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Getting back in a swing of things</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Track: 20x200
          </Typography>
          <Typography>
            Tempo: 3x10' 2' standing rest
          </Typography>
          <form onChange={handleForm}>
            <label htmlFor='track'>track times </label>
            <input id='track'></input>
            <Button>submit</Button>
            <label htmlFor='tempo'>tempo times </label>
            <input id='tempo'></input>
            <Button>submit</Button>
          </form>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Week 2</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
           🤷
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          🤷
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Week 3
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          🤷
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          🤷
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Week 4</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          🤷
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          🤷
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default ActivitiesContainer