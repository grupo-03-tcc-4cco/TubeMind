import { Typography } from 'components/Typography'
import { Box } from '@mui/material'
import React from 'react'

interface TextItem {
  title: string
  subtitle: string
  sx?: React.CSSProperties | { textAlign: string }
}

interface TextListProps {
  content: {
    learnMore: TextItem[]
  }
}

const TextList: React.FC<TextListProps> = ({ content }) => {
  return (
    <>
      {content.learnMore.map((item) => (
        <Box key={item.title} sx={item.sx} my={8}>
          <Typography variant="subtitle">{item.title}</Typography>
          <Typography variant="paragraph">{item.subtitle}</Typography>
        </Box>
      ))}
    </>
  )
}

export default TextList
