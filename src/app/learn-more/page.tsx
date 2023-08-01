'use client'
import TextList from 'components/TextList'
import content from '../../../public/content'
import { Container } from '@mui/material'
import { AvatarGroup } from 'components/AvatarGroup'
import { ButtonBack } from 'components/ButtonBack'
import { Typography } from 'components/Typography'
import { ButtonPrimary } from 'components/Button'

export default function LearnMore() {
  return (
    <Container>
      <ButtonBack href="/" />
      <AvatarGroup />
      <Typography mt={8} mb={2} variant="subtitle">
        {content.aboutUs.title}
      </Typography>
      <Typography variant="paragraph">{content.aboutUs.subtitle}</Typography>
      <TextList content={content} />
      <ButtonPrimary href="/step-by-step/1" />
    </Container>
  )
}
